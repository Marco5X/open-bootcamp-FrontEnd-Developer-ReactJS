import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import reportWebVitals from './reportWebVitals';
import { Ruteo } from './components/Ejercicio 16-18/Ruteo';
import AppRedux from "./components/Ejercicio 22-24/AppRedux"
import { store } from "./components/Ejercicio 22-24/redux/config/storeConfig"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <App /> */}
      {/* <Ruteo /> */}
      <AppRedux />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
