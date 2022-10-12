import styled from 'styled-components';

const Detail_Container = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
`;

const Detail_Section = styled(Detail_Container)`
  width: 1000px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const AllSetting = styled.div`
  margin-bottom: 100px;
  min-width: 350px;
`;

const Detail_Img = styled(AllSetting)`
  width: 550px;
  height: 480px;
  background: var(--lightgray);
  img {
    width: 100%;
    height: 100%;
  }
`;






export {
  Detail_Container,
  Detail_Section,
  
};
