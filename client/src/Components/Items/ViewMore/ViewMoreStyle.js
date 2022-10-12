import styled from 'styled-components';

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
