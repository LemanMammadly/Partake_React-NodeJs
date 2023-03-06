import React from 'react'
import './SoftBaked.css'
import { useSoftBaked } from "../../Context/SoftBakedContext";
import { Link } from 'react-router-dom';

const SoftBaked = () => {
    const { softbaked } = useSoftBaked();
  return (
    <section className="softbaked">
      <div className="allsoftbaked">
        <h2 id="softbaked">Soft Baked Cookies</h2>
        <div className="bottomsoftbaked">
          {softbaked &&
            softbaked.map((softbakeds, _id) => (
              <div className="bottomsoft col-lg-12">
                <div className="bottomtop">
                  <img className="img-fluid" src={softbakeds.img[0]} alt="" />
                </div>
                {softbakeds.statusCategory === "6403328368fcefd61e1127ea" && (
                  <div className="best">
                    <span>
                      BEST <br /> SELLER
                    </span>
                  </div>
                )}
                {softbakeds.statusCategory === "640337e568fcefd61e1127f8" && (
                  <div className="best">
                    <span>
                      LIMITED <br /> EDITION
                    </span>
                  </div>
                )}
                {softbakeds.statusCategory === "640337cf68fcefd61e1127f7" && (
                  <div className="best">
                    <span>
                      SOLD <br /> OUT
                    </span>
                  </div>
                )}
                <div className="quickaddbtnsoft">
                  <Link to="">
                    <button className="btn">QUICK ADD</button>
                  </Link>
                </div>
                <div className="bottombottom text-center">
                  <p>{softbakeds.name}</p>
                  <div className="icondiv">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>{softbakeds.reting}</span>
                  </div>
                  <p className="price">From ${softbakeds.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default SoftBaked