import React from 'react'
import styles from './FreeShipping.module.css'
import {Link} from 'react-router-dom'

const FreeShipping = () => {
  return (
    <Link to='/products' className={`${styles.freeshipping} d-flex align-items-center justify-content-center`} >
        <p className='m-0'>Free Shipping on Orders $29.99+</p>
        <i className={`fa-solid fa-arrow-right-long ml-3 ${styles.arrow}`}></i>
    </Link>
  )
}

export default FreeShipping