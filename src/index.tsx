import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { UseWalletProvider } from 'use-wallet';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <UseWalletProvider autoConnect connectors={{
      injected: {
        chainId: [1666600000]
      }
    }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UseWalletProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
