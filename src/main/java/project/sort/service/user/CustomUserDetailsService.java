package project.sort.service.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import project.sort.advice.exception.CUserNotFoundException;
import project.sort.entity.user.UsersJpaRepo;

@RequiredArgsConstructor
@Service
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class CustomUserDetailsService implements UserDetailsService {

    private final UsersJpaRepo usersJpaRepo;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String userPk) throws UsernameNotFoundException {
        return usersJpaRepo.findById(Long.parseLong(userPk))
                .orElseThrow(CUserNotFoundException::new);
    }
}