import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Aboutsafe from "../../AboutComponents/AboutSafe/Aboutsafe";
import { useSubcategory } from "../../Context/SubcategoryContext";
import ProdImgBox from "../ProdImgBox/ProdImgBox";
import ProductsHeaderText from "../ProductsHeaderText/ProductsHeaderText";
import "./ProdSubcategory.css";

const ProdSubcategory = () => {
  const {id} = useParams()
  console.log(id);
  const [products, setProducts] = useState([]);

  const{subcategories}=useSubcategory()
  console.log(subcategories);

  useEffect(() => {
    axios
      .get(`http://localhost:3050/category/${id}`)
      .then((res) => setProducts((res.data.category.subcategory)))
      .catch((error) => console.log(error));
  }, [id]);

  console.log(products)
  

  for (let index = 0; index < products?.length; index++) {
    const element = products[index];
    for (let index = 0; index < subcategories?.length; index++) {
      const element2 = subcategories[index];
      if(element===element2._id){
        console.log(element2.name);
      }
    }
  }
  


  return (
    <>
      <ProductsHeaderText />
      <section className="mainsubprods">
        <div className="allmainsubprods d-flex">
          <div className="leftmainsubprods col-lg-3 col-12">
            <ul>
              
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
