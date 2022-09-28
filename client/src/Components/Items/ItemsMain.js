import React from 'react';
import { MainContainer, MainContent } from './MainStyle';
import ItemList from './Item';
import Filter from './ItemFilter';
import ViewMore from './ViewMore';

const ItemsMain = () => {
  return (
    <MainContainer>
      <Filter />
      <MainContent>
        <ItemList />
        <ViewMore />
      </MainContent>
    </MainContainer>
  );
};

export default ItemsMain;
