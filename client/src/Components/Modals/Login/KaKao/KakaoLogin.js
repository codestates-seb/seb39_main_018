import React, { useEffect } from 'react';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { KakaoLoginButton } from './KakaoLoginStyle.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function kakaoLogout() {
  // if (!Kakao.Auth.getAccessToken()) {
  //   console.log('Not logged in.');
  //   return;
  // }
  Kakao.Auth.logout(function (response) {
    alert(response + ' logout');
    window.location.href = '/';
  });
}

const KakaoLogin = () => {
  const REDIRECT_URI = `${process.env.WEB_URL}oauth/callback/kakao`;
  const site = `https://kauth.kakao.com/oauth/oauth/authorize?client_id=${process.env.HI_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const btn = () => {
    useEffect(() => {}, []);
  };

  return (
    <KakaoLoginButton onClick={() => (window.location.href = site)}>
      <RiKakaoTalkFill />
      <span>카카오 로그인</span>
    </KakaoLoginButton>
  );
};

export default KakaoLogin;
