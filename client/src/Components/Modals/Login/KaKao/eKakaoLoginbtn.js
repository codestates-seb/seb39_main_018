import { Link, redirect, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { kakaoSave } from '../../../../redux/loginslice';

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
        const ACCESS_TOKEN = res.data.accessToken;
        const REFRESH_TOKEN = res.data.refresh_token;
        dispatch(kakaoSave(ACCESS_TOKEN));
        localStorage.setItem('token', ACCESS_TOKEN); //예시로 로컬에 저장함
        navigate('/main'); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch((err) => {
        console.log('소셜로그인 에러', err); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  }, []);

  return <div>ㄴㅇㄴㅇㄴ</div>;
};
export default KakaoRediect;
