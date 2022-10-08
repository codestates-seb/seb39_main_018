import SockJS from 'sockjs-client';
import StompJs from '@stomp/stompjs';

// 서버 연결
const client = new StompJs.Client({
  brokerURL: `${process.env.CHAT_API_URL}api/chat`,
  connectHeaders: {
    login: 'user',
    passcode: 'password',
  },
  debug: (str) => {
    console.log(str);
  },
  reconnectDelay: 5000, //자동 재 연결
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
});

client.onConnect = (frame) => {};

client.onStompError = (frame) => {
  console.log('Broker reported error: ' + frame.headers['message']);
  console.log('Additional details: ' + frame.body);
};

// 메세지 요청
client.publish({
  destination: '/topic/general',
  body: 'Hello world',
  headers: { priority: '9' },
});

client.activate();

const subscription = client.subscribe('/queue/test', callback);
