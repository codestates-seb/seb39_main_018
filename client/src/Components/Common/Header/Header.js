import React, { useState } from 'react';
import { InputUI } from '../Input/Input';
import NavIcon from '../../Imgs/navbarimg';
import {
  HeaderContainer,
  NavbarBottom,
  NavbarSection,
  NavbarTop,
  NavbarMiddle,
  NavbarMain,
  LoginSection,
  LoginBox,
  LogoSection,
  SearchSection,
  SearchMain,
  ButtonSection,
  BottomUnderLine,
  CategorySection,
  CategoryMain,
} from './HeaderStyle';
import { useNavigate } from 'react-router-dom';
import { closeCategory, selectCategory, createTag } from '../../../redux/itemslice';
import { useDispatch, useSelector } from 'react-redux';
import { imgname, sortlogo } from '../../Imgs/headerImgs/imgExport';

import Modal from '../../Modals/Modal';
import Login from '../../Modals/Login/General/Login';
import Signup from '../../Modals/SignUp/Signup';
import Find from '../../Modals/IDPWFind/Find';
import {
  checkLogin,
  keepLogin,
  postLogout,
  chekckLocal,
  localLogout,
  keeplocalLogin,
} from '../../../util/requestLogin';
import axios from 'axios';

const Header = (props) => {
  const [signUpModalOn, setSignUpModalOn] = useState({ open: false });
  const [signInModalOn, setSignInModalOn] = useState({ open: false });
  const [fwModalOn, setFwModalOn] = useState({ open: false });
  const navigate = useNavigate();
  keeplocalLogin();
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

  const SignupClick = () => {
    props.open();
  };

  const FindClick = () => {
    props.findClickInLogin();
  };

  const loginCloseSignupOpen = () => {
    setSignInModalOn({ open: false });
    setSignUpModalOn({ open: true });
  };

  // 로그인창 안에서 pw찾기 누를때
  const loginCloseFindOpen = () => {
    setSignInModalOn({ open: false });
    setSignUpModalOn({ open: false });
    setFwModalOn({ open: true });
  };

  // pw찾기창 안에서 로그인 누를때
  const findCloseLoginOpen = () => {
    setFwModalOn({ open: false });
    setSignInModalOn({ open: true });
    setFwModalOn({ open: false });
  };

  const NavButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoad = useSelector((state) => state.items.isLoad);
    return (
      <ButtonSection>
        {/* {signUpModalOn ? <Modal /> : null} */}
        <p>
          <img
            className="manIcon"
            src={NavIcon.user}
            onClick={() => (chekckLocal ? navigate('/mypage') : openSignInModal('login'))}
          />
        </p>
        <p>
          <img
            src={NavIcon.message3}
            onClick={() => (chekckLocal ? navigate('/chat') : openSignInModal('login'))}
          />
        </p>
        <p>
          <img src={NavIcon.menu} onClick={() => dispatch(closeCategory(!isLoad))} />
        </p>
      </ButtonSection>
    );
  };
  const NavNonUser = () => {
    console.log(localStorage.getItem('socialtoken'));
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

  return (
    <>
      <Modal open={signUpModalOn.open} close={() => closeSignInModal('signup')}>
        <Signup />
      </Modal>

      <Modal open={signInModalOn.open} close={() => closeSignInModal('login')}>
        <Login findClickInLogin={loginCloseFindOpen} signupClickInLogin={loginCloseSignupOpen} />
      </Modal>
      <Modal open={fwModalOn.open} close={() => closeSignInModal('find')}>
        <Find open={findCloseLoginOpen} />
      </Modal>
      <HeaderContainer>
        <NavbarSection>
          <NavbarTop>{chekckLocal ? <NavUser navigate={navigate} /> : <NavNonUser />}</NavbarTop>
          <NavbarMiddle>
            <NavbarMain>
              <NavLogo />
              <NavSearch />
              <NavButton />
            </NavbarMain>
          </NavbarMiddle>
          <NavbarBottom>
            <NavCategory />
          </NavbarBottom>
        </NavbarSection>
      </HeaderContainer>
    </>
  );
};
const NavSearch = () => {
  const dispatch = useDispatch();
  const handletest = (e) => {
    const data = e.target.value;
    const url = `full?title=${data}&body=${data}`;
    if (e.key === 'Enter') {
      dispatch(createTag(data));
      e.target.value = '';
    }
    // e.key === 'Enter' ? dispatch(createTag(data)), (e.target.value = '')) : null;
    // console.log(data);
  };
  return (
    <SearchSection>
      <SearchMain>
        <InputUI
          onChange={handletest}
          onKeyPress={handletest}
          placeholder="검색"
          radius="20px"
          border="none"
          color="black"
          padding="15px"
          width="140px"
        />
      </SearchMain>
    </SearchSection>
  );
};

const NavCategory = () => {
  const dispatch = useDispatch();
  const isLoad = useSelector((state) => state.items.isLoad);
  const categorylist = useSelector((state) => state.items.categorys);
  const abcd = useSelector((state) => state.items.tags);
  const focusCategory = useSelector((state) => state.items.category);

  return (
    <>
      {!isLoad ? null : (
        <BottomUnderLine>
          <CategorySection>
            {categorylist.map((li, i) => {
              return (
                <CategoryMain key={i} onClick={() => dispatch(selectCategory(li))}>
                  <p className="category_icon">
                    <img className={focusCategory === li ? 'select_img' : ''} src={imgname[i]} />
                  </p>
                  <p className={focusCategory === li ? 'select_text' : 'category_text'}>{li}</p>
                </CategoryMain>
              );
            })}
          </CategorySection>
        </BottomUnderLine>
      )}
    </>
  );
};
const NavUser = () => {
  const navigate = useNavigate();
  return (
    <LoginSection>
      <LoginBox>
        <p className="log_left" onClick={() => navigate('/mypage')}>
          마이페이지
        </p>
        <p className="log_right" onClick={() => localLogout()}>
          로그아웃
        </p>
      </LoginBox>
    </LoginSection>
  );
};

const NavLogo = () => {
  const navigate = useNavigate();
  return (
    <LogoSection>
      <p>
        <img src={sortlogo} onClick={() => navigate('/')} />
      </p>
    </LogoSection>
  );
};

export default Header;
