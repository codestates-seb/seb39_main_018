import React from 'react';
import {
  ItemContainer,
  ItemBox,
  ViewsBox,
  ItemListBox,
  ItemImg,
  ItemTitle,
  ItemPrice,
  SellInfo,
} from './ItemStyle';
import { itemGet } from '../../util/detailLogic';
import { useParams } from 'react-router-dom';

const ItemList = () => {
  // const Itemdata = itemGet();
  // Itemdata.map((itemListdata, key) => {
  //   itemListdata.id;
  //   itemListdata.img;
  //   itemListdata.title;
  //   itemListdata.price;
  //   itemListdata.region;
  //   itemListdata.createDate;
  // });

  return (
    <ItemContainer>
      <ItemsCount />
      <ItemListBox>
        <ItemComponent />
        <ItemComponent />
        <ItemComponent />
        <ItemComponent />
      </ItemListBox>
      <ItemListBox>
        <ItemComponent />
        <ItemComponent />
        <ItemComponent />
        <ItemComponent />
      </ItemListBox>
    </ItemContainer>
  );
};

export default ItemList;

const ItemComponent = () => {
  return (
    <ItemBox onClick={() => useParams()}>
      <ItemImg></ItemImg>
      <ItemTitle>용산에서 부산행 KTX 표 팝니다.</ItemTitle>
      <ItemPrice>
        <p className="price_data">25,000</p>
        <p>원</p>
      </ItemPrice>
      <SellInfo>
        <p className="sell_area">서울시 강남구 논현동</p>
        <p className="posted_date">1일전</p>
      </SellInfo>
    </ItemBox>
  );
};

const ItemsCount = () => {
  return (
    <ViewsBox>
      <div>12 views</div>
    </ViewsBox>
  );
};
