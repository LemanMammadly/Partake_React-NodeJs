import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


const BestSellerContext = createContext();

export const BestSellerContextProvider = ({ children }) => {
  const [bestseller, setBestseller] = useState();


  useEffect(() => {
    axios
      .get("http://localhost:5000/product")
      .then((res) => setBestseller(res.data.products.filter(x=>x.category==="63f6462505074c0c9f2826bc")))
      .catch((error) => console.log(error));
  }, []);

      

  const values = {
    bestseller,
    setBestseller,
  };
  return <BestSellerContext.Provider value={values}>{children}</BestSellerContext.Provider>;
};


export const useBestseller=()=>{
    const context= useContext(BestSellerContext)

    if(context===undefined){
        throw new Error("useBestseller must be used within a BestsellerProvider")
    }

    return context
};