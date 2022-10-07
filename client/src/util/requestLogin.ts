import axios from 'axios';
import { access } from 'fs';
import { useEffect, useState } from 'react';
import { LoginType, SignupType } from './loginType';

axios.defaults.withCredentials = true;
const loginAPi = axios.create({
  baseURL: process.env.LOGIN_API_URL,
});

// loginAPi.interceptors.response.use((config) => {
//   const {accessToken , refreshToken} = JSON.parse(user)
//   res.headers["accessToken"] = accessToken;
//   res.headers["refreshToken"] = refreshToken;
//   return res;
// })

export const loginRecycle = (refreshToken: string) => {
  const [accessToken, setAccess] = useState('');
  axios
    .post('${process.env.LOGIN_API_URL}reissue', refreshToken)
    .then((res) => {
      setAccess(res.data.accessToken);
    })
    .catch((err) => {
      alert('로그아웃 되었습니다!');
    });
};

// axios.interceptors.request.use(() => {
//   const date = new Date();
//   const alarm = jwt_decode(accessToken);
//   alarm.exp * 1000 < date.getTime()
//     ? (recycle(), (config.headers['authorization'] = `Bearer ${data.accessToken}`))
//     : null;
//   return config;
// });

export const checkAccessToken = (refreshtoken: string) => {
  axios.defaults.headers.common['Authorization'] === undefined
    ? loginRecycle(refreshtoken)
    : axios.defaults.headers.common['Authorization'].split(' ')[1];
};

const usePost = (info: SignupType) => {
  return [postSignup(info)];
};

const postSignup = (info: SignupType) => {
  const apiinfo = info;
  const [success, setSuccess] = useState<any>('');
  const [failed, setfailed] = useState<Error>();
  useEffect(() => {
    const signup = async () => {
      try {
        const respone = await loginAPi.post<SignupType>('signup', info, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        setSuccess(respone.data);
      } catch (err) {
        setfailed(err);
      }
      signup();
    };
  }, [info]);
  return failed ? failed : success;
};

const postLogin = (info: LoginType) => {
  const [success, setSuccess] = useState<any>('');
  const [failed, setfailed] = useState<Error>();
  console.log(info);
  useEffect(() => {
    const login = async () => {
      try {
        const respone = await loginAPi.post('login', info);
        console.log(respone.data);
      } catch (err) {
        console.log(err);
      }
    };
  }, []);
};

export { postSignup, postLogin, usePost };
