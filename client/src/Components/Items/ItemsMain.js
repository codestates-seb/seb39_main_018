import React, { useEffect, useState } from 'react';
import { MainContainer, MainContent } from './MainStyle';
import ItemList from './Item';
import Filter from './ItemFilter';
import ViewMore from './ViewMore';
import { itemGet } from '../../util/requestItem.ts';
import { useNavigate } from 'react-router-dom';
import { LodingMotion } from '../Common/Loding/LodingMotion';
import { getItems } from '../../util/requestItem.ts';
import { useDispatch, useSelector } from 'react-redux';

const ItemsMain = () => {
  const navigate = useNavigate();
  const select = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const itemsloads = getItems();
  const isLoading = itemsloads[1];
  const itemsData = itemsloads[0].slice(0, select);
  const pageMove = (url) => {
    navigate(url);
  };

  return (
    <MainContainer>
      <Filter />
      <MainContent>
<<<<<<< HEAD
        <ItemList itemsData={itemsload} pageMove={pageMove} />
        <ViewMore
          viewCount={viewCount}
          setViewCount={setViewCount}
          itemsData={itemsData}
          setItemsdata={setItemsdata}
        />
=======
        <ItemList itemsData={itemsData} pageMove={pageMove} isLoading={isLoading} />
        <ViewMore dispatch={dispatch} />
>>>>>>> eca29fd4473df6672213d8761a907cbfc811db02
      </MainContent>
    </MainContainer>
  );
};

export default ItemsMain;
