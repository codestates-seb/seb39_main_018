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
        <SiNaver
          style={{ color: 'white', width: 30, height: 30, marginLeft: 10, backgroundSize: 30 }}
        />
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
  align-items: center;
  width: 360px;
  height: 56px;
  background-color: #03c75a;
  border-radius: 6px;
`;

const NaverLoginTitle = styled.span`
  margin-left: 90px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;
