import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 80vh;
  text-align: center;

  &:hover {
    color: rgba(0, 0, 0, 0.8);
    transition-duration: 0.25s;
  }
`;

const Content = styled.div`
  h1 {
    animation: type 0.7s alternate infinite;
    padding-right: 20px;
    font-size: 100px;
    @keyframes type {
      from {
        border-right: 1px solid rgba(0, 0, 0, 0.8);
      }
      to {
        border-right: 1px solid rgba(0, 0, 0, 0.8) transparent;
      }
    }
  }
`;

export default { Main, Content };
