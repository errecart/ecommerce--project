import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { getFireBase } from './firebase/getFireBase';

import './sass/style.scss'

getFireBase()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
