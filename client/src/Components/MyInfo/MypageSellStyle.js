import styled from 'styled-components';

const Content = styled.div`
  margin: 0;
  padding: 0;
  float: left;
  box-sizing: border-box;
`;

const ItemList = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0 30px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
`;

const Item = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  img {
    display: flex;
    width: 100px;
    height: 100px;
    border-radius: 4px;
  }
`;

const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
`;

const ItemName = styled.a`
  cursor: pointer;
  font-size: 14px;
  height: 25px;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: -0.3px;
`;

const ItemSeller = styled.p`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.1px;
  color: #aaa;
`;

const ItemPrice = styled.span`
  margin-top: auto;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
`;

export default { Content, ItemList, Item, ItemDetail, ItemName, ItemSeller, ItemPrice };
