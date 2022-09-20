import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import BtnComponent from '../common/ui/Button';

const Main = () => {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
};

const MainPage = () => {
  return (
    <>
      <BtnComponent />
    </>
  );
};

export default Main;
