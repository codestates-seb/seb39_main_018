// import React, { useEffect, useState } from 'react';
// import { ChatContainer, Scrollbar, ChatContent } from '../Components/Chat/ChatStyle';
// import io from 'socket.io-client';
// import Header from '../Components/Common/Header/Header';
// import Footer from '../Components/Common/Footer/Footer';

// const endpoint = 'https://jjjserver.herokuapp.com'; // heroku로 socket 배포한 서버
// let socket = io(endpoint, {
//   cors: {
//     origin: '*',
//   },
// });

// const ChatPage = () => {
//   return (
//     <>
//       <Header />
//       <ChatUI />
//       <Footer />
//     </>
//   );
// };

// const ChatUI = () => {
//   const [chatMsg, setChatMsg] = useState([]);
//   const [chatText, setChatText] = useState({});
//   const [ChatID, setChatID] = useState({});
//   console.log(ChatID);

//   const send = () => {
//     socket.emit('inputMsg', chatText);
//     setChatText({ id: '', message: '' });
//   };

//   useEffect(() => {
//     socket.on('inputId', (res) => {
//       setChatMsg([...chatMsg, res]);
//     });
//     socket.on('inputMsg', (res) => {
//       setChatMsg([...chatMsg, res]);
//     });
//   }, [chatMsg]);

//   const inputHandle = (key) => (e) => {
//     if (key === 'id') setChatID({ [key]: e.target.value });
//     setChatText({ [key]: e.target.value });
//   };

//   const sendEnter = (e) => {
//     console.log(chatText);
//     if (e.key === 'Enter') {
//       socket.emit('inputData', chatText);
//       setChatText({ id: '', message: '' });
//     }
//   };

//   return (
//     <>
//       <ChatContainer>
//         <div></div>
//         {chatMsg.map((li, i) => {
//           return (
//             <>
//               <p>{chatMsg[0].id}</p>
//               <div key={i} className="chat_body">
//                 {li.message}
//               </div>
//             </>
//           );
//         })}
//         <Scrollbar></Scrollbar>
//       </ChatContainer>
//       <ChatContainer>
//         <ChatContent>
//           <div className="iss">
//             <label>아이디입력</label>
//             <input onChange={inputHandle('id')} onKeyUp={sendEnter} value={chatText.id} />
//             <button onClick={send}>전송</button>
//           </div>
//           <div className="iss">
//             <label>채팅입력</label>
//             <input onChange={inputHandle('message')} onKeyUp={sendEnter} value={chatText.message} />
//             <button onClick={send}>전송</button>
//           </div>
//         </ChatContent>
//       </ChatContainer>
//     </>
//   );
// };

// export default ChatPage;

//---/
import React, { useEffect, useState, useCallback } from 'react';
import Chats from '../Components/Chat/ChatStyle';
import Draws from '../Components/MyInfo/Withdraw/WithdrawStyle';
import io from 'socket.io-client';
import Header from '../Components/Common/Header/Header';
import Footer from '../Components/Common/Footer/Footer';
import { ChatContainer, Scrollbar, ChatContent } from '../Components/Chat/ChatStyle';
import { BsEmojiSmile } from 'react-icons/bs';

import styled from 'styled-components';

const endpoint = 'https://jjjserver.herokuapp.com/'; // heroku로 socket 배포한 서버
let socket = io(endpoint, {
  cors: {
    origin: '*',
  },
});

