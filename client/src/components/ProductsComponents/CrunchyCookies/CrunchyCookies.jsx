import React from "react";
import { Link } from "react-router-dom";
import { useCrunchy } from "../../Context/CrunchyContext";
import "./CrunchyCookies.css";

const CrunchyCookies = () => {
  const { crunchy } = useCrunchy();
  console.log(crunchy);
  return (
    <section className="crunchycookies">
      <div className="allcrunchycookies">
        <h2 id="crunchy">Crunchy Cookies</h2>
        <div className="bottomcrunchycookies">
          {crunchy &&
            crunchy.map((crunchys, _id) => (
              <div className="bottombox col-lg-12">
                <div className="bottomtop">
                  <img className="img-fluid" src={crunchys.img[0]} alt="" />
                </div>
                {crunchys.statusCategory === "6403328368fcefd61e1127ea" && (
                  <div className="best">
                    <span>
                      BEST <br /> SELLER
                    </span>
                  </div>
                )}
                {crunchys.statusCategory === "640337e568fcefd61e1127f8" && (
                  <div className="best">
                    <span>
                      LIMITED <br /> EDITION
                    </span>
                  </div>
                )}
                {crunchys.statusCategory === "640337cf68fcefd61e1127f7" && (
                  <div className="best">
                    <span>
                      SOLD <br /> OUT
                    </span>
                  </div>
                )}
                <div className="quickaddbtn">
                  <Link to="">
                    <button className="btn">QUICK ADD</button>
                  </Link>
                </div>
                <div className="bottombottom text-center">
                  <p>{crunchys.name}</p>
                  <div className="icondiv">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>{crunchys.reting}</span>
                  </div>
                  <p className="price">From ${crunchys.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CrunchyCookies;
