import React from 'react';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { SiNaver } from 'react-icons/si';

const NaverLogin = () => {
  const naverRef = useRef();
  const { naver } = window;

  const NAVER_ID = process.env.NAVER_CLIENT_ID;
  const NAVER_CALLBACK_URL = 'http://localhost:3003/oauth/callback/naver';

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: 30 },
      callbackHandle: true,
    });
    naverLogin.init();
  };

  const userAccessToken = () => {
    window.location.href.includes('access_token') && getToken();
  };
  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0];
  };

  useEffect(() => {
    initializeNaverLogin();
    userAccessToken();
  }, []);

  const handleNaverLogin = () => {
    naverRef.current.children[0].click();
  };

  return (
    <>
      <NaverIdLogin ref={naverRef} id="naverIdLogin" />
      <NaverLoginBtn onClick={handleNaverLogin}>
        <SiNaver style={{ color: 'white', width: 15, height: 15 }} />
        <NaverLoginTitle>네이버 로그인</NaverLoginTitle>
      </NaverLoginBtn>
    </>
  );
};

export default NaverLogin;

const NaverIdLogin = styled.div`
  display: none;
`;

const NaverLoginBtn = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 9px 12px;
  outline: none;
  align-items: center;
  border-radius: 5px;
  text-decoration: none;
  outline: none;
  background-color: #03c75a;
  margin-bottom: 10px;
  &:hover {
    transition-duration: 0.25s;
    opacity: 0.8;
  }
`;

const NaverLoginTitle = styled.span`
  margin-left: 130px;
  font-size: 14px;
  font-weight: lighter;
  color: #fff;
`;
