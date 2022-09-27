import styled from 'styled-components';

const ItemContainer = styled.div`
  width: 100%;
`;

const ItemListBox = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ItemBox = styled.div`
  width: 280px;
  background: #ffffff;
  border-radius: var(--b-xsmall);
  margin-bottom: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

const ItemInfoOption = styled.div`
  margin-bottom: 10px;
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
  height: 30px;
`;

export { ItemContainer, ItemBox, ViewsBox, ItemListBox, ItemImg, ItemTitle, ItemPrice, SellInfo };
