package project.sort.entity.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersJpaRepo extends JpaRepository<Users, Long> {

//    List<User> findByName(String name);
    Optional<Users> findByEmail(String email);
    Optional<Users> findByEmailAndProvider(String email, String provider);
}
