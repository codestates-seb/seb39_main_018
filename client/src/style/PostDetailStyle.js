import styled from 'styled-components';

const PostContainer = styled.div`
  width: 100%;
  min-height: 500px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;

const PostContent = styled(PostContainer)`
  width: 80%;
  border: 1px solid black;
  padding: 10px;
  flex-wrap: wrap;
  align-items: center;
  .product_info {
    width: 100%;
    padding: 30px;
  }
`;

const AllSetting = styled.div`
  background: var(--lightgray);
  margin-right: 10px;
  margin-bottom: 10px;
  width: 600px;
  min-width: 350px;
  height: 500px;
`;

const Category = styled(AllSetting)`
  width: 100%;
  height: 30px;
  margin: 10px 10px;
  .category_list {
    display: flex;
    list-style: none;
    flex-direction: row;
  }
`;
const PicCntr = styled(AllSetting)`
  width: 49%;
`;

const InfoCntr = styled(AllSetting)`
  width: 49%;
`;
const InfoTop = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid black;
  p,h2 {
    padding: 10px;
  }
`;
const InfoBottom = styled(InfoTop)`
  border: none;
  height: 80%;
`;

const PicListCntr = styled(AllSetting)`
  width: 100%;
  height: 200px;
`;

const BoardCntr = styled(PicListCntr)`
  height: 300px;
`;
const SellerCntr = styled(PicListCntr)``;

export {
  PostContainer,
  PostContent,
  PicCntr,
  InfoTop,
  InfoBottom,
  InfoCntr,
  PicListCntr,
  BoardCntr,
  SellerCntr,
  Category,
};
