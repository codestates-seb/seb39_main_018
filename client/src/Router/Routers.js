import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import MyPageMap from '../Pages/MyPageMap';
import MyPageReview from '../Pages/MyPageReview';
import MyPageProfile from '../Pages/MyPageProfile';
import MyPageWish from '../Pages/MypageWish';
import LoginFindSignup from '../Components/Modals/LoginFindSignup';
import MyPageSell from '../Pages/MyPageSell';
import MyPageBuy from '../Pages/MyPageBuy';
import WritePage from '../Pages/WritePage';
import ErrorPage from '../Pages/ErrorPage';
import KakaoRediect from '../Components/Modals/Login/KaKao/eKakaoLoginbtn';
import EditMain from '../Components/Write/EditMain';

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
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/my/sell/edit/:id" element={<EditMain />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/my/map" element={<MyPageMap />} />
      <Route path="/my/review" element={<MyPageReview />} />
      <Route path="/my/profile" element={<MyPageProfile />} />
      <Route path="/my/wish" element={<MyPageWish />} />
      <Route path="/my/sell" element={<MyPageSell />} />
      <Route path="/my/buy" element={<MyPageBuy />} />
      <Route path="/loginfindsign" element={<LoginFindSignup />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/withdraw" element={<WithdrawPage />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/main/detail/:id" element={<DetailPage />} />
    </Routes>
  );
};

const Member = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/main/detail/:id" element={<DetailPage />} />
      <Route path="/find" element={<Find />} />
    </Routes>
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
      <Route path="/mapstate" element={<MapState />} />
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
