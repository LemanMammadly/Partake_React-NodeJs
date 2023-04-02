import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState();


  useEffect(() => {
    axios
      .get("http://localhost:3030/product")
      .then((res) => setProducts(res.data.products))
      .catch((error) => console.log(error));
  }, []);
      

  const values = {
    products,
    setProducts,
  };
  return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>;
};


export const useProducts=()=>{
    const context= useContext(ProductsContext)

    if(context===undefined){
        throw new Error("useProducts must be used within a ProductsProvider")
    }

    return context
};