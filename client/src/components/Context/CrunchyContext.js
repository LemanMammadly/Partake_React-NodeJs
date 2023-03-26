import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


const CrunchyContext = createContext();

export const CrunchyContextProvider = ({ children }) => {
  const [crunchy, setCrunchy] = useState();


  useEffect(() => {
    axios
      .get("http://localhost:3050/product")
      .then((res) => setCrunchy(res.data.products.filter(x=>x.category[0]==="6403108990e3a5a7a19f1238")))
      .catch((error) => console.log(error));
  }, []);
      

  const values = {
    crunchy,
    setCrunchy,
  };
  return <CrunchyContext.Provider value={values}>{children}</CrunchyContext.Provider>;
};


export const useCrunchy=()=>{
    const context= useContext(CrunchyContext)

    if(context===undefined){
        throw new Error("useCrunchy must be used within a CrunchyProvider")
    }

    return context
};