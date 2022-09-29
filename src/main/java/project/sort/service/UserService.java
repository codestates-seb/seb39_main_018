package project.sort.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import project.sort.dto.RegisterDto;
import project.sort.entity.user.User;
import project.sort.entity.user.UserRepository;

import java.util.List;


@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public User register(User user) {
        String rawPassword = user.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
        user.setPassword(encPassword);
        user.setRole("ROLE_USER");
        User userEntity = userRepository.save(user);

        return userEntity;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findUser(int id) {
        return userRepository.findById(id).orElseThrow(()-> {
            return new IllegalArgumentException("User ID를 찾을 수 없습니다.");
        });
    }
}