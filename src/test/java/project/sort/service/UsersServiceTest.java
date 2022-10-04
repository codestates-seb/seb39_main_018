package project.sort.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import project.sort.advice.exception.CUserNotFoundException;
import project.sort.dto.sign.UserSignupRequestDto;
import project.sort.dto.user.UserRequestDto;
import project.sort.dto.user.UserResponseDto;
import project.sort.entity.user.Users;
import project.sort.entity.user.UsersJpaRepo;
import project.sort.service.user.SignService;
import project.sort.service.user.UserService;

import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class UsersServiceTest {

    @Autowired
    UserService userService;
    @Autowired
    UsersJpaRepo usersJpaRepo;
    @Autowired
    SignService signService;
    @Autowired
    PasswordEncoder passwordEncoder;

    private UserSignupRequestDto getUserSignupRequestDto(int number) {
        return UserSignupRequestDto.builder()
//                .name("name" + number)
                .password("password" + number)
                .email("email" + number)
//                .nickName("nickName" + number)
                .build();
    }

    @Test
    public void 회원등록() {
        // given
        UserSignupRequestDto userA =
                getUserSignupRequestDto(1);
        Users savedUsers = usersJpaRepo.save(userA.toEntity(passwordEncoder));

        // when
        UserResponseDto userB = userService.findById(savedUsers.getUserId());
        Users byId = usersJpaRepo.findById(savedUsers.getUserId()).orElseThrow(CUserNotFoundException::new);

        // then
//        assertThat(userA.getName()).isEqualTo(userB.getName());
        assertThat(userA.getEmail()).isEqualTo(userB.getEmail());
        assertThat(
                userService.findById(savedUsers.getUserId()).getEmail())
                .isEqualTo(byId.getEmail());
    }

    @Test
    public void 회원등록_이메일검증() {
        // given
        UserSignupRequestDto userA =
                getUserSignupRequestDto(1);
        Users users = usersJpaRepo.save(userA.toEntity(passwordEncoder));

        // when
        UserResponseDto dtoA = userService.findById(users.getUserId());

        // then
        assertThat(userA.getEmail()).isEqualTo(dtoA.getEmail());
//        assertThat(userA.getName()).isEqualTo(dtoA.getName());
    }

    @Test
    public void 전체_회원조회() {
        // given
        UserSignupRequestDto userA =
                getUserSignupRequestDto(1);
        UserSignupRequestDto userB =
                getUserSignupRequestDto(2);

        // when
        usersJpaRepo.save(userA.toEntity(passwordEncoder));
        usersJpaRepo.save(userB.toEntity(passwordEncoder));

        // then
        List<UserResponseDto> allUser = userService.findAllUser();
        assertThat(allUser.size()).isSameAs(2);
    }

//    @Test
//    public void 회원수정_닉네임() {
//        // given
//        UserSignupRequestDto userA =
//                getUserSignupRequestDto(1);
//        Users users = usersJpaRepo.save(userA.toEntity(passwordEncoder));
//
//        // when
//        UserRequestDto updateUser = UserRequestDto.builder()
//                .nickName("bbb")
//                .build();
//        userService.update(users.getUserId(), updateUser);
//
//        // then
//        assertThat(userService.findById(users.getUserId()).getNickName()).isEqualTo("bbb");
//    }

    @Test
    public void 회원삭제() {
        // given
        UserSignupRequestDto userA =
                getUserSignupRequestDto(1);
        Users users = usersJpaRepo.save(userA.toEntity(passwordEncoder));

        // when
        userService.delete(users.getUserId());

        // then
        assertThrows(CUserNotFoundException.class, () -> userService.findById(users.getUserId()));
    }

    @Test
    public void BaseTimeEntity_등록() throws Exception {
        //given
        LocalDateTime now = LocalDateTime
                .of(2021, 8, 5, 22, 31, 0);
        UserSignupRequestDto userA =
                getUserSignupRequestDto(1);

        //when
        usersJpaRepo.save(userA.toEntity(passwordEncoder));
        List<Users> users = usersJpaRepo.findAll();

        //then
        Users firstUsers = users.get(0);
        assertThat(firstUsers.getCreatedDate()).isAfter(now);
        assertThat(firstUsers.getModifiedDate()).isAfter(now);
    }
}