import React from 'react'
import { BsFillEggFill } from 'react-icons/bs'
import { AiFillGoogleCircle } from 'react-icons/ai'
import {SlChemistry} from 'react-icons/sl'
import { GiCoconuts, GiCoffeeBeans, GiJellyBeans, GiSesame, GiWaterDrop } from 'react-icons/gi'
import { TbBottle } from 'react-icons/tb'
import './Aboutsafe.css'

const Aboutsafe = () => {
  return (
    <section className='aboutsafe'>
        <div className="all">
            <div className="topaboutsafe">
                <h2>The Partake Promise</h2>
                <p>Our products give delicious peace of mind to those <br /> with dietary restrictions... and "How is this so good?" <br /> enjoyment to everyone else.</p>
            </div>
            <div className="bottomaboutsafe d-flex justify-content-center">
                <div><GiJellyBeans className='icondiv'/><p>Peanuts</p></div>
                <div><BsFillEggFill className='icondiv'/><p>Eggs</p></div>
                <div><TbBottle className='icondiv'/><p>Dairy</p></div>
                <div><GiCoffeeBeans className='icondiv'/><p>Soy</p></div>
                <div><GiCoconuts className='icondiv'/><p>Tree Nuts</p></div>
                <div><GiSesame className='icondiv'/><p>Seasame</p></div>
                <div><GiWaterDrop className='icondiv'/><p>Artificial <br /> Flavors</p></div>
                <div><AiFillGoogleCircle className='icondiv'/><p>GMO's</p></div>
                <div><SlChemistry className='icondiv'/><p>Artificial <br /> Preservatives</p></div>
            </div>
        </div>
    </section>
  )
}

export default Aboutsafe