import styled from 'styled-components';

const FooterContainer = styled.div`
  /* border-top: 1px solid var(--lightgray); */
  width: 100%;
  height: 300px;
  background: #767676;
`;

const ParantSetting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 200px;
`;
const ChilidSetting = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
`;

const MainSection = styled(ParantSetting)`
  width: 100%;
  padding-top: 10px;
  .title {
    /* border: 1px solid black; */
    width: 100%;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
  }
  .border_line {
    margin-top: 5px;
    width: 80px;
    border: 1px solid;
  }
  .long {
    width: 120px;
  }
`;
const IntroSection = styled(ParantSetting)``;

const FooterIntro = styled(ChilidSetting)`
  height: 150px;
  flex-wrap: wrap;
  //border: 1px solid black;
`;
const IntroTitle = styled(ChilidSetting)`
  flex-wrap: wrap;
`;
const IntroNav = styled(ChilidSetting)`
  width: 100%;
  font-size: 12px;
  p {
    height: 11px;
    padding: 0 12px;
    border-right: 1px solid;
    cursor: pointer;
  }
  .top_intro {
    padding: 0 20px;
  }
  .end {
    border: none;
  }
  p:hover {
    color: #c0c1c2;
  }
`;

const ConactSection = styled(ParantSetting)``;
const LogoSection = styled(ParantSetting)`
  flex-wrap: wrap;
  align-items: flex-start;
  height: 130px;
`;

const SearchInput = styled(ChilidSetting)`
  height: 120px;
  //border: 1px solid black;
`;
const FooterLogo = styled(ChilidSetting)`
  height: 50px;
  //border: 1px solid black;
  font-size: 50px;
  align-items: flex-start;
`;
const FooterConact = styled(ChilidSetting)`
  //border: 1px solid black;
  height: 150px;
  flex-wrap: wrap;
  justify-content: center;
  .icon {
    width: 70px;
    height: 70px;
    background: lightcyan;
    border-radius: 50%;
  }
`;

const ConactIcon = styled(ChilidSetting)`
  padding: 10px;
  width: 20px;
  height: 20px;
  background: lightcyan;
  border-radius: 50%;
  font-size: 30px;
  color: #393d42;
  margin: 0 20px;
  cursor: pointer;
  p {
    padding-top: 8px;
  }
  ${ConactIcon}:hover{
    background:#8ca2b8;
  }
`;
const ConactTop = styled(ChilidSetting)`
  height: 30px;
  flex-wrap: wrap;
`;

const SubSection = styled(ChilidSetting)`
  margin-top: 30px;
  border-top: 1px solid white;
  height: 60px;
`;
const Notice = styled.div`
  color: white;
  width: 350px;
  font-size: 10px;
  margin-left: 30px;
`;
const Copylight = styled.div`
  color: white;
  font-size: 12px;
`;

export {
  MainSection,
  FooterContainer,
  IntroSection,
  IntroTitle,
  IntroNav,
  ConactSection,
  LogoSection,
  SearchInput,
  FooterIntro,
  FooterConact,
  ConactIcon,
  FooterLogo,
  ConactTop,
  SubSection,
  Copylight,
  Notice,
};
