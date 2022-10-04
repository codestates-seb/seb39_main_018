package project.sort.dto.social;

import lombok.Getter;

@Getter
public class RetKakaoOAuth {
    private String tokenType;
    private String accessToken;
    private Integer expiresIn;
    private String refreshToken;
    private String refreshTokenExpiresIn;
    private String scope;
}
