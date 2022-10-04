package project.sort.dto.user;

import lombok.*;
import project.sort.entity.user.Users;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRequestDto {

    private String email;
//    private String name;
//    private String nickName;

    public Users toEntity() {
        return Users.builder()
                .email(email)
//                .name(name)
//                .nickName(nickName)
                .build();
    }
}