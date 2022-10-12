package com.main.posts.service;

import com.main.posts.Posts;
import com.main.posts.dto.PostDto;
import com.main.posts.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Slf4j
@Service
@RequiredArgsConstructor
public class PostsService {

    private final PostRepository postRepository;

    @Transactional
    public Posts save(PostDto postDto) {

        Posts posts = Posts.builder()
                .title(postDto.getTitle())
                .build();

            Posts posts1 = postRepository.save(posts);
            return posts1;

    }

    public List<Posts> findPosts() {return postRepository.findAll();}




}
