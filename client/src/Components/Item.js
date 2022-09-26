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

const ItemList = () => {
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
    <ItemBox>
        <ItemImg></ItemImg>
        <ItemTitle>용산에서 부산행 KTX 표 팝니다.</ItemTitle>
        <ItemPrice>
            <p className='price_data'>25,000</p>
            <p>원</p>
            </ItemPrice>
        <SellInfo>
            <p className='sell_area'>서울시 강남구 논현동</p>
            <p className='posted_date'>1일전</p>
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
