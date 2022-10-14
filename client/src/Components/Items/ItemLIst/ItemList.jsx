import React, { useState } from 'react';
import { ItemContainer, ViewsBox, ItemListBox } from './ListStyle';
import { calculateDate } from '../../../util/calculateDate';
import { LodingMotion } from '../../Common/Loding/LodingMotion';
import ItemComponent from '../ItemComponent/ItemComponent';

const ItemList = ({ itemsData, pageMove, isLoading }) => {
  return (
    <ItemContainer>
      <ViewsBox>
        <div>{itemsData.length} views</div>
      </ViewsBox>
      <ItemListBox>
        {itemsData &&
          itemsData.map((dataList) => {
            const dateResult = calculateDate(dataList.createdDate);
            return (
              <ItemComponent
                pageMove={pageMove}
                photo={dataList.photo}
                key={dataList.id}
                id={dataList.id}
                title={dataList.title}
                price={dataList.price}
                region={dataList.region}
                createdDate={dateResult}
              />
            );
          })}
      </ItemListBox>
      {isLoading ? <LodingMotion /> : null}
    </ItemContainer>
  );
};

export default ItemList;
