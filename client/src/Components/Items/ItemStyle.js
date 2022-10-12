import styled from 'styled-components';

const ItemContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 720px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
  }
  @media screen and (max-width: 320px) {
    display: flex;
  }
`;

const ItemListBox = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 720px) {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0;
  }
`;

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

const ViewsBox = styled.div`
  width: 100%;
  height: 20px;
  padding-bottom: 20px;
  @media screen and (max-width: 1230px) {
    margin: 0 50px;
    width: 100%;
    font-size: 13px;
  }
  @media screen and (max-width: 600px) {
    margin: 0 0px;
    width: 70%;
    font-size: 13px;
  }

`;

export { ItemContainer, ItemBox, ViewsBox, ItemListBox, ItemImg, ItemTitle, ItemPrice, SellInfo };
