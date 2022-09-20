import React from 'react';
import { useState } from 'react';
import { get } from '../util/axios';
import { useRef } from 'react';
import KakaoLogin from './SocialLogin/KakaoLogin';
import {
  LoginContainer,
  LoginTitle,
  IdBox,
  LoginBox,
  NameBox,
  IdInput,
  HiddenMessage,
  PasswordBox,
  PasswordInput,
  LinkBox,
  AutoLogin,
  IdOrPwFind,
  GoSignUp,
  LoginButton,
  SnsLogin,
  GoogleLogin,
  NaverLogin,
} from '../style/LoginStyle';

const Login = () => {
  const idInput = useRef();
  const passwordInput = useRef();
  const [userid, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const userlogin = async () => {
    console.log('userid', userid);
    console.log(userPassword);
    if (userid !== '' && userPassword !== '') {
      let parameter = {};
      parameter = {
        userid: userid.value,
        userPassword: userPassword.value,
      };
      const loginClient = await get('url', parameter);
      return loginClient;
    }
    if (userid === '') {
      idInput.current.focus();
    } else if (userPassword === '') {
      passwordInput.current.focus();
    }
  };

  const checkUserId = (value) => {
    if (value.length === 0 || value === '') {
      setUserId({ value: value, text: '아이디를 입력해주세요!', hidden: false });
      return;
    }
    setUserId({ value: value, text: '', hidden: true });
  };

  const checkUserPassword = (value) => {
    if (value.length === 0 || value === '') {
      setUserPassword({ value: value, text: '비번 입력해주세요!', hidden: false });
      return;
    }
    setUserPassword({ value: value, text: '', hidden: true });
  };

  return (
    <LoginContainer>
      <LoginBox>
        <LoginTitle>LOGIN</LoginTitle>
        <IdBox>
          <NameBox>User ID</NameBox>
          <IdInput
            ref={idInput}
            id="id"
            type="text"
            defaultValue={userid.value}
            onChange={(e) => checkUserId(e.target.value)}
          />
          <HiddenMessage hidden={userid.hidden}>{userid.text}</HiddenMessage>
        </IdBox>

        <PasswordBox>
          <NameBox>비번</NameBox>
          <PasswordInput
            ref={passwordInput}
            id="password"
            type="text"
            defaultValue={userPassword.value}
            onChange={(e) => checkUserPassword(e.target.value)}
          />
          <HiddenMessage hidden={userPassword.hidden}>{userPassword.text}</HiddenMessage>
        </PasswordBox>

        <LinkBox>
          <AutoLogin>자동로그인</AutoLogin>
          <IdOrPwFind>ID/PW 찾기</IdOrPwFind>
          <GoSignUp>회원가입</GoSignUp>
        </LinkBox>

        <LoginButton
          onClick={() => {
            userlogin();
          }}
        >
          로그인
        </LoginButton>

        <SnsLogin>
          <GoogleLogin>Google</GoogleLogin>
          <KakaoLogin />
          <NaverLogin>Naver</NaverLogin>
        </SnsLogin>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
