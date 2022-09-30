import React from 'react';
import { BasicBtn } from '../Button/Button';
import { InputUI } from '../Input/Input';
import {
  FooterContainer,
  MainSection,
  IntroSection,
  IntroTitle,
  ConactSection,
  LogoSection,
  IntroNav,
  SearchInput,
  FooterIntro,
  FooterConact,
  ConactIcon,
  FooterLogo,
  ConactTop,
  SubSection,
  Copylight,
  Notice,
} from './Footerstyle';

import emailimg from '../../Imgs/email.png';
import { InstaIcon, EmailIcon, GithubIcon, YoutubeIcon } from '../Icons/Icons';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterMain />
      <FooterSub />
    </FooterContainer>
  );
};

const FooterMain = () => {
  return (
    <MainSection>
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </MainSection>
  );
};

const LeftSection = () => {
  return (
    <IntroSection>
      <FooterIntro>
        <IntroTitle>
          <p className="title">INTRODUCE</p>
          <p className="border_line long" />
        </IntroTitle>
        <IntroNav>
          <p className="top_intro">Home</p>
          <p className="top_intro">Main</p>
          <p className="top_intro">Menu</p>
          <p className="top_intro">About</p>
          <p className="top_intro end">Login</p>
        </IntroNav>
        <IntroNav>
          <p className="bottom_intro">Eunsoo</p>
          <p className="bottom_intro">YeonJoo</p>
          <p className="bottom_intro">HyeJin</p>
          <p className="bottom_intro end">JiHong</p>
        </IntroNav>
      </FooterIntro>
    </IntroSection>
  );
};
const MiddleSection = () => {
  return (
    <LogoSection>
      <FooterLogo>
        <p>SORT</p>
      </FooterLogo>
      <SearchInput>
        <InputUI width="200px" height="15px" placeholder="이메일을 입력 해주세요" />
        <BasicBtn width="75px" height="35px" background="lightpink" left="10px">
          SEND
        </BasicBtn>
      </SearchInput>
    </LogoSection>
  );
};

const RightSection = () => {
  return (
    <ConactSection>
      <FooterConact>
        <ConactTop>
          <p className="title">CONACT</p>
          <p className="border_line" />
        </ConactTop>
        <ConactIcon>
          <p className="github_icon">
            <GithubIcon />
          </p>
        </ConactIcon>
        <ConactIcon>
          <p>
            <YoutubeIcon />
          </p>
        </ConactIcon>
        <ConactIcon>
          <p>
            <InstaIcon />
          </p>
        </ConactIcon>
        <ConactIcon>
          <p>
            <EmailIcon />
          </p>
        </ConactIcon>
      </FooterConact>
    </ConactSection>
  );
};

const FooterSub = () => {
  return (
    <SubSection>
      <Copylight>By Copylight Ⓒ2022</Copylight>
      <Notice>
        {' '}
        솔트 서비스 내 상품을 제외한 모든 상품은 개인간 거래로 이루어지며 , 구매 및 판매시 신중하게
        진행하시길 바랍니다. 또한 거래에 대한 법적 책임을 지지 않습니다.
      </Notice>
    </SubSection>
  );
};

export default Footer;
