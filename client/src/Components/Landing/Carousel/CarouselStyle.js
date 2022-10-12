import styled from 'styled-components';
const Body = styled.div`
  align-items: center;
  background: #e3e3e3;
  display: flex;
  height: 90vh;
  justify-content: center;
  position: fixed;
  bottom: 0;
  z-index: 10210;
`;

const Slide = styled.div`
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 35px;
  margin: auto;
  left: 0;
  right: 0;
  position: fixed;
  bottom: 0;
  background-color: #000;
  color: #fff;
`;

const SlideBox = styled.div`
  display: flex;
  margin-right: auto;
  position: relative;
  list-style: none;
  width: calc(250px * 14);
  padding: 0;
  z-index: 1;
  animation: scroll 32422ms linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }
`;

const SlideContent = styled.div`
  margin-top: -27px;
  font-weight: 300;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  height: 90px;
  width: 250px;
`;

export  { Body, Slide, SlideBox, SlideContent };
