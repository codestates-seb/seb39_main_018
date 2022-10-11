package project.sort.entity.posts;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import project.sort.config.security.JwtProvider;
import project.sort.dto.posts.PostDao;
import project.sort.response.BaseException;

import java.util.ArrayList;
import java.util.List;

import static project.sort.response.BaseResponseStatus.DATABASE_ERROR;
import static project.sort.response.BaseResponseStatus.POST_POST_INVALID_USER;

//Provider : Read의 비즈니스 로직 처리
@Service
public class PostProvider {
//    private final AddressProvider addressProvider;
//    private final CategoryProvider categoryProvider;
    private final PostDao postDao;


    final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    public PostProvider(PostDao postDao) {  //AddressProvider addressProvider, CategoryProvider categoryProvider, JwtService jwtService 삭제
//        this.addressProvider = addressProvider;
//        this.categoryProvider = categoryProvider;//주소 사용하기 위해 추가
        this.postDao = postDao;
//        this.jwtService = jwtService;
    }

    //특정유저 전체 판매중, 판매완료 게시물 조회
    public List<AllPostSelectRes> allPostSelect(Long userId) throws BaseException {
        int checkUserId = postDao.checkUserId(userId);
        if(checkUserId == 0){//정상 상태가 아닌 유저라면
            throw new BaseException(POST_POST_INVALID_USER);
        }
        //게시물이 없는지 조회

        try{
            List<AllPostSelectRes> allPostSelectRes = postDao.allPostSelect(userId);//getUser(userIdx)를 반환받아서 반환한다.
            return allPostSelectRes;
        } catch(Exception exception){
            throw new BaseException(DATABASE_ERROR);
        }

    }
    //특정 유저 판매중 게시물 조회
    public List<AllPostSelectRes> salePostSelect(Long userId) throws BaseException{
        int checkUserId = postDao.checkUserId(userId);
        if(checkUserId == 0){//정상 상태가 아닌 유저라면
            throw new BaseException(POST_POST_INVALID_USER);
        }
        try{
            List<AllPostSelectRes> salePostSelect = postDao.salePostSelect(userId);//getUser(userIdx)를 반환받아서 반환한다.
            return salePostSelect;
        } catch(Exception exception){
            throw new BaseException(DATABASE_ERROR);
        }

    }
    //특정 유저 판매완료 게시물 조회
    public List<AllPostSelectRes> dealCompletePostSelect(Long sellerUserId) throws BaseException{
        int checkUserId = postDao.checkUserId(sellerUserId);
        if(checkUserId == 0){//정상 상태가 아닌 유저라면
            throw new BaseException(POST_POST_INVALID_USER);
        }
        try{
            List<AllPostSelectRes> dealCompletePostSelect = postDao.dealCompletePostSelect(sellerUserId);//getUser(userIdx)를 반환받아서 반환한다.
            return dealCompletePostSelect;
        } catch(Exception exception){
            throw new BaseException(DATABASE_ERROR);
        }

    }

    //특정 유저 구매완료 게시물 조회
    public List<AllPostSelectRes> purchaseCompletePostSelect(Long buyerUserId) throws BaseException{
        int checkUserId = postDao.checkUserId(buyerUserId);
        if(checkUserId == 0){//정상 상태가 아닌 유저라면
            throw new BaseException(POST_POST_INVALID_USER);
        }
        try{
            List<AllPostSelectRes> purchaseCompletePostSelect = postDao.purchaseCompletePostSelect(buyerUserId);//getUser(userIdx)를 반환받아서 반환한다.
            return purchaseCompletePostSelect;
        } catch(Exception exception){
            throw new BaseException(DATABASE_ERROR);
        }

    }


}