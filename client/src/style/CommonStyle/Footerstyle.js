import styled from 'styled-components';
import GlobalStyle from '../../globalStyle.jsx';

const FooterContainer = styled.div`
  border-top: 1px solid black;
  box-shadow: inset 3px 5px 1px black;
  width: 100%;
  height: 250px;
`;

const AllSetting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterTopBox = styled(AllSetting)`
  border-bottom: 1px solid var(--lightgray);
`;

const FooterBottomBox = styled(AllSetting)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const FooterTitle = styled(AllSetting)`
  justify-content: space-evenly;
  margin: 20px 0;
  font-weight: bold;
  font-size: var(--f-medium);
`;

const FooterTop = styled(AllSetting)`
  margin-left: 275px;
  margin-right: 250px;
  margin-bottom: 20px;
  justify-content: space-around;
  flex-direction: column;
  p {
    cursor: pointer;
    margin: 0px;
    padding: 5px;
  }
  .intro {
    padding: 3px;
  }
`;

const FooterBottom = styled.div`
  font-size: var(--f-xsmall);
  margin: 0 10px;
  .service {
    font-size: var(--f-xsmall);
    width: 455px;
  }
`;

export { FooterContainer, FooterTopBox, FooterTop, FooterBottomBox, FooterBottom, FooterTitle };
