import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './common/Footer';
import Main from './Components/Main';
import GlobalStyle from './globalStyle.jsx';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
};

export default App;
