import React, { useEffect } from 'react';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { KakaoLoginButton } from './KakaoLoginStyle.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// const KAKA0_HOST = 'https://kauth.kakao.com/oauth/authorize';
// const KAKAO_ID = process.env.KAKAO_CLIENT_ID;
// const REDIRECT_URL = 'http://localhost:3003/oauth/callback/kakao';
// const requestUri = `${KAKA0_HOST}?client_id=${KAKAO_ID}&redirect_uri=${REDIRECT_URL}&response_type=code`;

window.Kakao.init('7f72f6bd7dc714fa93bd9794498a7a2b');
// window.Kakao.Auth.setAccessToken(JSON.parse(sessionStorage.getItem('AccessKEY'))); //sessionStorage에 저장된 사용자 엑세스 토큰 받아온다.

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
  const navigate = useNavigate();

  const kakaoClick = () => {
    window.Kakao.Auth.login({
      success: function (response) {
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response) {
            // navigate('/');
            getToken();
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

  const getToken = () => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get('code'); // 인가코드
    let grant_type = 'authorization_code';
    let client_id = process.env.KAKAO_CLIENT_ID;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?
        &client_id=${client_id}
        &redirect_uri=http://localhost:3003/oauth/callback/kakao
        &code=${code}`,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        },
      )
      .then((res) => {
        console.log(res);
        const ACCESS_TOKEN = res.data.accessToken;

        localStorage.setItem('token', ACCESS_TOKEN); //예시로 로컬에 저장함

        navigate('/main'); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch((err) => {
        console.log('소셜로그인 에러', err);
        window.alert('로그인에 실패하였습니다.');
        navigate('/login'); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };

  return (
    <a>
      <KakaoLoginButton>
        <RiKakaoTalkFill />
        <span onClick={() => KakaoLogin()}>카카오 로그인</span>
      </KakaoLoginButton>

      {/* <span onClick={() => kakaoLogout()}>카카오 로그아웃 임시</span> */}
    </a>
  );
};

export default KakaoLogin;
