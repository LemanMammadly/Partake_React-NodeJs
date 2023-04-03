import React from "react";
import { Link } from "react-router-dom";
import "./BestSellers.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useBestseller } from "../Context/BestsellersContext";

const BestSellers = () => {
  const { bestseller } = useBestseller();

  const options = {

    margin:30,
    responsiveClass:true,
    nav:false,
    autoplay:true,
    smartspeed:1000,
    respomsive:{
      0:{
        items:1,
      },
      400:{
        items:1
      },
      600:{
        items:2
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <section className="bestsellers">
      <div className="all">
        <div className="top d-flex align-items-center  col-lg-12">
          <div className="topleft col-lg-6 col-11">
            <h2>Shop Our Bestsellers</h2>
          </div>
          <div className="topright col-lg-6 text-right">
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
        <div>
          <OwlCarousel className="slider-items owl-carousel" {...options}>
            {bestseller &&
              bestseller.map((bestsellers, _id) => (
                  <div class="item bottom">
                    <div className="bottombox col-lg-4 col-12">
                      <div className="bottomtop">
                        <img
                          className="img-fluid"
                          src={bestsellers.img[0]}
                          alt=""
                        />
                      </div>
                      <div className="best">
                        <span>
                          BEST <br /> SELLER
                        </span>
                      </div>
                      <div className="quickadd">
                        <Link to="/">
                          <button>QUICK ADD</button>
                        </Link>
                      </div>
                      <div className="bottombottom text-center">
                        <p>{bestsellers.name}</p>
                        <div className="icondiv">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <span>{bestsellers.reting}</span>
                        </div>
                        <p className="price">From ${bestsellers.price}</p>
                      </div>
                    </div>
                  </div>
              ))}
          </OwlCarousel>
        </div>
        <div className="bottom normbottom d-flex align-items-center  col-lg-12">
          {bestseller &&
            bestseller.map((bestsellers, _id) => (
              <div className="bottombox col-lg-4 col-12">
                <div className="bottomtop">
                  <img className="img-fluid" src={bestsellers.img[0]} alt="" />
                </div>
                <div className="best">
                  <span>
                    BEST <br /> SELLER
                  </span>
                </div>
                <div className="quickadd">
                  <Link to="/">
                    <button>QUICK ADD</button>
                  </Link>
                </div>
                <div className="bottombottom text-center">
                  <p>{bestsellers.name}</p>
                  <div className="icondiv">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>{bestsellers.reting}</span>
                  </div>
                  <p className="price">From ${bestsellers.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
