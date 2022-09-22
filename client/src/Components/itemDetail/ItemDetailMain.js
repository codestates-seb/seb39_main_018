import React from 'react';
import Item from './ItemDetailStyle';
import ItemCategory from './component/ItemCategory';
import ItemImage from './component/ItemImage';
import ItemInfo from './component/ItemInfo';
import ItemDescription from './component/ItemDescription';
import ItemSeller from './component/ItemSeller';
import SellerReviews from './component/SellerReview';

const ItemDetail = () => {
  return (
    <Item.Container>
      <Item.Content>
        <ItemCategory />
        <ItemImage />
        <ItemInfo />
        <ItemDescription />
        <ItemSeller />
        <SellerReviews />
      </Item.Content>
    </Item.Container>
  );
};

export default ItemDetail;
