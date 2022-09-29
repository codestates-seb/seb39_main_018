package project.sort.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import project.sort.config.auth.PrincipalDetails;
import project.sort.dto.RegisterDto;
import project.sort.entity.user.User;
import project.sort.entity.user.UserRepository;
import project.sort.service.UserService;

import java.util.List;


@RequiredArgsConstructor
@RestController
public class RestApiController {

    private final UserService userService;
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    // 모든 사람이 접근 가능
    @GetMapping("/home")
    public String home() {
        return "<h1>home</h1>";
    }

    // Tip : JWT를 사용하면 UserDetailsService를 호출하지 않기 때문에 @AuthenticationPrincipal 사용 불가능.
    // 왜냐하면 @AuthenticationPrincipal은 UserDetailsService에서 리턴될 때 만들어지기 때문이다.

    // 유저 혹은 매니저 혹은 어드민이 접근 가능
    @GetMapping("/api/v1/user")
    public String user(Authentication authentication) {
        PrincipalDetails principal = (PrincipalDetails) authentication.getPrincipal();

        return "<h1>user</h1>";
    }

    @ResponseStatus(HttpStatus.OK)
    // 매니저 혹은 어드민이 접근 가능
    @GetMapping("/api/v1/manager/reports")
    public String reports() {
        return "<h1>reports</h1>";
    }

    @ResponseStatus(HttpStatus.OK)
    // 어드민이 접근 가능
    @GetMapping("/api/v1/admin/users")
    public List<User> users(){
        return userRepository.findAll();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/api/v1/join")
    public String join(@RequestBody RegisterDto registerDto) {
        User user = registerDto.toEntity();
        userService.register(user);
        return "회원가입이 완료되었습니다.";
    }
}