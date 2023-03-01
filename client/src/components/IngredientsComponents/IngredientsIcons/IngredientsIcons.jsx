import React from 'react'
import './IngredientsIcons.css'
import {GiCoconuts, GiCoffeeBeans, GiJellyBeans, GiJellyfish, GiSesame, GiWheat} from 'react-icons/gi'
import {BsFillEggFill} from 'react-icons/bs'
import {TbBottle} from 'react-icons/tb'
import {FaFish} from 'react-icons/fa'

const IngredientsIcons = () => {
  return (
    <section className='ingrdientsicons'>
        <div className="bottomsafe d-flex align-items-center justify-content-center">
                <div><GiJellyBeans className='icondiv'/><p>Peanuts</p></div>
                <div><BsFillEggFill className='icondiv'/><p>Eggs</p></div>
                <div><TbBottle className='icondiv'/><p>Dairy</p></div>
                <div><GiCoffeeBeans className='icondiv'/><p>Soy</p></div>
                <div><GiCoconuts className='icondiv'/><p>Tree Nuts</p></div>
                <div><GiSesame className='icondiv'/><p>Seasame</p></div>
                <div><FaFish className='icondiv'/><p>Fish</p></div>
                <div><GiWheat className='icondiv'/><p>Wheat</p></div>
                <div><GiJellyfish className='icondiv'/><p>Shellfish</p></div>
            </div>
    </section>
  )
}

export default IngredientsIcons