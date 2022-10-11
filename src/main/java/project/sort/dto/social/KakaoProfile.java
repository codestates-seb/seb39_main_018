package project.sort.dto.social;

import lombok.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Properties;

@Getter
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class KakaoProfile {
    private Long id;
    private Properties properties;
    private KakaoAccount kakaoAccount;

    @Getter
    @ToString
    public static class KakaoAccount {
        private String email;
    }

    @Getter
    @ToString
    public static class Properties {
        private String nickname;
    }
}
/*
{
    "id":1860827414,
    "connected_at":"2021-08-22T15:22:52Z",
    "properties":
        {
            "nickname":"박혜진"
        },
    "kakao_account":
        {
            "profile_nickname_needs_agreement":false,
            "profile":
                {
                    "nickname":"박혜진"
                },
            "has_email":true,
            "email_needs_agreement":false,
            "is_email_valid":true,
            "is_email_verified":true,
            "email":"groom@kakao.com"
        }
}
 */
