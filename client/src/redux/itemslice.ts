import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type InitialState = {
  value: number;
  isLoad: boolean;
};

const initialState: InitialState = {
  value: 8,
  isLoad: false,
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
  },
});

console.log(itemSlice);

export default itemSlice;
export const { viewsCount, resueRouter, closeCategory } = itemSlice.actions;
