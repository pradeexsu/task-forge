import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './modules/Auth';
import { NotificationProvider } from './modules/Notification';
import { PingProvider } from './modules/Ping';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PingProvider>
      <BrowserRouter>
        <NotificationProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </NotificationProvider>
      </BrowserRouter>
    </PingProvider>
  </React.StrictMode>,
);
