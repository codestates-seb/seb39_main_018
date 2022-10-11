package project.sort.dto.sign;

import lombok.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class UserSocialLoginRequestDto {
    private String accessToken;
}
