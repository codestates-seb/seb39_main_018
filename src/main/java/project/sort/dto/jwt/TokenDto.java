package project.sort.dto.jwt;

import lombok.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class TokenDto {
    private String grantType;
    private String accessToken;
    private String refreshToken;
    private Long accessTokenExpireDate;
}
