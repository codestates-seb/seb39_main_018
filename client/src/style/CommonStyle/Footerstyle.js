import styled from 'styled-components';
import GlobalStyle from '../../globalStyle.jsx';

const FooterContainer = styled.div`
  border-top: 1px solid var(--lightgray);
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

const FooterContent = styled(AllSetting)`
  margin: 20px 150px;
  flex-direction: column;
  p {
    font-size: var(--f-small);
    cursor: pointer;
    padding: 5px;
  }
  h3 {
    margin: 20px;
  }
`;

const FooterBottom = styled.div`
  font-size: var(--f-xsmall);
  margin: 10px 10px;
  .service {
    font-size: var(--f-xsmall);
    width: 455px;
  }
`;

export { FooterContainer, FooterTopBox, FooterContent, FooterBottomBox, FooterBottom };
