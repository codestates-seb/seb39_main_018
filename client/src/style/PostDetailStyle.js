import styled from 'styled-components';
import { PostPageBtn } from './ButtonStyle';

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;

const Content = styled(Container)`
  width: 1000px;
  border: 1px solid black;
  flex-wrap: wrap;
  align-items: center;
`;

const AllSetting = styled.div`
  background: var(--lightgray);
  margin-bottom: 30px;
  min-width: 350px;
  height: 550px;
`;

const Category = styled(AllSetting)`
  width: 100%;
  height: 30px;
  margin: 10px 10px;
  .category_list {
    display: flex;
    list-style: none;
    flex-direction: row;
  }
`;
const Picture = styled(AllSetting)`
  width: 59%;
  margin-right: 10px;
`;

//-- 판매 정보 컴포넌트
const ItemInfo = styled(AllSetting)`
  width: 39%;
`;
const InfoTop = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid black;
  p,
  h1 {
    padding: 10px;
  }
`;
const InfoBottom = styled(InfoTop)`
  border: none;
  height: 80%;
`;
const InfoSet = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0;
  .info_title {
    font-size: var(--f-medium);
  }
  .infor_data {
    font-size: var(--f-small);
  }
`;

const StartDate = styled(InfoSet)``;
const EndDate = styled(InfoSet)``;
const Seat = styled(InfoSet)``;
const Tags = styled(InfoSet)`
  margin: 0 10px;
`;
const Btn = styled(InfoSet)`
  justify-content: space-between;
  flex-wrap: wrap;
  height: 50px;
  .top_btn {
    height: 100%;
    width: 49%;
  }
  .bottom_btn {
    margin: 20px 0;
    width: 100%;
    height: 100%;
  }
`;

///--------------------------------------

//--- 게시한 사진 리스트
const PicList = styled(AllSetting)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;

  .list_icon {
    display: flex;
    justify-content: center;
    font-size: var(--f-xlarge);
    width: 10%;
  }
`;

const NextPicture = styled.div`
  width: 20%;
  height: 95%;
  background: #ffffff;
  margin: 0 10px;
`;

///--------------------------------------

// -- 상품 설명 보드
const Description = styled(AllSetting)`
  width: 59%;
  height: 300px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-right: 10px;
  .item_title {
    width: 98%;
    border: 1px solid black;
    font-size: var(--f-medium);
  }
  .body {
    margin: 20px 0;
    width: 98%;
    height: 300px;

    border: 1px solid black;
  }
`;

const SubInfo = styled.div`
  display: flex;
  border: 1px solid black;
`;

const SellArea = styled.div`
  width: 200px;
  border-right: 1px solid black;
`;
const Views = styled.div`
  width: 100px;
  text-align: center;
`;

///--------------------------------------

//-- 판매자 정보 컴포넌트
const Seller = styled(AllSetting)`
  width: 39%;
  height: 300px;
  display: flex;
  justify-content: start;
  flex-direction: column;
`;

const SellerSetting = styled.div`
  width: 99%;
  border: 1px solid black;
  display: flex;
`;

const SellerTitle = styled(SellerSetting)`
  font-size: var(--f-medium);
`;
const SellerInfo = styled(SellerSetting)`
  margin: 20px 0;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .img {
    width: 100px;
  }

  .rating_info {
    display: flex;
  }
  p {
    margin: 5px 10px;
  }
  .area_auth {
    display: flex;
  }
`;
const InfoBox = styled.div`

`;

///--------------------------------------

//-- 판매자 거래후기
const Review = styled(AllSetting)`
  width: 100%;
  height: 200px;
  .review {
    display: flex;
    flex-direction: column;
    border: 1px solid;
  }
  .item_title {
    width: 100%;
    display: flex;
    border: 1px solid black;
  }
  .profile {
    display: flex;
    align-items: center;
    width: 200px;
    margin: 10px 0;
    .img {
      width: 50px;
      height: 50px;
      background: #ffffff;
      border-radius: 50%;
    }
    .user_name {
      margin-left: 10px;
    }
  }

  .rating {
    width: 200px;
    display: flex;
    margin: 10px 0;
    .review_date {
      margin-left: 10px;
    }
  }

  .rebiew_body {
    width: 250px;
    font-size: var(--f-small);
  }
`;

const ReviewInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default {
  Container,
  Content,
  Picture,
  ItemInfo,
  InfoTop,
  InfoBottom,
  InfoBox,
  PicList,
  NextPicture,
  Description,
  SubInfo,
  SellArea,
  Views,
  Seller,
  SellerTitle,
  SellerInfo,
  Category,
  StartDate,
  EndDate,
  Seat,
  Tags,
  Btn,
  Review,
  ReviewInfo,
};
