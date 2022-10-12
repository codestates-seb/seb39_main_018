import styled from 'styled-components';

const AllSetting = styled.div`
  margin-bottom: 100px;
  min-width: 350px;
`;

const Detail_Category = styled(AllSetting)`
  width: 100%;
  height: 30px;
  margin: 10px 10px;
  .category_list {
    display: flex;
    list-style: none;
    flex-direction: row;
  }
`;

export { Detail_Category };
