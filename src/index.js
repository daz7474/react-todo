import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';
// import AppClass from './components/AppClass';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Root />
    {/* <AppClass /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
