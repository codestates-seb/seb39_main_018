import styled from 'styled-components';
import GlobalStyle from '../../globalStyle.jsx';

const FooterContainer = styled.div`
  border: 1px solid var(--gray);
  width: 100%;
  height: 300px;
`;

const FooterTopBox = styled.div`
  display: flex;
  margin: 0 100px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--lightgray);
`;

const FooterBottomBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterTop = styled.div`
  margin: 0px 100px;
  text-align: center;
  h3 {
    margin: 30px 0;
  }
  p {
    padding: 0px;
    cursor: pointer;
  }
  .intro {
    padding: 7px;
  }
`;

const FooterBottom = styled.div`
  margin: 20px;
  font-size: var(--xsmall);
  .service {
    width: 455px;
  }
`;

export { FooterContainer, FooterTopBox, FooterTop, FooterBottomBox, FooterBottom };
