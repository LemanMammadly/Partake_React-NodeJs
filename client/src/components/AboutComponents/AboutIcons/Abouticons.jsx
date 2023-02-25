import React from 'react'
import './Abouticons.css'
import {SiGogdotcom, SiGoland} from 'react-icons/si'
import {GiHeartDrop} from 'react-icons/gi'
import {TiTick} from 'react-icons/ti'
import {TbLetterU} from 'react-icons/tb'
import {BsFlower1} from 'react-icons/bs'

const Abouticons = () => {
  return (
    <section className='abouticons'>
        <div className="alliconsabout col-lg-12 d-flex align-items-center justify-content-center">
            <div className="iconabout"><SiGoland/></div>
            <div className="iconabout"><GiHeartDrop/></div> 
            <div className="iconabout"><TiTick/></div>
            <div className="iconabout"><TbLetterU/></div>
            <div className="iconabout"><BsFlower1/></div>
            <div className="iconabout"><SiGogdotcom/></div>
        </div>
    </section>
  )
}

export default Abouticons