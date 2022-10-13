import styled from 'styled-components';


const ContentTitle = styled.div`
  position: relative;
  width: 100%;
`;

const UserContainter = styled.div`
  align-items: center;
  display: flex;
  padding: 30px 0 30px 30px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  margin-top: 10px;

  @media only screen and (max-width: 960px) {
    padding: 10px 0 10px 10px;
    margin-bottom: 15px;
  }
`;

const UserUSer = styled.div`
  img {
    width: 80px;
    height: 80px;
    margin-right: 30px;
    border-radius: 100%;
  }

  @media only screen and (max-width: 960px) {
    img {
      width: 50px;
      height: 50px;
      margin-right: 15px;
      border-radius: 100%;
    }
  }
`;

const UserInfo = styled.div`
  display: block;
`;

const UserID = styled.p`
  line-height: 30px;
  font-size: 22px;
  letter-spacing: -0.3px;
  font-weight: 400;

  @media only screen and (max-width: 960px) {
    font-size: 17px;
    line-height: 23px;
  }
`;

const UserEmail = styled.p`
  line-height: 25px;
  font-size: 14px;
  letter-spacing: -0.21px;
  color: rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 960px) {
    font-size: 10px;
    line-height: 20px;
  }
`;

const UserRight = styled.div`
  margin-left: auto;
  margin-right: 30px;

  @media only screen and (max-width: 960px) {
    margin-right: 10px;
  }
`;

const ProfileButton = styled.button`
  color: rgba(0, 0, 0, 1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 24px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 300;
  height: 50px;
  letter-spacing: 0.3px;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    color: black;
    font-weight: 400;
  }

  @media only screen and (max-width: 960px) {
    padding: 0 10px;
    font-size: 8px;
    height: 40px;
  }
`;

const Just = styled.div`
  left: 0;
`;

const TitleMore = styled.div`
  display: block;
  margin-top: 30px;
  max-width: 100%;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  letter-spacing: -0.3px;

  @media only screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

const More = styled.a`
  margin-left: auto;
  text-decoration: none;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: -0.07px;
  color: rgba(34, 34, 34, 0.5);
  @media only screen and (max-width: 960px) {
    font-size: 10px;
  }
`;

export default {
  ContentTitle,
  UserContainter,
  UserUSer,
  UserInfo,
  UserID,
  UserEmail,
  UserRight,
  ProfileButton,
  Just,
  TitleMore,
  Title,
  More,
};

