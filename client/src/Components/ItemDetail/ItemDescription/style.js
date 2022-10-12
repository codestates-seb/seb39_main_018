import styled from 'styled-components';

const AllSetting = styled.div`
  margin-bottom: 100px;
  min-width: 350px;
`;
const Detail_Description = styled(AllSetting)`
  width: 550px;
  display: flex;
  height: 300px;
  flex-wrap: wrap;
  margin: 0px 20px 0 0;
  .item_title {
    width: 500px;
    height: 40px;
    border-bottom: 1px solid var(--lightgray);
    font-size: var(--f-medium);
  }
  .item_body {
    padding: 20px;
    height: 250px;
    border: 1px solid var(--lightgray);
  }
`;

const SubInfo = styled(AllSetting)`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 50px;
  margin: 100px 0;
  border-bottom: 1px solid var(--lightgray);

  .subinfo_title {
    margin: 0 0 10px 0;
    font-size: 18px;
  }
  .subinfo_body {
    width: 100%;
    font-size: 14px;
  }
  .border_line {
    width: 20px;
    height: 90%;
    border-left: 2px solid var(--lightgray);
  }
`;

const SellArea = styled.div`
  width: 180px;
`;
const Views = styled.div`
  width: 50px;
  text-align: center;
`;

///--------------------------------------

export { Detail_Description, SubInfo, SellArea, Views };
