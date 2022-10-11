package project.sort.dto.user;

import lombok.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import project.sort.entity.user.Users;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class UserRequestDto {

    private String email;
    private String name;
//    private String nickName;

    public Users toEntity() {
        return Users.builder()
                .email(email)
                .name(name)
//                .nickName(nickName)
                .build();
    }
}