import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './itemslice';

export const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
  },
});
