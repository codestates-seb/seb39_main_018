import React, { useEffect } from 'react';
import GlobalStyle from './globalStyle.jsx';
import Routers from './Router/Routers.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import ModalMain from './Components/Modals/ModalMain.js';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Provider store={store}>
        <Routers />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
