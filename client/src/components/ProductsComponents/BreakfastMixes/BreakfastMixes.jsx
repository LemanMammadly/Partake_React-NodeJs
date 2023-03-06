import React from "react";
import { Link } from "react-router-dom";
import { useBreakfatsMix } from "../../Context/BreakfastMixesContext";
import "./BreakfastMixes.css";

const BreakfastMixes = () => {
    const {breakfastmix}=useBreakfatsMix()
  return (
    <section className="breakfastmixes">
      <div className="allbreakfastmixes">
        <h2 id="breakfast">Breakfast Mixes</h2>
        <div className="bottombreakfastmixes">
          {breakfastmix &&
            breakfastmix.map((breakfastmixs, _id) => (
              <div className="bottombreakfast col-lg-12">
                <div className="bottomtop">
                  <img className="img-fluid" src={breakfastmixs.img[0]} alt="" />
                </div>
                {breakfastmixs.statusCategory === "6403328368fcefd61e1127ea" && (
                  <div className="best">
                    <span>
                      BEST <br /> SELLER
                    </span>
                  </div>
                )}
                {breakfastmixs.statusCategory === "640337e568fcefd61e1127f8" && (
                  <div className="best">
                    <span>
                      LIMITED <br /> EDITION
                    </span>
                  </div>
                )}
                {breakfastmixs.statusCategory === "640337cf68fcefd61e1127f7" && (
                  <div className="best">
                    <span>
                      SOLD <br /> OUT
                    </span>
                  </div>
                )}
                <div className="quickaddbtnbreakfast">
                  <Link to="">
                    <button className="btn">QUICK ADD</button>
                  </Link>
                </div>
                <div className="bottombottom text-center">
                  <p>{breakfastmixs.name}</p>
                  <div className="icondiv">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>{breakfastmixs.reting}</span>
                  </div>
                  <p className="price">From ${breakfastmixs.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BreakfastMixes;
