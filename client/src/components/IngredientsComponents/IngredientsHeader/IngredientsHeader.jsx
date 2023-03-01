import React from 'react'
import './IngredientsHeader.css'

const IngredientsHeader = () => {
  return (
    <section className='ingredientsheader'>
        <div className="allingredientsheader d-flex">
            <div className="leftingredientsheader col-lg-6 col-12">
                <div className="mainingredients">
                    <h1>Ingredients</h1>
                    <div className="textingredients">
                        <p>What’s Inside</p>
                    </div>
                </div>
            </div>
            <div className="rightingredientsheader col-lg-6 col-12">
                <img className='img-fluid img-norm' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Ingredients_desktop.png?v=1671801641" alt="" />
                <img className='img-mob' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/SL2A8496-Edit_2_2.png?v=1671784851" alt="" />
            </div>
        </div>
    </section>
  )
}

export default IngredientsHeader