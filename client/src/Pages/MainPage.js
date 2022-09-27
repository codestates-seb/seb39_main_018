import React, { useState } from 'react';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import { BasicBtn } from '../Components/Common/Button/Buttons';
import { UpIcon, DownIcon } from '../Components/Common/Icons/Icons';
import ItemList from '../Components/ItemList/Item';
import InputUI from '../Components/Common/Input/Input';
import {
  MainContainer,
  MainContent,
  FilterSection,
  FilterBox,
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
      <Filter />
      <MainContent>
        <ItemList />
        <ViewMore />
      </MainContent>
    </MainContainer>
  );
};

const Filter = () => {
  const [selectOP, setSelectOP] = useState('인기순');
  const [tabFocus, setTabFocus] = useState(1);
  const sellTypeTab = ['전체', '판매중', '판매완료'];
  const tabHandler = (i) => {
    setTabFocus(i);
  };

  return (
    <FilterSection>
      <FilterBox>
        <FilterTopBox>
          <FilterLeft>
            {sellTypeTab.map((tab, i) => {
              return (
                <SellType color={i == tabFocus ? 'black' : ''}>
                  <p onClick={() => tabHandler(i)}>
                    {tab}
                  </p>
                </SellType>
              );
            })}
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
      </FilterBox>
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
