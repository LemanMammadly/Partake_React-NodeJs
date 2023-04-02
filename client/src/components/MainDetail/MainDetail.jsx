import React from "react";
import "./MainDetail.css";
import { useParams } from "react-router-dom";
import { useProducts } from "../Context/ProductsContext";

const MainDetail = () => {
  const { id } = useParams();

  const { products } = useProducts();

  let productsArr = [];

  for (let index = 0; index < products?.length; index++) {
    const element = products[index];
    if (element._id === id) {
      productsArr.push(element);
    }
  }

  const changeImg = (imgs) => {
    document.getElementById("imgmain").src=imgs
  };

  return (
    <section className="maindetail">
      {productsArr?.map((productArr, id) => (
        <div key={id} className="allmaindetail">
          <div className="leftmaindetail col-lg-6">
            <div className="allleftimg">
              <div className="allminileftimg">
                {
                  productArr.img.map((imgs,id)=>(
                    <div key={id} className="imgleft">
                    <img
                      onClick={()=>changeImg(imgs)}
                      id="changeImg"
                      className="img-fluid minimg"
                      src={imgs}
                      alt=""
                    />
                  </div>
                  ))
                }
              </div>
              <div className="mainimgdiv">
                <img
                  id="imgmain"
                  className="mainimg img-fluid"
                  src={productArr.img}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="rightmaindetail col-lg-6"></div>
        </div>
      ))}
    </section>
  );
};

export default MainDetail;
