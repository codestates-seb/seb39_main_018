import React, { useState, useEffect } from 'react';
import Modal from './Modals/Modal';
import Login from './Login';
import Signup from './Signup';

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

  const loginCloseSignupOpen = () => {
    setSignInModalOn(false);

    setSignUpModalOn(true);
  };

  return (
    <React.Fragment>
      <button onClick={openSignUpModal}>모달회원가입</button>
      <Modal open={signUpModalOn} close={closeSignUpModal}>
        <Signup />
      </Modal>
      <button onClick={openSignInModal}>모달로그인</button>
      <Modal open={signInModalOn} close={closeSignInModal}>
        <Login signupClickInLogin={loginCloseSignupOpen} />
      </Modal>
    </React.Fragment>
  );
};

export default Mypage;
