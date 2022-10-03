import styled from 'styled-components';

const AllOption = styled.div`
  display: flex;
  width: 100%;
`;

const LandingContainer = styled(AllOption)`
  flex-wrap: wrap;
  justify-content: center;
`;

const MainBanner_Container = styled(AllOption)`
  /* background: #c6d8d9; */
  background: #e0eaf0;
  //background: #E1F3ED;
  //background: #8eada0;

  img {
    width: 100%;
  }
`;

const ItemsView_Container = styled(AllOption)`
  width: 65%;
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

const PreviewList = styled(AllOption)`
  justify-content: space-around;
`;

const ItemPreview = styled.div`
  width: 200px;
  height: 240px;
  border:1px solid gray;
  border-radius: 5px;
  ${ItemPreview}:hover {
    transform: scale(1.4);
    transition: all 0.5s;
  }
`;
const PreviewImg = styled.div`
  width: 100%;
  height: 160px;
  margin-bottom: 15px;
  background: lightgray;
`;
const PreviewInfo = styled.div`
  .title {
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  p {
    font-size: 15px;
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
  height: 350px;
  border: 1px solid;
  justify-content: center;
  align-items: center;
`;

const Featuree = styled.div`
  box-shadow: 2px 3px 5px;
  border-radius: 10px;
  margin: 0 80px;
  width: 350px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
  }

  p {
    margin: 50px;
  }
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
  Featuree,
};
