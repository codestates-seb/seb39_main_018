// import styled from 'styled-components';

// const FooterContainer = styled.div`
//   /* border-top: 1px solid var(--lightgray); */
//   width: 100%;
//   height: 300px;
//   background: #767676;
// `;

// const ParantSetting = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 500px;
//   height: 200px;
// `;
// const ChilidSetting = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   color: white;
// `;

// const MainSection = styled(ParantSetting)`
//   width: 100%;
//   padding-top: 10px;
//   .title {
//     /* border: 1px solid black; */
//     width: 100%;
//     text-align: center;
//     font-size: 22px;
//     font-weight: bold;
//   }
//   .border_line {
//     margin-top: 5px;
//     width: 80px;
//     border: 1px solid;
//   }
//   .long {
//     width: 120px;
//   }
// `;
// const IntroSection = styled(ParantSetting)``;

// const FooterIntro = styled(ChilidSetting)`
//   height: 150px;
//   flex-wrap: wrap;
//   //border: 1px solid black;
// `;
// const IntroTitle = styled(ChilidSetting)`
//   flex-wrap: wrap;
// `;
// const IntroNav = styled(ChilidSetting)`
//   width: 100%;
//   font-size: 12px;
//   p {
//     height: 11px;
//     padding: 0 12px;
//     border-right: 1px solid;
//     cursor: pointer;
//   }
//   .top_intro {
//     padding: 0 20px;
//   }
//   .end {
//     border: none;
//   }
//   p:hover {
//     color: #c0c1c2;
//   }
// `;

// const ConactSection = styled(ParantSetting)``;
// const LogoSection = styled(ParantSetting)`
//   flex-wrap: wrap;
//   align-items: flex-start;
//   height: 130px;
// `;

// const SearchInput = styled(ChilidSetting)`
//   height: 120px;
//   //border: 1px solid black;
// `;
// const FooterLogo = styled(ChilidSetting)`
//   height: 50px;
//   //border: 1px solid black;
//   font-size: 50px;
//   align-items: flex-start;
// `;
// const FooterConact = styled(ChilidSetting)`
//   //border: 1px solid black;
//   height: 150px;
//   flex-wrap: wrap;
//   justify-content: center;
//   .icon {
//     width: 70px;
//     height: 70px;
//     background: lightcyan;
//     border-radius: 50%;
//   }
// `;

// const ConactIcon = styled(ChilidSetting)`
//   padding: 10px;
//   width: 20px;
//   height: 20px;
//   background: lightcyan;
//   border-radius: 50%;
//   font-size: 30px;
//   color: #393d42;
//   margin: 0 20px;
//   cursor: pointer;
//   p {
//     padding-top: 8px;
//   }
//   ${ConactIcon}:hover{
//     background:#8ca2b8;
//   }
// `;
// const ConactTop = styled(ChilidSetting)`
//   height: 30px;
//   flex-wrap: wrap;
// `;

// const SubSection = styled(ChilidSetting)`
//   margin-top: 30px;
//   border-top: 1px solid white;
//   height: 60px;
// `;
// const Notice = styled.div`
//   color: white;
//   width: 350px;
//   font-size: 10px;
//   margin-left: 30px;
// `;
// const Copylight = styled.div`
//   color: white;
//   font-size: 12px;
// `;

// export {
//   MainSection,
//   FooterContainer,
//   IntroSection,
//   IntroTitle,
//   IntroNav,
//   ConactSection,
//   LogoSection,
//   SearchInput,
//   FooterIntro,
//   FooterConact,
//   ConactIcon,
//   FooterLogo,
//   ConactTop,
//   SubSection,
//   Copylight,
//   Notice,
// };
import { SiBitly } from 'react-icons/si';
import styled from 'styled-components';

const FooterContainer = styled.div`
  /* border-top: 1px solid var(--lightgray); */
  display: block;
  width: 100%;
  font-weight: 450;
  letter-spacing: -0.3;
  font-size: 1.1rem;
  line-height: 2;
  height: 300px;
  background: white;
  color: black;
  margin: 0 auto;

  @media only screen and (min-width: 580px) {
    min-height: 200px;
  }
`;

const FooterBox = styled.div`
  padding-top: 60px;
  padding-left: 40px;
  padding-right: 40px;

  @media only screen and (min-width: 580px) {
    padding-right: 130px;
    padding-left: 130px;
    padding-top: 40px;
    padding-bottom: 0;
  }
`;

const FooterContent = styled.div`
  margin-bottom: 20px;
`;

const FooterList = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1.4px solid rgba(0, 0, 0, 0.1);
  padding: 47px 0;

  @media only screen and (min-width: 580px) {
    width: 100%;
  }
`;

const FooterLeft = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  margin-right: 12%;

  @media only screen and (max-width: 580px) {
    margin-right: 6%;
  }
`;

const H4Title = styled.h4`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  padding-bottom: 10px;
`;

const Contact = styled.ul`
  list-style: none;
`;

const FooterLink = styled.li`
  margin-top: 8px;
  text-align: left;
`;

const JustSpan = styled.span`
  font-size: 0.74rem;
  line-height: 1.8rem;
  font-weight: lighter;
  opacity: 0.5;
  letter-spacing: -0.2px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 1;
    transition-duration: 0.25s;
  }
`;

const FooterRight = styled.div`
  @media only screen and (min-width: 600px) {
    margin-top: 0;
    width: auto;
    display: inline-block;
    padding-left: 0;
    padding-right: 0;
  }
`;

const Right = styled.div`
  @media only screen and (min-width: 600px) {
    text-align: right;
  }
`;

const SnsBox = styled.div`
  display: flex;
  font-size: 25px;

  @media only screen and (min-width: 600px) {
    margin-left: 30px;
  }
`;

const Sns = styled.div`
  cursor: pointer;
  text-decoration: none;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transition-duration: 0.25s;
  }

  @media only screen and (min-width: 600px) {
    padding-right: 30px;
  }
`;

const Bottom = styled.div`
  padding: 16px 0;
  display: flex;
  flex: 3;
  align-items: center;
  border-top: 1.4px solid rgba(0, 0, 0, 0.1);
`;

const BottomLeft = styled.div`
  display: flex;
  color: grey;
  font-size: 0.3rem;
  letter-spacing: -0.4px;
`;

const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  flex: auto;
`;

const CopyRightAndFrom = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
`;

const FromBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-weight: 500;
  font-size: 0.4rem;

  @media only screen and (min-width: 600px) {
    font-size: 0.7rem;
    margin-right: 50px;
  }
`;

export default {
  FooterContainer,
  FooterBox,
  FooterContent,
  FooterList,
  FooterLeft,
  Left,
  H4Title,
  Contact,
  FooterLink,
  JustSpan,
  FooterRight,
  Right,
  SnsBox,
  Sns,
  Bottom,
  BottomLeft,

  BottomRight,
  CopyRightAndFrom,
  FromBox,
};
