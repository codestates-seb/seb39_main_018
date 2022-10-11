package project.sort.controller.posts;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import project.sort.config.security.JwtProvider;
import project.sort.dto.posts.PostDto;
import project.sort.dto.posts.PostPatchDto;
import project.sort.dto.posts.PostResponseDto;
import project.sort.entity.posts.AllPostSelectRes;
import project.sort.entity.posts.PostProvider;
import project.sort.entity.posts.Posts;
import project.sort.response.BaseException;
import project.sort.response.BaseResponse;
import project.sort.service.posts.PostsService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class PostsController {

    private PostProvider postProvider;

    @GetMapping("/")
    public @ResponseBody String index() {
        return "hello World!";

    }

    private final PostsService postsService;


    /**
     * 게시글 생성
     */
    @PostMapping("/board")
    @CrossOrigin(origins = "*")
    public ResponseEntity posts(@RequestBody @Valid PostDto postDto) {
        Posts posts = postsService.save(postDto);
        return new ResponseEntity<>(posts, HttpStatus.CREATED);
    }


    /**
     * 게시글 전체 조회
     */
    //@GetMapping("/board")
    //@CrossOrigin(origins = "localhost:3003")
    //public ResponseEntity listPosts(){
    //List<Posts> postsList = postsService.findPosts();
    //return new ResponseEntity<>(postsList,HttpStatus.OK);
    //}
    @GetMapping("/board")
    List<Posts> findPosts(String status, String title, String body) {

        List<Posts> list = null;
        if (title == null && body == null) {
            list = postsService.findPosts();
        } else {
            list = postsService.findPosts14(status, title, body);
        }
        return list;
    }

    //@GetMapping("/board/list")
    //@CrossOrigin(origins = "localhost:3003")
    //public String findPosts2(Model model, @PageableDefault(page = 0, size = 8 , sort = "id", direction = Sort.Direction.DESC) Pageable pageable){
    // model.addAttribute("list",postsService.findPosts2(pageable));
    //return "findPosts2";
    //}

    /**
     * 최신순 게시글 검색 기능 및 8페이지네이션(판매중 판매완료 모두)
     */
    @GetMapping("/board/list-up")
    @CrossOrigin(origins = "localhost:3003")
    Page<Posts> findPosts2(@PageableDefault(page = 0, size = 8, sort = "createdDate", direction = Sort.Direction.ASC)
                           Pageable pageable, String status, String title, String body) {

        Page<Posts> list = null;
        if (title == null && body == null) {
            list = postsService.findPosts2(pageable);
        } else {
            list = postsService.findPosts3(status, title, body, pageable);
        }
        return list;
    }

    /**
     * 최신순 전체 검색 기능 (판매중 판매완료) 및 검색기능포함
     */
    @GetMapping("/board/full-up")
    Page<Posts> findPosts4(@PageableDefault(page = 0, sort = "createdDate", direction = Sort.Direction.DESC)
                           Pageable pageable, String status, String title, String body) {

        Page<Posts> list = null;
        if (title == null && body == null) {
            list = postsService.findPosts4(pageable);
        } else {
            list = postsService.findPosts5(status, title, body, pageable);
        }
        return list;
    }

    /**
     * 조회수순 8페이지네이션(판매중 판매완료 모두)
     */
    @GetMapping("/board/view-list")
    Page<Posts> findPosts6(@PageableDefault(page = 0, size = 8, sort = "view", direction = Sort.Direction.DESC)
                           Pageable pageable, String status, String title, String body) {

        Page<Posts> list = null;
        if (title == null && body == null) {
            list = postsService.findPosts6(pageable);
        } else {
            list = postsService.findPosts7(status, title, body, pageable);
        }
        return list;
    }

    /**
     * 조회수순 전체페이지네이션(판매중 판매완료 모두)
     */
    @GetMapping("/board/view-full")
    Page<Posts> findPosts8(@PageableDefault(page = 0, sort = "view", direction = Sort.Direction.DESC)
                           Pageable pageable, String status, String title, String body) {

        Page<Posts> list = null;
        if (title == null && body == null) {
            list = postsService.findPosts8(pageable);
        } else {
            list = postsService.findPosts9(status, title, body, pageable);
        }
        return list;
    }

    /**
     * 오래된순 8페이지네이션(판매중 판매완료 모두)
     */
    @GetMapping("/board/list-down")
    Page<Posts> findPosts10(@PageableDefault(page = 0, size = 8, sort = "createdDate", direction = Sort.Direction.DESC)
                            Pageable pageable, String status, String title, String body) {

        Page<Posts> list = null;
        if (title == null && body == null) {
            list = postsService.findPosts10(pageable);
        } else {
            list = postsService.findPosts11(status, title, body, pageable);
        }
        return list;
    }

    /**
     * 오래된순 전체페이지네이션(판매중 판매완료 모두)
     */
    @GetMapping("/board/full-down")
    Page<Posts> findPosts12(@PageableDefault(page = 0, sort = "createdDate", direction = Sort.Direction.DESC)
                            Pageable pageable, String status, String title, String body) {

        Page<Posts> list = null;
        if (title == null && body == null) {
            list = postsService.findPosts12(pageable);
        } else {
            list = postsService.findPosts13(status, title, body, pageable);
        }
        return list;
    }


    /**
     * 게시글 조회수 기능
     */
    @GetMapping("/board/read/{id}")
    public String read(@PathVariable Long id, Model model) {
        postsService.updateView(id);
        //postsService.updateView(id); // views ++//
        // model.addAttribute("posts",   postsService.updateView(id));
        return "posts-read";
    }

    /**
     * 한개 게시물 조회
     */
    @GetMapping("/board/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity onePosts(@PathVariable Long id) {
        PostResponseDto postResponseDto = postsService.findOnePost(id);
        return new ResponseEntity<>(postResponseDto, HttpStatus.OK);
    }

    /**
     * 게시글 삭제
     */
    @DeleteMapping("/board/{id}")
    @CrossOrigin(origins = "*")
    public String deletePosts(@PathVariable Long id) {
        postsService.delete(id);
        return "삭제 되었습니다.";
    }

    /**
     * 게시글 수정
     */
    @PatchMapping("/board/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity editPosts(@PathVariable Long id, @RequestBody PostPatchDto postPatchDto) {
        PostResponseDto postResponseDto = postsService.editPosts(id, postPatchDto);
        return new ResponseEntity<>(postResponseDto, HttpStatus.ACCEPTED);
    }



    /**
     *     여기서부터는 내가 추가한 부분
     */



    /**
     * 특정 유저전체 판매중, 판매완료 게시물 조회 API
     * [GET] /post/:userId
     * @return BaseResponse<AllPostSelectRes>
     */
    @ResponseBody
    @GetMapping("/board/sell-status/{userId}")
    public BaseResponse<List<AllPostSelectRes>> allPostSelect(@PathVariable("userId") Long userId){
        try{

            List<AllPostSelectRes> allPostSelectRes = postProvider.allPostSelect(userId);
            return new BaseResponse<>(allPostSelectRes);
        } catch(BaseException exception){
            return new BaseResponse<>((exception.getStatus()));
        }

    }

    /**
     * 특정 유저전체 판매중 게시물 조회 API
     * [GET] /post/sales/:userId
     * @return BaseResponse<AllPostSelectRes>
     */

    @ResponseBody
    @GetMapping("/{userId}/sales")
    public BaseResponse<List<AllPostSelectRes>> salePostSelect(@PathVariable("userId") Long userId){
        try{

            List<AllPostSelectRes> salePostSelect = postProvider.salePostSelect(userId);
            return new BaseResponse<>(salePostSelect);
        } catch(BaseException exception){
            return new BaseResponse<>((exception.getStatus()));
        }

    }

    /**
     * 특정 유저전체 판매완료 게시물 조회 API
     * [GET] /post/deal-complete/:sellerUserId
     * @return BaseResponse<AllPostSelectRes>
     */

    @ResponseBody
    @GetMapping("/{sellerUserId}/sales/complete")
    public BaseResponse<List<AllPostSelectRes>> dealCompletePostSelect(@PathVariable("sellerUserId") Long sellerUserId){
        try{

            List<AllPostSelectRes> dealCompletePostSelect = postProvider.dealCompletePostSelect(sellerUserId);
            return new BaseResponse<>(dealCompletePostSelect);
        } catch(BaseException exception){
            return new BaseResponse<>((exception.getStatus()));
        }

    }
//
//    /**
//     * 특정 유저의 판매 게시물 중 숨김 게시물 조회 API
//     * [GET] /post/hide/:userId
//     * @return BaseResponse<AllPostSelectRes>
//     */
//
//    @ResponseBody
//    @GetMapping("/{userId}/hide")
//    public BaseResponse<List<AllPostSelectRes>> hidePostSelect(@PathVariable("userId") Long userId){
//        try{
//
//            List<AllPostSelectRes> hidePostSelect = postProvider.hidePostSelect(userId);
//            return new BaseResponse<>(hidePostSelect);
//        } catch(BaseException exception){
//            return new BaseResponse<>((exception.getStatus()));
//        }
//
//    }


    /**
     * 특정 유저전체 구매완료 게시물 조회 API
     * [GET] /post/deal-complete/:buyerUserId
     * @return BaseResponse<AllPostSelectRes>
     */

    @ResponseBody
    @GetMapping("/{buyerUserId}/purchase/complete")
    public BaseResponse<List<AllPostSelectRes>> purchaseCompletePostSelect(@PathVariable("buyerUserId") Long buyerUserId){
        try{

            List<AllPostSelectRes> purchaseCompletePostSelect = postProvider.purchaseCompletePostSelect(buyerUserId);
            return new BaseResponse<>(purchaseCompletePostSelect);
        } catch(BaseException exception){
            return new BaseResponse<>((exception.getStatus()));
        }

    }



}