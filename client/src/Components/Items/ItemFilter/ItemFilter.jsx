import React, { useState } from 'react';
import { DownIcon, CancelIcon, SearchIcon } from '../../Common/Icons/Icons';
import { TagComponent } from '../../Common/Tag/TagStyle';
import {
  FilterSection,
  FilterBox,
  FilterLeft,
  FilterRight,
  SellType,
  SortSection,
  SortByOption,
  TagSection,
  FilterTopBox,
  FilterBottomBox,
  SortOpDropbar,
} from './FilterStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  createTag,
  deleteTag,
  selectSort,
  openDropbar,
  selectFilter,
} from '../../../redux/itemslice';
import Sellbtn from '../../Common/Button/Sellbtn';

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
            {/* <SearchFilter tagInputHandler={tagInputHandler} /> */}
            <Sellbtn />
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
  const dispatch = useDispatch();
  const sellTypes = useSelector((state) => state.items.filterTypes);
  const focusType = useSelector((state) => state.items.choicedFilter);
  selectFilter;
  return (
    <>
      {sellTypes.map((tab) => {
        return (
          <SellType
            color={tab.name == focusType ? 'black' : ''}
            onClick={() => dispatch(selectFilter(tab.name))}
          >
            <p key={tab.id}>{tab.name}</p>
          </SellType>
        );
      })}
    </>
  );
};

const SortOption = () => {
  const sortList = useSelector((state) => state.items.sortTypes);
  const choiced = useSelector((state) => state.items.choicedSort);
  const isSelect = useSelector((state) => state.items.onChoice);
  const dispatch = useDispatch();
  console.log(isSelect);
  return (
    <SortSection>
      <SortByOption>
        <h4 className="select_text">{choiced}</h4>
        <p
          className={isSelect ? 'select_icon open' : 'select_icon'}
          onClick={() => dispatch(openDropbar(!isSelect))}
        >
          <DownIcon />
        </p>
      </SortByOption>
      <SortOpDropbar display={isSelect ? 'flex' : 'none'}>
        {sortList.map((option, i) => {
          return (
            <p
              className="opitons"
              key={option}
              onClick={() => dispatch(selectSort([option, !isSelect]))}
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
