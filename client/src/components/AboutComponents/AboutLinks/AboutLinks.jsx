import React from 'react'
import './AboutLinks.css'
import {Link} from 'react-router-dom'

const AboutLinks = () => {
  return (
    <section className='aboutlinks'>
        <div className="alllinksabout d-flex">
            <Link to='/' className="leftlinks col-lg-6 col-12 text-center">
                <span>Press</span>
            </Link> 
            <Link to='/' className="rightlinks col-lg-6 col-12 text-center">
                 <span>Ingredients</span>
            </Link>
        </div>
    </section>
  )
}

export default AboutLinks