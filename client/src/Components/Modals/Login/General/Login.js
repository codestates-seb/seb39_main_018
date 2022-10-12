import React, { useId } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import KakaoLogin from '../KaKao/KakaoLogin';
import Logins from './LoginStyle';
import NaverLogin from '../Naver/NaverLogin';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { postLogin, LocalpostLogin } from '../../../../util/requestLogin';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogin } from '../../../../redux/loginslice';

const Login = (props) => {
  const idInput = useRef();
  const passwordInput = useRef();
  const [userid, setUserId] = useState({ value: '', text: '', hidden: true });
  const [userPassword, setUserPassword] = useState({ value: '', text: '', hidden: true });
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.account.loginInfo);
  const dispatch = useDispatch();
  const [accessToken, setAccess] = useState('');
  const [refreshToken, setRefresh] = useState('');
  const extension_tokken = 24 * 3600 * 1000;
  const { login } = LocalpostLogin();

  const sendLogin = (info) => {
    // if (userid.value === '') {
    //   idInput.current.focus();
    //   return;
    // } else if (userPassword.value === '') {
    //   passwordInput.current.focus();
    //   return;
    // }
    console.log(info);
    login(info);
  };

  const userlogin = () => {
    console.log(userid.value);
    console.log(userPassword.value);

    if (userid.value !== '' && userPassword.value !== '') {
      axios
        .get('/v1/login', {
          data: {
            id: userid,
            password: userPassword,
          },
        })
        .then((res) => {
          resolve(res);
          window.alert('로그인 성공!');
          navigate('/');

          if (checkedBox) {
            localStorage.setItem('login', token); // 서버 토큰값
          } else {
            sessionStorage.setItem('login', token);
          }
        })
        .catch((err) => {
          window.alert('로그인 실패!');
          console.log(err);
        });
    } else {
      console.log('로그인 실패');
    }
  };

  const checkUserId = (value) => {
    if (value.length === 0 || value === '') {
      setUserId({ value: value, text: '아이디를 입력해주세요.', hidden: false });
      return;
    }
    setUserId({ value: value, text: '', hidden: true });
  };

  const checkUserPassword = (value) => {
    if (value.length === 0 || value === '') {
      setUserPassword({ value: value, text: '비밀번호를 입력해주세요.', hidden: false });
      return;
    }
    setUserPassword({ value: value, text: '', hidden: true });
  };

  const SignupClick = () => {
    props.signupClickInLogin();
  };

  const FindClick = () => {
    props.findClickInLogin();
  };

  console.log(checkLogin);

  // 자동로그인 체크박스
  const [checkedBox, setCheckedBox] = useState(false);
  // 체크 O
  const handleCheckdBox = (e) => {
    setCheckedBox(e.target.checked);
  };

  return (
    <Logins.Container>
      <Logins.Box>
        <Logins.TopHeader>
          <Logins.Title>SORT</Logins.Title>
          <Logins.SubTitle>SELL OWN YOUR TICKET</Logins.SubTitle>
        </Logins.TopHeader>

        <Logins.IdBox>
          <Logins.NameBox color={!userid.hidden ? 'red' : 'black'}>아이디</Logins.NameBox>
          <Logins.InputBox
            color={!userid.hidden ? 'red' : 'black'}
            ref={idInput}
            id="id"
            type="text"
            placeholder="예) SORT123"
            defaultValue={userid.value}
            onChange={(e) => dispatch(checkLogin({ email: e.target.value }))}
          />
          <Logins.HiddenMessage hidden={userid.hidden}>{userid.text}</Logins.HiddenMessage>
        </Logins.IdBox>

        <Logins.PasswordBox>
          <Logins.NameBox color={!userPassword.hidden ? 'red' : 'black'}>비밀번호</Logins.NameBox>
          <Logins.InputBox
            color={!userPassword.hidden ? 'red' : 'black'}
            ref={passwordInput}
            id="password"
            type="password"
            defaultValue={userPassword.value}
            onChange={(e) => dispatch(checkLogin({ password: e.target.value }))}
          />
          <Logins.HiddenMessage hidden={userPassword.hidden}>
            {userPassword.text}
          </Logins.HiddenMessage>
        </Logins.PasswordBox>

        <Logins.LinkBox>
          <input type="checkbox" onChange={(e) => handleCheckdBox(e)} />
          <Logins.AutoLogin>로그인 유지하기</Logins.AutoLogin>
          <Logins.IdOrPwFind onClick={() => FindClick()}>비밀번호 찾기</Logins.IdOrPwFind>
        </Logins.LinkBox>

        <Logins.Button
          onClick={() => {
            sendLogin(userInfo);
          }}
        >
          로그인
        </Logins.Button>
        <KakaoLogin />
        <NaverLogin />

        <Logins.GoSignUp>
          <Logins.AreYouAMember>회원이 아니신가요?</Logins.AreYouAMember>
          <Logins.RealJoin onClick={() => SignupClick()}>회원가입</Logins.RealJoin>
        </Logins.GoSignUp>
      </Logins.Box>
    </Logins.Container>
  );
};

export default Login;
