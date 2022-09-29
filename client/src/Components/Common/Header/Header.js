import React from 'react';
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
  LogoSection,
  SearchSection,
  SearchMain,
  ButtonSection,
  CategorySection,
  CategoryMain,
} from './HeaderStyle';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  return (
    <HeaderContainer>
      <NavbarSection>
        <NavbarTop>
          <NavLogo />
          <NavSearch />
          <NavButton />
        </NavbarTop>
        <NavbarBottom>
          <NavCategory />
        </NavbarBottom>
      </NavbarSection>
    </HeaderContainer>
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
        <img className="manIcon" src={manIcon} onClick={navigate('/login')} />
      </p>
      <p>
        <img src={message} onClick={navigate('/login')} />
      </p>
      <p>
        <img className="burger" src={burger} onClick={'ds'} />
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

export default Header;
