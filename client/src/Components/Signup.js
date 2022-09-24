import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { get } from '../util/axios';
import { useState, useCallback } from 'react';
import Logins from '../style/LoginStyle';
import Signups from '../style/SignupStyle';
import Login from './Login';

const Signup = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [mismatchError, setMismatchError] = useState(false);
  const [email, setEmail] = useState('');

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password.value);
    },
    [password],
  );

  async function register() {
    if (id.value.length > 7 && email.value.includes('@') && !mismatchError) {
      let parameter = {};
      parameter = {
        id: id.value,
        password: password.value,
        email: email.value,
      };
      const registerClient = await get(``, parameter);
      return registerClient;
    }
  }

  // const register = () => {
  //   if (id.value !== '' && email.value !== '' && password.value === passwordCheck.value) {
  //     axios
  //       .post('', {
  //         headers: {},
  //         id: id,
  //         password: password,
  //         email: email,
  //       })
  //       .then((res) => {
  //         navigate('/');
  //       })
  //       .catch((err) => {
  //         window.alert('회원가입 실패!');
  //         console.log(err);
  //       });
  //   }
  // };

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
          <Logins.NameBox>이메일</Logins.NameBox>
          <Logins.InputBox
            id="email"
            type="email"
            placeholder="예) sort@sort.co.kr"
            defaultValue={email.value}
            onChange={(e) => checkEmail(e.target.value)}
          />
          <Logins.HiddenMessage hidden={email.hidden}>{email.text}</Logins.HiddenMessage>

          <Signups.Certified>
            <Signups.CertifiedButton>인증번호 받기</Signups.CertifiedButton>
          </Signups.Certified>
        </Logins.IdBox>

        <Logins.IdBox>
          <Logins.NameBox>
            아이디
            <Logins.InputBox
              id="id"
              type="text"
              defaultValue={id.value}
              onChange={(e) => checkId(e.target.value)}
            />
            <Logins.HiddenMessage hidden={id.hidden}>{id.text}</Logins.HiddenMessage>
          </Logins.NameBox>
        </Logins.IdBox>

        <Logins.PasswordBox>
          <Logins.NameBox>
            비밀번호
            <Logins.InputBox
              id="password"
              type="password"
              defaultValue={password.value}
              onChange={(e) => checkPassword(e.target.value)}
            />
            <Logins.HiddenMessage hidden={password.hidden}>{password.text}</Logins.HiddenMessage>
          </Logins.NameBox>
        </Logins.PasswordBox>
        <Logins.PasswordBox>
          <Logins.NameBox>
            비밀번호 확인
            <Logins.InputBox
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
