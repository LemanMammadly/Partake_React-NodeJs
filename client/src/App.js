import { BrowserRouter, Routes,Route } from "react-router-dom";
import ClientLayout from "./layouts/clientLayout/ClientLayout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Ingredients from "./pages/Ingredients/Ingredients";
import Press from "./pages/Press/Press";
import Products from "./pages/Products/Products";
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
        <Route path="/terms" element={<Terms/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
