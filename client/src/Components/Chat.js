import React, { useEffect, useState } from "react";
import { ChatContainer } from "../style/ChatStyle";
import io from "socket.io-client";

const endpoint = 'https://jjjserver.herokuapp.com/'; // heroku로 socket 배포한 서버
let socket = io(endpoint , {
    cors: {
        origin : '*'
    }
});


const Chat = () => {
    return(
        <>
            <ChatUI />
        </>
    )
}

const ChatUI = () => {

   const [ chatMsg, setChatMsg ] = useState('');
   const [msg , setMsg] = useState({user : ''});

    // let msg = {id : 'babo' , user: ''}

    const send = () => {
        socket.emit("message", msg );
        setMsg({user : ''});
      };
    
      useEffect(() => {
        socket.on("message", (message) => {
            setChatMsg([chatMsg,...message]);
        });
      }, [chatMsg]);


    const messages = (e) => {
        let user = e.target.value;
        setMsg({user});
        if(e.key === 'Enter'){
            socket.emit("message", msg );
            e.target.value = '';
        }
       
    }

    return(
        <>
        <ChatContainer>
            <div>
       
            </div>
            <div>
               {chatMsg}
            </div>
        </ChatContainer>
        <ChatContainer>
            <label>
                채팅입력
            </label>
            <input id="isinput" onChange={messages} onKeyUp={messages} value={msg.user}/>
            <button onClick={send}>
                전송
            </button>
        </ChatContainer>
        </>
    )
}

export default Chat;