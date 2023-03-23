import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


const SnackPacksContext = createContext();

export const SnackPacksContextProvider = ({ children }) => {
  const [snackpacks, setSnackpacks] = useState();


  useEffect(() => {
    axios
      .get("http://localhost:3030/product")
      .then((res) => setSnackpacks(res.data.products.filter(x=>x.category[0]==="6409b028aad20645b3532c2e")))
      .catch((error) => console.log(error));
  }, []);
      

  const values = {
    snackpacks,
    setSnackpacks,
  };
  return <SnackPacksContext.Provider value={values}>{children}</SnackPacksContext.Provider>;
};


export const useSnackPacks=()=>{
    const context= useContext(SnackPacksContext)

    if(context===undefined){
        throw new Error("useSnackPacks must be used within a SnackPacksProvider")
    }

    return context
};