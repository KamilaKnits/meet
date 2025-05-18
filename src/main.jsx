import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import * as atatus from 'atatus-spa';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// atatus.config('e8bff797ce8f4159b631e3178a06278a').install();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

serviceWorkerRegistration.register();


// atatus.notify(new Error('Test Atatus Setup'));