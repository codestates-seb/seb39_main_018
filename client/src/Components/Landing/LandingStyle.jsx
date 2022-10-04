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
  background: #eaf0ee;
  width: 100%;
  height: 500px;
  position: relative;
  //background: #E1F3ED;
  //background: #8eada0;

  img {
    margin-top: 20px;
    width: 70%;
    height: 90%;
  }
`;
const BtnSection = styled.div`
  position: absolute;
  bottom: 90px;
  left: 350px;
`;

const ItemsView_Container = styled(AllOption)`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 500px;
  margin: 50px 0;
  align-items: center;
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
  border: 1px solid gray;
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
  height: 250px;
  margin: 150px 0;
  position: relative;
  background: #f0f2f1;
`;
const SubComponent = styled.div`
  position: absolute;
  top: -100px;
  left: 200px;
  box-shadow: 1px 1px 5px 1px;
  img {
    width: 400px;
    height: 400px;
  }
`;

const EndBanner_Container = styled(AllOption)`
  height: 400px;
  justify-content: center;
  align-items: center;
`;

const Featuree = styled.div`
  border-radius: 10px;
  width: 350px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  img {
    width: 120px;
    height: 80px;
  }
  p {
    margin: 50px;
  }
`;

export {
  LandingContainer,
  MainBanner_Container,
  BtnSection,
  ItemsView_Container,
  PreviewList,
  ItemPreview,
  PreviewImg,
  PreviewInfo,
  PreviewPrice,
  AllviewBtn,
  SubBanner_Container,
  SubComponent,
  EndBanner_Container,
  Featuree,
};
