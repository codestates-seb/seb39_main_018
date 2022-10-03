import React, { useState } from 'react';
import { InputUI } from '../Input/Input';
import manIcon from '../../Imgs/man.png';
import message from '../../Imgs/paper-airplane.png';
import message2 from '../../Imgs/menu.png';
import burger from '../../Imgs/menu.png';
import {
  HeaderContainer,
  NavbarBottom,
  NavbarSection,
  NavbarTop,
  NavbarMiddle,
  LoginSection,
  LoginBox,
  LogoSection,
  SearchSection,
  SearchMain,
  ButtonSection,
  CategorySection,
  CategoryMain,
} from './HeaderStyle';
import { useNavigate } from 'react-router-dom';
import Modal from '../../Modals/Modal';
import Login from '../../Modals/Login/General/Login';
import Signup from '../../Modals/SignUp/Signup';
import Find from '../../Modals/IDPWFind/Find';

// import Modal from '../../Modals/LoginFindSignup';

function Header() {
  const [signUpModalOn, setSignUpModalOn] = useState({ open: false });
  const [signInModalOn, setSignInModalOn] = useState({ open: false });
  const [fwModalOn, setFwModalOn] = useState({ open: false });

  const closeSignInModal = (value) => {
    if (value === 'login') {
      setSignInModalOn({ open: false });
    } else if (value === 'signup') {
      setSignUpModalOn({ open: false });
    } else {
      setFwModalOn({ open: false });
    }
  };

  const openSignInModal = (value) => {
    if (value === 'login') {
      setSignInModalOn({ open: true });
    } else if (value === 'signup') {
      setSignUpModalOn({ open: true });
    } else {
      setFwModalOn({ open: true });
    }
  };

  // const loginCloseSignupOpen = () => {
  //   setSignInModalOn(false);
  //   setSignUpModalOn(true);
  // };

  // // 로그인창 안에서 pw찾기 누를때
  // const loginCloseFindOpen = () => {
  //   setSignInModalOn(false);
  //   setFindModalOn(true);
  // };

  const NavLog = () => {
    return (
      <LoginSection>
        <LoginBox>
          <p className="log_left" onClick={() => openSignInModal('signup')}>
            회원가입
          </p>
          <p className="log_right" onClick={() => openSignInModal('login')}>
            로그인
          </p>
        </LoginBox>
      </LoginSection>
    );
  };

  const NavLogo = () => {
    return (
      <LogoSection>
        <p>SORT</p>
      </LogoSection>
    );
  };
  const NavSearch = () => {
    return (
      <SearchSection>
        <SearchMain>
          <InputUI
            placeholder="원하는 상품을 입력해주세요"
            radius="20px"
            border="2px solid gray"
            padding="15px"
            size="15px"
            color="gray"
          />
        </SearchMain>
      </SearchSection>
    );
  };

  const NavButton = () => {
    const navigate = useNavigate();
    return (
      <ButtonSection>
        <p>
          <img className="manIcon" src={manIcon} />
        </p>
        <p>
          <img src={message} />
        </p>
        <p>
          <img className="burger" src={burger} />
        </p>
      </ButtonSection>
    );
  };

  const NavCategory = () => {
    return (
      <CategorySection>
        <CategoryMain>
          <p className="category_icon"></p>
          <p className="category_text"></p>
        </CategoryMain>
        <CategoryMain>
          <p className="category_icon"></p>
          <p className="category_text"></p>
        </CategoryMain>
        <CategoryMain>
          <p className="category_icon"></p>
          <p className="category_text"></p>
        </CategoryMain>
        <CategoryMain>
          <p className="category_icon"></p>
          <p className="category_text"></p>
        </CategoryMain>
        <CategoryMain>
          <p className="category_icon"></p>
          <p className="category_text"></p>
        </CategoryMain>
        <CategoryMain>
          <p className="category_icon"></p>
          <p className="category_text"></p>
        </CategoryMain>
        <CategoryMain>
          <p className="category_icon"></p>
          <p className="category_text"></p>
        </CategoryMain>
      </CategorySection>
    );
  };

  return (
    <>
      <Modal open={signUpModalOn.open} close={() => closeSignInModal('signup')}>
        <Signup />
      </Modal>
      {/* <button onClick={openSignInModal}>모달로그인</button> */}
      <Modal open={signInModalOn.open} close={() => closeSignInModal('login')}>
        <Login />
        {/* signupClickInLogin={loginCloseSignupOpen} findClickInLogin={loginCloseFindOpen}  */}
      </Modal>
      {/* <button onClick={openFindModal}>pw찾기</button> */}
      <Modal open={fwModalOn.open} close={() => closeSignInModal('find')}>
        <Find />
        {/* loginClickInFind={findCloseLoginOpen}  */}
      </Modal>

      <HeaderContainer>
        <NavbarSection>
          <NavbarTop>
            <NavLog />
          </NavbarTop>
          <NavbarMiddle>
            <NavLogo />
            <NavSearch />
            <NavButton />
          </NavbarMiddle>
          <NavbarBottom>
            <NavCategory />
          </NavbarBottom>
        </NavbarSection>
      </HeaderContainer>
    </>
  );
}

export default Header;
