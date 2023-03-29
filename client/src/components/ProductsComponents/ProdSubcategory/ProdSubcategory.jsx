import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Aboutsafe from "../../AboutComponents/AboutSafe/Aboutsafe";
import { useBakingMix } from "../../Context/BakingmixContext";
import { useBestseller } from "../../Context/BestsellersContext";
import { useBreakfatsMix } from "../../Context/BreakfastMixesContext";
import { useCategory } from "../../Context/CategoryContext";
import { useCookies } from "../../Context/CookiesContext";
import { useSnackPacks } from "../../Context/SnackPacksContext";
import { useSubcategory } from "../../Context/SubcategoryContext";
import { useVarietyPacks } from "../../Context/VarietyPacksContext";
import ProdImgBox from "../ProdImgBox/ProdImgBox";
import ProductsHeaderText from "../ProductsHeaderText/ProductsHeaderText";
import "./ProdSubcategory.css";

const ProdSubcategory = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const { category } = useCategory();
  const { snackpacks } = useSnackPacks();
  const { variety } = useVarietyPacks();
  const { cookies } = useCookies();
  const { bakingmix } = useBakingMix();
  const { breakfastmix } = useBreakfatsMix();
  const { bestsellerprod } = useBestseller();

  let prodArr=[]

  
  for (let index = 0; index < snackpacks?.length; index++) {
    const element = snackpacks[index];
    if(element.category[0]===id){
      prodArr.push(element)
    }
  }

    
  for (let index = 0; index < variety?.length; index++) {
    const element = variety[index];
    if(element.category[0]===id){
      prodArr.push(element)
    }
  }

      
  for (let index = 0; index < cookies?.length; index++) {
    const element = cookies[index];
    if(element.category[0]===id || element.category[1]===id || element.category[2]===id){
      prodArr.push(element)
    }
  }


  for (let index = 0; index < bakingmix?.length; index++) {
    const element = bakingmix[index];
    if(element.category[0]===id){
      prodArr.push(element)
    }
  }

  for (let index = 0; index < breakfastmix?.length; index++) {
    const element = breakfastmix[index];
    if(element.category[0]===id){
      prodArr.push(element)
    }
  }

  for (let index = 0; index < bestsellerprod?.length; index++) {
    const element = bestsellerprod[index];
    if(element.category[0]===id ||element.category[1]===id || element.category[2]===id  || element.category[3]===id  ){
      prodArr.push(element)
    }
  }

  let nameProd = [];

  for (let index = 0; index < category.length; index++) {
    const element = category[index];
    if (element._id === id) {
      nameProd.push(element.name);
    }
  }


    
  let unique = [];
  function getUnique(arr, index) {
    unique = arr
      .map((e) => e[index])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  }

  getUnique(prodArr, "_id");

  const { subcategories } = useSubcategory();

  useEffect(() => {
    axios
      .get(`http://localhost:3010/category/${id}`)
      .then((res) => setProducts(res.data.category.subcategory))
      .catch((error) => console.log(error));
  }, [id]);

  let nameArr = [];

  for (let index = 0; index < products?.length; index++) {
    const element = products[index];
    for (let index = 0; index < subcategories?.length; index++) {
      const element2 = subcategories[index];
      if (element === element2._id) {
        nameArr.push(element2.name);
      }
    }
  }

  const shopmediadrop = () => {
    if (document.querySelector(".ul").style.opacity === "0") {
      document.getElementById("iconmediasubprods").style.transform =
        "rotate(180deg)";
      document.getElementById("iconmediasubprods").style.transition = ".5s";
      document.querySelector(".ul").style.height = "100%";
      document.querySelector(".ul").style.transition = ".5s";
      document.querySelector(".ul").style.opacity = "1";
    } else {
      document.getElementById("iconmediasubprods").style.transform =
        "rotate(0deg)";
      document.getElementById("iconmediasubprods").style.transition = ".5s";
      document.querySelector(".ul").style.opacity = "0";
      document.querySelector(".ul").style.height = "0";
      document.querySelector(".ul").style.transition = ".2s";
    }
  };

  return (
    <>
      <ProductsHeaderText />
      <section className="mainsubprods">
      <div className="prodName">
            {nameProd.map((names, id) => (
              <h2 key={id} className="h2">
                {names}
              </h2>
            ))}
          </div>
        <div className="allmainsubprods d-flex">
          <div className="leftmainsubprods col-lg-3 col-12">
            <div className="selectionsubprodsdiv" onClick={shopmediadrop}>
              <Link>
                Category Selection{" "}
                <i
                  id="iconmediasubprods"
                  class="fa-solid fa-caret-down ml-3"
                ></i>
              </Link>
            </div>
            <ul
              style={{
                opacity: window.screen.width <= 576 ? "0" : "1",
                height: window.screen.width <= 576 ? "0" : "100",
              }}
              className="ul"
            >
              {nameArr.map((nameArrs, id) => (
                <li key={id}>
                  <Link to="">{nameArrs}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rightmainsubprods col-lg-9 col-12">
            {
              unique.map((prodArrs,id)=>(
                <div key={id} className="bottomboxsubprod col-lg-12">
                <div className="bottomtopsubprod">
                  <img className="img-fluid" src={prodArrs.img[0]} alt="" />
                </div>
                {prodArrs.statusCategory === "6403328368fcefd61e1127ea" && (
                  <div className="best">
                    <span>
                      BEST <br /> SELLER
                    </span>
                  </div>
                )}
                {prodArrs.statusCategory === "640337e568fcefd61e1127f8" && (
                  <div className="best">
                    <span>
                      LIMITED <br /> EDITION
                    </span>
                  </div>
                )}
                {prodArrs.statusCategory === "640337cf68fcefd61e1127f7" && (
                  <div className="best">
                    <span>
                      SOLD <br /> OUT
                    </span>
                  </div>
                )}
                <div className="quickaddbtnsubprod">
                  <Link to="">
                    <button className="btnsubprod">QUICK ADD</button>
                  </Link>
                </div>
                <div className="bottombottom text-center">
                  <p>{prodArrs.name}</p>
                  <div className="icondiv">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>{prodArrs.reting}</span>
                  </div>
                  <p className="price">From ${prodArrs.price}</p>
                </div>
              </div>
              ))
            }
          </div>
        </div>
      </section>
      <ProdImgBox />
      <Aboutsafe />
    </>
  );
};

export default ProdSubcategory;