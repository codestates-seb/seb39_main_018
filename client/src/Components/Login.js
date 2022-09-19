import React from 'react';
import { useState } from 'react';
import { get } from '../util/axios';
import { useRef } from 'react';

const Login = () => {
  const idInput = useRef();
  const passwordInput = useRef();
  const [userid, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const userlogin = async () => {
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
    <div className="exex">
      <h3>로그인</h3>
      <div className="idid">
        아이디
        <input
          ref={idInput}
          id="id"
          type="text"
          defaultValue={userid.value}
          onChange={(e) => checkUserId(e.target.value)}
        />
        <span hidden={userid.hidden}>{userid.text}</span>
      </div>
      <div className="passpass">
        비번
        <input
          ref={passwordInput}
          id="password"
          type="text"
          defaultValue={userPassword.value}
          onChange={(e) => checkUserPassword(e.target.value)}
        />
        <span hidden={userPassword.hidden}>{userPassword.text}</span>
      </div>
      <div className="finfin">
        <button
          onClick={() => {
            userlogin();
          }}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;