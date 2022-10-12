import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #ffffff;
  font-family: 'GmarketSansMedium';
`;

const MainContent = styled(MainContainer)`
  width: 1200px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const AllOption = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: 100%;

  @media screen and (max-width: 720px) {
    p {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 620px) {
    p {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 450px) {
    p {
      font-size: 8px;
    }
  }
`;

//--------------------------------------

export { MainContainer, MainContent };
