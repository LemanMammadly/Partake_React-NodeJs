import React from 'react'
import './Aboutheader.css'

const Aboutheader = () => {
  return (
    <section className='aboutheader'>
        <div className="all d-flex col-lg-12 align-items-center justify-content-center">
            <div className="leftaboutheader col-lg-6">
                <h1>About Us</h1>
                <p>From humble beginnings to <br /> the future of food.</p>
            </div>
            <div className="rightaboutheader col-lg-6">
                <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/About_us_Desktop.png?v=1671800203" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Aboutheader