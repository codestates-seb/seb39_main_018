import styled from 'styled-components';

const MainContainer = styled.div`
  display: block;
  width: 1000px;
  margin: auto;
`;

const ContainerTop = styled.div`
  margin: 0;
  padding: 0;
`;

const TopTitle = styled.h2`
  display: flex;
  height: 70px;
  font-size: 26px;
  align-items: center;
  border-bottom: 1.4px solid rgb(0, 0, 0, 0.8);
  font-weight: 500;
  line-height: 30px;
`;
const RedSpan = styled.span`
  color: red;
  opacity: 0.8;
  font-size: 14px;
  line-height: 100%;
  margin-left: 3px;
`;

const WriteBox = styled.div`
  background-color: #fff;
  border-bottom: 1.4px solid rgb(0, 0, 0, 0.8);
  margin-bottom: 25px;
  text-align: left;
  letter-spacing: -0.5px;
`;

const Writeframe = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.3);
`;

const MiniTitle = styled.div`
  width: 100px;
  font-size: 18px;

  small {
    color: rgb(0, 0, 0, 0.3);
    margin-left: 3px;
    font-size: 70%;
  }
`;

// 이미지 사진 등록
const ImgWrap = styled.div`
  flex: 1 1 0%;
  position: relative;
`;

const Wrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 900px;
`;

const InputBox = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 0px;
  width: 162px;
  height: 162px;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgb(0, 0, 0, 0.03);
  justify-content: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  margin-right: 20px;
  margin-bottom: 15px;

  input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0;
    cursor: pointer;
    font-size: 0px;
    padding: 0px;
  }
`;

const UpImg = styled.div`
  width: 162px;
  height: 162px;
  border: 1px solid rgb(230, 229, 239);
  margin-right: 1rem;
  margin-bottom: 1rem;
  list-style-type: none;
  position: relative;
  display: flex;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-style: none;
  }

  span {
    width: 1.5rem;
    height: 1.5rem;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 12px 12px;
    background-color: rgba(30, 29, 41, 0.32);
    border-radius: 50%;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    outline: none;
  }
`;

//
const GreyInput = styled.input`
  color: #333d4b;
  padding-left: 10px;
  padding-right: 30px;
  height: 38px;
  width: 95%;
  font-size: 15px;
  letter-spacing: -0.13px;
  outline: 0;
  border: 0;
  border-bottom: 1px solid #ebebeb;

  &:focus {
    border-bottom: 1px solid #111;
  }
`;

// 카테고리

export default {
  MainContainer,
  ContainerTop,
  TopTitle,
  RedSpan,
  WriteBox,
  Writeframe,
  MiniTitle,
  ImgWrap,
  Wrap,
  InputBox,
  UpImg,
  GreyInput,
};
