import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType } from './store';

type InitialState = {
  trade: [{ id: number; name: string }, { id: number; name: string }, { id: number; name: string }];
  myInfo: [
    { id: number; name: string },
    { id: number; name: string },
    { id: number; name: string },
    { id: number; name: string },
  ];
  pageNumber: number;
};

const initialState: InitialState = {
  trade: [
    { id: 1, name: '구매상품' },
    { id: 2, name: '판매상품' },
    { id: 3, name: '찜리스트' },
  ],
  myInfo: [
    { id: 4, name: '내프로필' },
    { id: 5, name: '거래후기' },
    { id: 6, name: '지역인증' },
    { id: 7, name: '회원탈퇴' },
  ],
  pageNumber: 0,
};

const pageSlice = createSlice({
  name: 'mypage',
  initialState,
  reducers: {
    menuChoice: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

export default pageSlice;
export const { menuChoice } = pageSlice.actions;
export const menuChoiceData = () => useDispatch<DispatchType>();
