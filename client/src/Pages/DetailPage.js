import React, { useEffect, useState } from 'react';
import Post from '../Components/ItemDetail/DetailStyle';
import TagUI from '../Components/Common/Tag/Tag';
import { LikeBtn, MessageBtn, ReadBtn } from '../Components/Common/Button/Buttons';
import { LeftIcon, RightIcon, CheckIcon } from '../Components/Common/Icons/Icons';
import axios from 'axios';
import { saves,dateCompute } from '../util/detailLogic';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const { title, img, text, price, end_date, seat_number, createdDate, region } = saves(id);
  const detailPageDate = dateCompute(createdDate);
  console.log();

  // img , price , postedDate , endData, seat , area , tag,
  // img
  // description , area , views ,
  // userimg , username , pricecount, reviewcount, area ? true false
  // reviews , userimg , username , postedDate, description


  return (
    <Post.Container>
      <Post.Content>
        <PostCategory />
        <PostPicture img={img} />
        <PostInfo
          title={title}
          price={price}
          createdDate={detailPageDate}
          endDate={end_date}
          seat={seat_number}
          region={region}
        />
        <PictureList img={img} />
        <PostBoard description={text} region={region} />
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
const PostPicture = ({ img }) => {
  return <Post.Picture></Post.Picture>;
};

// 상세페이지 판매정보 컴포넌트
const PostInfo = ({ title, price, createdDate, endDate, seat, region }) => {
  return (
    <Post.ItemInfo>
      <Post.InfoTop>
        <h1>{title}</h1>
        <p>{price}</p>
        <p>원</p>
      </Post.InfoTop>
      <Post.InfoBottom>
        <Post.StartDate>
          <p className="info_title">등록 :</p>
          <p className="infor_data">7시간전</p>
        </Post.StartDate>
        <Post.EndDate>
          <p className="info_title">기간 :</p>
          <p className="infor_data">{endDate}</p>
        </Post.EndDate>
        <Post.Seat>
          <p className="info_title">좌석 : </p>
          <p className="infor_data">{seat}</p>
        </Post.Seat>
        <Post.Seat>
          <p className="info_title">거래지역 : </p>
          <p className="infor_data">{region}</p>
        </Post.Seat>
        <Post.Tags>
          <TagUI />
        </Post.Tags>
        <Post.Btn>
          <div className="top_btn">
            <LikeBtn />
          </div>
          <div className="top_btn">
            <ReadBtn />
          </div>
          <div className="bottom_btn">
            <MessageBtn />
          </div>
        </Post.Btn>
      </Post.InfoBottom>
    </Post.ItemInfo>
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
const PostBoard = ({ description,region }) => {
  return (
    <Post.Description>
      <div className="item_title">상품설명</div>
      <div className="body">{description}</div>
      <Post.SubInfo>
        <Post.SellArea>
          <p className="subinfo_title">거래지역</p>
          <p className="subinfo_body">{region}</p>
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
        <Post.InfoBox>
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
        </Post.InfoBox>
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
          <div className="rebiew_body">AOMG 공연 잘봄 ㄱㅅ</div>
        </div>
      </Post.ReviewInfo>
    </Post.Review>
  );
};

export default DetailPage;
