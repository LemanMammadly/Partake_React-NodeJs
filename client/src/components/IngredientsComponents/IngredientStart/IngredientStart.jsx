import React from "react";
import "./IngredientStart.css";
import {Link} from 'react-router-dom'

const IngredientStart = () => {
  return (
    <section className="ingredientstart">
      <div className="allingredientstart d-flex">
        <div className="leftingredientstart col-lg-6 col-12">
          <img
            className="img-fluid"
            src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/11.png?v=1671785077"
            alt=""
          />
        </div>
        <div className="righttingredientstart col-lg-6 col-12">
          <h2>It Starts with the Ingredients</h2>
          <p>
            Our products are gluten-free, vegan, non-GMO, and free from the top
            9 allergens—but that’s not all. We have meticulously curated each
            and every recipe to find the perfect combination of ingredients that
            are safe for those with food allergies, healthy AND absolutely
            delicious. Explore the fruits, vegetables, spices and more that make
            Partake safe and better-for-you products.
          </p>
          <Link to='/about'>LEARN MORE</Link>
        </div>
      </div>
    </section>
  );
};

export default IngredientStart;
