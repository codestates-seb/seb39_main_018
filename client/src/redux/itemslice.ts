import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type InitialState = {
  value: number;
  isLoad: boolean;
  searchData: string;
  categorys: string[];
};

const initialState: InitialState = {
  value: 8,
  isLoad: false,
  searchData: '',
  categorys: ['전체','연극/영화','숙박','전시','여행','스포츠','공연'],
};
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
    searchitem: (state, action) => {
      state.searchData = action.payload
    },
  },
});

export default itemSlice;
export const { viewsCount, resueRouter, closeCategory,searchitem } = itemSlice.actions;
