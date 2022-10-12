import styled from 'styled-components';



const ItemBox = styled.div`
  width: 278px;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-right: 20px;
  box-shadow: 1px 1px 1px 1px lightgray;
  cursor: pointer;
  p {
    font-family: 'Pretendard-Regular';
  }

  @media screen and (max-width: 620px) {
    width: 45%;
    height: 300px;
    margin: 10px 10px;
  }
  @media screen and (max-width: 600px) {
    width: 35%;
    height: 300px;
    margin: 10px 10px;
  }
  @media screen and (max-width: 450px) {
    width: 35%;
    height: 250px;
  }
`;

const ItemInfoOption = styled.div`
  margin-bottom: 10px;
  display: flex;
`;
const ItemImg = styled(ItemInfoOption)`
  width: 100%;
  height: 240px;
  background: var(--lightgray);
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  @media screen and (max-width: 620px) {
    height: 200px;
  }
  @media screen and (max-width: 450px) {
    height: 160px;
  }
`;

const Itemtext = styled.div`
  margin: 10px;
  display: flex;
`;

const ItemTitle = styled(Itemtext)`
  font-size: var(--f-medium);
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'GmarketSansMedium';
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
const ItemPrice = styled(Itemtext)`
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
  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`;



export { ItemBox,  ItemImg, ItemTitle, ItemPrice, SellInfo };
