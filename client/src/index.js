import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BestSellerContextProvider } from './components/Context/BestsellersContext';
import { LogoProvider } from './components/Context/LogoContext';
import { CrunchyContextProvider } from './components/Context/CrunchyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CrunchyContextProvider>
    <LogoProvider>
    <BestSellerContextProvider>
    <App />
    </BestSellerContextProvider>
    </LogoProvider>
    </CrunchyContextProvider>
  </React.StrictMode>
);