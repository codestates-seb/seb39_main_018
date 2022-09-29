import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TESTS from '../Components/Modals/Login/KaKao/eKakaoLoginbtn';
import TEST2 from '../Components/Modals/Login/KaKao/eKaKaoRestApi';
import MainPage from '../Pages/MainPage.js';
import ChatPage from '../Pages/ChatPage.js';
import DetailPage from '../Pages/DetailPage.js';
import MyPage from '../Pages/MyPage';
import SignUp from '../Components/Modals/SignUp/Signup.js';
import Logout from '../Components/Modals/Login/General/Logout';
import Login from '../Components/Modals/Login/General/Login';
import Find from '../Components/Modals/IDPWFind/Find';
import WithdrawPage from '../Pages/WithdrawPage';
import MapState from '../Components/Modals/Map/MapState';
import LandingPage from '../Pages/LandingPage';

const Routers = () => {
  return (
    <>
      <Pages />
      <Modals />
    </>
  );
};

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/withdraw" element={<WithdrawPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
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
      <Route path="/mapstate" element={<MapState />} />
    </Routes>
  );
};

export default Routers;
