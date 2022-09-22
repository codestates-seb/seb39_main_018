import React from 'react';
import Post from '../style/PostDetailStyle';
import TagUI from '../common/ui/Tag';
import { LikeBtn, MessageBtn, ReadBtn } from '../common/ui/Button';

const Detail = () => {
  return (
    <Post.Container>
      <Post.Content>
        <PostCategory />
        <PostPicture />
        <PostInfo />
        <PictureList />
        <PostBoard />
        <PostSeller />
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
        <h1>인천 캘리포니아행 티켓 팝니다.</h1>
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
  return <Post.PicList></Post.PicList>;
};

// 상세페이지 상품설명 컴포넌트
const PostBoard = () => {
  return <Post.Board></Post.Board>;
};

// 상세페이지 판매자 컴포넌트
const PostSeller = () => {
  return <Post.Seller></Post.Seller>;
};

export default Detail;
