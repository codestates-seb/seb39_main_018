import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './itemslice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
