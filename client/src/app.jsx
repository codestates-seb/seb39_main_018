import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './common/footer';
import Main from './Components/main';
import GlobalStyle from './globalStyle.jsx';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/footer" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
