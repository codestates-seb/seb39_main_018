import React from 'react';
import { ItemBox, ItemImg, ItemTitle, ItemPrice, SellInfo } from './ItemStyle';

const ItemComponent = ({ title, price, region, createdDate, id, pageMove, photo }) => {
  return (
    <ItemBox onClick={() => pageMove(`/main/detail/${id}`)}>
      <ItemImg>
        <img src={photo} />
      </ItemImg>
      <ItemTitle>{title}</ItemTitle>
      <ItemPrice>
        <p className="price_data">{price}</p>
        <p>원</p>
      </ItemPrice>
      <SellInfo>
        <p className="sell_area">{region}</p>
        <p className="posted_date">{createdDate}</p>
      </SellInfo>
    </ItemBox>
  );
};

export default ItemComponent;
