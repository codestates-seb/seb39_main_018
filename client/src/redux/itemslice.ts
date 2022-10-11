import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ItemType, ApiType } from '../util/itemType';

interface ObjState {
  id: number;
  name: string;
}

type InitialState = {
  value: number;
  isLoad: boolean;
  categorys: string[];
  category: string;
  tags: string[];
  sortTypes: string[];
  choicedSort: string;
  onChoice: boolean;
  filterTypes: ObjState[];
  choicedFilter: string;
  tabFocus: number;
  apiInfo: ApiType;
  sortApi: string;
  filterApi: string;
  keywordApi: string;
  writeInfo: ItemType;
  itemsId: number[];
  isCheck: boolean[];
  isLike: (boolean | number)[];
};

const initialState: InitialState = {
  value: 8,
  isLoad: false,
  categorys: ['전체', '연극/영화', '숙박', '전시', '여행', '스포츠', '공연'],
  category: '',
  tags: [],
  sortTypes: ['정확순', '인기순', '최신순', '오래된순'],
  choicedSort: '정확순',
  onChoice: false,
  filterTypes: [
    { id: 0, name: '전체' },
    { id: 1, name: '판매중' },
    { id: 2, name: '판매완료' },
  ],
  choicedFilter: '판매중',
  tabFocus: 1,
  apiInfo: { sort: '?', status: 'status=판매중&', keyword: '', type: '' },
  sortApi: '?',
  filterApi: 'status=판매중&',
  keywordApi: '',
  writeInfo: {
    title: '',
    body: '',
    price: '',
    end_date: '',
    seat_number: '',
    region: '서울시 강남구 논현동',
    photo: '',
    status: '',
  },
  itemsId: [],
  isCheck: [false, false, false],
  isLike: [false, 0],
};

// {id : 0 ,type : '정확순'},{id : 1 ,type : '인기순'},{id : 2 ,type : '최신순'},{id : 3 ,type : '오래된순'}

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    viewsCount: (state, action) => {
      state.value = state.value + action.payload;
    },
    resueRouter: (stat, action) => {
      const naviagte = useNavigate();
      naviagte(action.payload);
    },
    closeCategory: (state, action) => {
      state.isLoad = action.payload;
    },
    selectCategory: (state, action) => {
      state.category = action.payload;
    },
    createTag: (state, action) => {
      const result = action.payload;
      state.tags = [...state.tags, result];
      state.apiInfo.keyword = `title=${result}&body=${result}`;
    },
    deleteTag: (state, action) => {
      state.tags = state.tags.filter((taglist) => taglist !== action.payload);
      state.apiInfo = { ...state.apiInfo, keyword: '' };
    },
    selectSort: (state, action) => {
      const result = action.payload;
      state.choicedSort = state.sortTypes.find((sortList) => sortList === result[0]);
      state.onChoice = result[1];
      state.apiInfo.sort =
        result[0] === '인기순'
          ? '/view-full?'
          : result[0] === '최신순'
          ? '/full-up?'
          : result[0] === '오래된순'
          ? '/full-down?'
          : '?';
    },
    openDropbar: (state, action) => {
      state.onChoice = action.payload;
    },
    selectFilter: (state, action) => {
      const result = action.payload;
      state.choicedFilter = result;
      state.apiInfo.status =
        result === '판매중' ? 'status=판매중&' : result === '판매완료' ? 'status=판매완료&' : '';
    },
    writePost: (state, action) => {
      const result = action.payload;
      state.writeInfo = { ...state.writeInfo, ...result };
    },
    checkItems: (state, action) => {
      const cheked = action.payload[0];
      const result = action.payload[1];
      state.itemsId = cheked ? result : null;
    },
    orderDelete: (state, action) => {},
    soldDelete: (state, action) => {},
    likeFeature: (state, action) => {
      const onclick = action.payload;
      state.isLike = [onclick, onclick ? 1 : 0];
    },
  },
});

export default itemSlice;
export const {
  viewsCount,
  resueRouter,
  closeCategory,
  selectCategory,
  createTag,
  deleteTag,
  selectSort,
  openDropbar,
  selectFilter,
  writePost,
  checkItems,
  orderDelete,
  soldDelete,
  likeFeature,
} = itemSlice.actions;
