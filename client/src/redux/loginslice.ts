import { createSlice } from '@reduxjs/toolkit';
import { LoginType, SignupType } from '../util/loginType';

type InitialState = {
  signupInfo: SignupType;
  loginInfo: LoginType;
  email: string;
  password: string;
  userName: string;
  kakaoToken: string;
};

const initialState: InitialState = {
  signupInfo: { email: '', password: '', name: '' },
  loginInfo: { email: '', password: '' },
  email: '',
  password: '',
  userName: '',
  kakaoToken: '',
};

const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    createUser: (state, action) => {
      const result = action.payload;
      state.signupInfo = { ...state.signupInfo, ...result };
    },
    checkLogin: (state, action) => {
      const result = action.payload;
      state.loginInfo = { ...state.loginInfo, ...result };
    },
    kakaoSave: (state, action) => {
      state.kakaoToken = action.payload;
    },
  },
});

export default userSlice;

export const { createUser, checkLogin, kakaoSave } = userSlice.actions;
