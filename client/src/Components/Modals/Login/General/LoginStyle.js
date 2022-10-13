import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 400px;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, AppleSDGothicNeo-Regular, NanumBarunGothic,
    NanumGothic, 나눔고딕, Segoe UI, Helveica, Arial, Malgun Gothic, Dotum, sans-serif;
`;

const Box = styled.div`
  margin: 0;
  padding: 0;
`;

const TopHeader = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const Title = styled.h3`
  display: block;
  padding: 30px 0 0 0;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #111;
`;

const SubTitle = styled.h3`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.02em;
`;

const IdBox = styled.div`
  box-sizing: border-box;
  position: relative;
  padding-bottom: 10px;
  .info_default {
    width: 340px;
    height: 30px;
    margin-top: 10px;
    padding-left: 5px;
    border-bottom: 1px solid var(--lightgray);
    font-size: 14px;
    color: #a3a3a3;
  }
`;

const NameBox = styled.div`
  font-size: 13px;
  font-weight: 640;
  line-height: 18px;
  position: relative;
  color: ${(props) => (props.color === 'red' ? 'rgba(900, 20, 0, 0.7)' : '##ebebeb')};
  .info_default {
    width: 340px;
    height: 30px;
    margin-top: 10px;
    padding-left: 5px;
    border-bottom: 1px solid var(--lightgray);
    font-size: 13px;
    color: #a3a3a3;
  }
`;

const InputBox = styled.input`
  padding-right: 30px;

  height: 38px;
  width: 92.5%;
  font-size: 13px;
  letter-spacing: -0.15px;
  outline: 0;
  border: 0;
  border-bottom: ${(props) =>
    props.color === 'red' ? '1px solid rgba(900, 20, 0, 0.7)' : '1px solid #ebebeb'};

  &:focus {
    border-bottom: 1px solid #111;
  }
`;

const HiddenMessage = styled.span`
  display: block;
  position: absolute;
  line-height: 16px;
  letter-spacing: -0.4px;
  font-size: 11px;
  color: rgba(900, 20, 0, 0.7);
  font-weight: 300;
`;

const PasswordBox = styled.div`
  padding-bottom: 25px;
`;

const LinkBox = styled.div`
  display: flex;
  margin: 0;
  border: 0;
  font-size: 12px;
  color: #8d8d8d;
  padding-bottom: 20px;
`;

const AutoLogin = styled.a`
  padding-left: 5px;
`;

const IdOrPwFind = styled.a`
  transform: translateX(240px);
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: 9px 12px;
  outline: none;
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  font-weight: lighter;
  background-color: #ebebeb;
  color: #fff;
  background-color: #222;
  text-decoration: none;
  outline: none;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    transition-duration: 0.25s;
    background-color: #222;
    opacity: 0.8;
    color: #fff;
  }
`;

const GoSignUp = styled.div`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 11px;
`;

const AreYouAMember = styled.a`
  color: #bcbcbc;
`;

const RealJoin = styled.a`
  padding-left: 7px;
  text-decoration: underline;
  color: #000;
  cursor: pointer;
`;

export default {
  Container,
  IdBox,
  Box,
  TopHeader,
  Title,
  SubTitle,
  NameBox,
  InputBox,
  HiddenMessage,
  PasswordBox,
  LinkBox,
  AutoLogin,
  IdOrPwFind,
  GoSignUp,
  Button,
  AreYouAMember,
  RealJoin,
};

export { InputBox };
