import { BrowserRouter, Routes,Route } from "react-router-dom";
import ClientLayout from "./layouts/clientLayout/ClientLayout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Ingredients from "./pages/Ingredients/Ingredients";
import Press from "./pages/Press/Press";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ClientLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/press" element={<Press/>}/>
        <Route path="/ingredients" element={<Ingredients/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
