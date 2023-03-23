import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


const BestSellerContext = createContext();

export const BestSellerContextProvider = ({ children }) => {
  const [bestseller, setBestseller] = useState();


  useEffect(() => {
    axios
      .get("http://localhost:3030/product")
      .then((res) => setBestseller(res.data.products.filter(x=>x.statusCategory==="6403328368fcefd61e1127ea")))
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