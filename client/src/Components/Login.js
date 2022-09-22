import React from 'react';
import { useState } from 'react';
import { get } from '../util/axios';
import { useRef } from 'react';
import KakaoLogin from './SocialLogin/KakaoLogin';
import Logins from '../style/LoginStyle';
import NaverLogin from './SocialLogin/NaverLogin';

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
    <Logins.Container>
      <Logins.Box>
        <Logins.Title>LOGIN</Logins.Title>
        <Logins.IdBox>
          <Logins.NameBox>User ID</Logins.NameBox>
          <Logins.IdInput
            ref={idInput}
            id="id"
            type="text"
            defaultValue={userid.value}
            onChange={(e) => checkUserId(e.target.value)}
          />
          <Logins.HiddenMessage hidden={userid.hidden}>{userid.text}</Logins.HiddenMessage>
        </Logins.IdBox>

        <Logins.PasswordBox>
          <Logins.NameBox>비번</Logins.NameBox>
          <Logins.PasswordInput
            ref={passwordInput}
            id="password"
            type="text"
            defaultValue={userPassword.value}
            onChange={(e) => checkUserPassword(e.target.value)}
          />
          <Logins.HiddenMessage hidden={userPassword.hidden}>
            {userPassword.text}
          </Logins.HiddenMessage>
        </Logins.PasswordBox>

        <Logins.LinkBox>
          <Logins.AutoLogin>자동로그인</Logins.AutoLogin>
          <Logins.IdOrPwFind>ID/PW 찾기</Logins.IdOrPwFind>
          <Logins.GoSignUp>회원가입</Logins.GoSignUp>
        </Logins.LinkBox>

        <Logins.Button
          onClick={() => {
            userlogin();
          }}
        >
          로그인
        </Logins.Button>

        <Logins.SnsLogin>
          <Logins.GoogleLogin>Google</Logins.GoogleLogin>
          <KakaoLogin />
          <NaverLogin />
          <Logins.NaverLogin>Naver</Logins.NaverLogin>
        </Logins.SnsLogin>
      </Logins.Box>
    </Logins.Container>
  );
};

export default Login;
