import React, { useEffect, useState } from 'react';
import { MainContainer, MainContent } from './MainStyle';
import ItemList from './Item';
import Filter from './ItemFilter';
import ViewMore from './ViewMore';
import { itemGet } from '../../util/RequestLogic.ts';
import { useNavigate } from 'react-router-dom';

const ItemsMain = () => {
  const navigate = useNavigate();
  const pageMove = (url) => {
    navigate(url);
    window.scrollTo(0, 0);
  };

  const [viewCount, setViewCount] = useState(8);
  const itemsload = itemGet().slice(0, viewCount);
  const [itemsData, setItemsdata] = useState(itemsload);


  return (
    <MainContainer>
      <Filter />
      <MainContent>
        <ItemList itemsData={itemsload} pageMove={pageMove}/>
        <ViewMore
          viewCount={viewCount}
          setViewCount={setViewCount}
          itemsData={itemsData}
          setItemsdata={setItemsdata}
        />
      </MainContent>
    </MainContainer>
  );
};

export default ItemsMain;
