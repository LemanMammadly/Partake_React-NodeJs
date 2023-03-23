import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


const BreakfatsMixContext = createContext();

export const BreakfatsMixContextProvider = ({ children }) => {
  const [breakfastmix, setBreakfastmix] = useState();


  useEffect(() => {
    axios
      .get("http://localhost:3030/product")
      .then((res) => setBreakfastmix(res.data.products.filter(x=>x.category[0]==="6405f732d5d05f50587935a1")))
      .catch((error) => console.log(error));
  }, []);
      

  const values = {
    breakfastmix,
    setBreakfastmix,
  };
  return <BreakfatsMixContext.Provider value={values}>{children}</BreakfatsMixContext.Provider>;
};


export const useBreakfatsMix=()=>{
    const context= useContext(BreakfatsMixContext)

    if(context===undefined){
        throw new Error("useBreakfatsMix must be used within a BreakfatsMixProvider")
    }

    return context
};