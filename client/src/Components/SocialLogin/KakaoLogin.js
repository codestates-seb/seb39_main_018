import React, { useEffect } from 'react';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { KakaoLoginButton } from './KakaoLoginStyle.js';
import { useNavigate } from 'react-router-dom';

// const KAKA0_HOST = 'https://kauth.kakao.com/oauth/authorize';
// const KAKAO_ID = process.env.KAKAO_CLIENT_ID;
// const REDIRECT_URL = 'http://localhost:3003/oauth/callback/kakao';
// const requestUri = `${KAKA0_HOST}?client_id=${KAKAO_ID}&redirect_uri=${REDIRECT_URL}&response_type=code`;

const kakaoLogout = () => {
  if (Kakao.Auth.getAccessToken()) {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function (response) {},
      fail: function (error) {
        console.log(error);
      },
    });

    Kakao.Auth.setAccessToken(undefined);

    const userinfoElem = document.querySelector('#userinfo');
    if (userinfoElem) userinfoElem.value = '';
  }
};

const KakaoLogin = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(KAKAO_ID);
  // }, []);

  const kakaoClick = () => {
    window.Kakao.Auth.login({
      success: function (response) {
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response) {
            navigate('/');
            console.log(response);
          },
          fail: function (error) {
            console.log(error);
          },
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  return (
    <a onClick={() => kakaoClick()}>
      <KakaoLoginButton>
        <RiKakaoTalkFill />
        <span>카카오 로그인</span>
      </KakaoLoginButton>

      <KakaoLoginButton onClick={() => kakaoLogout()}>
        <RiKakaoTalkFill />
        <span>카카오 로그아웃 임시</span>
      </KakaoLoginButton>
    </a>
  );
};

export default KakaoLogin;
