import styled from 'styled-components';

const Detail_Container = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
`;

const Detail_Section = styled(Detail_Container)`
  width: 1200px;

  flex-wrap: wrap;
`;

const AllSetting = styled.div`
  background: var(--lightgray);
  margin-bottom: 30px;
  min-width: 350px;
  height: 550px;
`;

const Detail_Category = styled(AllSetting)`
  width: 100%;
  height: 30px;
  margin: 10px 10px;
  .category_list {
    display: flex;
    list-style: none;
    flex-direction: row;
  }
`;
const Detail_Img = styled(AllSetting)`
  width: 59%;
  margin-right: 10px;
`;

//-- 판매 정보 컴포넌트
const Detail_ItemInfo = styled(AllSetting)`
  width: 39%;
`;
const InfoTop = styled.div`
  width: 100%;
  height: 20%;

  p,
  h1 {
    padding: 10px;
  }
  p {
    font-size: var(--f-medium);
    padding-right: 0;
  }

  .item_price {
    display: flex;
    align-items: center;
  }
`;
const InfoBottom = styled(InfoTop)`
  border: none;
  height: 80%;
`;
const InfoSetting = styled.div`
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

const StartDate = styled(InfoSetting)``;
const EndDate = styled(InfoSetting)``;
const Seat = styled(InfoSetting)``;
const Tags = styled(InfoSetting)`
  margin: 0 10px;
`;
const Btn = styled(InfoSetting)`
  justify-content: space-between;
  flex-wrap: wrap;
  height: 50px;
  
  .top_btn {
    height: 100%;
    width: 49%;
    border: 1px solid;
  }
  .bottom_btn {
    margin: 10px 0;
    width: 100%;
    height: 100%;
    border: 1px solid;
  }
`;

///--------------------------------------

//--- 게시한 사진 리스트
const Detail_ImgList = styled(AllSetting)`
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

const Detail_NextImg = styled.div`
  width: 20%;
  height: 95%;
  background: #ffffff;
  margin: 0 10px;
`;

///--------------------------------------

// -- 상품 설명 보드
const Detail_Description = styled(AllSetting)`
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
const Detail_Seller = styled(AllSetting)`
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
const SellInfoBox = styled.div``;

///--------------------------------------

//-- 판매자 거래후기
const Detail_Review = styled(AllSetting)`
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

export {
  Detail_Container,
  Detail_Section,
  Detail_Img,
  Detail_ItemInfo,
  InfoTop,
  InfoBottom,
  Detail_ImgList,
  Detail_NextImg,
  Detail_Description,
  SubInfo,
  SellArea,
  Views,
  Detail_Seller,
  SellerTitle,
  SellerInfo,
  SellInfoBox,
  Detail_Category,
  StartDate,
  EndDate,
  Seat,
  Tags,
  Btn,
  Detail_Review,
  ReviewInfo,
};
