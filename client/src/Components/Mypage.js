import React, { useState, useEffect } from 'react';
import Modal from './Modals/Modal';
import Login from './Login';

const Mypage = () => {
  // 모달창 노출 여부 state
  const [signUpModalOn, setSignUpModalOn] = useState(false);
  const [signInModalOn, setSignInModalOn] = useState(false);

  const openSignUpModal = () => {
    setSignUpModalOn(true);
  };
  const closeSignUpModal = () => {
    setSignUpModalOn(false);
  };

  const openSignInModal = () => {
    setSignInModalOn(true);
  };
  const closeSignInModal = () => {
    setSignInModalOn(false);
  };

  return (
    <React.Fragment>
      <button onClick={openSignUpModal}>모달회원가입</button>
      <Modal open={signUpModalOn} close={closeSignUpModal} header="모달 회원가입">
        흑흑
      </Modal>
      <button onClick={openSignInModal}>모달로그인</button>
      <Modal open={signInModalOn} close={closeSignInModal} header="모달 로그인">
        <Login />
      </Modal>
    </React.Fragment>
  );
};

export default Mypage;
