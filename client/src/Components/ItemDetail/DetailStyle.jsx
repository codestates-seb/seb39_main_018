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
  margin-bottom: 100px;
  min-width: 350px;
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
  width: 55%;
  margin-right: 50px;
  height: 530px;
  background: var(--lightgray);
  img {
    width: 100%;
    height: 100%;
  }
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
  width: ${(props) => props.width || ''};

  .top_btn {
    height: 100%;
    width: 49%;
  }
  .bottom_btn {
    margin: 10px 0;
    width: 100%;
    height: 100%;
  }
`;

///--------------------------------------

//--- 게시한 사진 리스트
const Detail_ImgList = styled(AllSetting)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 250px;
  padding-bottom: 100px;
  border-bottom: 1px solid var(--lightgray);
  .list_icon {
    display: flex;
    justify-content: center;
    font-size: var(--f-xlarge);
    width: 10%;
  }
`;

const Detail_NextImg = styled.div`
  width: 20%;
  height: 200px;
  background: var(--lightgray);
  margin: 0 10px;
`;

///--------------------------------------

// -- 상품 설명 보드
const Detail_Description = styled(AllSetting)`
  width: 580px;
  display: flex;
  min-height: 100px;
  flex-wrap: wrap;
  margin: 0px 20px 0 0;

  .item_title {
    width: 500px;
    height: 40px;
    border-bottom: 1px solid var(--lightgray);
    font-size: var(--f-medium);
  }
  .item_body {
    padding: 30px 0;
    width: 100%;
    border-bottom: 1px solid var(--lightgray);
  }
`;

const SubInfo = styled(AllSetting)`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 50px;
  margin: 100px 0;
  border-bottom: 1px solid var(--lightgray);
  .subinfo_title {
    margin: 0 0 10px 0;
    font-size: 18px;
  }
  .subinfo_body {
    width: 100%;
    font-size: 14px;
  }
  .border_line {
    width: 20px;
    height: 90%;
    border-left: 2px solid var(--lightgray);
  }
`;

const SellArea = styled.div`
  width: 180px;
`;
const Views = styled.div`
  width: 50px;
  text-align: center;
`;

///--------------------------------------

//-- 판매자 정보 컴포넌트
const Detail_Seller = styled(AllSetting)`
  width: 49%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0;
  border-left: 1px solid var(--lightgray);
`;

const SellerSetting = styled.div`
  width: 70%;
  display: flex;
`;

const SellerTitle = styled(SellerSetting)`
  font-size: var(--f-medium);
  margin-bottom: 30px;
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

const SellerBtn = styled(SellerSetting)`
  height: 50px;
  justify-content: space-between;
`;

///--------------------------------------

//-- 판매자 거래후기
const Detail_Review = styled(AllSetting)`
  width: 100%;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .border_line {
    margin-top: 20px;
    height: 120px;
    border-left: 1px solid var(--lightgray);
  }
`;
const ReviewSetting = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  p {
    margin-right: 10px;
  }
`;
const ReviewTitle = styled(ReviewSetting)`
  width: 100%;
  font-size: 20px;
`;
const ReviewInfo = styled.div`
  width: 330px;
`;
const ReviewProfile = styled(ReviewSetting)`
  .img {
    width: 50px;
    height: 50px;
    background: var(--lightgray);
    border-radius: 50%;
  }
`;
const ReviewRating = styled(ReviewSetting)``;
const ReviewBody = styled(ReviewSetting)`
  font-size: var(--f-small);
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
  SellerBtn,
  ReviewTitle,
  ReviewProfile,
  ReviewRating,
  ReviewBody,
  Detail_Review,
  ReviewInfo,
};
