import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import BtnComponent from '../common/ui/Button';
import Chat from './Chat';
import { MainContainer } from '../style/MainStyle';

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
    <MainContainer>
      <Chat />
    </MainContainer>
  );
};

export default Main;
