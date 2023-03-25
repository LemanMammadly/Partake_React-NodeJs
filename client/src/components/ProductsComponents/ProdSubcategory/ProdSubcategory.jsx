import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Aboutsafe from "../../AboutComponents/AboutSafe/Aboutsafe";
import ProdImgBox from "../ProdImgBox/ProdImgBox";
import ProductsHeaderText from "../ProductsHeaderText/ProductsHeaderText";
import "./ProdSubcategory.css";

const ProdSubcategory = () => {
  const {id}=useParams()
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios
      .get(`http://localhost:3030/category/${id}`)
      .then((res) => setProducts(res.data.categories))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ProductsHeaderText />
      <section className="mainsubprods">
        <div className="allmainsubprods d-flex">
          <div className="leftmainsubprods col-lg-3 col-12">
            <ul>
            {products?.map((productss,id)=>(
                <li key={id}>{productss.subcategory}</li>
              ))}
            </ul>
          </div>
          <div className="rightmainsubprods col-lg-9 col-12"></div>
        </div>
      </section>
      <ProdImgBox />
      <Aboutsafe />
    </>
  );
};

export default ProdSubcategory;
