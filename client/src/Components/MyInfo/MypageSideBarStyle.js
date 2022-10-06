import styled from 'styled-components';

const SideBar = styled.div`
  position: relative;
  float: left;
  width: 200px;
  margin-right: 40px;
  padding-bottom: 30px;
  @media only screen and (max-width: 960px) {
    height: 23%;
    width: 23%;
  }
`;

const MypageTitle = styled.h2`
  margin: 0 auto;
  font-size: 26px;
  text-align: center;
  color: #111111;
  text-align: left;
  line-height: 33px;
  letter-spacing: -0.58px;
  font-weight: 600;
  cursor: pointer;
  @media only screen and (max-width: 960px) {
    font-size: 16px;
  }
`;

const Line = styled.div`
  position: relative;
  margin-top: 15px;
  padding: 7px 0;
  font-size: 14px;
  color: #000000;
  border-top: 1px solid #e1e1e1;

  @media only screen and (max-width: 960px) {
    margin-top: 1px;
    padding: 2px 0;
  }
`;

const ShoppingInfo = styled.div`
  padding: 17px 0;
`;

const MiniTitle = styled.h2`
  display: inline-block;
  font-size: 16px;
  font-weight: 100px;
  margin: 0;
  margin-bottom: 12px;
  line-height: 12px;
  vertical-align: top;
  letter-spacing: -0.3px;
  color: #000;

  @media only screen and (max-width: 960px) {
    font-size: 13px;
    margin-bottom: 6px;
  }
`;

const LiLinks = styled.ul`
  list-style: none;
  width: 100%;
`;

const LiLink = styled.a`
  display: flex;
  line-height: 24px;
  font-size: 14px;
  letter-spacing: -0.2px;
  font-weight: normal;
  padding: 8px 0 0 0;
  color: #2e2e2e;
  opacity: 0.6;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #000;
    transition-duration: 0.25s;
    font-weight: bold;
  }

  @media only screen and (max-width: 960px) {
    font-size: 10px;
    padding: 4px 0 0 0;
  }
`;

const JustSpan = styled.span`
  padding: 8px 0 0 0;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.7);
  font-weight: normal;
  line-height: 24px;

  @media only screen and (max-width: 960px) {
    font-size: 8px;
  }
`;

export default {
  SideBar,
  MypageTitle,
  Line,
  ShoppingInfo,
  MiniTitle,
  LiLinks,
  LiLink,
  JustSpan,
};
