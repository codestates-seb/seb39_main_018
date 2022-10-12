import axios from 'axios';
import { access } from 'fs';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { LoginType, SignupType } from './loginType';
import { TokenType } from './userType';

// axios.defaults.withCredentials = true;
export const loginAPi = axios.create({
  baseURL: process.env.LOGIN_API_URL,
});

// 토큰 확인 로직
export const checkLogin = axios.defaults.headers.common['Authorization'];

// loginAPi.interceptors.response.use((config) => {
//   const {accessToken , refreshToken} = JSON.parse(user)
//   res.headers["accessToken"] = accessToken;
//   res.headers["refreshToken"] = refreshToken;
//   return res;
// })

const reloading = () => {};

// 본 토큰 재발급 로직
export const keepLogin = (refreshToken: string) => {
  const JWT_EndTime = 3600;
  axios.defaults.headers.common['Authorization'] ? true : false;
  console.log(checkLogin);
  if (!checkLogin) return;

  const replay = () => {
    const { accessToken }: { accessToken: string } = axios.defaults.headers.common['Authorization'];
    const { refreshToken } = axios.defaults.headers.common['Authorizations'];
    axios
      .post(`${process.env.LOGIN_API_URL}reissue`, { headers: { accessToken, refreshToken } })
      .then((res) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        axios.defaults.headers.common['Authorizations'] = `Bearer ${refreshToken}`;
        console.log('성공');
      })
      .catch((err) => {
        alert('로그아웃 되었습니다!');
      });
  };
  setTimeout(replay, JWT_EndTime - 300);
};

// axios.interceptors.request.use(() => {
//   const date = new Date();
//   const alarm = jwt_decode(accessToken);
//   alarm.exp * 1000 < date.getTime()
//     ? (recycle(), (config.headers['authorization'] = `Bearer ${data.accessToken}`))
//     : null;
//   return config;
// });

// export const checkAccessToken = (refreshtoken: string) => {
//   axios.defaults.headers.common['Authorization'] === undefined
//     ? loginRecycle(refreshtoken)
//     : axios.defaults.headers.common['Authorization'].split(' ')[1];
// };

const usePost = (info: SignupType) => {
  return [postSignup(info)];
};

const postSignup = (info: SignupType) => {
  const apiinfo = info;
  const [success, setSuccess] = useState<any>('');
  const [failed, setfailed] = useState<Error>();
  const navigate = useNavigate();

  const signup = async (info: SignupType) => {
    try {
      const respone = await loginAPi.post<SignupType>('signup', info);
      alert('회원가입 되었습니다!');
      return location.reload();
    } catch (err) {
      setfailed(err);
      return alert('가입 정보를 다시 입력해 주세요!');
    }
  };

  return { signup };
};

// 본 로그인 코드
const postLogin = (info: LoginType) => {
  const [success, setSuccess] = useState<any>('');
  const [failed, setfailed] = useState<Error>();

  const login = async (info: LoginType) => {
    try {
      const respone = await loginAPi.post('login', info);
      const { accessToken } = respone.data.data;
      const { refreshToken } = respone.data.data;
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      axios.defaults.headers.common['Authorizations'] = `Bearer ${refreshToken}`;
      console.log(accessToken, refreshToken);
      // return location.reload();
    } catch (err) {
      return alert('아이디와 비밀번호를 확인해 주세요');
    }
  };
  return { login };
};

const postLogout = () => {
  axios.defaults.headers.common['Authorization'] = ``;
};

// 토큰 로컬 확인 로직
export const chekckLocal = Object.keys(localStorage)[0];
// export const socialCheck = localStorage.getItem('socialtoken');

// localStorage.getItem('accessToken');

// 임시 로컬 저장용
export const LocalpostLogin = (info: LoginType) => {
  const [success, setSuccess] = useState<any>('');
  const [failed, setfailed] = useState<Error>();

  const login = async (info: LoginType) => {
    try {
      const respone = await loginAPi.post('login', info);
      const { accessToken }: { accessToken: string } = respone.data.data;
      const { refreshToken }: { refreshToken: string } = respone.data.data;
      localStorage.setItem('email', info['email']);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      console.log(accessToken, refreshToken);
      return location.reload();
    } catch (err) {
      return window.alert('아이디와 비밀번호를 확인해 주세요');
    }
  };
  return { login };
};

// 토큰 임시 재발급 로직
export const keeplocalLogin = (Token: string) => {
  const JWT_EndTime = 3600;
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!accessToken) return;

  const replay = () => {
    axios
      .post(`${process.env.LOGIN_API_URL}reissue`, { accessToken, refreshToken })
      .then((res) => {
        const { accessToken } = res.data.data;
        const { refreshToken } = res.data.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        // alert('로그아웃 되었습니다!');
      });
  };
  setTimeout(replay, JWT_EndTime - 300);
};

// 임시 로그아웃 로직
export const localLogout = () => {
  localStorage.clear();
  return location.reload();
};
export { postSignup, postLogin, usePost, postLogout };
