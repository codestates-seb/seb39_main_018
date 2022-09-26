import React, { useEffect, useState } from 'react';
import Post from '../style/PostDetailStyle';
import TagUI from '../common/ui/Tag';
import { LikeBtn, MessageBtn, ReadBtn } from '../common/ui/Button';
import { LeftIcon, RightIcon, CheckIcon } from '../Components/icons/Icons';
import axios from 'axios';
import saves from '../util/detailLogic';


const Detail = () => {

  let data = saves()
  console.log(data);

  // img , price , postedDate , endData, seat , area , tag,
  // img
  // description , area , views , 
  // userimg , username , pricecount, reviewcount, area ? true false
  // reviews , userimg , username , postedDate, description

  

  return (
    <Post.Container>
      <Post.Content>
        <PostCategory />
        <PostPicture />
        <PostInfo />
        <PictureList />
        <PostBoard />
        <PostSeller />
        <SellerReviews />
      </Post.Content>
    </Post.Container>
  );
};

// 상세페이지 상단 카테고리 컴포넌트
const PostCategory = () => {
  return (
    <Post.Category>
      <ul className="category_list">
        <li>티켓 ⇒</li>
        <li>여행 →</li>
        <li>비행기 </li>
      </ul>
    </Post.Category>
  );
};

// 상세페이지 사진 컴포넌트
const PostPicture = () => {
  return <Post.Picture></Post.Picture>;
};

// 상세페이지 판매정보 컴포넌트
const PostInfo = () => {
  return (
    <Post.Info>
      <Post.InfoTop>
        <h1>부산 가는 KTX 표 팝니다.</h1>
        <p>150,000 원</p>
      </Post.InfoTop>
      <Post.InfoBottom>
        <Post.StartDate>
          <p className="title">등록 :</p>
          <p className="data">7시간전</p>
        </Post.StartDate>
        <Post.EndDate>
          <p className="title">기간 :</p>
          <p className="data">2022/10/22</p>
        </Post.EndDate>
        <Post.Seat>
          <p className="title">좌석 : </p>
          <p className="data">J열 32번 , F열 12번</p>
        </Post.Seat>
        <Post.Seat>
          <p className="title">거래지역 : </p>
          <p className="data">J열 32번 , F열 12번</p>
        </Post.Seat>
        <Post.Tags>
          <TagUI />
        </Post.Tags>
        <Post.Btn>
          <div className="bottom1">
            <LikeBtn />
          </div>
          <div className="bottom2">
            <ReadBtn />
          </div>
          <div className="top">
            <MessageBtn />
          </div>
        </Post.Btn>
      </Post.InfoBottom>
    </Post.Info>
  );
};
// 상세페이지 사진 리스트 컴포넌트
const PictureList = () => {
  return (
    <Post.PicList>
      <div className="list_icon">
        <LeftIcon />
      </div>
      <Post.NextPicture />
      <Post.NextPicture />
      <Post.NextPicture />
      <Post.NextPicture />
      <div className="list_icon">
        <RightIcon />
      </div>
    </Post.PicList>
  );
};

// 상세페이지 상품설명 컴포넌트
const PostBoard = () => {
  return (
    <Post.Description>
      <div className="item_title">상품설명</div>
      <div className="body">
        25일 출발인데 사정이 생겨 가지 못하게 되었네요 ..ㅠ 충분히 저렴하게 올려서 에눌 문의는
        차단합니다. 반품 X 교환 X 신중하게 구매하실분만 톡 ㄱㄱ
      </div>
      <Post.SubInfo>
        <Post.SellArea>
          <p className="subinfo_title">거래지역</p>
          <p className="subinfo_body">서울시 강남구 신사동</p>
        </Post.SellArea>
        <Post.Views>
          <p className="subinfo_title">조회수</p>
          <p className="subinfo_title">21</p>
        </Post.Views>
      </Post.SubInfo>
    </Post.Description>
  );
};

// 상세페이지 판매자 컴포넌트
const PostSeller = () => {
  return (
    <Post.Seller>
      <Post.SellerTitle>판매자</Post.SellerTitle>
      <Post.SellerInfo>
        <div className="img">
          <img src="https://i.pinimg.com/474x/07/08/ff/0708ff1a9c43249e39813d1c262adb34--amumu-league-of-legends-league-of-legends-tattoo.jpg" />
        </div>
        <div className="infoBox">
          <p>최붕대 님</p>
          <div className="rating_info">
            <p>★★★★★</p>
            <p>상품</p>
            <p>10</p>
            <p>후기</p>
            <p>22</p>
          </div>
          <div className="area_auth">
            <p>
              <CheckIcon />
            </p>
            <p>지역인증 완료</p>
          </div>
        </div>
      </Post.SellerInfo>
      <Post.Btn>
        <div className="bottom2">
          <LikeBtn />
        </div>
        <div className="bottom2">
          <LikeBtn />
        </div>
      </Post.Btn>
    </Post.Seller>
  );
};

const SellerReviews = () => {
  return (
    <Post.Review>
      <div className="item_title">
        <p className="title_text">거래후기</p>
        <p className="title_reviews">(7++)</p>
      </div>
      <Post.ReviewInfo>
        <div className="review">
          <div className="profile">
            <div className="img"></div>
            <p className="user_name">라떼한잔</p>
          </div>
          <div className="rating">
            <p className="starIcon">★★★★★</p>
            <p className="review_date">2022-09-18</p>
          </div>
          <div className="rebiew_body">
          덕분에 남자친구랑 전시회 저렴하게 다녀 올 수 있었습니다ㅎㅎ
          </div>
        </div>
        <div className="review">
          <div className="profile">
            <div className="img"></div>
            <p className="user_name">김계란</p>
          </div>
          <div className="rating">
            <p className="starIcon">★★★★★</p>
            <p className="review_date">2022-09-18</p>
          </div>
          <div className="rebiew_body">
            신세계 상품권 구매했는데 거의 반값에 구매해서 덕분에 닭가슴살 3배로 구매 했내요
            감사합니당
          </div>
        </div>
        <div className="review">
          <div className="profile">
            <div className="img"></div>
            <p className="user_name">니네집난장판</p>
          </div>
          <div className="rating">
            <p className="starIcon">★★★★★</p>
            <p className="review_date">2022-09-18</p>
          </div>
          <div className="rebiew_body">
          AOMG 공연 잘봄 ㄱㅅ
          </div>
        </div>
      </Post.ReviewInfo>
    </Post.Review>
  );
};

export default Detail;
