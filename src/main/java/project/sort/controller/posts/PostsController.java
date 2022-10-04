package project.sort.controller.posts;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.sort.dto.posts.PostDto;
import project.sort.dto.posts.PostPatchDto;
import project.sort.dto.posts.PostResponseDto;
import project.sort.entity.posts.Posts;
import project.sort.service.posts.PostsService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class PostsController {
    @ApiOperation(value = "/", notes = "헬로월드!")
    @GetMapping("/")
    public @ResponseBody String index() {
        return "hello World!";
    }
    private final PostsService postsService;


    /**
     * 게시글 생성
     */
    @ApiOperation(value = "게시글 생성", notes = "게시글을 작성할 수 있다.")
    @PostMapping("/board")
    @CrossOrigin(origins = "*")
    public ResponseEntity posts(@RequestBody @Valid PostDto postDto) {
        Posts posts = postsService.save(postDto);
        return new ResponseEntity<>(posts,HttpStatus.CREATED);
    }


    /**
     * 게시글 전체 조회
     */
    @ApiOperation(value = "게시글 전체 조회", notes = "전체 게시물을 조회한다.")
    @GetMapping("/board")
    @CrossOrigin(origins = "localhost:3003")
    public ResponseEntity listPosts(){
        List<Posts> postsList = postsService.findPosts();
        return new ResponseEntity<>(postsList,HttpStatus.OK);
    }

    //@GetMapping("/board/list")
    //@CrossOrigin(origins = "localhost:3003")
    //public String findPosts2(Model model, @PageableDefault(page = 0, size = 8 , sort = "id", direction = Sort.Direction.DESC) Pageable pageable){
    // model.addAttribute("list",postsService.findPosts2(pageable));
    //return "findPosts2";
    //}

    @ApiOperation(value = "게시물 리스트", notes = "8개씩 게시물을 모아서 볼 수 있다.")
    @GetMapping("/board/list")
    @CrossOrigin(origins = "localhost:3003")
    Page<Posts> findPosts2(@PageableDefault(page = 0, size = 8 , sort = "id", direction = Sort.Direction.DESC)
                           Pageable pageable, String title, String body) {

        Page<Posts> list = null;
        if(title == null && body == null) {
            list = postsService.findPosts2(pageable);
        } else {
            list = postsService.findPosts3(title,body,pageable);
        }
        return  list;
    }

    /**
     * 한개 게시물 조회
     */
    @ApiOperation(value = "개별 게시물 조회", notes = "한 개의 게시물을 조회한다.")
    @GetMapping("/board/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity onePosts(@PathVariable Long id) {
        PostResponseDto postResponseDto = postsService.findOnePost(id);
        return new ResponseEntity<>(postResponseDto,HttpStatus.OK);
    }

    /**
     * 게시글 삭제
     */
    @ApiOperation(value = "게시물 삭제", notes = "개별 게시물을 삭제한다.")
    @DeleteMapping("/board/{id}")
    @CrossOrigin(origins = "*")
    public String deletePosts(@PathVariable Long id) {
        postsService.delete(id);
        return "삭제 되었습니다.";
    }

    /**
     * 게시글 수정
     */
    @ApiOperation(value = "게시물 수정", notes = "개별 게시물을 수정한다.")
    @PatchMapping("/board/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity editPosts(@PathVariable Long id, @RequestBody PostPatchDto postPatchDto) {
        PostResponseDto postResponseDto = postsService.editPosts(id,postPatchDto);
        return new ResponseEntity<>(postResponseDto,HttpStatus.ACCEPTED);
    }




}
