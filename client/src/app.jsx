import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './common/Footer';
import Mypage from './Components/Mypage';
import Main from './Components/Main';
import GlobalStyle from './globalStyle.jsx';
import Signup from './Components/Signup';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
