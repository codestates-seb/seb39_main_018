import styled, { css } from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 40px 40px 160px;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
`;

const CustomerContent = styled.div`
  overflow: hidden;
  min-height: 600px;
`;

const CustomerWithdraw = styled.div`
  margin: 0;
  padding: 0;
  margin-bottom: 40px;
`;

const ContentTitle = styled.div`
  position: relative;
  width: 100%;
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 40px;
  color: #111111;
  font-weight: bold;
  letter-spacing: 0.03em;

  @media only screen and (max-width: 960px) {
    font-size: 18px;
  }
`;

const Content = styled.div`
  padding-top: 20px;
  margin: 0;
  @media only screen and (max-width: 960px) {
    padding-top: 10px;
  }
`;

const ReasonTitle = styled.div`
  display: block;
  margin-bottom: 18px;
  font-size: 15px;
  letter-spacing: -0.5px;
  @media only screen and (max-width: 960px) {
    margin-bottom: 15px;
    font-size: 12px;
  }
`;

const Reasons = styled.div``;

const Reason = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Checkbox = styled.div`
  position: relative;
  margin-top: 10px;
  margin-right: 10px;
`;

const CheckboxInput = styled.input`
  visibility: hidden;
  margin-bottom: 10px;

  @media only screen and (max-width: 960px) {
    margin-bottom: 7px;
  }

  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: black;
          border-color: black;
          &:after: {
            opacity: 1;
          }
        `
      : null}
`;

const CheckboxV = styled.label`
  position: absolute;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #ccc;
  border-radius: 60%;
  width: 18px;
  height: 18px;
  left: 0;
  @media only screen and (max-width: 960px) {
    width: 15px;
    height: 15px;
  }
  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: black;
          border-color: #ccc;
          &:after {
            position: absolute;
            transform: rotate(-50deg);
            content: '';
            border: 1.6px solid #fff;
            border-top: none;
            border-right: none;
            height: 3px;
            left: 4px;
            top: 5px;
            width: 8px;
          }
        `
      : css`
          background-color: #fff !important;
          &:after {
            opacity: 1;
          }
        `}
`;

const ReasonSpan = styled.span`
  vertical-align: middle;
  font-size: 13px;
  margin-left: 20px;
  @media only screen and (max-width: 960px) {
    font-size: 11px;
    margin-left: 13px;
  }
`;

const WriteBox = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100%;
  min-height: 130px;
  position: relative;
`;

const WriteInput = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  background-color: #f1f1f1;
  font-size: 13px;
  color: black;
  line-height: 1.8em;
  min-height: 130px;

  @media only screen and (max-width: 960px) {
    font-size: 10px;
  }
`;

const AgreeBox = styled.div`
  padding-left: 0px;
`;

const H3 = styled.h3`
  display: block;
  margin-top: 30px;
  margin-bottom: 8px;
  font-size: 15px;
  color: #606060;
  font-weight: normal;

  @media only screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

const Li = styled.li`
  line-height: 20px;
  position: relative;
  margin: 0 0 0.5em 0;
  padding-left: 14px;
  font-size: 13px;
  padding-bottom: 3px;

  @media only screen and (max-width: 960px) {
    font-size: 10px;
  }
`;

const RealAgree = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 40px;
`;

const BlackButtonBox = styled.div`
  cursor: pointer;
  width: 100px;
  border: 1px solid #d3d3d3;
  color: rgba(34, 34, 34, 0.8);
  padding: 0 15px;
  height: 40px;
  line-height: 45px;
  border-radius: 6px;
  font-size: 14px;
  letter-spacing: -0.18px;
`;

const WhiteButtonBox = styled.div`
  cursor: pointer;
  margin-left: 10px;
  width: 100px;
  font-weight: 700;
  color: #fff;
  opacity: 0.9;
  background-color: #222;
  padding: 0 15px;
  height: 40px;
  line-height: 45px;
  border-radius: 6px;
  font-size: 14px;
  letter-spacing: -0.18px;

  &:hover {
    opacity: 2;
    transition-duration: 0.25s;
  }
`;

export default {
  Container,
  CustomerContent,
  CustomerWithdraw,
  ContentTitle,
  Title,
  Content,
  ReasonTitle,
  Reason,
  Reasons,
  Checkbox,
  CheckboxInput,
  CheckboxV,
  ReasonSpan,
  WriteBox,
  WriteInput,
  AgreeBox,
  H3,
  Li,
  RealAgree,
  BlackButtonBox,
  WhiteButtonBox,
};
