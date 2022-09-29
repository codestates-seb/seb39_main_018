package com.main.posts.service;

import com.main.posts.dto.PostPatchDto;
import com.main.posts.dto.PostResponseDto;
import com.main.posts.repository.Posts;
import com.main.posts.dto.PostDto;
import com.main.posts.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.Optional;


@Slf4j
@Service
@RequiredArgsConstructor
public class PostsService {

    private final PostRepository postRepository;


    @Transactional
    public Posts save(PostDto postDto) {

        Posts posts = Posts.builder()
                .title(postDto.getTitle())
                .text(postDto.getText())
                .price(postDto.getPrice())
                .end_date(postDto.getEnd_date())
                .seat_number(postDto.getSeat_number())
                .region(postDto.getRegion())
                .build();


            Posts posts1 = postRepository.save(posts);
            return posts1;

    }
    public List<Posts> findPosts() {return postRepository.findAll();}
    public Page<Posts> findPosts2(Pageable pageable) {return postRepository.findAll(pageable);}

    public Page<Posts> findPosts3(String title, String text, Pageable pageable) {return postRepository.findByTitleContainingOrTextContaining(title, text, pageable);}

    /**
     * 한개 게시글 조회
     */
    public PostResponseDto findOnePost(Long id) {
        Posts posts = postRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("해당 글이 존재하지 않습니다."));

        return PostResponseDto.builder()
                .title(posts.getTitle())
                .text(posts.getText())
                .price(posts.getPrice())
                .end_date(posts.getEnd_date())
                .seat_number((posts.getSeat_number()))
                .region((posts.getRegion()))
                .created_date(posts.getCreated_date())
                .build();

    }

    /**
     * 게시글 삭제 완료
     */
    public void delete(Long id){
        Posts posts = postRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("없는 글 입니다."));
                postRepository.delete(posts);
    }

    /**
     * 게시글 수정 완료
     */
    @Transactional
    public PostResponseDto editPosts(Long id, PostPatchDto postPatchDto) {
        Posts posts = postRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("존재하지 않는 게시글입니다."));
            posts.changePosts(postPatchDto.getTitle(),postPatchDto.getText(),
                              postPatchDto.getPrice(),postPatchDto.getEnd_date(),
                              postPatchDto.getSeat_number(),postPatchDto.getRegion());
            return PostResponseDto.builder()
                    .title(posts.getTitle())
                    .text(posts.getText())
                    .price(posts.getPrice())
                    .end_date(posts.getEnd_date())
                    .seat_number(posts.getSeat_number())
                    .region(posts.getRegion())
                    .build();
    }




}
