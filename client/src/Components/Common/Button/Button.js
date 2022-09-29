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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: var(--b-small);
  background: ${(prop) => prop.background};
  color: ${(prop) => prop.color || 'white'};
  width: ${(prop) => prop.width || ''};
  box-shadow: 1px 1px 3px 1px;
  ${BasicBtn}:active {
    background: #ebebeb;
  }
  p {
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

/// -------------------------------------- ///

export { XXBtn, XXBtn2, BasicBtn };
