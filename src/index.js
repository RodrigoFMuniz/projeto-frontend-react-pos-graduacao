import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './routers';
import GlobalStyle from './config/globalStyled'

ReactDOM.render(
  <React.StrictMode>
    <Routers />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
