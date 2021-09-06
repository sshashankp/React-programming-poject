import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  //Here reactDOm.render is taking two things (1)JSX and (2) Selector..
  // (contd) which one from the document you want to select
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // the below code is the selector
  document.getElementById('root')
  //Put all the JSX code in the selcetor
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
