import axios from 'axios';
import { access } from 'fs';
import { useEffect, useState } from 'react';
import { LoginType, SignupType } from './loginType';

const loginAPi = axios.create({
  baseURL: process.env.LOGIN_API_URL,
});

// loginAPi.interceptors.response.use((config) => {
//   const {accessToken , refreshToken} = JSON.parse(user)
//   res.headers["accessToken"] = accessToken;
//   res.headers["refreshToken"] = refreshToken;
//   return res;
// })

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
