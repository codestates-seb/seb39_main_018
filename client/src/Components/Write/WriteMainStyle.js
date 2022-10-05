import styled from 'styled-components';

const MainContainer = styled.div`
  display: block;
  width: 1000px;
  margin: auto;

  @media only screen and (max-width: 960px) {
    width: 680px;
    padding: 40px;
  }
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

  @media only screen and (max-width: 960px) {
    height: 40px;
    font-size: 18px;
  }
`;
const RedSpan = styled.span`
  color: red;
  opacity: 0.8;
  font-size: 14px;
  line-height: 100%;
  margin-left: 3px;

  @media only screen and (max-width: 960px) {
    font-size: 10px;
  }
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

  @media only screen and (max-width: 960px) {
    font-size: 13px;
  }
`;

// 이미지 사진 등록
const ImgWrap = styled.div`
  flex: 1 1 0%;
  position: relative;
  display: flex;
  align-items: center;
`;

const Wrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 900px;

  @media only screen and (max-width: 960px) {
    width: 680px;
  }
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
  margin-right: 10px;
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

  @media only screen and (max-width: 960px) {
    width: 120px;
    height: 120px;
    font-size: 10px;
    margin-right: 2px;

    input {
      margin-left: 30px;
    }
  }
`;

const UpImg = styled.div`
  width: 162px;
  height: 162px;
  border: 1px solid rgb(230, 229, 239);
  margin-left: 1rem;
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

  @media only screen and (max-width: 960px) {
    width: 120px;
    height: 120px;
    margin-left: 0.5rem;

    img {
      width: 80%;
      height: 80%;
    }
  }
`;

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

  @media only screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

// 카테고리
const TicketCategory = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const CategoryBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  height: 100%;

  @media only screen and (max-width: 960px) {
    width: 200px;
  }
`;

const TicketBar = styled.select`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: rgba(0, 0, 0, 0.7);
`;

const ChoiceBox = styled.div`
  /* display: flex; */
  display: contents;
  width: 30%;
  height: 100%;
`;

const Choice = styled.div`
  display: flex;
  height: 100%;
  padding-left: 15px;
  align-items: center;
  font-size: 14px;
  margin-left: 20px;
  width: 200px;
  line-height: 100%;
  color: rgba(0, 0, 0, 0.7);
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 960px) {
    width: 100px;
    padding-left: 6px;
    font-size: 12px;
  }
`;

const ChoicePick = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  font-size: 14px;
  @media only screen and (max-width: 960px) {
    margin-left: 18px;
    font-size: 12px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: auto;
`;

const RealTag = styled.div`
  display: flex;
  padding: 9px;
  border-radius: 8px;
  margin-right: 8px;
  border: 1.2px solid rgba(0, 0, 0, 0.07);
  span {
    font-size: 13px;
    font-weight: 400;
  }

  @media only screen and (max-width: 960px) {
    margin-left: 6px;
    padding: 7px;
    margin-right: 5px;
    span {
      font-size: 10px;
    }
  }
`;

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

  TicketCategory,
  CategoryBox,
  TicketBar,
  ChoiceBox,
  Choice,
  ChoicePick,

  TagContainer,
  RealTag,
};
