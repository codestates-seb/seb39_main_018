package project.sort.controller.user;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import project.sort.advice.exception.CSocialAgreementException;
import project.sort.advice.exception.CUserNotFoundException;
import project.sort.config.security.JwtProvider;
import project.sort.dto.jwt.TokenDto;
import project.sort.dto.jwt.TokenRequestDto;
import project.sort.dto.sign.UserLoginRequestDto;
import project.sort.dto.sign.UserSignupRequestDto;
import project.sort.dto.sign.UserSocialLoginRequestDto;
import project.sort.dto.sign.UserSocialSignupRequestDto;
import project.sort.dto.social.KakaoProfile;
import project.sort.entity.user.Users;
import project.sort.entity.user.UsersJpaRepo;
import project.sort.response.CommonResult;
import project.sort.response.SingleResult;
import project.sort.service.user.KakaoService;
import project.sort.service.user.ResponseService;
import project.sort.service.user.SignService;

@Slf4j
@Api(tags = {"1. SignUp/LogIn"})
@RequiredArgsConstructor
@RestController
@RequestMapping("/v1")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class SignController {

    private final JwtProvider jwtProvider;
    private final UsersJpaRepo usersJpaRepo;
    private final KakaoService kakaoService;
    private final SignService signService;
    private final ResponseService responseService;

    @ApiOperation(value = "로그인", notes = "이메일로 로그인을 합니다.")
    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:8080")
    public SingleResult<TokenDto> login(
            @ApiParam(value = "로그인 요청 DTO", required = true)
            @RequestBody UserLoginRequestDto userLoginRequestDto) {

        TokenDto tokenDto = signService.login(userLoginRequestDto);
        return responseService.getSingleResult(tokenDto);
    }

    @ApiOperation(value = "회원가입", notes = "회원가입을 합니다.")
    @PostMapping("/signup")
    @CrossOrigin(origins = "http://localhost:8080")
    public SingleResult<Long> signup(
            @ApiParam(value = "회원 가입 요청 DTO", required = true)
            @RequestBody UserSignupRequestDto userSignupRequestDto) {
        Long signupId = signService.signup(userSignupRequestDto);
        return responseService.getSingleResult(signupId);
    }

    @ApiOperation(
            value = "액세스, 리프레시 토큰 재발급",
            notes = "엑세스 토큰 만료시 회원 검증 후 리프레쉬 토큰을 검증해서 액세스 토큰과 리프레시 토큰을 재발급합니다.")
    @PostMapping("/reissue")
    @CrossOrigin(origins = "http://localhost:8080")
    public SingleResult<TokenDto> reissue(
            @ApiParam(value = "토큰 재발급 요청 DTO", required = true)
            @RequestBody TokenRequestDto tokenRequestDto) {
        return responseService.getSingleResult(signService.reissue(tokenRequestDto));
    }

    @ApiOperation(
            value = "소셜 로그인 - kakao",
            notes = "카카오로 로그인을 합니다.")
    @PostMapping("/social/login/kakao")
    @CrossOrigin(origins = "http://localhost:8080")
    public SingleResult<TokenDto> loginByKakao(
            @ApiParam(value = "소셜 로그인 dto", required = true)
            @RequestBody UserSocialLoginRequestDto socialLoginRequestDto) {

            KakaoProfile kakaoProfile = kakaoService.getKakaoProfile(socialLoginRequestDto.getAccessToken());
            if (kakaoProfile == null) throw new CUserNotFoundException();

        Users users = usersJpaRepo.findByEmailAndProvider(kakaoProfile.getKakaoAccount().getEmail(), "kakao")
                .orElseThrow(CUserNotFoundException::new);
        return responseService.getSingleResult(jwtProvider.createTokenDto(users.getUserId(), users.getRoles()));
    }

    @ApiOperation(
            value = "소셜 회원가입 - kakao",
            notes = "카카오로 회원가입을 합니다.")
    @PostMapping("/social/signup/kakao")
    @CrossOrigin(origins = "http://localhost:8080")
    public CommonResult signupBySocial(
            @ApiParam(value = "소셜 회원가입 dto", required = true)
            @RequestBody UserSocialSignupRequestDto socialSignupRequestDto) {

        KakaoProfile kakaoProfile =
                kakaoService.getKakaoProfile(socialSignupRequestDto.getAccessToken());
        if (kakaoProfile == null) throw new CUserNotFoundException();
        if (kakaoProfile.getKakaoAccount().getEmail() == null) {
            kakaoService.kakaoUnlink(socialSignupRequestDto.getAccessToken());
            throw new CSocialAgreementException();
        }

        Long userId = signService.socialSignup(UserSignupRequestDto.builder()
                .email(kakaoProfile.getKakaoAccount().getEmail())
                .name(kakaoProfile.getProperties().getNickname())
//                .nickName(kakaoProfile.getProperties().getNickname())
                .provider("kakao")
                .build());

        return responseService.getSingleResult(userId);
    }
}
