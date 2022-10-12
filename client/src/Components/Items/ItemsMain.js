import React, { useEffect, useState } from 'react';
import { MainContainer, MainContent } from './MainStyle';
import ItemList from './ItemLIst/ItemList';
import Filter from './ItemFilter/ItemFilter';
import ViewMore from './ViewMore/ViewMore';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, getItems } from '../../util/requestItem';

const ItemsMain = () => {
  const navigate = useNavigate();
  // useEffect( ( ) => {
  //   getItems(api+status+keyword);
  // },[])
  const pageMove = (url) => {
    navigate(url);
    window.scrollTo(0, 0);
  };
  const dispatch = useDispatch();
  const viewCount = useSelector((state) => state.items.value);
  const { sort, status, keyword } = useSelector((state) => state.items.apiInfo);
  const api = sort + status + keyword;
  const dataloads = getItems(api);
  const itemsData = dataloads[0].slice(0, viewCount);
  const isLoading = dataloads[1];
  return (
    <MainContainer>
      <Filter />
      <MainContent>
        <ItemList itemsData={itemsData} pageMove={pageMove} />
        <ViewMore dispatch={dispatch} />
      </MainContent>
    </MainContainer>
  );
};
export default ItemsMain;
