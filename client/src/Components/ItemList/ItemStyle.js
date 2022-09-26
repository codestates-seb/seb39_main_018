import styled from 'styled-components';

const ItemContainer = styled.div`
  width: 100%;
`;

const ItemListBox = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  border: 1px solid;
  margin: 10px 0;
  justify-content: space-between;
`;

const ItemBox = styled.div`
  width: 290px;
  background: #ffffff;
  border: 1px solid;
  border-radius: var(--b-xsmall);
`;

const ItemInfoOption = styled.div`
  margin-bottom: 15px;
  display: flex;
`;
const ItemImg = styled(ItemInfoOption)`
  width: 100%;
  height: 240px;
  background: var(--lightgray);
`;

const ItemTitle = styled(ItemInfoOption)`
  font-size: var(--f-medium);
`;
const ItemPrice = styled(ItemInfoOption)`
  font-size: var(--f-small);
`;
const SellInfo = styled(ItemPrice)`
  .sell_area {
    border-right: 1px solid var(--lightgray);
    padding-right: 10px;
  }
  .posted_date {
    padding-left: 10px;
  }
`;

const ViewsBox = styled.div`
  width: 100%;
  height: 20px;
  border: 1px solid;
`;

export { ItemContainer, ItemBox, ViewsBox, ItemListBox, ItemImg, ItemTitle, ItemPrice, SellInfo };
