import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useCallback } from 'react';
import { useRef } from 'react';
import Logins from '../style/LoginStyle';
import Signups from '../style/SignupStyle';

const Signup = () => {
  const navigate = useNavigate();
  const [id, setId] = useState({ value: '', text: '', hidden: true });
  const [password, setPassword] = useState({ value: '', text: '', hidden: true });
  const [passwordCheck, setPasswordCheck] = useState({ value: '', text: '', hidden: true });
  const [mismatchError, setMismatchError] = useState(false);
  const [email, setEmail] = useState({ value: '', text: '', hidden: true });

  const emailInput = useRef();
  const idInput = useRef();
  const passwordInput = useRef();
  const passwordCheckInput = useRef();

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password.value);
    },
    [password],
  );

  const findemail = () => {
    if (email.value === '') {
      emailInput.current.focus();
      return;
    }

    if (email.value !== '') {
      axios
        .get('http://ec2-3-34-181-86.ap-northeast-2.compute.amazonaws.com:8080/board', {
          headers: { 'Content-Type': 'application/json' },
          email: email,
        })
        .then((res) => {
          console.log(res);
          window.alert('이메일을 발송했습니다. 메일함을 확인해주세요.');
        })
        .catch((err) => {
          window.alert('비번찾기 실패~!');
          console.log(err);
        });
    }
  };

  const register = () => {
    if (email.value === '') {
      emailInput.current.focus();
      return;
    } else if (id.value === '') {
      idInput.current.focus();
      return;
    } else if (password.value === '') {
      passwordInput.current.focus();
      return;
    } else if (passwordCheck.value === '') {
      passwordCheckInput.current.focus();
      return;
    }

    if (email.value !== '' && id.value !== '' && !mismatchError) {
      axios
        .post('http://ec2-3-34-181-86.ap-northeast-2.compute.amazonaws.com:8080/board', {
          headers: { 'Content-Type': 'application/json' },
          id: id,
          password: password,
          email: email,
        })
        .then((res) => {
          navigate('/');
        })
        .catch((err) => {
          window.alert('회원가입 실패!');
          console.log(err);
        });
    }
  };

  const checkId = (value) => {
    let checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (checkKor.test(value)) {
      setId({
        value: value,
        text: '아이디는 영문, 숫자만 입력가능합니다. (8자 이상)',
        hidden: false,
      });
      return;
    }
    if (value.length === 0 || value === '') {
      setId({ value: value, text: '아이디를 입력해주세요.', hidden: false });
      return;
    }
    if (value.length < 8) {
      setId({ value: value, text: '아이디를 8글자 이상 입력해주세요.', hidden: false });
      return;
    }

    setId({ value: value, text: '', hidden: true });
  };

  const checkPassword = (value) => {
    if (value.length === 0 || value === '') {
      setPassword({ value: value, text: '비밀번호를 입력해주세요.', hidden: false });
      return;
    }
    let regPass = /^(?=.*[a-zA-z])(?=.*[0-9]).{8,25}$/;
    if (!regPass.test(value)) {
      setPassword({
        value: value,
        text: '영문, 숫자를 조합하여 입력해주세요. (8자 이상)',
        hidden: false,
      });
      return;
    }
    setPassword({ value: value, text: '', hidden: true });
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

  return (
    <Logins.Container>
      <Logins.Box>
        <Logins.TopHeader>
          <Signups.Title>회원가입</Signups.Title>
          <Signups.SubTitle>올바른 티켓의 시작, SORT</Signups.SubTitle>
        </Logins.TopHeader>

        <Logins.IdBox>
          <Logins.NameBox color={!email.hidden ? 'red' : 'black'}>이메일</Logins.NameBox>
          <Logins.InputBox
            color={!email.hidden ? 'red' : 'black'}
            ref={emailInput}
            id="email"
            type="email"
            placeholder="예) sort@sort.co.kr"
            defaultValue={email.value}
            onChange={(e) => checkEmail(e.target.value)}
          />
          <Logins.HiddenMessage hidden={email.hidden}>{email.text}</Logins.HiddenMessage>

          <Signups.Certified>
            <Signups.CertifiedButton onClick={() => findemail()}>
              인증번호 받기
            </Signups.CertifiedButton>
          </Signups.Certified>
        </Logins.IdBox>

        <Logins.IdBox>
          <Logins.NameBox color={!id.hidden ? 'red' : 'black'}>
            아이디
            <Logins.InputBox
              color={!id.hidden ? 'red' : 'black'}
              ref={idInput}
              id="id"
              type="text"
              defaultValue={id.value}
              onChange={(e) => checkId(e.target.value)}
            />
            <Logins.HiddenMessage hidden={id.hidden}>{id.text}</Logins.HiddenMessage>
          </Logins.NameBox>
        </Logins.IdBox>

        <Logins.PasswordBox>
          <Logins.NameBox color={!password.hidden ? 'red' : 'black'}>
            비밀번호
            <Logins.InputBox
              color={!password.hidden ? 'red' : 'black'}
              ref={passwordInput}
              id="password"
              type="password"
              defaultValue={password.value}
              onChange={(e) => checkPassword(e.target.value)}
            />
            <Logins.HiddenMessage hidden={password.hidden}>{password.text}</Logins.HiddenMessage>
          </Logins.NameBox>
        </Logins.PasswordBox>
        <Logins.PasswordBox>
          <Logins.NameBox color={!passwordCheck.hidden ? 'red' : 'black'}>
            비밀번호 확인
            <Logins.InputBox
              color={!passwordCheck.hidden ? 'red' : 'black'}
              ref={passwordCheckInput}
              id="password-check"
              type="password"
              defaultValue={passwordCheck.value}
              onChange={onChangePasswordCheck}
            />
            <Logins.HiddenMessage hidden={passwordCheck.hidden}>
              {passwordCheck.text}
            </Logins.HiddenMessage>
          </Logins.NameBox>
          {mismatchError && (
            <Logins.HiddenMessage>비밀번호가 일치하지 않습니다.</Logins.HiddenMessage>
          )}
        </Logins.PasswordBox>

        <Logins.Button
          onClick={() => {
            register();
          }}
        >
          가입하기
        </Logins.Button>
      </Logins.Box>
    </Logins.Container>
  );
};

export default Signup;
