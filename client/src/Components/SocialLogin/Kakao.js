// 리다이렉트 될 화면
import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Main from '../Main.js';
import { useNavigate } from 'react-router-dom';

const Kakao = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get('code'); // 인가코드
    let grant_type = 'authorization_code';
    let client_id = process.env.KAKAO_CLIENT_ID;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?
        grant_type=${grant_type}
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
  }, []);

  return <Main />;
};

export default Kakao;
