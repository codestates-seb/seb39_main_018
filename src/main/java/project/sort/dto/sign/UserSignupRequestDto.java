package project.sort.dto.sign;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import project.sort.entity.user.Users;
import java.util.Collections;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class UserSignupRequestDto {
    private String email;
    private String password;
    private String name;
//    private String nickName;
    private String provider;

    public Users toEntity(PasswordEncoder passwordEncoder) {
        return Users.builder()
                .email(email)
                .password(passwordEncoder.encode(password))
//                .nickName(nickName)
                .name(name)
                .roles(Collections.singletonList("ROLE_USER"))
                .build();
    }

    public Users toEntity() {
        return Users.builder()
                .email(email)
//                .nickName(nickName)
                .name(name)
                .provider(provider)
                .roles(Collections.singletonList("ROLE_USER"))
                .build();
    }
}