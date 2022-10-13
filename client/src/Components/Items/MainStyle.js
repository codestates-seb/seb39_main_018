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



//--------------------------------------

export { MainContainer, MainContent };
