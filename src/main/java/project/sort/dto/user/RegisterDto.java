package project.sort.dto.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import project.sort.entity.user.User;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterDto {
    private String username;
    private String password;
    private String email;

    public User toEntity(){
        return User.builder()
                .username(username)
                .password(password)
                .email(email)
                .build();
    }
}