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
import { itemGet, dateCompute } from '../../util/detailLogic';
import { useNavigate, useParams } from 'react-router-dom';

const ItemList = () => {
  const itemsdata = itemGet();
  console.log(itemsdata);
  return (
    <ItemContainer>
      <ItemsCount />
      <ItemListBox>
        {itemsdata &&
          itemsdata.map((dataList) => {
            let dateResult = dateCompute(dataList.created_date);
            return (
              <ItemComponent
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
    </ItemContainer>
  );
};

const ItemComponent = ({ title, price, region, createdDate, id }) => {
  const navigate = useNavigate();
  return (
    <ItemBox onClick={() => navigate(`/detail/${id}`)}>
      <ItemImg></ItemImg>
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

const ItemsCount = () => {
  return (
    <ViewsBox>
      <div>12 views</div>
    </ViewsBox>
  );
};


export default ItemList;