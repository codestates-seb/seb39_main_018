package project.sort.dto.sign;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import project.sort.entity.user.Users;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserLoginRequestDto {
    private String email;
    private String password;

    public Users toUser(PasswordEncoder passwordEncoder) {
        return Users.builder()
                .email(email)
                .password(passwordEncoder.encode(password))
                .build();
    }
}
