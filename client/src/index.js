import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserAuthContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserAuthContextProvider>
  </BrowserRouter>
);
