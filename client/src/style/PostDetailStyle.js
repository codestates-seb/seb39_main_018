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
  width: 80%;
  border: 1px solid black;
  padding: 10px;
  flex-wrap: wrap;
  align-items: center;
`;

const AllSetting = styled.div`
  background: var(--lightgray);
  margin-right: 10px;
  margin-bottom: 30px;
  width: 600px;
  min-width: 350px;
  height: 500px;
`;

const Category = styled(AllSetting)`
  position: fixed;
  height: 30px;
  margin: 10px 10px;
  .category_list {
    display: flex;
    list-style: none;
    flex-direction: row;
  }
`;
const Picture = styled(AllSetting)`
  width: 49%;
`;

//-- 판매 정보 컴포넌트
const Info = styled(AllSetting)`
  width: 49%;
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
  .title {
    font-size: var(--f-medium);
  }
  .data {
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
  height: 35px;
  .top {
    margin: 8px;
    width: 100%;
    height: 100%;
    border: 1px solid blue;
  }
  .bottom1,
  .bottom2 {
    height: 100%;
    width: 45%;
    margin: 8px;
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
const Board = styled(PicList)`
  height: 300px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  .title {
    width: 98%;
    margin: 10px;
    border: 1px solid black;
    font-size: var(--f-medium);
  }
  .body {
    width: 98%;
    margin: 10px;
    border: 1px solid black;
  }
`;

///--------------------------------------

const Seller = styled(PicList)``;

export default {
  Container,
  Content,
  Picture,
  Info,
  InfoTop,
  InfoBottom,
  PicList,
  NextPicture,
  Board,
  Seller,
  Category,
  StartDate,
  EndDate,
  Seat,
  Tags,
  Btn,
};
