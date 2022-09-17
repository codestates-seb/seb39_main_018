import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
  // 로그인 X
  const navigate = useNavigate();
  return (
    <div>
      Mypage
      <button onClick={() => navigate('/login')}>로그인</button>
      <button onClick={() => navigate('/signup')}>회원가입</button>
    </div>
  );
};

export default Mypage;
