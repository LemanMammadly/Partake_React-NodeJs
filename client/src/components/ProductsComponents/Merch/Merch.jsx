import React from 'react'
import { useMerch } from '../../Context/MerchContext'
import './Merch.css'
import {Link} from 'react-router-dom'

const Merch = () => {
    const {merch} =useMerch()
  return (
    <section className="merch">
      <div className="allmerch">
        <h2 id="merch">Merch</h2>
        <div className="bottommerchs">
          {merch &&
            merch.map((merchs, _id) => (
              <div className="bottommerch col-lg-12">
                <div className="bottomtop">
                  <img
                    className="img-fluid"
                    src={merchs.img[0]}
                    alt=""
                  />
                </div>
                {merchs.statusCategory ===
                  "6403328368fcefd61e1127ea" && (
                  <div className="best">
                    <span>
                      BEST <br /> SELLER
                    </span>
                  </div>
                )}
                {merchs.statusCategory ===
                  "640337e568fcefd61e1127f8" && (
                  <div className="best">
                    <span>
                      LIMITED <br /> EDITION
                    </span>
                  </div>
                )}
                {merchs.statusCategory ===
                  "640337cf68fcefd61e1127f7" && (
                  <div className="best">
                    <span>
                      SOLD <br /> OUT
                    </span>
                  </div>
                )}
                <div className="quickaddbtnmerch">
                  <Link to="">
                    <button className="btn">QUICK ADD</button>
                  </Link>
                </div>
                <div className="bottombottom text-center">
                  <p>{merchs.name}</p>
                  <div className="icondiv">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>{merchs.reting}</span>
                  </div>
                  <p className="price">From ${merchs.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Merch