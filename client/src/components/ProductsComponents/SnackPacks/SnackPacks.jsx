import React from 'react'
import './SnackPacks.css'
import {useSnackPacks} from '../../Context/SnackPacksContext'
import {Link} from 'react-router-dom'

const SnackPacks = () => {
    const {snackpacks}=useSnackPacks()
  return (
    <section className="snackpacks">
      <div className="allsnackpacks">
        <h2 id="snackpacks">Snack Packs</h2>
        <div className="bottomsnackpacks">
          {snackpacks &&
            snackpacks.map((snackpackss, _id) => (
              <div className="bottomsnack col-lg-12">
                <div className="bottomtop">
                  <img
                    className="img-fluid"
                    src={snackpackss.img[0]}
                    alt=""
                  />
                </div>
                {snackpackss.statusCategory ===
                  "6403328368fcefd61e1127ea" && (
                  <div className="best">
                    <span>
                      BEST <br /> SELLER
                    </span>
                  </div>
                )}
                {snackpackss.statusCategory ===
                  "640337e568fcefd61e1127f8" && (
                  <div className="best">
                    <span>
                      LIMITED <br /> EDITION
                    </span>
                  </div>
                )}
                {snackpackss.statusCategory ===
                  "640337cf68fcefd61e1127f7" && (
                  <div className="best">
                    <span>
                      SOLD <br /> OUT
                    </span>
                  </div>
                )}
                <div className="quickaddbtnsnack">
                  <Link to="">
                    <button className="btn">QUICK ADD</button>
                  </Link>
                </div>
                <div className="bottombottom text-center">
                  <p>{snackpackss.name}</p>
                  <div className="icondiv">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>{snackpackss.reting}</span>
                  </div>
                  <p className="price">From ${snackpackss.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default SnackPacks