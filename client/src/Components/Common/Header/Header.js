import React from 'react';
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
import { itemGet } from '../../../util/RequestLogic';

const Header = () => {
  return (
    <HeaderContainer>
      <NavbarSection>
        <NavbarTop>
          <NavLog />
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
  );
};

const NavLog = () => {
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
  return (
    <LogoSection>
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

export default Header;
