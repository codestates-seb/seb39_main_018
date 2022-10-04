package project.sort.service.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.sort.advice.exception.*;
import project.sort.config.security.JwtProvider;
import project.sort.dto.jwt.TokenDto;
import project.sort.dto.jwt.TokenRequestDto;
import project.sort.dto.sign.UserLoginRequestDto;
import project.sort.dto.sign.UserSignupRequestDto;
import project.sort.entity.security.RefreshToken;
import project.sort.entity.security.RefreshTokenJpaRepo;
import project.sort.entity.user.Users;
import project.sort.entity.user.UsersJpaRepo;

@Slf4j
@Service
@RequiredArgsConstructor
public class SignService {
    private final UsersJpaRepo usersJpaRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtProvider jwtProvider;
    private final RefreshTokenJpaRepo tokenJpaRepo;

    @Transactional
    public TokenDto login(UserLoginRequestDto userLoginRequestDto) {

        // 회원 정보 존재하는지 확인
        Users users = usersJpaRepo.findByEmail(userLoginRequestDto.getEmail())
                .orElseThrow(CEmailLoginFailedException::new);

        // 회원 패스워드 일치 여부 확인
        if (!passwordEncoder.matches(userLoginRequestDto.getPassword(), users.getPassword()))
            throw new CEmailLoginFailedException();

        // AccessToken, RefreshToken 발급
        TokenDto tokenDto = jwtProvider.createTokenDto(users.getUserId(), users.getRoles());

        // RefreshToken 저장
        RefreshToken refreshToken = RefreshToken.builder()
                .keyNum(users.getUserId())
                .tokenNum(tokenDto.getRefreshToken())
                .users(users)
                .build();
        tokenJpaRepo.save(refreshToken);
        return tokenDto;
    }

    @Transactional
    public Long signup(UserSignupRequestDto userSignupDto) {
        if (usersJpaRepo.findByEmail(userSignupDto.getEmail()).isPresent())
            throw new CEmailSignupFailedException();
        return usersJpaRepo.save(userSignupDto.toEntity(passwordEncoder)).getUserId();
    }

    @Transactional
    public Long socialSignup(UserSignupRequestDto userSignupRequestDto) {
        if (usersJpaRepo
                .findByEmailAndProvider(userSignupRequestDto.getEmail(), userSignupRequestDto.getProvider())
                .isPresent()
        ) throw new CUserExistException();
        return usersJpaRepo.save(userSignupRequestDto.toEntity()).getUserId();
    }

    @Transactional
    public TokenDto reissue(TokenRequestDto tokenRequestDto) {
        // 만료된 refresh token 에러
        if (!jwtProvider.validationToken(tokenRequestDto.getRefreshToken())) {
            throw new CRefreshTokenException();
        }

        // AccessToken 에서 Username (pk) 가져오기
        String accessToken = tokenRequestDto.getAccessToken();
        Authentication authentication = jwtProvider.getAuthentication(accessToken);

        // user pk로 유저 검색 / repo 에 저장된 Refresh Token 이 없음
        Users users = usersJpaRepo.findById(Long.parseLong(authentication.getName()))
                .orElseThrow(CUserNotFoundException::new);
        RefreshToken refreshToken = tokenJpaRepo.findByKeyNum(users.getUserId())
                .orElseThrow(CRefreshTokenException::new);

        // 리프레시 토큰 불일치 에러
        if (!refreshToken.getTokenNum().equals(tokenRequestDto.getRefreshToken()))
            throw new CRefreshTokenException();

        // AccessToken, RefreshToken 토큰 재발급, 리프레쉬 토큰 저장
        TokenDto newCreatedToken = jwtProvider.createTokenDto(users.getUserId(), users.getRoles());
        RefreshToken updateRefreshToken = refreshToken.updateToken(newCreatedToken.getRefreshToken());
        tokenJpaRepo.save(updateRefreshToken);

        return newCreatedToken;
    }
}