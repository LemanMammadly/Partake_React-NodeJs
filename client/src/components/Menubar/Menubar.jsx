import React from "react";
import { Link } from "react-router-dom";
import { useCategory } from "../Context/CategoryContext";
import "./Manubar.css";

const Menubar = () => {
  const { snack } = useCategory();
  const { variety } = useCategory();
  const { cookies } = useCategory();
  const { baking } = useCategory();
  const { breakfast } = useCategory();
  const { bestsellerss } = useCategory();


  const snack_id = snack?.map((item) => {
    return item._id;
  });

  const variety_id = variety?.map((item) => {
    return item._id;
  });

  const cookies_id = cookies?.map((item) => {
    return item._id;
  });

  const baking_id = baking?.map((item) => {
    return item._id;
  });

  const breakfast_id = breakfast?.map((item) => {
    return item._id;
  });

  const bestsellers_id = bestsellerss?.map((item) => {
    return item._id;
  });

  const closeBars = () => {
    document.getElementById("menubar").style.display = "none";
    document.body.classList.remove("stop-scrolling");
  };

  const drop1 = () => {
    if (document.querySelector(".dropdown1").style.display === "none") {
      document.querySelector(".dropdown1").style.display = "block";
      document.getElementById("icon1").className = "fa-solid fa-caret-up";
      document.getElementById("iconss").style.top = "0";
    } else {
      document.querySelector(".dropdown1").style.display = "none";
      document.getElementById("icon1").className = "fa-solid fa-caret-down";
      document.getElementById("iconss").style.top = "240px";
    }
  };
  const drop2 = () => {
    if (document.querySelector(".dropdown2").style.display === "none") {
      document.querySelector(".dropdown2").style.display = "block";
      document.getElementById("icon2").className = "fa-solid fa-caret-up";
    } else {
      document.querySelector(".dropdown2").style.display = "none";
      document.getElementById("icon2").className = "fa-solid fa-caret-down";
    }
  };
  const drop3 = () => {
    if (document.querySelector(".dropdown3").style.display === "none") {
      document.querySelector(".dropdown3").style.display = "block";
      document.getElementById("icon3").className = "fa-solid fa-caret-up";
    } else {
      document.querySelector(".dropdown3").style.display = "none";
      document.getElementById("icon3").className = "fa-solid fa-caret-down";
    }
  };

  const closeMenubar = () => {
    document.getElementById("menubar").style.display = "none";
    document.body.classList.remove("stop-scrolling");
  };
  return (
    <div id="menubar">
      <i onClick={closeMenubar} className="fa-solid fa-xmark x ml-3 x"></i>
      <ul>
        <li onClick={drop1} className="main">
          PRODUCTS{" "}
          <span>
            <i id="icon1" className="fa-solid fa-caret-down"></i>
          </span>
        </li>
        <ul style={{ display: "none" }} className="dropdown dropdown1">
          <Link onClick={closeBars} to="/products">
            <li>Products</li>
          </Link>
          <Link onClick={() => window.reload()} to={`/products/${bestsellers_id}`}>
            <li>Best Sellers</li>
          </Link>
          <Link onClick={() => window.reload()} to={`/products/${snack_id}`}>
            <li>Snack Packs</li>
          </Link>
          <Link to="/">
            <li>Gifts</li>
          </Link>
          <Link to="/">
            <li>Loyalty Program</li>
          </Link>
          <Link to="/">
            <li>Build Your Own</li>
          </Link>
          <Link onClick={() => window.reload()} to={`/products/${variety_id}`}>
            <li>Variety Packs</li>
          </Link>
          <Link onClick={() => window.reload()} to={`/products/${cookies_id}`}>
            <li>Cookies</li>
          </Link>
          <Link onClick={() => window.reload()} to={`/products/${baking_id}`}>
            <li>Baking Mixes</li>
          </Link>
          <Link onClick={() => window.reload()} to={`/products/${breakfast_id}`}>
            <li>Breakfast Mixes</li>
          </Link>
        </ul>
        <hr />
        <li onClick={drop2} className="main">
          OUR STORY{" "}
          <span>
            <i id="icon2" className="fa-solid fa-caret-down"></i>
          </span>
        </li>
        <ul style={{ display: "none" }} className="dropdown dropdown2">
          <Link onClick={closeBars} to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/">
            <li>FAQ</li>
          </Link>
          <Link onClick={closeBars} to="/ingredients">
            <li>Ingredients</li>
          </Link>
          <Link onClick={closeBars} to="/press">
            <li>Press</li>
          </Link>
        </ul>
        <hr />
        <Link onClick={closeBars} to="/ingredients">
          <li className="main">INGREDIENTS</li>
        </Link>
        <hr />
        <Link to="/">
          <li className="main">FIND US</li>
        </Link>
        <hr />
        <li onClick={drop3} className="main">
          BLOG{" "}
          <span>
            <i id="icon3" class="fa-solid fa-caret-down"></i>
          </span>
        </li>
        <ul style={{ display: "none" }} className="dropdown dropdown3">
          <Link to="/">
            <li>From the Blog</li>
          </Link>
          <Link to="/">
            <li>From Denise</li>
          </Link>
          <Link to="/">
            <li>Partake Recipes</li>
          </Link>
        </ul>
        <hr />
        <ul className="icons iconstop" id="iconss">
          <Link to="/">
            <li>
              <i class="fa-brands fa-facebook"></i>
            </li>
          </Link>
          <Link to="/">
            <li>
              <i class="fa-brands fa-square-instagram"></i>
            </li>
          </Link>
          <Link to="/">
            <li>
              <i class="fa-brands fa-square-twitter"></i>
            </li>
          </Link>
          <Link to="/">
            <li>
              <i class="fa-brands fa-pinterest"></i>
            </li>
          </Link>
          <Link to="/">
            <li>
              <i class="fa-brands fa-tiktok"></i>
            </li>
          </Link>
        </ul>
      </ul>
    </div>
  );
};

export default Menubar;