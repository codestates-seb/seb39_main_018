package project.sort.dto.user;

import lombok.Data;
@Data
public class LoginRequestDto {
    private String username;
    private String password;
    private String email; // 내가추가함
}