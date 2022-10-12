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
  width: 550px;
  padding: 30px 0 30px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
  #checkbox {
    margin-right: 30px;
  }
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

  @media only screen and (max-width: 960px) {
    width: 80%;
  }
`;

const ItemDetail = styled.div`
  display: inline-block;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 300px;
  }
  @media only screen and (max-width: 960px) {
    margin-left: 15px;
  }
`;

const ItemName = styled.a`
  cursor: pointer;
  font-size: 14px;
  height: 25px;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: -0.3px;

  @media only screen and (max-width: 960px) {
    font-size: 10px;
  }
`;

const ItemSeller = styled.p`
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.1px;
  margin-top: 5px;
  color: #aaa;
  @media only screen and (max-width: 960px) {
    font-size: 7px;
    line-height: 14px;
  }
`;

const ItemPrice = styled.span`
  margin-top: auto;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  @media only screen and (max-width: 960px) {
    font-size: 8px;
  }
`;
const BtnSection = styled.div`
  margin-top: 50px;
  width: 500px;
  display: flex;
`;

const AcitonBtn = styled.div`
  display: ${(prop) => prop.display || 'block'};
  width: 150px;
  height: 50px;
  margin: 0 30px;
`;

export default {
  Content,
  ItemList,
  Item,
  ItemDetail,
  ItemName,
  ItemSeller,
  ItemPrice,
  BtnSection,
  AcitonBtn,
};
