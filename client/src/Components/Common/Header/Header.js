import React from 'react';
import {
  HeaderContainer,
  Header_MainSection,
  Header_SubSection,
  LogoSection,
  SearchSection,
  SearchMain,
  ButtonSection,
  CategorySection,
} from './HeaderStyle';
const Header = () => {
  return (
    <HeaderContainer>
      <Header_MainSection>
        <HeaderLogo />
        <HeaderSearch />
        <HeaderButton />
      </Header_MainSection>
      <Header_SubSection>
        <HeaderCategory />
      </Header_SubSection>
    </HeaderContainer>
  );
};

const HeaderLogo = () => {
  return (
    <LogoSection>
      <p>SORT</p>
    </LogoSection>
  );
};
const HeaderSearch = () => {
  return (
    <SearchSection>
      <SearchMain></SearchMain>
    </SearchSection>
  );
};

const HeaderButton = () => {
  return (
    <ButtonSection>
      <p>버튼1</p>
      <p>버튼2</p>
      <p>버튼3</p>
    </ButtonSection>
  );
};
const HeaderCategory = () => {
  return <CategorySection></CategorySection>;
};

export default Header;
