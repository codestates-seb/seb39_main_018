import styled from 'styled-components';

const ChatContainer = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 400px;
  margin: 30px;
  overflow-y: overlay;
  position : relative;
 
  &::-webkit-scrollbar{
    width: 10px;
    background: pink;
  }

  &::-webkit-scrollbar-thumb {
    width: 20px;
    border-radius: 10px;
    margin: 10px;
    background: skyblue;
  }
  .chat_body {
    width : 200px;
    margin: 10px;
    padding: 10px;
    background : lemonchiffon;
  
  }
`;

const Scrollbar = styled.div`
  width: 10px;
  overflow: scroll;
  border: 1px solid black;
`;

const ChatContent = styled.div`
  position: absolute;
  margin: 10px;
  bottom: 0; 
  .iss{
    margin: 10px;
  }
`

export { ChatContainer, Scrollbar, ChatContent };
