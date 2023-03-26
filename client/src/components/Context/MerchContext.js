import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


const MerchContext = createContext();

export const MerchContextProvider = ({ children }) => {
  const [merch, setMerch] = useState();


  useEffect(() => {
    axios
      .get("http://localhost:3050/product")
      .then((res) => setMerch(res.data.products.filter(x=>(x.category[0]==="6409c6a5aad20645b3532c3f")|| (x.category[1]==="6409c6a5aad20645b3532c3f"))))
      .catch((error) => console.log(error));
  }, []);
      

  const values = {
    merch,
    setMerch,
  };
  return <MerchContext.Provider value={values}>{children}</MerchContext.Provider>;
};


export const useMerch=()=>{
    const context= useContext(MerchContext)

    if(context===undefined){
        throw new Error("useMerch must be used within a MerchProvider")
    }

    return context
};