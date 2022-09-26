import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './common/Footer';
import Mypage from './Components/Mypage';
import Main from './Components/Main';
import GlobalStyle from './globalStyle.jsx';
import Signup from './Components/Signup';
import Chat from './Components/Chat';
import Logout from './Components/Logout';
import Login from './Components/Login';
import Kakao from './Components/SocialLogin/Kakao';
import Naver from './Components/SocialLogin/Naver';

const App = () => {
  useEffect(() => {
    window.Kakao.init('7f72f6bd7dc714fa93bd9794498a7a2b');
  }, []);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/oauth/callback/kakao" element={<Kakao />} />
        <Route path="/oauth/callback/naver" element={<Naver />} />
      </Routes>
    </>
  );
};

export default App;
