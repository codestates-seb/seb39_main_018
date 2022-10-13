import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import itemSlice from './itemslice';
import userSlice from './loginslice';
import pageSlice from './MYPageSlice';

export const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    account: userSlice.reducer,
    mypage: pageSlice.reducer,
  },
});

export type DispatchType = typeof store.dispatch;