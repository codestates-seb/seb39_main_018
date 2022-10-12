// PW 찾기 페이지
import React from 'react';
import Logins from '../Login/General/LoginStyle';
import Signups from '../SignUp/SignupStyle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRef } from 'react';

const Find = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: '', text: '', hidden: true });

  const emailInput = useRef();

  const findemail = () => {
    if (email.value === '') {
      emailInput.current.focus();
      return;
    }

    if (email.value !== '') {
      axios
        .get('http://3.34.181.86:8081/user/login', {
          headers: { 'Content-Type': 'application/json' },
          data: { email: email },
        })
        .then((res) => {
          console.log(res);
          window.alert('이메일을 발송했습니다. 메일함을 확인해주세요.');
        })
        .catch((err) => {
          window.alert('이메일 발송에 실패했습니다. 이메일 주소를 다시 확인해주세요.');
          console.log(err);
        });
    }
  };

  const checkEmail = (value) => {
    if (value.length === 0 || value === '') {
      setEmail({ value: value, text: '이메일을 입력해주세요.', hidden: false });
      return;
    }
    if (!value.includes('@')) {
      setEmail({ value: value, text: '이메일 주소를 정확히 입력해주세요.', hidden: false });
      return;
    }
    setEmail({ value: value, text: '', hidden: true });
  };

  // 로그인으로 돌아가기
  const LoginClick = () => {
    props.loginClickInFind();
  };

  return (
    <Logins.Container>
      <Logins.Box>
        <Logins.TopHeader>
          <Signups.Title>비밀번호 찾기</Signups.Title>
          <Signups.SubTitle>
            비밀번호를 재설정할 수 있게
            <br />
            이메일을 보내드립니다
          </Signups.SubTitle>
        </Logins.TopHeader>

        <Logins.InputBox
          ref={emailInput}
          color={!email.hidden ? 'red' : 'black'}
          id="email"
          type="email"
          placeholder="가입 시 등록한 이메일 주소"
          defaultValue={email.value}
          onChange={(e) => checkEmail(e.target.value)}
        />
        <Logins.HiddenMessage hidden={email.hidden}>{email.text}</Logins.HiddenMessage>

        <Signups.Certified>
          <Signups.CertifiedButton onClick={() => findemail()}>
            인증번호 받기
          </Signups.CertifiedButton>
        </Signups.Certified>

        <Logins.GoSignUp>
          <Logins.RealJoin onClick={() => LoginClick()}>로그인</Logins.RealJoin>
          <Logins.AreYouAMember>으로 돌아가기</Logins.AreYouAMember>
        </Logins.GoSignUp>
      </Logins.Box>
    </Logins.Container>
  );
};

export default Find;
