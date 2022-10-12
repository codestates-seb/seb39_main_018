import React from 'react';
import {
  Detail_Review,
  ReviewInfo,
  ReviewTitle,
  ReviewProfile,
  ReviewRating,
  ReviewBody,
} from './style';



const SellerReview = () => {
  return (
    <Detail_Review>
      <ReviewTitle>
        <p className="title_text">거래후기</p>
        <p className="title_reviews">(7++)</p>
      </ReviewTitle>
      <ReviewInfo>
        <ReviewProfile>
          <p className="img"></p>
          <p className="user_name">라떼한잔</p>
        </ReviewProfile>
        <ReviewRating>
          <p className="starIcon">★★★★★</p>
          <p className="review_date">2022-09-18</p>
        </ReviewRating>
        <ReviewBody>덕분에 남자친구랑 전시회 저렴하게 다녀 올 수 있었습니다ㅎㅎ</ReviewBody>
      </ReviewInfo>
      <p className="border_line" />
      <ReviewInfo>
        <ReviewProfile>
          <p className="img"></p>
          <p className="user_name">김계란</p>
        </ReviewProfile>
        <ReviewRating>
          <p className="starIcon">★★★★★</p>
          <p className="review_date">2022-09-18</p>
        </ReviewRating>
        <ReviewBody>덕분에 남자친구랑 전시회 저렴하게 다녀 올 수 있었습니다ㅎㅎ</ReviewBody>
      </ReviewInfo>
      <p className="border_line" />
      <ReviewInfo>
        <ReviewProfile>
          <p className="img"></p>
          <p className="user_name">맘모스</p>
        </ReviewProfile>
        <ReviewRating>
          <p className="starIcon">★★★★★</p>
          <p className="review_date">2022-09-18</p>
        </ReviewRating>
        <ReviewBody>OMG 공연 잘봄 ㄱㅅ</ReviewBody>
      </ReviewInfo>
    </Detail_Review>
  );
};

export default SellerReview;
