package project.sort.entity.posts;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Posts,Long> {
    Page<Posts> findByTitleContainingOrBodyContaining(String title , String body, Pageable pageable);
}