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
import Detail from './Components/PostDetail';
import Find from './Components/Find';
import TESTS from './Components/SocialLogin/eKakaoLoginbtn';
import TEST2 from './Components/SocialLogin/eKaKaoRestApi';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/test" element={<TEST2 />} />
        <Route path="/okakao" element={<TESTS />} />
        <Route path="/" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/find" element={<Find />} />
        <Route path="/oauth/callback/kakao" element={<Kakao />} />
        <Route path="/oauth/callback/naver" element={<Naver />} />
      </Routes>
    </>
  );
};

export default App;
