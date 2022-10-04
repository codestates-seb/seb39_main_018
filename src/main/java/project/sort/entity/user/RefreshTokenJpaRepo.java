package project.sort.entity.user;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface RefreshTokenJpaRepo extends JpaRepository<RefreshToken, String> {
    Optional<RefreshToken> findByKeyNum(Long keyNum);
}
