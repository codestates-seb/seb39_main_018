import React from 'react';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { KakaoLoginButton } from './KakaoLoginStyle.js';

const KAKA0_HOST = 'https://kauth.kakao.com/oauth/authorize';
const KAKAO_ID = process.env.KAKAO_CLIENT_ID;
const REDIRECT_URL = 'http://localhost:3003/oauth/callback/kakao';

const requestUri = `${KAKA0_HOST}?client_id=${KAKAO_ID}&redirect_uri=${REDIRECT_URL}&response_type=code`;

const KakaoLogin = () => {
  return (
    <a href={requestUri}>
      <KakaoLoginButton>
        <RiKakaoTalkFill />
        <span>카카오</span>
      </KakaoLoginButton>
    </a>
  );
};

export default KakaoLogin;
