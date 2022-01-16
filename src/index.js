import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider as ReduxPRovider} from   "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import store,{persistor} from "./reduxStore";

ReactDOM.render(
  <React.StrictMode>
    <ReduxPRovider store={store}>
      <PersistGate loading={<h1>Loading..</h1>} persistor={persistor}>
         <App />
    </PersistGate>
    </ReduxPRovider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
