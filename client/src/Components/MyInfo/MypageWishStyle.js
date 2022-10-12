import styled from 'styled-components';

const Content = styled.div`
  padding-top: 20px;
  margin: 0;
  float: left;
  display: flex;
  box-sizing: border-box;
`;

const Item = styled.div`
  position: relative;
  width: 25%;
  height: auto;
  padding-right: 20px;
`;

const ItemImg = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

const XButton = styled.a`
  display: inline-block;
  font-size: 14px;
  color: #fff;
  background-color: #dcdcdc;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 10;
  font-weight: normal;
  cursor: pointer;
  text-decoration: none;
`;

const RealItem = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 960px) {
    img {
      height: 80%;
    }
  }
`;

const ItemNamePrice = styled.div``;

const ItemName = styled.a`
  cursor: pointer;
  color: black;
  text-decoration: none;
  font-weight: 330;
  font-size: 12px;
  letter-spacing: -0.3px;
  line-height: 22px;

  @media only screen and (max-width: 960px) {
    font-size: 8px;
    line-height: 14px;
  }
`;

const ItemPrice = styled.span`
  color: rgba(0, 0, 0, 0.8);
  font-weight: 500;
  font-size: 13px;
  letter-spacing: -0.1px;

  @media only screen and (max-width: 960px) {
    font-size: 4px;
  }
`;

export default {
  Content,
  Item,
  ItemImg,
  XButton,
  RealItem,
  ItemNamePrice,
  ItemName,
  ItemPrice,
};
