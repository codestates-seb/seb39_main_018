import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';

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
      setMismatchError(e.target.value !== password);
    },
    [password],
  );

  const register = () => {
    if (id !== '' && email !== '' && password !== '') {
      axios
        .post('', {
          headers: {},
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

  return (
    <div className="container">
      <h3>회원가입</h3>
      <div className="id">
        아이디
        <input
          id="id"
          type="text"
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        {!id && <span>아이디 입력해주세요.</span>}
      </div>
      <div className="password">
        비번
        <input
          id="password"
          type="text"
          placeholder="비번 입력해주세요"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {!password && <span>비번 입력해주세요.</span>}
      </div>
      <div className="passwordcheck">
        비번 확인
        <input
          id="password-check"
          type="text"
          placeholder="비번 입력해주세요"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
        />
        {!passwordCheck && <span>비번확인 입력해주세요.</span>}
      </div>
      {mismatchError && <span>비번이 일치하지 않습니다.</span>}

      <div className="email">
        이메일
        <input
          id="email"
          type="text"
          placeholder="이메일 입력해주세요"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {!email && <span>이멜 입력해주세요.</span>}
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
