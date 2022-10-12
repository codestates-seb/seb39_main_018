import styled from 'styled-components';

const AllOption = styled.div`
  display: flex;
  width: 100%;
`;

const ItemsView_Container = styled(AllOption)`
  margin-left: 0;
  padding-left: 30px;
  margin-right: 0;
  padding-right: 30px;

  padding-top: 800px;
  padding-bottom: 300px;

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 500px;
  /* margin: 50px 0; */
  align-items: center;
  .Previe_title {
    /* width: 100%; */
    display: flex;
    align-items: center;
    /* margin: 10px 15px; */
    font-size: 20px;
  }
  @media only screen and (max-width: 960px) {
    padding-top: 500px;
    padding-bottom: 150px;
  }
`;

const PreviewList = styled(AllOption)`
  justify-content: center;
  /* width: 100%; */
  gap: 30px;
  padding-left: 20px;
  padding-right: 20px;
  @media only screen and (max-width: 960px) {
  }
`;

const ItemPreview = styled.div`
  width: 200px;
  height: 240px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background: #ffffff;
  ${ItemPreview}:hover {
    transform: scale(1.05);
    transition: all 0.3s;
  }

  @media only screen and (max-width: 960px) {
    width: 140px;
    height: 180px;
  }
`;
const PreviewImg = styled.div`
  width: 100%;
  height: 160px;
  margin-bottom: 15px;
  background: lightgray;
  img {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 960px) {
    width: 85%;
    height: 120px;
    margin-bottom: 9px;
  }
`;
const PreviewInfo = styled.div`
  margin-left: 5px;

  .title {
    margin-top: 25px;
    font-size: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  p {
    font-size: 13px;
    margin-top: 10px;
  }

  @media only screen and (max-width: 960px) {
    .title {
      font-size: 13px;
    }
    p {
      font-size: 9px;
      margin-top: 7px;
    }
  }
`;
const PreviewPrice = styled.div`
  display: flex;
`;

const AllviewBtn = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 10px;

  @media only screen and (max-width: 960px) {
    width: 120px;
    height: 40px;
  }
`;

export default {
  ItemsView_Container,
  PreviewList,
  ItemPreview,
  PreviewImg,
  PreviewInfo,
  PreviewPrice,
  AllviewBtn,
};
