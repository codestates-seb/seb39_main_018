import styled from 'styled-components';

const LodingUI = styled.div`
  position: relative;
  margin: 100px auto 0;
  width: 70px;
  text-align: center;
`;

const Alloption = styled.div`
  width: 18px;
  height: 18px;
  background-color: #7289e5;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

const BounceBall1 = styled(Alloption)`
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
  background-color: #b3bde5;
`;
const BounceBall2 = styled(Alloption)`
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  background-color: #778ad7;
`;
const BounceBall3 = styled(Alloption)``;

export { LodingUI, BounceBall1, BounceBall2, BounceBall3 };
