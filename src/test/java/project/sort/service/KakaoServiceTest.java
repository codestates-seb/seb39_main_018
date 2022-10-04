package project.sort.service;

import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.env.Environment;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import project.sort.dto.social.KakaoProfile;
import project.sort.service.user.KakaoService;

import static org.assertj.core.api.Assertions.*;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@WithMockUser(username = "mockUser")
public class KakaoServiceTest {

    @Autowired
    private KakaoService kakaoService;

    @Autowired
    Environment env;

    private static String accessToken;

    @Before
    public void setToken() {
        accessToken = env.getProperty("spring.social.kakao.accessToken");
    }

    @Test
    public void 액세스토큰으로_사용자정보_요청() throws Exception
    {
        //given
        //when
        KakaoProfile kakaoProfile = kakaoService.getKakaoProfile(accessToken);

        //then
        assertThat(kakaoProfile).isNotNull();
        assertThat(kakaoProfile.getKakaoAccount().getEmail()).isEqualTo("groom@kakao.com");
//        assertThat(kakaoProfile.getProperties().getNickname()).isEqualTo("박혜진");
    }
}