package com.main.posts.controller;


import com.main.posts.Posts;
import com.main.posts.dto.PostDto;
import com.main.posts.service.PostsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class PostsController {

    private final PostsService postsService;

    /**
    * 게시글 저장
     */
    @PostMapping("/post")
    public ResponseEntity posts(@RequestBody @Valid PostDto postDto) {
        Posts posts = postsService.save(postDto);
            return new ResponseEntity<>(posts,HttpStatus.CREATED);
    }

    @GetMapping("/post")
    public ResponseEntity listPosts(){
        List<Posts> postsList = postsService.findPosts();
            return new ResponseEntity<>(postsList,HttpStatus.OK);
    }



}
