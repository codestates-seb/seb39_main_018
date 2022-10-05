// import React from 'react';
// import { BasicBtn } from '../Button/Button';
// import { InputUI } from '../Input/Input';
// import {
//   FooterContainer,
//   MainSection,
//   IntroSection,
//   IntroTitle,
//   ConactSection,
//   LogoSection,
//   IntroNav,
//   SearchInput,
//   FooterIntro,
//   FooterConact,
//   ConactIcon,
//   FooterLogo,
//   ConactTop,
//   SubSection,
//   Copylight,
//   Notice,
// } from './Footerstyle';

// import emailimg from '../../Imgs/email.png';
// import { InstaIcon, EmailIcon, GithubIcon, YoutubeIcon } from '../Icons/Icons';

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterMain />
//       <FooterSub />
//     </FooterContainer>
//   );
// };

// const FooterMain = () => {
//   return (
//     <MainSection>
//       <LeftSection />
//       <MiddleSection />
//       <RightSection />
//     </MainSection>
//   );
// };

// const LeftSection = () => {
//   return (
//     <IntroSection>
//       <FooterIntro>
//         <IntroTitle>
//           <p className="title">INTRODUCE</p>
//           <p className="border_line long" />
//         </IntroTitle>
//         <IntroNav>
//           <p className="top_intro">Home</p>
//           <p className="top_intro">Main</p>
//           <p className="top_intro">Menu</p>
//           <p className="top_intro">About</p>
//           <p className="top_intro end">Login</p>
//         </IntroNav>
//         <IntroNav>
//           <p className="bottom_intro">Eunsoo</p>
//           <p className="bottom_intro">YeonJoo</p>
//           <p className="bottom_intro">HyeJin</p>
//           <p className="bottom_intro end">JiHong</p>
//         </IntroNav>
//       </FooterIntro>
//     </IntroSection>
//   );
// };
// const MiddleSection = () => {
//   return (
//     <LogoSection>
//       <FooterLogo>
//         <p>SORT</p>
//       </FooterLogo>
//       <SearchInput>
//         <InputUI width="200px" height="15px" placeholder="이메일을 입력 해주세요" />
//         <BasicBtn width="75px" height="35px" background="lightpink" left="10px">
//           SEND
//         </BasicBtn>
//       </SearchInput>
//     </LogoSection>
//   );
// };

// const RightSection = () => {
//   return (
//     <ConactSection>
//       <FooterConact>
//         <ConactTop>
//           <p className="title">CONACT</p>
//           <p className="border_line" />
//         </ConactTop>
//         <ConactIcon>
//           <p className="github_icon">
//             <GithubIcon />
//           </p>
//         </ConactIcon>
//         <ConactIcon>
//           <p>
//             <YoutubeIcon />
//           </p>
//         </ConactIcon>
//         <ConactIcon>
//           <p>
//             <InstaIcon />
//           </p>
//         </ConactIcon>
//         <ConactIcon>
//           <p>
//             <EmailIcon />
//           </p>
//         </ConactIcon>
//       </FooterConact>
//     </ConactSection>
//   );
// };

// const FooterSub = () => {
//   return (
//     <SubSection>
//       <Copylight>By Copylight Ⓒ2022</Copylight>
//       <Notice>
//         {' '}
//         솔트 서비스 내 상품을 제외한 모든 상품은 개인간 거래로 이루어지며 , 구매 및 판매시 신중하게
//         진행하시길 바랍니다. 또한 거래에 대한 법적 책임을 지지 않습니다.
//       </Notice>
//     </SubSection>
//   );
// };

// export default Footer;

import React from 'react';
import Foots from './Footerstyle';
import { HiMail } from 'react-icons/hi';
import { FaPhoneSquareAlt, FaGithubSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { GiEarthAsiaOceania } from 'react-icons/gi';

const Footer = () => {
  return (
    <Foots.FooterContainer>
      <Foots.FooterBox>
        <Foots.FooterContent>
          <Foots.FooterList>
            <Foots.FooterLeft>
              <Foots.Left>
                <Foots.H4Title>SORT</Foots.H4Title>
                <Foots.Contact>
                  <Foots.FooterLink style={{ display: 'flex' }}>
                    <HiMail
                      style={{
                        marginTop: '5px',
                      }}
                    />
                    <Foots.JustSpan
                      style={{
                        marginTop: '-2px',
                        marginLeft: '5px',
                        fontSize: '0.8rem',
                        fontWight: '480',
                        color: 'black',
                      }}
                    >
                      Send Email
                    </Foots.JustSpan>
                  </Foots.FooterLink>
                </Foots.Contact>
              </Foots.Left>

              <Foots.Left>
                <Foots.H4Title>About</Foots.H4Title>
                <Foots.Contact>
                  <Foots.FooterLink>
                    <Foots.JustSpan>Team</Foots.JustSpan>
                    <Foots.JustSpan>Client</Foots.JustSpan>
                    <Foots.JustSpan>Server</Foots.JustSpan>
                  </Foots.FooterLink>
                </Foots.Contact>
              </Foots.Left>

              <Foots.Left>
                <Foots.H4Title>Contact Us</Foots.H4Title>
                <Foots.Contact>
                  <Foots.FooterLink>
                    <Foots.JustSpan>Eunsoo</Foots.JustSpan>
                    <Foots.JustSpan>Yeonju</Foots.JustSpan>
                    <Foots.JustSpan>Hyejin</Foots.JustSpan>
                    <Foots.JustSpan>Jihong</Foots.JustSpan>
                  </Foots.FooterLink>
                </Foots.Contact>
              </Foots.Left>
            </Foots.FooterLeft>
            <Foots.FooterRight>
              <Foots.Right>
                <Foots.SnsBox>
                  <Foots.Sns>
                    <FaPhoneSquareAlt />
                  </Foots.Sns>
                  <Foots.Sns>
                    <FaGithubSquare />
                  </Foots.Sns>
                  <Foots.Sns>
                    <AiFillInstagram style={{ fontSize: '30px', marginBottom: '-3px' }} />
                  </Foots.Sns>
                </Foots.SnsBox>
              </Foots.Right>
            </Foots.FooterRight>
          </Foots.FooterList>

          <Foots.Bottom>
            <Foots.BottomLeft>
              솔트 서비스 내 상품을 제외한 모든 상품은 개인 간 거래로 이루어지며, 구매 및 판매 시
              신중하게 진행하시길 바랍니다.
              <br />
              이에 관한 법적 책임을 지지 않습니다.
            </Foots.BottomLeft>

            <Foots.BottomRight>
              <Foots.CopyRightAndFrom>
                <Foots.FromBox>
                  <GiEarthAsiaOceania />
                  <span>South Korea </span>
                </Foots.FromBox>
                <span style={{ color: 'grey', fontSize: '11px' }}>© 2022 SORT</span>
              </Foots.CopyRightAndFrom>
            </Foots.BottomRight>
          </Foots.Bottom>
        </Foots.FooterContent>
      </Foots.FooterBox>
    </Foots.FooterContainer>
  );
};

export default Footer;
