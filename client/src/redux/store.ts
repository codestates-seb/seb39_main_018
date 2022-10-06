import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './itemslice';
import userSlice from './loginslice';

export const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    account : userSlice.reducer,
  },
});
