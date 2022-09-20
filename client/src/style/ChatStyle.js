import styled from "styled-components";

const ChatContainer = styled.div`
    border : 1px solid black;
    width : 500px;
    height: 400px;
    margin: 30px;
    .chat_body {
        display: flex;
        flex-wrap:wrap;
        flex-direction : row;
        margin : 10px;
        overflow-wrap: break-word;
  word-break: break-word;
    }
`

export {ChatContainer};