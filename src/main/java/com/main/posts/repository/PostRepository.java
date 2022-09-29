package com.main.posts.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;



public interface PostRepository extends JpaRepository<Posts,Long> {

    Page<Posts> findByTitleContainingOrTextContaining(String title , String text, Pageable pageable);
}
