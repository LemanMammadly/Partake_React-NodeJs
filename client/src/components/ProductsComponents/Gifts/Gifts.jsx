import React from 'react'
import { useGifts } from '../../Context/GiftsContext'
import './Gifts.css'
import {Link} from 'react-router-dom'

const Gifts = () => {
    const {gifts}=useGifts()
  return (
    <section className="gifts">
      <div className="allgifts">
        <h2 id="gifts">Gifts</h2>
        <div className="bottomgifts">
          {gifts &&
            gifts.map((giftss, _id) => (
              <div className="bottomgif col-lg-12">
                <div className="bottomtop">
                  <img
                    className="img-fluid"
                    src={giftss.img[0]}
                    alt=""
                  />
                </div>
                {giftss.statusCategory ===
                  "6403328368fcefd61e1127ea" && (
                  <div className="best">
                    <span>
                      BEST <br /> SELLER
                    </span>
                  </div>
                )}
                {giftss.statusCategory ===
                  "640337e568fcefd61e1127f8" && (
                  <div className="best">
                    <span>
                      LIMITED <br /> EDITION
                    </span>
                  </div>
                )}
                {giftss.statusCategory ===
                  "640337cf68fcefd61e1127f7" && (
                  <div className="best">
                    <span>
                      SOLD <br /> OUT
                    </span>
                  </div>
                )}
                <div className="quickaddbtngifts">
                  <Link to="">
                    <button className="btn">QUICK ADD</button>
                  </Link>
                </div>
                <div className="bottombottom text-center">
                  <p>{giftss.name}</p>
                  <div className="icondiv">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>{giftss.reting}</span>
                  </div>
                  <p className="price">From ${giftss.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Gifts