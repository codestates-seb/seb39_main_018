import React, { useEffect, useState } from 'react';
import { ChatContainer, Scrollbar, ChatContent } from '../Components/Chat/ChatStyle';
import io from 'socket.io-client';

const endpoint = 'https://jjjserver.herokuapp.com/'; // heroku로 socket 배포한 서버
let socket = io(endpoint, {
  cors: {
    origin: '*',
  },
});

const ChatPage = () => {
  return (
    <>
      <ChatUI />
    </>
  );
};

const ChatUI = () => {
  const [receive, setReceive] = useState([]);
  const [chatText, setChatText] = useState();

  const chatHandler = (e) => {
    setChatText(e.target.value);
    console.log(chatText);
  };

  useEffect(() => {
    socket.on('message', (msg) => {
      setReceive([...receive, msg]);
    });
  }, [receive]);

  const send = (e) => {
    e.key === 'Enter' ? (socket.emit('message', chatText) , setChatText('') ) : null;
  };

  console.log(receive);

  return (
    <>
      <ChatContainer>
        {receive.map((li, i) => {
          return <div key={i}>{li}</div>;
        })}

        <Scrollbar></Scrollbar>
      </ChatContainer>
      <ChatContainer>
        <ChatContent>
          <div className="iss">
            <label>아이디입력</label>
            <button onClick={() => send(0)}>전송</button>
          </div>
          <div className="iss">
            <label>채팅입력</label>
            <input onChange={chatHandler} value={chatText} onKeyPress={send} />

          </div>
        </ChatContent>
      </ChatContainer>
    </>
  );
};

export default ChatPage;
