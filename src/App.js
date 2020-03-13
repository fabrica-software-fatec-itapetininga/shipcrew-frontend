import React from 'react';

import GlobalStyle from './styles/global';
import Router from './routes/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import './config/reactotronConfig';


function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
