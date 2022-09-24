import React from 'react';
import { useState } from 'react';
import { get } from '../util/axios';
import { useRef } from 'react';
import KakaoLogin from './SocialLogin/KakaoLogin';
import Logins from '../style/LoginStyle';
import NaverLogin from './SocialLogin/NaverLogin';
import axios from 'axios';

const Login = () => {
  const idInput = useRef();
  const passwordInput = useRef();
  const [userid, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const userlogin = () => {
    if (userid !== '' && userPassword !== '') {
      axios
        .post('http://ec2-3-34-181-86.ap-northeast-2.compute.amazonaws.com:8080/board', {
          headers: {},
          id: id,
          password: password,
        })
        .then((res) => {
          resolve(res);
          navigate('/');
        })
        .catch((err) => {
          window.alert('로그인 실패!');
          console.log(err);
        });
    }

    //   let parameter = {};
    //   parameter = {
    //     userid: userid.value,
    //     userPassword: userPassword.value,
    //   };
    //   const loginClient = await get('url', parameter);
    //   return loginClient;
    // }
    if (userid === '') {
      idInput.current.focus();
    } else if (userPassword === '') {
      passwordInput.current.focus();
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

  // 자동로그인 체크박스
  const [checkedBox, setCheckedBox] = useState(new Set());
  // 체크 O
  const handleCheckdBox = (id, isChecked) => {
    if (isChecked) {
      checkedBox.add(id);
      setCheckedBox(checkedBox);
      // 체크 X -> delete
    } else if (!isChecked && checkedBox.has(id)) {
      checkedBox.delete(id);
      setCheckedBox(checkedBox);
    }
  };

  return (
    <Logins.Container>
      <Logins.Box>
        <Logins.TopHeader>
          <Logins.Title>SORT</Logins.Title>
          <Logins.SubTitle>SELL OWN YOUR TICKET</Logins.SubTitle>
        </Logins.TopHeader>

        <Logins.IdBox>
          <Logins.NameBox>아이디</Logins.NameBox>
          <Logins.InputBox
            ref={idInput}
            id="id"
            type="text"
            placeholder="예) SORT123"
            defaultValue={userid.value}
            onChange={(e) => checkUserId(e.target.value)}
          />
          <Logins.HiddenMessage hidden={userid.hidden}>{userid.text}</Logins.HiddenMessage>
        </Logins.IdBox>

        <Logins.PasswordBox>
          <Logins.NameBox>비밀번호</Logins.NameBox>
          <Logins.InputBox
            ref={passwordInput}
            id="password"
            type="password"
            defaultValue={userPassword.value}
            onChange={(e) => checkUserPassword(e.target.value)}
          />
          <Logins.HiddenMessage hidden={userPassword.hidden}>
            {userPassword.text}
          </Logins.HiddenMessage>
        </Logins.PasswordBox>

        <Logins.LinkBox>
          <input type="checkbox" onChange={(e) => handleCheckdBox(e)} />
          <Logins.AutoLogin>로그인 유지하기</Logins.AutoLogin>
          <Logins.IdOrPwFind>ID/PW 찾기</Logins.IdOrPwFind>
        </Logins.LinkBox>

        <Logins.Button
          onClick={() => {
            userlogin();
          }}
        >
          로그인
        </Logins.Button>
        <KakaoLogin />
        <NaverLogin />

        <Logins.GoSignUp>
          <Logins.AreYouAMember>회원이 아니신가요?</Logins.AreYouAMember>
          <Logins.RealJoin>회원가입</Logins.RealJoin>
        </Logins.GoSignUp>
      </Logins.Box>
    </Logins.Container>
  );
};

export default Login;
