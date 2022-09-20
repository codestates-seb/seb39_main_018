import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './common/Footer';
import Mypage from './Components/Mypage';
import Main from './Components/Main';
import GlobalStyle from './globalStyle.jsx';
import Signup from './Components/Signup';
import Chat from './Components/Chat';
import Logout from './Components/Logout';
import Login from './Components/Login';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
};

export default App;
