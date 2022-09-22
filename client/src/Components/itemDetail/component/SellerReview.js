import React from 'react';
import { Review, ReviewInfo } from '../ItemDetailStyle';

const SellerReviews = () => {
  return (
    <Review>
      <div className="item_title">
        <p className="title_text">거래후기</p>
        <p className="title_reviews">(7++)</p>
      </div>
      <ReviewInfo>
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
          <div className="rebiew_body">AOMG 공연 잘봄 ㄱㅅ</div>
        </div>
      </ReviewInfo>
    </Review>
  );
};

export default SellerReviews;
