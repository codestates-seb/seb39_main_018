import styled from 'styled-components';

const AllOption = styled.div`
  width: 100%;
`;

const LandingContainer = styled(AllOption)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MainBanner_Container = styled(AllOption)`
  background: gray;
  height: 350px;
`;

const ItemsView_Container = styled(AllOption)`
  border: 1px solid;
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 450px;
  .Previe_title {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 10px 15px;
    font-size: 20px;
  }
`;

const PreviewList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const ItemPreview = styled.div`
  width: 240px;
  height: 250px;
  border: 1px solid;
`;
const PreviewImg = styled.div`
  width: 100%;
  height: 180px;
  margin-bottom: 15px;
  background: lightgray;
`;
const PreviewInfo = styled.div`
  .title {
    font-size: var(--f-medium);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  p {
    margin-top: 10px;
  }
`;
const PreviewPrice = styled.div`
  display: flex;
`;

const AllviewBtn = styled.div`
  width: 150px;
  height: 50px;
`;

const SubBanner_Container = styled(AllOption)`
  height: 350px;
  background: pink;
`;

const EndBanner_Container = styled(AllOption)`
  height: 250px;
  border: 1px solid;
`;
export {
  LandingContainer,
  MainBanner_Container,
  ItemsView_Container,
  PreviewList,
  ItemPreview,
  PreviewImg,
  PreviewInfo,
  PreviewPrice,
  AllviewBtn,
  SubBanner_Container,
  EndBanner_Container,
};
