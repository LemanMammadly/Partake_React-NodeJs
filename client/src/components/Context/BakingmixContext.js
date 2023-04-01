import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


const BakingMixContext = createContext();

export const BakingMixContextProvider = ({ children }) => {
  const [bakingmix, setBakingmix] = useState();


  useEffect(() => {
    axios
      .get("http://localhost:3030/product")
      .then((res) => setBakingmix(res.data.products.filter(x=>x.category[0]==="6405cc6ad5d05f505879359c")))
      .catch((error) => console.log(error));
  }, []);
      

  const values = {
    bakingmix,
    setBakingmix,
  };
  return <BakingMixContext.Provider value={values}>{children}</BakingMixContext.Provider>;
};


export const useBakingMix=()=>{
    const context= useContext(BakingMixContext)

    if(context===undefined){
        throw new Error("useBakingMix must be used within a BakingMixProvider")
    }

    return context
};