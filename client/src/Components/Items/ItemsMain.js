import React, { useEffect, useState } from 'react';
import { MainContainer, MainContent } from './MainStyle';
import ItemList from './Item';
import Filter from './ItemFilter';
import ViewMore from './ViewMore';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, getItems } from '../../util/requestItem';
import Sellbtn from '../Common/Button/Sellbtn';
import { sellButton } from '../Imgs/mainImgs/imgExport';
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
  const dataloads = getItems(sort + status + keyword);
  const itemsData = dataloads[0].slice(0, viewCount);
  const isLoading = dataloads[1];
  console.log(api);



  return (
    <MainContainer>
      <Sellbtn />
      <Filter />
      <MainContent>
        <ItemList itemsData={itemsData} pageMove={pageMove} />
        <ViewMore dispatch={dispatch} />
      </MainContent>
    </MainContainer>
  );
};
export default ItemsMain;
