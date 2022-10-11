package project.sort.dto.sign;

import lombok.Getter;
import org.springframework.web.bind.annotation.CrossOrigin;
import project.sort.entity.user.Users;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class UserLoginResponseDto {
    private final Long userId;
    private final List<String> roles;
    private final LocalDateTime createdDate;

    public UserLoginResponseDto(Users users) {
        this.userId = users.getUserId();
        this.roles = users.getRoles();
        this.createdDate = users.getCreatedDate();
    }
}
