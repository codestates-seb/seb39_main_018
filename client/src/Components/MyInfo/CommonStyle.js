import styled from 'styled-components';

const Containers = styled.div`
  margin: 0 auto;
  padding: 40px 40px 160px;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (max-width: 960px) {
    padding: 40px 0px 80px;
  }
`;

const CustomerContents = styled.div`
  overflow: hidden;
  min-height: 600px;
`;

const CustomerWithdraws = styled.div`
  margin: 0;
  padding: 0;
  margin-bottom: 40px;
`;

export { Containers, CustomerContents, CustomerWithdraws };
