import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


const VarietyPacksContext = createContext();

export const VarietyPacksContextProvider = ({ children }) => {
  const [variety, setVariety] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3050/product")
      .then((res) => setVariety(res.data.products.filter(x=>(x.category[0]==="640601b2d5d05f50587935a4") ||(x.category[1]==="640601b2d5d05f50587935a4") )))
      .catch((error) => console.log(error));
  }, []);

  const values = {
    variety,
    setVariety,
  };
  return <VarietyPacksContext.Provider value={values}>{children}</VarietyPacksContext.Provider>;
};

export const useVarietyPacks=()=>{
    const context= useContext(VarietyPacksContext)

    if(context===undefined){
        throw new Error("useVarietyPacks must be used within a VarietyPacksProvider")
    }

    return context
};