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
import { closeCategory, selectCategory, createTag, searchitem } from '../../../redux/itemslice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../Modals/Modal';
import Login from '../../Modals/Login/General/Login';
import Signup from '../../Modals/SignUp/Signup';
import Find from '../../Modals/IDPWFind/Find';
import { imgname, sortlogo } from '../../Imgs/headerImgs/imgExport';

const Header = () => {
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
    setFwModalOn({ open: true });
  };

  // pw찾기창 안에서 로그인 누를때
  const findCloseLoginOpen = () => {
    setFwModalOn({ open: false });
    setSignInModalOn({ open: true });
  };

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
    const navigate = useNavigate();
    return (
      <LogoSection onClick={() => navigate('/')}>
        <p>
          <img src={sortlogo} />
        </p>
      </LogoSection>
    );
  };
  const NavSearch = () => {
    const dispatch = useDispatch();
    const handletest = (e) => {
      const data = e.target.value;
      const url = `full?title=${data}&body=${data}`;
      e.key === 'Enter' ? (dispatch(createTag(data)), (e.target.value = '')) : null;
      console.log(data);
    };
    return (
      <SearchSection>
        <SearchMain>
          <InputUI
            onChange={handletest}
            onKeyUp={handletest}
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

  const NavButton = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.items.isLoad);
    const navigate = useNavigate();
    return (
      <ButtonSection>
        <p>
          <img className="manIcon" src={NavIcon.user} />
        </p>
        <p>
          <img src={NavIcon.message3} />
        </p>
        <p>
          <img
            className="burger"
            src={NavIcon.menu}
            onClick={() => dispatch(closeCategory(!selector))}
          />
        </p>
      </ButtonSection>
    );
  };
  const NavCategory = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.items.isLoad);
    const categorylist = useSelector((state) => state.items.categorys);
    const abcd = useSelector((state) => state.items.tags);
    const focusCategory = useSelector((state) => state.items.category);

    return (
      <>
        {!selector ? null : (
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

  return (
    <>
      <Modal open={signUpModalOn.open} close={() => closeSignInModal('signup')}>
        <Signup />
      </Modal>

      <Modal open={signInModalOn.open} close={() => closeSignInModal('login')}>
        <Login open={loginCloseSignupOpen} close={loginCloseFindOpen} />
      </Modal>
      <Modal open={fwModalOn.open} close={() => closeSignInModal('find')}>
        <Find open={() => props.open()} />
      </Modal>

      <HeaderContainer>
        <NavbarSection>
          <NavbarTop>
            <NavFailedLog />
          </NavbarTop>
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

const NavFailedLog = () => {
  return (
    <LoginSection>
      <LoginBox>
        <p className="log_left">회원가입</p>
        <p className="log_right">로그인</p>
      </LoginBox>
    </LoginSection>
  );
};
const NavSuccessLog = () => {
  return (
    <LoginSection>
      <LoginBox>
        <p className="log_left">회원가입</p>
        <p className="log_right">로그인</p>
      </LoginBox>
    </LoginSection>
  );
};

const NavLogo = () => {
  const navigate = useNavigate();
  return (
    <LogoSection onClick={() => navigate('/')}>
      <p>
        <img src={sortlogo} />
      </p>
    </LogoSection>
  );
};
const NavSearch = () => {
  const dispatch = useDispatch();
  const handletest = (e) => {
    const data = e.target.value;
    e.key === 'Enter' ? (dispatch(createTag(data)), (e.target.value = '')) : null;
  };

  return (
    <SearchSection>
      <SearchMain>
        <InputUI
          onChange={handletest}
          onKeyPress={handletest}
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
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.items.isLoad);
  const navigate = useNavigate();
  return (
    <ButtonSection>
      <p>
        <img className="manIcon" src={NavIcon.user} />
      </p>
      <p>
        <img src={NavIcon.message3} />
      </p>
      <p>
        <img
          className="burger"
          src={NavIcon.menu}
          onClick={() => dispatch(closeCategory(!selector))}
        />
      </p>
    </ButtonSection>
  );
};
const NavCategory = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.items.isLoad);
  const categorylist = useSelector((state) => state.items.categorys);
  const abcd = useSelector((state) => state.items.tags);
  const focusCategory = useSelector((state) => state.items.category);

  return (
    <>
      {!selector ? null : (
        <BottomUnderLine>
          <CategorySection>
            {categorylist.map((li, i) => {
              return (
                <CategoryMain key={li} onClick={() => dispatch(selectCategory(li))}>
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

export default Header;
