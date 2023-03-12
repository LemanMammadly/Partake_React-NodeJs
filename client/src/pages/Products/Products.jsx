import React from 'react'
import Aboutsafe from '../../components/AboutComponents/AboutSafe/Aboutsafe'
import MainProducts from '../../components/ProductsComponents/MainProducts/MainProducts'
import ProductsHeaderText from '../../components/ProductsComponents/ProductsHeaderText/ProductsHeaderText'
import './Products.css'

const Products = () => {
  return (
    <div>
        <ProductsHeaderText/>
        <MainProducts/>
        <Aboutsafe/>
    </div>
  )
}

export default Products