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
  background: ${(prop) => prop.background};
  color: ${(prop) => prop.color || 'white'};
  font-size: ${(props) => props.size || ''};
  box-shadow: none;
  margin-left: ${(prop) => prop.left || ''};
  ${BasicBtn}:hover {
    background: var(--lightgray);
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
  width: 100px;
  height: 100px;
  right: 50px;
  bottom: 10px;
  margin-bottom: 300px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  p {
    position: absolute;
    top: 38px;
    right: 20px;
  }
`;

/// -------------------------------------- ///

export { XXBtn, XXBtn2, BasicBtn, SellbtnComponent };
