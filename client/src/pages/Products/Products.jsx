import React from 'react'
import MainProducts from '../../components/ProductsComponents/MainProducts/MainProducts'
import ProductsHeaderText from '../../components/ProductsComponents/ProductsHeaderText/ProductsHeaderText'
import './Products.css'

const Products = () => {
  return (
    <div>
        <ProductsHeaderText/>
        <MainProducts/>
    </div>
  )
}

export default Products