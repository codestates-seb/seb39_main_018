import styled from 'styled-components';

const Container = styled.div`
  margin: 30px;
  width: 300px;
`;

const Header = styled.input`
  width: 100%;
  height: 20px;
  padding: 10px;
  border: 3px solid #d2daff;

  box-shadow: inset 0 0 20px #d2daff;
  border-radius: var(--b-small);
  ::placeholder {
    color: lightgray;
  }
`;
const Posting = styled(Header)`
  border: 3px solid #d2daff;
  background: #e9f2fa;
  border-radius: var(--b-medium);
  outline: none;
  ${Posting}:focus {
    background: white;
    border: 3px solid #ebe9e8;
  }
`;

export default { Container, Header, Posting };
