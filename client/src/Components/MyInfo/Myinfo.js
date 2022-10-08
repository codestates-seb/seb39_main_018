import React from 'react';
import { useSelector } from 'react-redux';
import { betaPostUserInfo } from '../../util/userInfo';
import MypageMain from './MypageMain';
import MypageProfileMain from './MypageProfileMain';

const Myinfo = () => {
  const userEmail = useSelector((state) => state.account.userinfo);
  const { email, name } = betaPostUserInfo();
  console.log(email, name);
  return (
    <>
      <MypageMain email={email} name={name} />
      <MypageProfileMain email={email} name={name} />
    </>
  );
};
