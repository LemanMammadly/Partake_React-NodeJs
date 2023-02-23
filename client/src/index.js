import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BestSellerContextProvider } from './components/Context/BestsellersContext';
import { LogoProvider } from './components/Context/LogoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LogoProvider>
    <BestSellerContextProvider>
    <App />
    </BestSellerContextProvider>
    </LogoProvider>
  </React.StrictMode>
);