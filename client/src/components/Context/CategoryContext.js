import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


const CategoryContext = createContext();

export const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState();
  const [snack, setSnack]=useState();


  useEffect(() => {
    axios
      .get("http://localhost:3030/category")
      .then((res) => setCategory(res.data))
      .catch((error) => console.log(error));
  }, []);


  useEffect(() => {
    axios
      .get("http://localhost:3030/category")
      .then((res) => setSnack(
         res.data.categories.filter(a=>a._id === "6409b028aad20645b3532c2e")
        ))
      .catch((error) => console.log(error));
  }, []);
      

  const values = {
    category,
    setCategory,
    snack,
    setSnack
  };
  return <CategoryContext.Provider value={values}>{children}</CategoryContext.Provider>;
};


export const useCategory=()=>{
    const context= useContext(CategoryContext)

    if(context===undefined){
        throw new Error("useCategory must be used within a CategoryProvider")
    }

    return context
};