import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BestSellerContextProvider } from './components/Context/BestsellersContext';
import { LogoProvider } from './components/Context/LogoContext';
import { CrunchyContextProvider } from './components/Context/CrunchyContext';
import { SoftBakedContextProvider } from './components/Context/SoftBakedContext';
import { BakingMixContextProvider } from './components/Context/BakingmixContext';
import { BreakfatsMixContextProvider } from './components/Context/BreakfastMixesContext';
import { VarietyPacksContextProvider } from './components/Context/VarietyPacksContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VarietyPacksContextProvider>
    <BreakfatsMixContextProvider>
    <BakingMixContextProvider>
    <SoftBakedContextProvider>
    <CrunchyContextProvider>
    <LogoProvider>
    <BestSellerContextProvider>
    <App />
    </BestSellerContextProvider>
    </LogoProvider>
    </CrunchyContextProvider>
    </SoftBakedContextProvider>
    </BakingMixContextProvider>
    </BreakfatsMixContextProvider>
    </VarietyPacksContextProvider>
  </React.StrictMode>
);