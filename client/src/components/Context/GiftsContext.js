import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


const GiftsContext = createContext();

export const GiftsContextProvider = ({ children }) => {
  const [gifts, setGifts] = useState();


  useEffect(() => {
    axios
      .get("http://localhost:3010/product")
      .then((res) => setGifts(res.data.products.filter(x=>x.category[0]==="6409bb96aad20645b3532c37")))
      .catch((error) => console.log(error));
  }, []);
      

  const values = {
    gifts,
    setGifts,
  };
  return <GiftsContext.Provider value={values}>{children}</GiftsContext.Provider>;
};


export const useGifts=()=>{
    const context= useContext(GiftsContext)

    if(context===undefined){
        throw new Error("useGifts must be used within a GiftsProvider")
    }

    return context
};