import React, { useEffect, useState } from 'react';
import { ChatContainer, Scrollbar, ChatContent } from '../style/ChatStyle';
import io from 'socket.io-client';

const endpoint = 'http://localhost:8080'; // heroku로 socket 배포한 서버
let socket = io(endpoint, {
  cors: {
    origin: '*',
  },
});

const Chat = () => {
  return (
    <>
      <ChatUI />
    </>
  );
};

const ChatUI = () => {
  const [chatMsg, setChatMsg] = useState([]);
  const [chatText, setChatText] = useState({});
  const [ChatID, setChatID] = useState({});
  console.log(ChatID);

  const send = () => {
    socket.emit('inputMsg', chatText);
    setChatText({ id: '', message: '' });
  };

  useEffect(() => {
    socket.on('inputId', (res) => {
      setChatMsg([...chatMsg, res]);
    });
    socket.on('inputMsg', (res) => {
        setChatMsg([...chatMsg, res]);
      });
  }, [chatMsg]);


  const inputHandle = (key) => (e) => {
    if (key === 'id') setChatID({[key] : e.target.value });
    setChatText({[key] : e.target.value });
  };

  const sendEnter = (e) => {
    console.log(chatText);
    if (e.key === 'Enter') {
      socket.emit('inputData', chatText);
      setChatText({ id: '', message: '' });
    }
  };

  return (
    <>
      <ChatContainer>
        <div></div>
        {chatMsg.map((li, i) => {
          return (
            <>
              <p>{chatMsg[0].id}</p>
              <div key={i} className="chat_body">
                {li.message}
              </div>
            </>
          );
        })}
        <Scrollbar></Scrollbar>
      </ChatContainer>
      <ChatContainer>
        <ChatContent>
          <div className="iss">
            <label>아이디입력</label>
            <input
              onChange={inputHandle('id')}
              onKeyUp={sendEnter}
              value={chatText.id}
            />
            <button onClick={send}>전송</button>
          </div>
          <div className="iss">
            <label>채팅입력</label>
            <input
              onChange={inputHandle('message')}
              onKeyUp={sendEnter}
              value={chatText.message}
            />
            <button onClick={send}>전송</button>
          </div>
        </ChatContent>
      </ChatContainer>
    </>
  );
};

export default Chat;
