import { BrowserRouter, Routes,Route } from "react-router-dom";
import ProdSubcategory from "./components/ProductsComponents/ProdSubcategory/ProdSubcategory";
import ClientLayout from "./layouts/clientLayout/ClientLayout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Ingredients from "./pages/Ingredients/Ingredients";
import Press from "./pages/Press/Press";
import Products from "./pages/Products/Products";
import ProductsDetail from "./pages/ProductsDetail/ProductsDetail";
import Terms from "./pages/Terms/Terms";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ClientLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/press" element={<Press/>}/>
        <Route path="/ingredients" element={<Ingredients/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProdSubcategory/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/proddetail/:id" element={<ProductsDetail/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
