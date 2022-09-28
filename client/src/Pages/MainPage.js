import React, { useState } from 'react';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import { BasicBtn } from '../Components/Common/Button/Buttons';
import { UpIcon, DownIcon, CancelIcon } from '../Components/Common/Icons/Icons';
import ItemList from '../Components/ItemList/Item';
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
  SortOpDropbar,
} from '../Components/ItemList/MainStyle';
import { TagInput } from '../Components/Common/Input/InputStyle';
import { TagComponent } from '../Components/Common/Tag/TagStyle';

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
  const [selectOP, setSelectOP] = useState(['인기순', '최신순', '정확도순', '오래된순']);
  const [selectindex, setSelectindex] = useState(1);
  const [isSelect, setIsSelect] = useState(false);
  const [tabFocus, setTabFocus] = useState(1);
  const sellTypeTab = ['전체', '판매중', '판매완료'];
  const [tagData, setTagData] = useState([]);
  const [inputdata, setInputdata] = useState('');
  const tabHandler = (i) => {
    setTabFocus(i);
  };
  const tagInputHandler = (e) => {
    setInputdata(e.target.value);
    e.key === 'Enter' && !tagData.includes(inputdata) && inputdata
      ? (setTagData([...tagData, e.target.value]), setInputdata(''))
      : null;
  };

  const tagCancel = (taglist) => {
    const cancel = tagData.filter((tagdatas) => tagdatas !== taglist);
    setTagData(cancel);
  };

  return (
    <FilterSection>
      <FilterBox>
        <FilterTopBox>
          <FilterLeft>
            {sellTypeTab.map((tab, i) => {
              return (
                <SellType color={i == tabFocus ? 'black' : ''}>
                  <p onClick={() => tabHandler(i)}>{tab}</p>
                </SellType>
              );
            })}
          </FilterLeft>
          <FilterRight>
            <SearchFilter>
              <TagInput onChange={tagInputHandler} onKeyUp={tagInputHandler} value={inputdata} />
            </SearchFilter>
            <SortByOption>
              <p className="select_text">{selectOP[selectindex]}</p>
              <p
                className={isSelect ? "select_icon open" : "select_icon"}
                onClick={() => setIsSelect(!isSelect)}
              >
                <DownIcon />
              </p>
            </SortByOption>
            <SortOpDropbar display={isSelect}>
              {selectOP.map((option, i) => {
                return (
                  <p key={option} onClick={() => (setSelectindex(i), setIsSelect(!isSelect))}>
                    {option}
                  </p>
                );
              })}
            </SortOpDropbar>
          </FilterRight>
        </FilterTopBox>
        <FilterBottomBox>
          <TagFilter>
            {tagData &&
              tagData.map((taglist, index) => {
                return (
                  <TagComponent key={taglist} display={taglist ? 'flex' : ''}>
                    <p className="tag_text">{taglist}</p>
                    <p className="cancel_icon" onClick={() => tagCancel(tagData[index])}>
                      <CancelIcon />
                    </p>
                  </TagComponent>
                );
              })}
          </TagFilter>
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
