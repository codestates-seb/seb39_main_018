package project.sort.dto.sign;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserSocialLoginRequestDto {
    private String accessToken;
}
