import React, { useEffect } from 'react';
import GlobalStyle from './globalStyle.jsx';
import Routers from './Router/Routers.js';
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routers />
    </BrowserRouter>
  );
};

export default App;
