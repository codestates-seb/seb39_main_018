package project.sort.entity;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import project.sort.advice.exception.CUserNotFoundException;
import project.sort.entity.user.Users;
import project.sort.entity.user.UsersJpaRepo;

import java.util.Collections;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@Transactional
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class UsersJpaRepoTest {

    @Autowired
    private UsersJpaRepo usersJpaRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    private String name = "hyeding";
    private String email = "1233@naver.com";
    private String password = "myPassWord";

    @Test
    public void 회원저장_후_이메일로_회원검색() throws Exception {

        //given
        usersJpaRepo.save(Users.builder()
//                .name(name)
                .email(email)
                .password(passwordEncoder.encode(password))
//                .nickName(name)
                .roles(Collections.singletonList("ROLE_USER"))
                .build());

        //when
        Users users = usersJpaRepo.findByEmail(email).orElseThrow(CUserNotFoundException::new);

        //then
        assertNotNull(users);
//        assertThat(users.getName()).isEqualTo(name);
//        assertThat(users.getNickName()).isEqualTo(name);
    }

    @Test
    public void 카카오_가입자_조회() throws Exception
    {
        //given
        usersJpaRepo.save(Users.builder()
//                .name(name)
                .email(email)
//                .nickName(name)
                .provider("kakao")
                .build());
        //when
        Optional<Users> kakao = usersJpaRepo.findByEmailAndProvider(email, "kakao");

        //then
        assertThat(kakao).isNotNull();
        assertThat(kakao.isPresent()).isEqualTo(true);
//        assertThat(kakao.get().getName()).isEqualTo(name);
        assertThat(kakao.get().getProvider()).isEqualTo("kakao");
    }
}