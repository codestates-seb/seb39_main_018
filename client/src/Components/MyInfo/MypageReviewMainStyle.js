import styled from 'styled-components';

const Content = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
  padding-bottom: 8px;
`;

const ContentReview = styled.div`
  display: flex;
  border-top: 1px solid #e1e1e1;
  padding-top: 16px;
  padding-bottom: 20px;
`;

const Userimg = styled.div`
  width: 30px;
  margin-right: 15px;
  display: block;
  border-radius: 60%;
`;

const UserContent = styled.div`
  flex: 1 1 0%;
`;

const UserNameStar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
`;

const UserName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: black;
  opacity: 0.7;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
`;

const RealReview = styled.div`
  font-size: 14px;
  line-height: 0.3;
  letter-spacing: -1px;
`;
export default { Content, ContentReview, Userimg, UserContent, UserNameStar, UserName, RealReview };
