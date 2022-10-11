package project.sort.dto.user;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.CrossOrigin;
import project.sort.entity.user.Users;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

@Getter
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class UserResponseDto {
    private final Long userId;
    private final String email;
    private final String name;
//    private final String nickName;
    private List<String> roles;
    private Collection<? extends GrantedAuthority> authorities;
    private final LocalDateTime modifiedDate;

    public UserResponseDto(Users users) {
        this.userId = users.getUserId();
        this.email = users.getEmail();
        this.name = users.getName();
//        this.nickName = user.getNickName();
        this.roles = users.getRoles();
        this.authorities = users.getAuthorities();
        this.modifiedDate = users.getModifiedDate();
    }
}
