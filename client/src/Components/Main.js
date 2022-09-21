import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import BtnComponent from '../common/ui/Button';
import Chat from './Chat';
import Detail from './PostDetail';
import TagUI from '../common/ui/Tag';
import { MainContainer } from '../style/MainStyle';

const Main = () => {
  return (
    <>
      <Header />
      <Detail />
      <Footer />
    </>
  );
};

const MainPage = () => {
  return (
    <MainContainer>
      <TagUI />
    </MainContainer>
  );
};

export default Main;
