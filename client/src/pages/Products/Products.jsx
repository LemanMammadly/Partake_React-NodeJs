import React from "react";
import { useLocation } from "react-router-dom";
import Aboutsafe from "../../components/AboutComponents/AboutSafe/Aboutsafe";
import MainProducts from "../../components/ProductsComponents/MainProducts/MainProducts";
import ProdImgBox from "../../components/ProductsComponents/ProdImgBox/ProdImgBox";
import ProdSubcategory from "../../components/ProductsComponents/ProdSubcategory/ProdSubcategory";
import ProductsHeaderText from "../../components/ProductsComponents/ProductsHeaderText/ProductsHeaderText";
import "./Products.css";

const Products = () => {
  return (
    <>
      <ProductsHeaderText />
      <MainProducts />
      <ProdImgBox />
      <Aboutsafe />
    </>
  );
};

export default Products;
