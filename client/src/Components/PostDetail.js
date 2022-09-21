import React from 'react';
import { PostPageBtn } from '../style/ButtonStyle';
import {
  PostContainer,
  PostContent,
  PicCntr,
  InfoCntr,
  InfoTop,
  InfoBottom,
  PicListCntr,
  BoardCntr,
  SellerCntr,
  Category,
  BtnComponent,
} from '../style/PostDetailStyle';

const Detail = () => {
  return (
    <PostContainer>
      <PostContent>
        <PostCategory />
        <PostPicture />
        <PostInfo />
        <PictureList />
        <PostBoard />
        <PostSeller />
      </PostContent>
    </PostContainer>
  );
};
const PostCategory = () => {
  return (
    <Category>
      <ul className="category_list">
        <li>티켓 ⇒</li>
        <li>여행 →</li>
        <li>비행기 </li>
      </ul>
    </Category>
  );
};
const PostPicture = () => {
  return <PicCntr></PicCntr>;
};
const PostInfo = () => {
  return (
    <InfoCntr>
      <InfoTop>
        <h2>인천 캘리포니아행 티켓 팝니다.</h2>
        <p>가격 : 150,000 원</p>
      </InfoTop>
      <InfoBottom>
        <p>등록 : 7시간전</p>
        <p>기간 : 2022/10/22</p>
        <p>좌석 : J열 32번 , F열 12번</p>
        <p>태그 : 비행기표,캘리포니아,비즈니스석</p>
        <BtnComponent>

        </BtnComponent>
        <BtnComponent>

        </BtnComponent>
      </InfoBottom>
    </InfoCntr>
  );
};
const PictureList = () => {
  return <PicListCntr></PicListCntr>;
};
const PostBoard = () => {
  return <BoardCntr></BoardCntr>;
};
const PostSeller = () => {
  return <SellerCntr></SellerCntr>;
};

export default Detail;