const ChatPage = () => {
  return (
    <>
      <Header />
      <ChatUI />
      <Footer />
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
    e.key === 'Enter' ? (socket.emit('message', chatText), setChatText('')) : null;
  };

  console.log(receive);

  //-- 채팅방 클릭했을때 --//
  const chatJoin = (chatId) => {
    const [chatSell, setChatSell] = useState(true);
    const handleChatJoin = useCallback((e) => {
      setChatSell(false);
    }, []);

    useEffect(() => {
      // 서버로 보내는 함수 작성
    }, [chatId]);

    return { chatSell, handleChatJoin };
  };

  return (
    <Draws.Container>
      <Draws.CustomerContent>
        <Draws.CustomerWithdraw>
          <Chats.ChatContainer>
            <Chats.UserListWrap>
              <Chats.UserList>
                <Chats.UserListTop>
                  <Chats.UserListTitle>
                    <h3>대화목록</h3>
                  </Chats.UserListTitle>
                </Chats.UserListTop>

                <Chats.UserChatList>
                  <Chats.UserChat>
                    <Chats.UserImg>
                      <Chats.UserImgDetail>
                        <img src="https://images.unsplash.com/photo-1664914822939-61cf504eceed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" />
                      </Chats.UserImgDetail>
                    </Chats.UserImg>

                    <Chats.UserNameBox>
                      <Chats.UserName>
                        <span>졸려</span>
                        <Chats.ChatDate>10월 7일</Chats.ChatDate>
                      </Chats.UserName>
                      <Chats.ChatPreviewBox>
                        <Chats.Preview>
                          <span>네 됩니다</span>
                        </Chats.Preview>
                      </Chats.ChatPreviewBox>
                    </Chats.UserNameBox>
                  </Chats.UserChat>
                </Chats.UserChatList>
              </Chats.UserList>
            </Chats.UserListWrap>

            {/* 채팅 클릭하지 않았을때 뜨는  
            <Chats.SelectChat>
              <Chats.SelectChatWrap>
                <Chats.SelectInfo>
                  <BsEmojiSmile style={{ width: '100px', height: '100px' }} />
                  <strong>채팅을 시작해보세요.</strong>
                </Chats.SelectInfo>
              </Chats.SelectChatWrap>
            </Chats.SelectChat> */}

            <Chats.SelectChat>
              <Chats.SelectChatWrap>
                <Chats.UserName2>
                  <Chats.TalkTop>
                    <div>
                      <h3>졸려</h3>
                    </div>
                  </Chats.TalkTop>
                </Chats.UserName2>

                <Chats.ChatContentBox>
                  <Chats.ChatContentWrap>
                    <>
                      <Chats.ChatContentDate>
                        <span>20022년 10월 7일</span>
                      </Chats.ChatContentDate>
                    </>
                    <Chats.SendTalkBox>
                      <Chats.MeBubbleBox>
                        <Chats.MeBubble>
                          <p>티켓 거래 되나요</p>
                        </Chats.MeBubble>
                        <Chats.BubbleDate>
                          <p>오전 1:05</p>
                        </Chats.BubbleDate>
                      </Chats.MeBubbleBox>
                    </Chats.SendTalkBox>

                    <Chats.GetTalkBox>
                      <Chats.YouBubbleBox>
                        <Chats.YouBubble>
                          <p>네 됩니다</p>
                        </Chats.YouBubble>
                        <Chats.YouBubbleDate>
                          <p>오전 1:10</p>
                        </Chats.YouBubbleDate>
                      </Chats.YouBubbleBox>
                    </Chats.GetTalkBox>
                  </Chats.ChatContentWrap>
                </Chats.ChatContentBox>

                <Chats.MessageBox>
                  <Chats.MessageBoxWrap>
                    <Chats.MessageInput>
                      <Chats.MessageInputReal>
                        <textarea placeholder="메시지 보내기" />
                      </Chats.MessageInputReal>
                    </Chats.MessageInput>
                  </Chats.MessageBoxWrap>
                </Chats.MessageBox>
              </Chats.SelectChatWrap>
            </Chats.SelectChat>
          </Chats.ChatContainer>
        </Draws.CustomerWithdraw>
      </Draws.CustomerContent>
    </Draws.Container>
  );
};

export default ChatPage;

//   return (
//     <>
//       <ChatContainer>
//         {receive.map((li, i) => {
//           return <div key={i}>{li}</div>;
//         })}

//         <Scrollbar></Scrollbar>
//       </ChatContainer>
//       <ChatContainer>
//         <ChatContent>
//           <div className="iss">
//             <label>아이디입력</label>
//             <button onClick={() => send(0)}>전송</button>
//           </div>
//           <div className="iss">
//             <label>채팅입력</label>
//             <input onChange={chatHandler} value={chatText} onKeyPress={send} />
//             <button onClick={() => send()}>전송</button>
//           </div>
//         </ChatContent>
//       </ChatContainer>
//     </>
//   );
// };
