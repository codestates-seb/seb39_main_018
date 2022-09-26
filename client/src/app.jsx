import React, { useEffect } from 'react';
import GlobalStyle from './globalStyle.jsx';
import Routers from './Router/Routers.js';
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
<<<<<<< HEAD
      <Routes>
        <Route path="/test" element={<TEST2 />} />
        <Route path="/okakao" element={<TESTS />} />
        <Route path="/" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/find" element={<Find />} />
        <Route path="/oauth/callback/kakao" element={<Kakao />} />
        <Route path="/oauth/callback/naver" element={<Naver />} />
      </Routes>
    </>
=======
      <Routers />
    </BrowserRouter>
>>>>>>> d654cff0516ef69e3b425d9fa725e1fecc0bd73b
  );
};

export default App;
