// 리다이렉트 될 화면
import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import MainPage from '../../../../Pages/MyPage';
import { useNavigate } from 'react-router-dom';

const Naver = () => {
  const navigate = useNavigate();

  window.location.href.includes('access_token') && GetUser();
  function GetUser() {
    const location = window.location.href.split('=')[1];
    const token = location.split('&')[0];
    console.log('token: ', token);

    axios
      .post(`${API}/account/sign-in`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: token,
        },
      })

      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem('access_token', ACCESS_TOKEN); // 로컬에 저장
        navigate('/main');
      })
      .catch((err) => {
        console.log('소셜로그인 에러', err);
        window.alert('로그인에 실패하였습니다.');
        navigate('/login'); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  }

  return <MainPage />;
};

export default Naver;
