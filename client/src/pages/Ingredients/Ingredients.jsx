import React from 'react'
import IngredientsHeader from '../../components/IngredientsComponents/IngredientsHeader/IngredientsHeader'
import IngredientsIcons from '../../components/IngredientsComponents/IngredientsIcons/IngredientsIcons'
import IngredientsPicture from '../../components/IngredientsComponents/IngredientsPicture/IngredientsPicture'
import IngredientStart from '../../components/IngredientsComponents/IngredientStart/IngredientStart'
import './Ingredients.css'

const Ingredients = () => {
  return (
    <div>
        <IngredientsHeader/>
        <IngredientStart/>
        <IngredientsPicture/>
        <IngredientsIcons/>
    </div>
  )
}

export default Ingredients