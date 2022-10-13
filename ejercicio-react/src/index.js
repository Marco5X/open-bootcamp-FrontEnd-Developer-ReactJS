import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import reportWebVitals from './reportWebVitals';
import { Ruteo } from './components/Ejercicio 16-18/Ruteo';
import AppRedux from "./components/Ejercicio 22-24/AppRedux"
import { store } from "./components/Ejercicio 22-24/redux/config/storeConfig"
import { createAppStore } from "./components/Ejercicio 22-24/redux/config/store.js"
import TaskApp from './components/Ejercicio 25-26/AppContext';

// let appStore = createAppStore()
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={appStore}>
//     <React.StrictMode>
//       {/* <App /> */}
//       {/* <Ruteo /> */}
//       <AppRedux />
//     </React.StrictMode>
//   </Provider>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      {/* <App /> */}
      {/* <Ruteo /> */}
      <TaskApp />
    </React.StrictMode>
);

reportWebVitals();