import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


const SoftBakedContext = createContext();

export const SoftBakedContextProvider = ({ children }) => {
  const [softbaked, setSoftbaked] = useState();


  useEffect(() => {
    axios
      .get("http://localhost:3050/product")
      .then((res) => setSoftbaked(res.data.products.filter(x=>x.category[0]==="6405b202d5d05f5058793592")))
      .catch((error) => console.log(error));
  }, []);
      

  const values = {
    softbaked,
    setSoftbaked,
  };
  return <SoftBakedContext.Provider value={values}>{children}</SoftBakedContext.Provider>;
};


export const useSoftBaked=()=>{
    const context= useContext(SoftBakedContext)

    if(context===undefined){
        throw new Error("useSoftBaked must be used within a SoftBakedProvider")
    }

    return context
};