import React, { useState } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import BtnComponent from '../common/ui/Button';
import Chat from './Chat';
import Detail from './PostDetail';
import Tag from '../common/ui/Tag';
import InputComponent from '../common/ui/Input';
import { BasicBtn } from '../common/ui/Button';

import {
  ItemSection,
  MainContainer,
  MainContent,
  FilterSection,
  FilterLeft,
  FilterRight,
  SellType,
  SearchFilter,
  SortByOption,
  TagFilter,
  FilterTopBox,
  FilterBottomBox,
  ViewMoreSection,
  ViewMoreBtn,
} from '../style/MainStyle';
import { InputUI } from '../common/ui/Input';
import { UpIcon, DownIcon } from './icons/Icons';
import ItemList from './Item';

const Main = () => {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
};

const MainPage = () => {
  return (
    <MainContainer>
      <MainContent>
        <Filter />
        <ItemList />
        <ViewMore />
      </MainContent>
    </MainContainer>
  );
};

const Filter = () => {
  const [selectOP, setSelectOP] = useState('인기순');
  return (
    <FilterSection>
      <FilterTopBox>
        <FilterLeft>
          <SellType>전체</SellType>
          <SellType>판매중</SellType>
          <SellType>판매완료</SellType>
        </FilterLeft>
        <FilterRight>
          <SearchFilter>
            <InputUI />
          </SearchFilter>
          <SortByOption>
            <p className="select_text">{selectOP}</p>
            <p className="select_icon">
              <DownIcon />
            </p>
          </SortByOption>
        </FilterRight>
      </FilterTopBox>
      <FilterBottomBox>
        <TagFilter>s</TagFilter>
      </FilterBottomBox>
    </FilterSection>
  );
};

const ViewMore = () => {
  return (
    <ViewMoreSection>
      <ViewMoreBtn>
        <BasicBtn name="더보기" background="white" color="balck" />
      </ViewMoreBtn>
    </ViewMoreSection>
  );
};

export default Main;
