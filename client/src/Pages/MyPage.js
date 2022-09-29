import React, { useState, useEffect } from 'react';
import Modal from '../Components/Modals/Modal';
import Login from '../Components/Modals/Login/General/Login';
import Signup from '../Components/Modals/SignUp/Signup';
import Find from '../Components/Modals/IDPWFind/Find';

const MyPage = () => {
  // 모달창 노출 여부 state
  const [signUpModalOn, setSignUpModalOn] = useState(false);
  const [signInModalOn, setSignInModalOn] = useState(false);
  const [findModalOn, setFindModalOn] = useState(false);

  // 회원가입
  const openSignUpModal = () => {
    setSignUpModalOn(true);
  };
  const closeSignUpModal = () => {
    setSignUpModalOn(false);
  };

  // 로그인
  const openSignInModal = () => {
    setSignInModalOn(true);
  };
  const closeSignInModal = () => {
    setSignInModalOn(false);
  };

  // id/pw찾기
  const openFindModal = () => {
    setFindModalOn(true);
  };
  const closeFindModal = () => {
    setFindModalOn(false);
  };

  // 로그인창 안에서 회원가입 누를때
  const loginCloseSignupOpen = () => {
    setSignInModalOn(false);
    setSignUpModalOn(true);
  };

  // 로그인창 안에서 id/pw찾기 누를때
  const loginCloseFindOpen = () => {
    setSignInModalOn(false);
    setFindModalOn(true);
  };

  return (
    <>
      <button onClick={openSignUpModal}>모달회원가입</button>
      <Modal open={signUpModalOn} close={closeSignUpModal}>
        <Signup />
      </Modal>
      <button onClick={openSignInModal}>모달로그인</button>
      <Modal open={signInModalOn} close={closeSignInModal}>
        <Login signupClickInLogin={loginCloseSignupOpen} findClickInLogin={loginCloseFindOpen} />
      </Modal>

      <button onClick={openFindModal}>id/pw찾기</button>
      <Modal open={findModalOn} close={closeFindModal}>
        <Find />
      </Modal>
    </>
  );
};

export default MyPage;
