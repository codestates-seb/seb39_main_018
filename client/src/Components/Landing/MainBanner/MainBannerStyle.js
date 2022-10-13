import styled from 'styled-components';

const MainContainer = styled.div`
  display: inline-block;
  width: 80%;
  height: 800px;
  margin-bottom: 100px;
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
  margin-top: 80px;
  margin-left: 50px;

  @media only screen and (max-width: 960px) {
  }
`;

const BoldText = styled.h3`
  font-family: HelveticaNeueBold;
  font-size: 5.5rem;
  font-weight: 800;
  line-height: 90px;
  letter-spacing: 1.5px;
  width: 258px;
  position: absolute;
  animation: slide 2s ease-out;
  @keyframes slide {
    from {
      left: 200px;
      opacity: 0;
    }
    to {
      left: 50px;
      opacity: 1;
    }
  }

  @media only screen and (max-width: 960px) {
    font-size: 5.2rem;

    @keyframes slide {
      from {
        left: -400px;
        opacity: 0;
      }
      to {
        left: 50px;
        opacity: 1;
      }
    }
  }
`;

const SubText = styled.div`
  padding-top: 400px;
`;

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
  @media only screen and (max-width: 960px) {
    font-size: 22px;
    font-weight: 300;
    line-height: 30px;

    img {
      width: 300px;
      height: 500px;

      margin-left: -50px;
    }
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

const AllviewBtn = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 10px;

  @media only screen and (max-width: 960px) {
    width: 120px;
    height: 40px;
  }
`;
export {
  MainContainer,
  MainContent,
  MainText,
  BoldText,
  SubText,
  SortLittle,
  SortMean,
  PP,
  AllviewBtn,
};
