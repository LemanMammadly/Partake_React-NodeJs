import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


const CategoryContext = createContext();

export const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [snack, setSnack]=useState([]);
  const [variety, setVariety]=useState([]);
  const [cookies, setCookies]=useState([]);
  const [baking, setBaking]=useState([]);
  const [breakfast, setBreakfast]=useState([]);
  const [bestsellerss, setBestsellerss]=useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:3050/category")
      .then((res) => setCategory(res.data.categories))
      .catch((error) => console.log(error));
  }, []);


  useEffect(() => {
    axios
      .get("http://localhost:3050/category")
      .then((res) => setSnack(
         res.data.categories.filter(a=>a._id === "6409b028aad20645b3532c2e")
        ))
      .catch((error) => console.log(error));
  }, []);


  useEffect(() => {
    axios
      .get("http://localhost:3050/category")
      .then((res) => setVariety(
         res.data.categories.filter(a=>a._id === "640601b2d5d05f50587935a4")
        ))
      .catch((error) => console.log(error));
  }, []);
  
  
  useEffect(() => {
    axios
      .get("http://localhost:3050/category")
      .then((res) => setCookies(
         res.data.categories.filter(a=>a._id === "6422f5b4f2923dea70e80f9b")
        ))
      .catch((error) => console.log(error));
  }, []);
      

    
  useEffect(() => {
    axios
      .get("http://localhost:3050/category")
      .then((res) => setBaking(
         res.data.categories.filter(a=>a._id === "6405cc6ad5d05f505879359c")
        ))
      .catch((error) => console.log(error));
  }, []);
      

  useEffect(() => {
    axios
      .get("http://localhost:3050/category")
      .then((res) => setBaking(
         res.data.categories.filter(a=>a._id === "6405cc6ad5d05f505879359c")
        ))
      .catch((error) => console.log(error));
  }, []);
      

  useEffect(() => {
    axios
      .get("http://localhost:3050/category")
      .then((res) => setBreakfast(
         res.data.categories.filter(a=>a._id === "6405f732d5d05f50587935a1")
        ))
      .catch((error) => console.log(error));
  }, []);
      

  useEffect(() => {
    axios
      .get("http://localhost:3050/category")
      .then((res) => setBestsellerss(
         res.data.categories.filter(a=>a._id === "6423155a9dcd1be03cdbd0be")
        ))
      .catch((error) => console.log(error));
  }, []);
      


  const values = {
    category,
    setCategory,
    snack,
    setSnack,
    variety,
    setVariety,
    cookies,
    setCookies,
    baking,
    setBaking,
    breakfast,
    setBreakfast,
    bestsellerss,
    setBestsellerss
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