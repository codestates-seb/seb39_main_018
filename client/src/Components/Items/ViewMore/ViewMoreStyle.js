import styled from 'styled-components';
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

const ViewMoreSection = styled(AllOption)`
  height: 50px;
  justify-content: center;
  margin: 20px;
`;

const ViewMoreBtn = styled.div`
  width: 250px;
  height: 100%;
  box-shadow: 1px 1px 3px;
  border: 1px solid var(--lightgray);
  border-radius: 10px;
  @media screen and (max-width: 720px) {
    font-size: 15px;
  }
`;

export { ViewMoreSection, ViewMoreBtn };
