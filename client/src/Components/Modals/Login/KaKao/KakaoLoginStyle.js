import styled from 'styled-components';

const KakaoLoginButton = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 9px 12px;
  outline: none;
  align-items: center;
  border-radius: 5px;
  background-color: #fee900;
  outline: none;
  margin-bottom: 10px;

  &:hover {
    transition-duration: 0.25s;
    cursor: pointer;
    opacity: 0.8;
  }

  svg {
    font-size: 16px;
  }

  span {
    margin-left: 130px;
    text-decoration: none;
    font-size: 14px;
    font-weight: lighter;
  }
`;

export { KakaoLoginButton };
