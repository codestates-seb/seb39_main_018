import { Route, Routes } from 'react-router-dom';
import TESTS from '../Components/Modals/Login/KaKao/eKakaoLoginbtn';
import TEST2 from '../Components/Modals/Login/KaKao/eKaKaoRestApi';
import MainPage from '../Pages/MainPage.js';
import ChatPage from '../Pages/ChatPage.js';
import DetailPage from '../Pages/DetailPage.js';
import MyPage from '../Pages/Mypage.js';
import SignUp from '../Components/Modals/SignUp/Signup.js';
import Logout from '../Components/Modals/Login/General/Logout';
import Login from '../Components/Modals/Login/General/Login';
import Find from '../Components/Modals/IDPWFind/Find';
import Header from '../Components/Common/Header/Header';
import Footer from '../Components/Common/Footer/Footer';
import React, { useEffect } from 'react';

const Routers = () => {
  return (
    <>
      <Pages />
      <Components />
      <Modals />
    </>
  );
};

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/detail" element={<DetailPage />} />
    </Routes>
  );
};

const Components = () => {
  return (
    <Routes>
      <Route path="/footer" element={<Footer />} />
      <Route path="/header" element={<Header />} />
    </Routes>
  );
};

const Modals = () => {
  return (
    <Routes>
      <Route path="/logout" element={<Logout />} />
      <Route path="/logout" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/find" element={<Find />} />
      <Route path="/test" element={<TEST2 />} />
      <Route path="/okakao" element={<TESTS />} />
    </Routes>
  );
};

export default Routers;
