import React, { useEffect, useState } from 'react';
import { MainContainer, MainContent } from './MainStyle';
import ItemList from './Item';
import Filter from './ItemFilter';
import ViewMore from './ViewMore';
import { itemGet } from '../../util/RequestLogic.ts';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { viewsCount } from '../../redux/itemslice';

const ItemsMain = () => {
  const navigate = useNavigate();
  const pageMove = (url) => {
    navigate(url);
    window.scrollTo(0, 0);
  };
  const dispatch = useDispatch();
  const viewCount = useSelector((state) => state.items.value);
  const itemsload = itemGet().slice(0, viewCount);
  const [itemsData, setItemsdata] = useState(itemsload);

  console.log(itemsData);

  return (
    <MainContainer>
      <Filter />
      <MainContent>
        <ItemList itemsData={itemsload} pageMove={pageMove} />
        <ViewMore dispatch={dispatch} />
      </MainContent>
    </MainContainer>
  );
};
export default ItemsMain;
