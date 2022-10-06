import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  /* width: 2000px; */
  margin-top: 30px;
`;

const Header = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  transition-duration: 0.3s;
  background-color: transparent;
  height: 70px;
  text-align: right;
  padding: 0 25px 0 30px;
  transition-property: background-color;
  img {
    width: 150px;
    opacity: 0.6;
    cursor: pointer;
    &:hover {
      opacity: 1;
      transition-duration: 0.3s;
    }
  }
`;

const HeaderRight = styled.div`
  display: inline-block;
  padding: 20px 20px;
  font-size: 25px;
  a {
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    text-decoration: none;
    margin-right: 20px;
    &:hover {
      color: black;
      transition-duration: 0.3s;
    }
  }
`;

const MainContainer = styled.div`
  display: inline-block;
  width: 80%;
  /* height: 100%; */
  height: 800px;
`;

const MainContent = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto;
  max-width: 920px;
`;

const MainText = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-top: 30px;
`;

const BoldText = styled.h3`
  font-family: HelveticaNeueBold;
  font-size: 5.5rem;
  font-weight: 800;
  line-height: 90px;
  letter-spacing: 1.5px;
  width: 258px;
  /* position: absolute; */
  animation: slide 2s ease-out;
  @keyframes slide {
    from {
      left: 200px;
      opacity: 0;
    }
    to {
      left: 0px;
      opacity: 1;
    }
  }
`;

const SubText = styled.div``;

const PP = styled.p`
  font-size: 28px;
  font-weight: 300;
  line-height: 40px;
  z-index: 123;
  img {
    overflow: hidden;
    position: absolute;
    width: 70%;
    height: 100%;
    top: 0;
    bottom: 0;
    z-index: -213;
  }
`;

const SortMean = styled.span`
  line-height: 30px;
  font-weight: 700;
  letter-spacing: -0.5px;
  font-size: 30px;
`;

const SortLittle = styled.span`
  margin-top: 14px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.6);
`;

// 구독 서비스
const Subscribe = styled.div`
  padding-top: 80px;
  font-size: 1em;
  line-height: 1.5;
  padding-bottom: 40px;
`;

const SubForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 0;
  position: static;
`;

const SubFormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SubTitle = styled.div`
  text-align: center;
  font-weight: 700;
  line-height: 1.4;
  font-size: 2.5rem;
  letter-spacing: 1px;
`;

const SubMini = styled.p`
  padding-bottom: 32px;
  padding-top: 18px;
  color: rgba(0, 0, 0, 0.7);
  letter-spacing: -0.7;
`;

export default {
  Container,
  Header,
  HeaderRight,
  MainContainer,
  MainContent,
  MainText,
  BoldText,
  SubText,
  PP,
  SortMean,
  SortLittle,
  Subscribe,
  SubForm,
  SubFormContainer,
  SubTitle,
  SubMini,
};