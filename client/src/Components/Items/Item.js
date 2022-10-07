import React, { useState } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';
import { calculateDate } from '../../util/calculateDate';
import { LodingMotion } from '../Common/Loding/LodingMotion';

const ItemList = ({ itemsData, pageMove, isLoading }) => {
  return (
    <ItemContainer>
      <ItemsCount itemsData={itemsData} />
      <ItemListBox>
        {itemsData &&
          itemsData.map((dataList) => {
            const dateResult = calculateDate(dataList.createdDate);
            console.log(dataList);
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

const ItemsCount = ({ itemsData }) => {
  return (
    <ViewsBox>
      <div>{itemsData.length} views</div>
    </ViewsBox>
  );
};

export { ItemComponent };
