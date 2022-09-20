import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterTopBox,
  FooterBottom,
  FooterBottomBox,
} from '../style/CommonStyle/Footerstyle';

const Footer = () => {
  return <FooterUI />;
};

const FooterUI = () => {
  return (
    <FooterContainer>
      <FooterTopBox>
        <FooterContent>
          <h3>INTRODUCE</h3>
          <p>Home</p>
          <p>Menu</p>
          <p>About</p>
          <p>Help</p>
        </FooterContent>
        <FooterContent>
          <h3>CONACT</h3>
          <p>Eunsoo</p>
          <p>YeonJoo</p>
          <p>HyeJin</p>
          <p>JiHong</p>
        </FooterContent>
      </FooterTopBox>
      <FooterBottomBox>
        <FooterBottom>By Corporation Ⓒ2022</FooterBottom>
        <FooterBottom>
          <div className="service">
            솔트 서비스 내 상품을 제외한 모든 상품은 개인간 거래로 이루어지며 , 구매 및 판매시
            신중하게 진행하시길 바랍니다. 또한 거래에 대한 법적 책임을 지지 않습니다.
          </div>
        </FooterBottom>
      </FooterBottomBox>
    </FooterContainer>
  );
};

export default Footer;
