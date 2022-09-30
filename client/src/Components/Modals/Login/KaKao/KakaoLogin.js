import React from 'react';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { KakaoLoginButton } from './KakaoLoginStyle.js';
import { useNavigate } from 'react-router-dom';

// const KAKA0_HOST = 'https://kauth.kakao.com/oauth/authorize';
// const KAKAO_ID = process.env.KAKAO_CLIENT_ID;
// const REDIRECT_URL = 'http://localhost:3003/oauth/callback/kakao';
// const requestUri = `${KAKA0_HOST}?client_id=${KAKAO_ID}&redirect_uri=${REDIRECT_URL}&response_type=code`;

window.Kakao.init('7f72f6bd7dc714fa93bd9794498a7a2b');
window.Kakao.Auth.setAccessToken(JSON.parse(sessionStorage.getItem('AccessKEY'))); //sessionStorage에 저장된 사용자 엑세스 토큰 받아온다.

function kakaoLogout() {
  if (!Kakao.Auth.getAccessToken()) {
    console.log('Not logged in.');
    return;
  }
  Kakao.Auth.logout(function (response) {
    alert(response + ' logout');
    window.location.href = '/';
  });
}

const KakaoLogin = () => {
  const navigate = useNavigate();

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
    <a>
      <KakaoLoginButton>
        <RiKakaoTalkFill />
        <span onClick={() => kakaoClick()}>카카오 로그인</span>
      </KakaoLoginButton>

      <span onClick={() => kakaoLogout()}>카카오 로그아웃 임시</span>
    </a>
  );
};

export default KakaoLogin;
