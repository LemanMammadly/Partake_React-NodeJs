import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


const SubcategoryContext = createContext();

export const SubcategoryContextProvider = ({ children }) => {
  const [subcategories, setSubcategory] = useState();


  useEffect(() => {
    axios
      .get("http://localhost:3030/subcategory")
      .then((res) => setSubcategory(res.data.subcategories))
      .catch((error) => console.log(error));
  }, []);
      

  const values = {
    subcategories,
    setSubcategory,
  };
  return <SubcategoryContext.Provider value={values}>{children}</SubcategoryContext.Provider>;
};


export const useSubcategory=()=>{
    const context= useContext(SubcategoryContext)

    if(context===undefined){
        throw new Error("useSubcategoryContext must be used within a SubcategoryContextProvider")
    }

    return context
};