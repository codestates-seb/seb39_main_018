import styled from 'styled-components';

const Header = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  transition-duration: 0.3s;
  background-color: white;
  opacity: 0.93;
  height: 70px;
  text-align: right;
  padding: 0 25px 0 30px;

  z-index: 1232354123;
  img {
    width: 150px;
    opacity: 0.6;
    cursor: pointer;
    &:hover {
      opacity: 1;
      transition-duration: 0.3s;
    }
  }
`;

const HeaderRight = styled.div`
  display: inline-block;
  padding: 20px 20px;
  font-size: 25px;
  a {
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    text-decoration: none;
    margin-right: 20px;
    &:hover {
      color: black;
      transition-duration: 0.3s;
    }
  }
`;

export default { Header, HeaderRight };
