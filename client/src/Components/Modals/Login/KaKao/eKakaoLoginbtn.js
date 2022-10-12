import { Link, redirect, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { kakaoSave } from '../../../../redux/loginslice';
import MainPage from '../../../../Pages/MainPage';

const KakaoRediect = () => {
  const navigate = useNavigate();
  const [tok, setTok] = useState('');
  const dispatch = useDispatch();
  let params = new URL(document.location.toString()).searchParams;
  let code = params.get('code'); // 인가코드
  let grant_type = 'authorization_code';
  console.log(code);
  useEffect(() => {
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${process.env.HI_KEY}&redirect_uri=http://localhost:3003/oauth/callback/kakao&code=${code}`,
      )
      .then((res) => {
        console.log(res);
        const { access_token } = res.data;
        const { refresh_token } = res.data;
        // dispatch(kakaoSave(access_token));
        console.log(res.data);
        localStorage.setItem('socialtoken', access_token); //예시로 로컬에 저장함
        navigate('/main');
      })
      .catch((err) => {
        navigate('/error');
      });
  }, []);
  return <MainPage />;
};
export default KakaoRediect;
