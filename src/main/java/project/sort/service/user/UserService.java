package project.sort.service.user;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import project.sort.advice.exception.CUserNotFoundException;
import project.sort.dto.user.UserRequestDto;
import project.sort.dto.user.UserResponseDto;
import project.sort.entity.user.Users;
import project.sort.entity.user.UsersJpaRepo;
import java.util.List;
import java.util.stream.Collectors;
@Slf4j
@Service
@AllArgsConstructor
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class UserService {
    private UsersJpaRepo usersJpaRepo;

    @Transactional
    public Long save(UserRequestDto userDto) {
        Users saved = usersJpaRepo.save(userDto.toEntity());
        return saved.getUserId();
    }

    @Transactional(readOnly = true)
    public UserResponseDto findById(Long id) {
        Users users = usersJpaRepo.findById(id)
                .orElseThrow(CUserNotFoundException::new);
        return new UserResponseDto(users);
    }

    @Transactional(readOnly = true)
    public UserResponseDto findByEmail(String email) {
        Users users = usersJpaRepo.findByEmail(email)
                .orElseThrow(CUserNotFoundException::new);
        return new UserResponseDto(users);
    }

    @Transactional(readOnly = true)
    public List<UserResponseDto> findAllUser() {
        return usersJpaRepo.findAll()
                .stream()
                .map(UserResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public Long update(Long id, UserRequestDto userRequestDto) {
        Users modifiedUsers = usersJpaRepo
                .findById(id).orElseThrow(CUserNotFoundException::new);
//        modifiedUser.updateNickName(userRequestDto.getNickName());
        return id;
    }

    @Transactional
    public void delete(Long id) {
        usersJpaRepo.deleteById(id);
    }

    public Users findUserByEmailMethod(String userEmail) {
        return usersJpaRepo.findUsersByEmail(userEmail);
    }
}



//
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//import project.sort.entity.user.User;
//import project.sort.entity.user.UserRepository;
//
//import java.util.List;
//
//
//@Service
//@RequiredArgsConstructor
//public class UserService {
//
//    private final UserRepository userRepository;
//    private final BCryptPasswordEncoder bCryptPasswordEncoder;
//
//    public User register(User user) {
//        String rawPassword = user.getPassword();
//        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
//        user.setPassword(encPassword);
//        user.setRole("ROLE_USER");
//        User userEntity = userRepository.save(user);
//
//        return userEntity;
//    }
//
//    public List<User> findAll() {
//        return userRepository.findAll();
//    }
//
//    public User findUser(int id) {
//        return userRepository.findById(id).orElseThrow(()-> {
//            return new IllegalArgumentException("User ID를 찾을 수 없습니다.");
//        });
//    }
//}