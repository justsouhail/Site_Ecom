import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Magasin } from './Magasin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Magasin>
    <App />
    </Magasin>
  </React.StrictMode>
);

