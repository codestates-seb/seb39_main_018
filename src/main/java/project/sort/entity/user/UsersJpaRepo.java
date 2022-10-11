package project.sort.entity.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface UsersJpaRepo extends JpaRepository<Users, Long> {

//    List<Users> findByName(String name);
    Users findByName(String sender);
    Users findUsersByEmail(String userEmail);
    Optional<Users> findByEmail(String email);
    Optional<Users> findByEmailAndProvider(String email, String provider);

}
