import React from 'react';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import MypageMain from '../Components/MyInfo/MypageMain';
import MypageSideBar from '../Components/MyInfo/MypageSideBar';

const MyPage = () => {
  return (
    <>
      <Header />
      {/* <MypageSideBar /> */}
      <MypageMain />
      <Footer />
    </>
  );
};

export default MyPage;
