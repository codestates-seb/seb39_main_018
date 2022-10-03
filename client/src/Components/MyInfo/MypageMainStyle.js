import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 40px 40px 160px;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
`;

const UserContainter = styled.div`
  align-items: center;
  display: flex;
  padding: 30px 0 30px 30px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  margin-top: 10px;
`;

const UserUSer = styled.div`
  img {
    width: 80px;
    height: 80px;
    margin-right: 30px;
    border-radius: 100%;
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
`;

const UserEmail = styled.p`
  line-height: 25px;
  font-size: 14px;
  letter-spacing: -0.21px;
  color: rgba(0, 0, 0, 0.5);
`;

const UserRight = styled.div`
  margin-left: auto;
  margin-right: 30px;
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
`;

const More = styled.a`
  margin-left: auto;
  text-decoration: none;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: -0.07px;
  color: rgba(34, 34, 34, 0.5);
`;

export default {
  Container,
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
