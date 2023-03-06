import React from "react";
import "./VarietyPacks.css";
import {Link} from 'react-router-dom'
import {useVarietyPacks} from '../../Context/VarietyPacksContext'

const VarietyPacks = () => {
    const {variety}=useVarietyPacks()
  return (
    <section className="varietypacks">
      <div className="allvarietypacks">
        <h2 id="variety">Variety Packs</h2>
        <div className="bottomvarietypacks">
          {variety &&
            variety.map((varietys, _id) => (
              <div className="bottomvariety col-lg-12">
                <div className="bottomtop">
                  <img
                    className="img-fluid"
                    src={varietys.img[0]}
                    alt=""
                  />
                </div>
                {varietys.statusCategory ===
                  "6403328368fcefd61e1127ea" && (
                  <div className="best">
                    <span>
                      BEST <br /> SELLER
                    </span>
                  </div>
                )}
                {varietys.statusCategory ===
                  "640337e568fcefd61e1127f8" && (
                  <div className="best">
                    <span>
                      LIMITED <br /> EDITION
                    </span>
                  </div>
                )}
                {varietys.statusCategory ===
                  "640337cf68fcefd61e1127f7" && (
                  <div className="best">
                    <span>
                      SOLD <br /> OUT
                    </span>
                  </div>
                )}
                <div className="quickaddbtnvariety">
                  <Link to="">
                    <button className="btn">QUICK ADD</button>
                  </Link>
                </div>
                <div className="bottombottom text-center">
                  <p>{varietys.name}</p>
                  <div className="icondiv">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>{varietys.reting}</span>
                  </div>
                  <p className="price">From ${varietys.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default VarietyPacks;
