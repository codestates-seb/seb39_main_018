import styled from 'styled-components';

// ---테스트 버튼모음
const XXBtn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 20px;
  width: 120px;
  height: 4rem;
  border-radius: 1rem;
  box-shadow: inset 3px 3px 10px;
  background: var(--lightgray);
`;

const XXBtn2 = styled(XXBtn)`
  box-shadow: inset -0.2rem -0.2rem 1rem gray;
`;

const BasicBtn = styled.div`
  width: ${(prop) => prop.width || '100%'};
  height: ${(prop) => prop.height || '100%'};
  display: flex;

  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: var(--b-small);
  background: ${(prop) => prop.background || 'black'};
  color: ${(prop) => prop.color || 'white'};
  font-size: ${(props) => props.size || ''};
  box-shadow: none;
  margin-left: ${(prop) => prop.left || ''};
  ${BasicBtn}:hover {
    background: #727c8a;
    transition-duration: 0.3s;
  }
  p {
    margin-left: 10px;
  }
`;
const Button2 = styled(BasicBtn)`
  box-shadow: -2px -2px 10px, 10px 3px 15px var(--gray);
  background: ${(prop) => prop.background};
  color: ${(prop) => prop.color || 'white'};

  ${Button2}:active {
    box-shadow: inset 3px 3px 10px;
    background: var(--lightgray);
  }
`;
const SellbtnComponent = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  right: 50px;
  bottom: 90px;
  background: #e6eed8;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 2px 3px 1px 1px gray;
  color: #2e2d2d;
  &:hover {
    background: #b0b0b0;
    color: #ffffff;
  }
  img {
    width: 100%;
    height: 100%;
  }
  p {
    font-style: 'Gosanja';
    font-weight: 900;
    font-size: 18px;
    margin-right: 3px;
  }
`;

/// -------------------------------------- ///

export { XXBtn, XXBtn2, BasicBtn, SellbtnComponent };
