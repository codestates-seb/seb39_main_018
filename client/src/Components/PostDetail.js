import React from 'react';
import Post from '../style/PostDetailStyle';
import TagUI from '../common/ui/Tag';
import { LikeBtn, MessageBtn, ReadBtn } from '../common/ui/Button';
import { AiOutlineRight, AiOutlineLeft } from '../Components/icons/Icons';

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
        <AiOutlineLeft />
      </div>
      <Post.NextPicture />
      <Post.NextPicture />
      <Post.NextPicture />
      <Post.NextPicture />
      <div className="list_icon">
        <AiOutlineRight />
      </div>
    </Post.PicList>
  );
};

// 상세페이지 상품설명 컴포넌트
const PostBoard = () => {
  return (
    <Post.Board>
      <div className="title">상품설명</div>
      <div className="body">
        25일 출발인데 사정이 생겨 가지 못하게 되었네요 ..ㅠ 충분히 저렴하게 올려서 에눌 문의는
        차단합니다. 반품 X 교환 X 신중하게 구매하실분만 톡 ㄱㄱ
      </div>
    </Post.Board>
  );
};

// 상세페이지 판매자 컴포넌트
const PostSeller = () => {
  return <Post.Seller></Post.Seller>;
};

export default Detail;
