import React from 'react';
import { useSelector } from 'react-redux';
import { betaPostUserInfo } from '../../util/userInfo';
import { Containers, CustomerContents, CustomerWithdraws } from './CommonStyle';
import SideBar from './SideBar/SideBar';
import MyProfile from './MyProfile/MyProfile';
import MyReview from './MyReview/MyReview';
import MySell from './MySellBuy/MySell';
import MyBuy from './MySellBuy/MyBuy';
import MyWish from './MyWish/MyWish';
import MyResion from './MyResion/MyResion';
import Withdraw from './Withdraw/WithDrawMain';
import MyinfoMain from './MyinfoMain/MyinfoMain';

const Myinfo = () => {
  const userEmail = useSelector((state) => state.account.userinfo);
  const pageNum = useSelector((state) => state.mypage.pageNumber);
  const { email, name } = betaPostUserInfo();

  console.log(email, name);
  const pages = [
    <MyinfoMain />,
    <MyBuy />,
    <MySell />,
    <MyWish />,
    <MyProfile />,
    <MyReview />,
    <MyResion />,
    <Withdraw />,
  ];
  return (
    <Containers>
      <SideBar />
      {pages[pageNum]}
      {/* <MyReview /> */}
      {/* <MySell /> */}
    </Containers>
  );
};

export default Myinfo;
