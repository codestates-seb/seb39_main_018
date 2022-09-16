import React from 'react';
import Header from '../common/header';

const Main = () => {
  return (
    <>
      <Header />
      <MainPage />
    </>
  );
};

const MainPage = () => {
  return <div>메인페이지임</div>;
};

export default Main;
