import styled from 'styled-components';

const KakaoLoginButton = styled.button`
  width: 10%;
  max-width: 15rem;
  height: 2.5rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: #fee900;
  cursor: pointer;

  :hover {
    background-color: #fee100;
  }

  svg {
    height: 1rem;
    margin-right: 0.75rem;
  }

  span {
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.85);
    vertical-align: bottom;
  }
`;

export { KakaoLoginButton };
