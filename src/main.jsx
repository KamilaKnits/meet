import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import * as atatus from 'atatus-spa';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

atatus.config('e8bff797ce8f4159b631e3178a06278a').install();

// atatus.notify(new Error('Test Atatus Setup'));