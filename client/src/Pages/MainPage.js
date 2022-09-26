import React, { useState } from 'react';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import { BasicBtn } from '../Components/Common/Button/Buttons';
import { UpIcon, DownIcon } from '../Components/Common/Icons/Icons';
import ItemList from '../Components/ItemList/Item';
import InputUI from '../Components/Common/Input/Input';
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
} from '../Components/ItemList/MainStyle';



const MainPage = () => {
  return (
    <>
      <Header />
      <ItemsContainer />
      <Footer />
    </>
  );
};

const ItemsContainer = () => {
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

export default MainPage;
