import React from 'react'
import { useBakingMix } from '../../Context/BakingmixContext';
import './Bakingmixes.css'
import {Link} from 'react-router-dom'

const Bakingmixes = () => {
    const { bakingmix } = useBakingMix();
  return (
    <section className="bakingmixes">
      <div className="allbakingmixes">
        <h2 id="baking">Baking Mixes</h2>
        <div className="bottombakingmixes">
          {bakingmix &&
            bakingmix.map((bakingmixs, _id) => (
              <div className="bottombaking col-lg-12">
                <div className="bottomtop">
                  <img className="img-fluid" src={bakingmixs.img[0]} alt="" />
                </div>
                {bakingmixs.statusCategory === "6403328368fcefd61e1127ea" && (
                  <div className="best">
                    <span>
                      BEST <br /> SELLER
                    </span>
                  </div>
                )}
                {bakingmixs.statusCategory === "640337e568fcefd61e1127f8" && (
                  <div className="best">
                    <span>
                      LIMITED <br /> EDITION
                    </span>
                  </div>
                )}
                {bakingmixs.statusCategory === "640337cf68fcefd61e1127f7" && (
                  <div className="best">
                    <span>
                      SOLD <br /> OUT
                    </span>
                  </div>
                )}
                <div className="quickaddbtnbaking">
                  <Link to="">
                    <button className="btn">QUICK ADD</button>
                  </Link>
                </div>
                <div className="bottombottom text-center">
                  <p>{bakingmixs.name}</p>
                  <div className="icondiv">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>{bakingmixs.reting}</span>
                  </div>
                  <p className="price">From ${bakingmixs.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Bakingmixes