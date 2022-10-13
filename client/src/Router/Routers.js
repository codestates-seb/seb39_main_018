import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import TEST2 from '../Components/Modals/Login/KaKao/eKaKaoRestApi';
import MainPage from '../Pages/MainPage.js';
import ChatPage from '../Pages/ChatPage.js';
import DetailPage from '../Pages/DetailPage.js';
import MyPage from '../Pages/MyPage';
import SignUp from '../Components/Modals/SignUp/Signup.js';
import Logout from '../Components/Modals/Login/General/Logout';
import Login from '../Components/Modals/Login/General/Login';
import Find from '../Components/Modals/IDPWFind/Find';
import LandingPage from '../Pages/LandingPage';
import LoginFindSignup from '../Components/Modals/LoginFindSignup';
import WritePage from '../Pages/WritePage';
import ErrorPage from '../Pages/ErrorPage';
import KakaoRediect from '../Components/Modals/Login/KaKao/eKakaoLoginbtn';
import EditMain from '../Components/Write/EditMain';
import { AnimatePresence } from 'framer-motion';

const Routers = () => {
  return (
    <>
      <ScrollInit />
      <Pages />
      <Modals />
    </>
  );
};

const Pages = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      window.location.pathname.includes('my') ||
      window.location.pathname.includes('write') ||
      window.location.pathname.includes('chat')
    ) {
      navigate('/error');
    }
  }, [useLocation]);
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/mypage/sell/edit/:id" element={<EditMain />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/loginfindsign" element={<LoginFindSignup />} />s
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/find" element={<Find />} />
        <Route path="/main/detail/:id" element={<DetailPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const Modals = () => {
  return (
    <Routes>
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/find" element={<Find />} />
      <Route path="/oauth/callback/kakao" element={<KakaoRediect />} />
    </Routes>
  );
};

const ScrollInit = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return;
};

export default Routers;
