import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type InitialState = {
  value: number;
};

const initialState: InitialState = {
  value: 8,
};

// const resueRouter: object = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     navigates: (state, action) => {
//       state.value = state.value + action.payload;
//     },
//   },
// });

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
  },
});

console.log(itemSlice);

export default itemSlice;
export const { viewsCount } = itemSlice.actions;
export const { resueRouter } = itemSlice.actions;
