package com.main.posts.repository;

import com.main.posts.entity.Posts;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface PostRepository extends JpaRepository<Posts,Long> {

    Page<Posts> findByStatusContainingOrTitleContainingOrBodyContaining(String status, String title , String body, Pageable pageable);

    List<Posts> findByStatusContainingOrTitleContainingOrBodyContaining(String status, String title, String body);

    @Modifying
    @Query("update Posts p set p.view = p.view + 1 where p.id = :id")
    int updateView(Long id);

}
