import styled from 'styled-components';

const Container = styled.div`
  margin: 30px;
  width: 300px;
`;

const TagInput = styled.input`
  width: 100%;
  height: 20px;
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
const Posting = styled(TagInput)`
  border: 3px solid #d2daff;
  background: #e9f2fa;
  border-radius: var(--b-medium);
  box-shadow: inset 0 0 20px #d2daff;
  outline: none;
  ${Posting}:focus {
    background: white;
    border: 3px solid #ebe9e8;
  }
`;

export default { Container, TagInput, Posting };

export { TagInput };
