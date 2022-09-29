import React from 'react';
import styled from 'styled-components';

const AllSetting = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderContainer = styled(AllSetting)`
  position: relative;
  width: 100%;
  height: 180px;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 100px;
`;
const NavbarSection = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  justify-content: center;
`;
const NavbarTop = styled(AllSetting)`
  width: 100%;
  height: 20px;
  border-bottom: 1px solid var(--lightgray);
  padding: 3px;
  justify-content: center;
`;

const NavbarMiddle = styled(AllSetting)`
  align-items: flex-start;
  width: 70%;
  padding: 20px;
  height: 50px;
`;

const NavbarBottom = styled(AllSetting)`
  width: 100%;
  padding: 20px;
  justify-content: center;
  border: 1px solid var(--lightgray);
`;

const LoginSection = styled(AllSetting)`
  width: 65%;
  justify-content: end;
  font-size: 13px;
  color: #696969;
  p {
    cursor: pointer;
  }
  .log_left {
    padding-right: 30px;
    border-right: 1px solid var(--lightgray);
  }
  p:hover {
    color: #bfbdbd;
  }
`;
const LoginBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const LogoSection = styled(AllSetting)`
  width: 200px;
  height: 100%;
  justify-content: center;
  p {
    font-size: 50px;
    font-weight: bold;
  }
`;
const SearchSection = styled(AllSetting)`
  width: 750px;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;
const SearchMain = styled.div`
  width: 280px;
  margin-right: 80px;
`;
const ButtonSection = styled(AllSetting)`
  width: 300px;
  height: 100%;
  align-items: center;
  justify-content: space-around;

  img {
    width: 40px;
    height: 40px;
    padding-top: 5px;
    cursor: pointer;
  }
  .manIcon {
    border-radius: 50%;
    background: lightblue;
  }
`;
const CategorySection = styled(AllSetting)`
  width: 70%;
  // border: 1px solid;
  justify-content: space-around;
`;

const CategoryMain = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: lightgray;
  cursor: pointer;
`;

export {
  HeaderContainer,
  NavbarSection,
  NavbarTop,
  NavbarMiddle,
  NavbarBottom,
  LoginSection,
  LoginBox,
  LogoSection,
  SearchSection,
  SearchMain,
  ButtonSection,
  CategorySection,
  CategoryMain,
};
