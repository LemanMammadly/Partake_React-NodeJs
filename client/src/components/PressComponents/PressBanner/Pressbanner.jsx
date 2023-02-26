import React from 'react'
import './Pressbanner.css'

const Pressbanner = () => {
  return (
    <section className='pressbanner'>
        <div className="leftbannertext">
            <h1>In the News</h1>
            <p>Read all about us.</p>
        </div>
        <div className="imgdivpress">
            <img className='img' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/press_page-desktop.jpg?v=1671786022" alt="" />
            <img className='resimg col-12' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/press_page-desktop_1.jpg?v=1671786052" alt="" />
        </div>
    </section>
  )
}

export default Pressbanner