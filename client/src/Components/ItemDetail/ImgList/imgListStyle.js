import styled from 'styled-components';

//--- 게시한 사진 리스트
const AllSetting = styled.div`
  margin-bottom: 100px;
  min-width: 350px;
`;

const Detail_ImgList = styled(AllSetting)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 250px;
  padding-bottom: 100px;
  position: relative;
  border-bottom: 1px solid var(--lightgray);
  .list_icon {
    display: flex;
    justify-content: center;
    font-size: var(--f-xlarge);
    width: 10%;
  }
`;

const Detail_NextImg = styled.div`
  width: 20%;
  height: 200px;
  background: var(--lightgray);
  margin: 0 10px;
  transition: 0.3s ease-in-out;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.3;
  }
`;

export { Detail_ImgList, Detail_NextImg };
