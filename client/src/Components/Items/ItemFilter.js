import React, { useState } from 'react';
import { DownIcon, CancelIcon, SearchIcon } from '../Common/Icons/Icons';
import { TagComponent } from '../Common/Tag/TagStyle';
import { InputUI } from '../Common/Input/Input';
import {
  FilterSection,
  FilterBox,
  FilterLeft,
  FilterRight,
  SellType,
  SearchSection,
  SortSection,
  SortByOption,
  TagSection,
  FilterTopBox,
  FilterBottomBox,
  SortOpDropbar,
} from './MainStyle';
import { useDispatch, useSelector } from 'react-redux';
import { createTag, deleteTag } from '../../redux/itemslice';

const Filter = () => {
  const [selectOP, setSelectOP] = useState(['인기순', '최신순', '정확도순', '오래된순']);
  const [selectindex, setSelectindex] = useState(1);
  const [isSelect, setIsSelect] = useState(false);
  const [tabFocus, setTabFocus] = useState(1);
  const sellTypeTab = ['전체', '판매중', '판매완료'];
  const categorydata = useSelector((state) => state.items.category);
  const tagList = useSelector((state) => state.items['tags']);
  const dispatch = useDispatch();
  const tagInputHandler = (e) => {
    const inputs = e.target.value;
    console.log(inputs);
    e.key === 'Enter' && !tagList.includes(inputs) && inputs
      ? (dispatch(createTag(inputs)), (e.target.value = ''))
      : null;
  };

  const tabHandler = (i) => {
    setTabFocus(i);
  };

  return (
    <FilterSection>
      <FilterBox>
        <FilterTopBox>
          <FilterLeft>
            <SellTypeFilter tabFocus={tabFocus} sellTypeTab={sellTypeTab} tabHandler={tabHandler} />
          </FilterLeft>
          <FilterRight>
            <SearchFilter tagInputHandler={tagInputHandler} />
            <SortOption
              selectOP={selectOP}
              selectindex={selectindex}
              setSelectindex={setSelectindex}
              isSelect={isSelect}
              setIsSelect={setIsSelect}
            />
          </FilterRight>
        </FilterTopBox>
        <FilterBottomBox>
          <TagFilter tagList={tagList} />
        </FilterBottomBox>
      </FilterBox>
    </FilterSection>
  );
};

const SellTypeFilter = ({ tabFocus, sellTypeTab, tabHandler }) => {
  return (
    <>
      {sellTypeTab.map((tab, i) => {
        return (
          <SellType color={i == tabFocus ? 'black' : ''}>
            <p onClick={() => tabHandler(i)}>{tab}</p>
          </SellType>
        );
      })}
    </>
  );
};

const SearchFilter = ({ inputdata, tagInputHandler }) => {
  return (
    <SearchSection>
      <InputUI
        placeholder="검색어를 입력해주세요"
        onChange={tagInputHandler}
        onKeyUp={tagInputHandler}
      />
      <p>
        <SearchIcon />
      </p>
    </SearchSection>
  );
};

const SortOption = ({ selectOP, selectindex, isSelect, setSelectindex, setIsSelect }) => {
  return (
    <SortSection>
      <SortByOption>
        <p className="select_text">{selectOP[selectindex]}</p>
        <p
          className={isSelect ? 'select_icon open' : 'select_icon'}
          onClick={() => setIsSelect(!isSelect)}
        >
          <DownIcon />
        </p>
      </SortByOption>
      <SortOpDropbar display={isSelect}>
        {selectOP.map((option, i) => {
          return (
            <p
              className="opitons"
              key={option}
              onClick={() => (setSelectindex(i), setIsSelect(!isSelect))}
            >
              {option}
            </p>
          );
        })}
      </SortOpDropbar>
    </SortSection>
  );
};

const TagFilter = ({ tagList }) => {
  const dispatch = useDispatch();
  return (
    <TagSection>
      {tagList &&
        tagList.map((tags, index) => {
          return (
            <TagComponent key={index} display={tags ? 'flex' : ''}>
              <p className="tag_text">{tags}</p>
              <p className="cancel_icon" onClick={() => dispatch(deleteTag(tags))}>
                <CancelIcon />
              </p>
            </TagComponent>
          );
        })}
    </TagSection>
  );
};

export default Filter;
