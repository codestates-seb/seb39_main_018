import React from 'react';
import styled from 'styled-components';

const AllSetting = styled.div`
  display: flex;
  align-items: center;
`;


const HeaderContainer = styled(AllSetting)`
  width: 100%;
  height: 230px;
  border: 2px solid var(--lightgray);
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 100px;
`;

const Header_MainSection = styled(AllSetting)`
  width: 70%;
  height: 120px;
  border: 2px solid;
`;

const Header_SubSection = styled(AllSetting)``;

const LogoSection = styled(AllSetting)`
  width: 200px;
  height: 100%;

  border: 1px solid;
`;
const SearchSection = styled(AllSetting)`
  width: 680px;
  height:100%;
  align-items: center;
  border: 1px solid;
`;
const SearchMain = styled.div`
  width: 350px;
  height: 50px;
  margin-left: 250px;
  background: lightgreen;
`;
const ButtonSection = styled(AllSetting)`
  width: 400px;
  height:100%;
  border: 1px solid;
  align-items: center;
  justify-content: space-between;
  p {
    width: 50px;
    height: 50px;
    background: lightblue;
  }
`;
const CategorySection = styled.div``;

export {
  HeaderContainer,
  Header_MainSection,
  Header_SubSection,
  LogoSection,
  SearchSection,
  SearchMain,
  ButtonSection,
  CategorySection,
};
