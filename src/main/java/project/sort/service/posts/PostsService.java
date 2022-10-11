package project.sort.service.posts;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import project.sort.dto.posts.PostDto;
import project.sort.dto.posts.PostPatchDto;
import project.sort.dto.posts.PostResponseDto;
import project.sort.entity.posts.PostRepository;
import project.sort.entity.posts.Posts;

import javax.transaction.Transactional;
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
                .body(postDto.getBody())
                .price(postDto.getPrice())
                .end_date(postDto.getEnd_date())
                .seat_number(postDto.getSeat_number())
                .region(postDto.getRegion())
                .photo(postDto.getPhoto())
                .status(postDto.getStatus())
                .build();


        Posts posts1 = postRepository.save(posts);
        return posts1;

    }
    public List<Posts> findPosts() {return postRepository.findAll();}

    public List<Posts> findPosts14(String status, String title, String body) {return postRepository.findByStatusContainingOrTitleContainingOrBodyContaining(status, title, body);}

    /**
     * 8페이지네이션 있는 검색기능
     */
    public Page<Posts> findPosts2(Pageable pageable) {return postRepository.findAll(pageable);}

    public Page<Posts> findPosts3(String status, String title, String body, Pageable pageable) {return postRepository.findByStatusContainingOrTitleContainingOrBodyContaining(status, title, body, pageable);}

    /**
     * 페이지네이션 없는 검색기능
     */
    public Page<Posts> findPosts4(Pageable pageable) {return postRepository.findAll(pageable);}

    public Page<Posts> findPosts5(String status, String title, String body, Pageable pageable) {return postRepository.findByStatusContainingOrTitleContainingOrBodyContaining(status, title, body, pageable);}

    /**
     * 조회수순으로 8페이지네이션
     */
    public Page<Posts> findPosts6(Pageable pageable) {return postRepository.findAll(pageable);}

    public Page<Posts> findPosts7(String status ,String title, String body, Pageable pageable) {return postRepository.findByStatusContainingOrTitleContainingOrBodyContaining(status, title, body, pageable);}

    /**
     * 조회수순으로 전체 페이지네이전
     */
    public Page<Posts> findPosts8(Pageable pageable) {return postRepository.findAll(pageable);}
    public Page<Posts> findPosts9(String status ,String title, String body, Pageable pageable) {return postRepository.findByStatusContainingOrTitleContainingOrBodyContaining(status, title, body, pageable);}

    /**
     * 오래된순 8페이지네이션(판매중 판매완료 모두)
     */
    public Page<Posts> findPosts10(Pageable pageable) {return postRepository.findAll(pageable);}
    public Page<Posts> findPosts11(String status ,String title, String body, Pageable pageable) {return postRepository.findByStatusContainingOrTitleContainingOrBodyContaining(status, title, body, pageable);}

    /**
     * 오래된순 전체페이지네이션(판매중 판매완료 모두)
     */
    public Page<Posts> findPosts12(Pageable pageable) {return postRepository.findAll(pageable);}
    public Page<Posts> findPosts13(String status ,String title, String body, Pageable pageable) {return postRepository.findByStatusContainingOrTitleContainingOrBodyContaining(status, title, body, pageable);}




    /**
     * 한개 게시글 조회
     */
    public PostResponseDto findOnePost(Long id) {
        Posts posts = postRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("해당 글이 존재하지 않습니다."));

        return PostResponseDto.builder()
                .title(posts.getTitle())
                .body(posts.getBody())
                .price(posts.getPrice())
                .end_date(posts.getEnd_date())
                .seat_number((posts.getSeat_number()))
                .region((posts.getRegion()))
                .photo(posts.getPhoto())
                .status((posts.getStatus()))
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
        posts.changePosts(postPatchDto.getTitle(),postPatchDto.getBody(),
                postPatchDto.getPrice(),postPatchDto.getEnd_date(),
                postPatchDto.getSeat_number(),postPatchDto.getRegion(),
                postPatchDto.getPhoto(),postPatchDto.getStatus()
        );
        return PostResponseDto.builder()
                .title(posts.getTitle())
                .body(posts.getBody())
                .price(posts.getPrice())
                .end_date(posts.getEnd_date())
                .seat_number(posts.getSeat_number())
                .region(posts.getRegion())
                .photo(posts.getPhoto())
                .status(posts.getStatus())
                .build();
    }

    /* Views Counting */
    @Transactional
    public int updateView(Long id) {
        return postRepository.updateView(id);
    }



}