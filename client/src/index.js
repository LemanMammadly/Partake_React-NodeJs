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
import { SnackPacksContextProvider } from './components/Context/SnackPacksContext';
import { GiftsContextProvider } from './components/Context/GiftsContext';
import { MerchContextProvider } from './components/Context/MerchContext';
import { CategoryContextProvider } from './components/Context/CategoryContext';
import { SubcategoryContextProvider } from './components/Context/SubcategoryContext';
import { CookiesContextProvider } from './components/Context/CookiesContext';
import { ProductsContextProvider } from './components/Context/ProductsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsContextProvider>
    <CookiesContextProvider>
    <SubcategoryContextProvider>
    <CategoryContextProvider>
    <MerchContextProvider>
    <GiftsContextProvider>
    <SnackPacksContextProvider>
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
    </SnackPacksContextProvider>
    </GiftsContextProvider>
    </MerchContextProvider>
    </CategoryContextProvider>
    </SubcategoryContextProvider>
    </CookiesContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>
);