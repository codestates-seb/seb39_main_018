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
  const navigate = useNavigate();

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

      <KakaoLoginButton>
        <RiKakaoTalkFill />
        <span onClick={() => KakaoLogin()}>카카오 로그인</span>
      </KakaoLoginButton>

  );
};

export default KakaoLogin;
