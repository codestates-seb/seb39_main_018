// import styled from 'styled-components';

// const ChatContainer = styled.div`
//   border: 1px solid black;
//   width: 500px;
//   height: 400px;
//   margin: 30px;
//   overflow-y: overlay;
//   position: relative;

//   &::-webkit-scrollbar {
//     width: 10px;
//     background: pink;
//   }

//   &::-webkit-scrollbar-thumb {
//     width: 20px;
//     border-radius: 10px;
//     margin: 10px;
//     background: skyblue;
//   }
//   .chat_body {
//     width: 200px;
//     margin: 10px;
//     padding: 10px;
//     background: lemonchiffon;
//   }
// `;

// const Scrollbar = styled.div`
//   width: 10px;
//   overflow: scroll;
//   border: 1px solid black;
// `;

// const ChatContent = styled.div`
//   position: absolute;
//   margin: 10px;
//   bottom: 0;
//   .iss {
//     margin: 10px;
//   }
// `;

// export { ChatContainer, Scrollbar, ChatContent };

import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-right: 1px solid rgba(0, 0, 0, 0.08);
`;

const UserListWrap = styled.div`
  width: 50%;
  /* height: 100%; */
  border-right: 1px solid rgba(0, 0, 0, 0.08);
`;

const UserList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.01);
`;

const UserListTop = styled.div`
  background-color: white;
`;

const UserListTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 25px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 550;
  font-size: 24px;
`;

const UserChatList = styled.div`
  width: 100%;
  height: 100%;
`;

const UserChat = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 75px;
  padding: 0px 30px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition-duration: 0.25s;
  }
`;

const UserImg = styled.a`
  position: relative;
  text-decoration: none;
  margin-right: 15px;
`;

const UserImgDetail = styled.div`
  min-width: 45px;
  height: 45px;
  width: 45px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

const UserNameBox = styled.div`
  letter-spacing: -0.3px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: 800;
  }
`;

const ChatPreviewBox = styled.div`
  display: flex;
  align-items: center;
`;

const Preview = styled.div`
  width: 100%;
  font-size: 12px;
  color: rgb(0, 0, 0, 0.67);

  span {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

const ChatDate = styled.div`
  margin-left: 10px;
  font-size: 11px;
  color: rgb(0, 0, 0, 0.4);
`;

// 채팅을 시작해보세요.
const SelectChat = styled.div`
  height: 100%;
  width: 50%;
`;

const SelectChatWrap = styled.div`
  position: relative;
  height: 100%;
  background-color: white;
`;

const SelectInfo = styled.div`
  width: 100%;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  box-align: center;

  strong {
    display: block;
    font-size: 16px;
    font-weight: 800;
    margin-top: 22px;
  }
`;

// 채팅방 클릭할때 뜨는 채팅방
const UserName2 = styled.div`
  background-color: rgb(0, 0, 0, 0);
`;

const TalkTop = styled.div`
  div {
    z-index: 200;
    height: 70px;
    box-shadow: 0px 3px 2px rgb(0 0 0 / 10%);
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 25px;
  }

  h3 {
    font-size: 17px;
    font-weight: 500;
  }
`;

const ChatContentBox = styled.div`
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
  background-color: white;
`;

const ChatContentWrap = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  margin: 0px 20px auto;
`;

const ChatContentDate = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 40px 0px;

  span {
    color: rgba(0, 0, 0, 0.7);
    padding: 0px 20px;
    z-index: 1;
    font-size: 12px;
  }
`;

const SendTalkBox = styled.div`
  position: relative;
  display: flex;
  font-size: 1rem;
  align-items: flex-end;
  margin-left: 24px;
  margin: 10px 0;
  flex-direction: column;
`;

const MeBubbleBox = styled.div`
  display: flex;
  align-items: end;
  flex-direction: row-reverse;
`;

const MeBubble = styled.div`
  display: flex;
  align-items: end;

  p {
    width: fit-content;
    padding: 14px 18px;
    white-space: pre-line;
    border-radius: 12px;
    color: black;
    background-color: rgb(229, 238, 216);
  }
`;

const BubbleDate = styled.div`
  white-space: nowrap;
  margin-left: 8px;

  p {
    display: flex;
    color: rgb(204, 204, 204);
    font-size: 11px;
    white-space: nowrap;
    letter-spacing: -0.5px;
    margin-top: 6px;
    text-align: right;
    margin-right: 8px;
  }
`;

const GetTalkBox = styled.div`
  margin: 6px 0px;
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 1rem;
  margin-top: 8px;
  margin-right: 24px;
`;

const YouBubbleBox = styled.div`
  display: flex;
  -webkit-box-align: end;
  align-items: end;
`;

const YouBubble = styled.div`
  display: flex;
  -webkit-box-align: end;
  align-items: end;

  p {
    width: fit-content;
    padding: 14px 18px;
    white-space: pre-line;
    border-radius: 12px;
    color: black;
    background-color: #f6f6f6;
  }
`;

const YouBubbleDate = styled.div`
  white-space: nowrap;
  margin-left: 8px;

  p {
    color: rgb(204, 204, 204);
    font-size: 11px;
    white-space: nowrap;
    letter-spacing: -0.5px;
    margin-top: 6px;
    text-align: left;
    margin-left: 8px;
    display: flex;
  }
`;

const MessageBox = styled.div`
  position: relative;
  border-top: 1px solid rgb(246, 246, 246);
  background-color: rgb(255, 255, 255);
`;
const MessageBoxWrap = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 12px 20px;
`;

const MessageInput = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: rgb(250, 250, 250);
  border-radius: 24px;
  width: 100%;
  max-height: 120px;
`;

const MessageInputReal = styled.div`
  padding: 13px 0px;
  width: 100%;
  textarea {
    height: 22px;
    appearance: none;
    outline: none;
    border: none;
    line-height: 1.2;
    background: transparent;
    width: 100%;
    max-height: 96px;
    letter-spacing: -0.5px;
    overflow-y: scroll;
    padding: 0px 13px 0px 16px;
    resize: none;
    box-sizing: border-box;
    font-weight: 500;
    font-size: 16px;
  }
`;

export default {
  ChatContainer,
  UserListWrap,
  UserList,
  UserListTop,
  UserListTitle,
  UserChatList,
  UserChat,
  UserImg,
  UserImgDetail,
  UserNameBox,
  UserName,
  ChatPreviewBox,
  Preview,
  ChatDate,
  SelectChat,
  SelectChatWrap,
  SelectInfo,
  UserName2,
  TalkTop,
  ChatContentBox,
  ChatContentWrap,
  ChatContentDate,
  SendTalkBox,
  MeBubbleBox,
  MeBubble,
  BubbleDate,
  GetTalkBox,
  YouBubbleBox,
  YouBubble,
  YouBubbleDate,
  MessageBox,
  MessageBoxWrap,
  MessageInput,
  MessageInputReal,
};
