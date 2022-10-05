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
  @media only screen and (min-width: 580px) {
    margin-top: 0;
    width: auto;
    display: inline-block;
    padding-left: 0;
    padding-right: 0;
  }
`;

const Right = styled.div`
  @media only screen and (min-width: 580px) {
    text-align: right;
  }
`;

const SnsBox = styled.div`
  display: flex;
  font-size: 25px;

  @media only screen and (min-width: 580px) {
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

  @media only screen and (min-width: 580px) {
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

  @media only screen and (min-width: 580px) {
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
