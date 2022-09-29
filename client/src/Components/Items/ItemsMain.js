import React, { useEffect, useState } from 'react';
import { MainContainer, MainContent } from './MainStyle';
import ItemList from './Item';
import Filter from './ItemFilter';
import ViewMore from './ViewMore';
import { itemGet } from '../../util/RequestLogic.ts';

const ItemsMain = () => {
  const [viewCount, setViewCount] = useState(8);
  const itemsload = itemGet().slice(0, viewCount);
  const [itemsData, setItemsdata] = useState(itemsload);

  console.log(itemsData);

  return (
    <MainContainer>
      <Filter />
      <MainContent>
        <ItemList itemsData={itemsload} />
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
