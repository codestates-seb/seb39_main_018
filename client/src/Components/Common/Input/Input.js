import styled from 'styled-components';

const TagInput = styled.input`
  width: 100%;
  height: 15px;
  padding: 10px;
  border: 2px solid #d2daff;
  outline: none;
  background: #edeffc;
  border-radius: var(--b-small);
  font-size: 18px;
  ::placeholder {
    color: #a0a1a3;
    font-size: 12px;
  }
  ${TagInput}:focus {
    background: #f5f6fa;
  }
`;
const Input = styled(TagInput)`
  border: 3px solid #d2daff;
  background: #e9f2fa;
  border-radius: var(--b-medium);
  box-shadow: inset 0 0 20px #d2daff;
  outline: none;
  ${InputUI}:focus {
    background: white;
    border: 3px solid #ebe9e8;
  }
`;

const InputUI = styled.input`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  border: ${(props) => props.border || '1px solid'};
  border-radius: ${(props) => props.radius || '5px'};
  box-shadow: ${(props) => props.shadow || ''};
  background: rgba(0, 0, 0, 0.06);
  color: ${(props) => props.color || ''};
  padding: ${(props) => props.padding || '8px'};
  font-size: ${(props) => props.size || '5px'};
  outline: none;
  ::placeholder {
    color: #a0a1a3;
    font-size: 12px;
  }
  ${InputUI}:focus {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export { TagInput, Input, InputUI };
