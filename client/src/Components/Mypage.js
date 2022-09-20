import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Modal } from '../style/MypageStyle';

const Mypage = () => {
  // 로그인 X
  const navigate = useNavigate();
  return (
    <div>
      Mypage
      <Modal>
        <div className="modalcontent">
          <button onClick={() => navigate('/login')}>모달 로그인</button>
          <button onClick={() => navigate('/signup')}>모달회원가입</button>
        </div>
      </Modal>
    </div>
  );
};




export default Mypage;