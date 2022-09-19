import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { get } from '../util/axios';
import { useState, useCallback } from 'react';

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
    if (id.value !== '' && email.value !== '' && password.value === passwordCheck.value) {
      let parameter = {};
      parameter = {
        id: id.value,
        password: password.value,
        email: email.value,
      };
      const registerClient = await get(``, parameter);
      const registerClientUser = await registerClient.json();
      return registerClientUser;
    }
  }

  const checkId = (value) => {
    if (value.length === 0 || value === '') {
      setId({ value: value, text: '아이디를 입력해주세요!', hidden: false });
      return;
    }
    if (value.length < 8) {
      setId({ value: value, text: '아이디를 8글자 이상 입력해주세요!', hidden: false });
      return;
    }
    setId({ value: value, text: '', hidden: true });
  };

  const checkPassword = (value) => {
    if (value.length === 0 || value === '') {
      setPassword({ value: value, text: '비번 입력해주세요!', hidden: false });
      return;
    }
    if (value.length < 8) {
      setPassword({ value: value, text: '비번을 8글자 이상 입력해주세요!', hidden: false });
      return;
    }
    setPassword({ value: value, text: '', hidden: true });
  };

  const checkEmail = (value) => {
    if (value.length === 0 || value === '') {
      setEmail({ value: value, text: '이멜ㄹ 입력해주세요!', hidden: false });
      return;
    }
    if (!value.includes('@')) {
      setEmail({ value: value, text: '이메일 형식이 올바르지 않습니다!', hidden: false });
      return;
    }
    setEmail({ value: value, text: '', hidden: true });
  };

  return (
    <div className="container">
      <h3>회원가입</h3>
      <div className="id">
        아이디
        <input
          id="id"
          type="text"
          defaultValue={id.value}
          onChange={(e) => checkId(e.target.value)}
        />
        <span hidden={id.hidden}>{id.text}</span>
      </div>
      <div className="password">
        비번
        <input
          id="password"
          type="text"
          defaultValue={password.value}
          onChange={(e) => checkPassword(e.target.value)}
        />
        <span hidden={password.hidden}>{password.text}</span>
      </div>
      <div className="passwordcheck">
        비번 확인
        <input
          id="password-check"
          type="text"
          defaultValue={passwordCheck.value}
          onChange={onChangePasswordCheck}
        />
        <span hidden={passwordCheck.hidden}>{passwordCheck.text}</span>
      </div>
      {mismatchError && <span>비번이 일치하지 않습니다.</span>}

      <div className="email">
        이메일
        <input
          id="email"
          type="text"
          defaultValue={email.value}
          onChange={(e) => checkEmail(e.target.value)}
        />
        <span hidden={email.hidden}>{email.text}</span>
      </div>
      <div className="fin">
        <button
          onClick={() => {
            register();
          }}
        >
          가입하기
        </button>
      </div>
    </div>
  );
};

export default Signup;
