import React from "react";
import "./MainProducts.css";
import { Link } from "react-router-dom";
import CrunchyCookies from "../CrunchyCookies/CrunchyCookies";
import SoftBaked from "../SoftBaked/SoftBaked";
import Bakingmixes from "../BakingMixes/Bakingmixes";
import BreakfastMixes from "../BreakfastMixes/BreakfastMixes";
import VarietyPacks from "../VarietyPacks/VarietyPacks";
import SnackPacks from "../SnackPacks/SnackPacks";
import Gifts from "../Gifts/Gifts";
import Merch from "../Merch/Merch";

const MainProducts = () => {
  const showdrop = () => {
    if (document.querySelector(".secondul").style.opacity === "0") {
      document.getElementById("icon").style.transform = "rotate(180deg)";
      document.getElementById("icon").style.transition = ".5s";
      document.querySelector(".secondul").style.pointerEvents = "all";
      document.querySelector(".secondul").style.cursor = "pointer";
      document.querySelector(".secondul").style.height = "100%";
      document.querySelector(".secondul").style.transition = ".5s";
      document.querySelector(".secondul").style.opacity = "1";
    } else {
      document.getElementById("icon").style.transform = "rotate(0deg)";
      document.getElementById("icon").style.transition = ".5s";
      document.querySelector(".secondul").style.opacity = "0";
      document.querySelector(".secondul").style.pointerEvents = "none";
      document.querySelector(".secondul").style.cursor = "default";
      document.querySelector(".secondul").style.height = "0";
      document.querySelector(".secondul").style.transition = ".2s";
    }
  };

  const shopmediadrop = () => {
    if (document.querySelector(".mainul").style.opacity === "0") {
      document.getElementById("iconmedia").style.transform = "rotate(180deg)";
      document.getElementById("iconmedia").style.transition = ".5s";
      document.querySelector(".mainul").style.height = "100%";
      document.querySelector(".mainul").style.transition = ".5s";
      document.querySelector(".mainul").style.opacity = "1";
    } else {
      document.getElementById("iconmedia").style.transform = "rotate(0deg)";
      document.getElementById("iconmedia").style.transition = ".5s";
      document.querySelector(".mainul").style.opacity = "0";
      document.querySelector(".mainul").style.height = "0";
      document.querySelector(".mainul").style.transition = ".2s";
    }
  };

  return (
    <section className="mainproducts">
      <div className="allmainproducts d-flex">
        <div className="leftmainproducts col-lg-3 col-12">
          <div className="selectiondiv" onClick={shopmediadrop}>
            <Link>
              Category Selection{" "}
              <i id="iconmedia" class="fa-solid fa-caret-down ml-3"></i>
            </Link>
          </div>
          <ul
            className="mainul"
            style={{ opacity: window.screen.width <= 576 ? "0" : "1"}}
          >
            <li className="cookies">
              <Link onClick={showdrop}>
                Cookies <i id="icon" class="fa-solid fa-caret-down ml-2"></i>
              </Link>
            </li>
            <ul
              className="secondul"
              style={{
                opacity: "0",
                height: "0",
                pointerEvents: "none",
                cursor: "default",
              }}
            >
              <li className="li1">
                <a href="#crunchy">Crunchy Cookies</a>
              </li>
              <li className="li2">
                <a href="#softbaked">Soft Baked Cookies</a>
              </li>
            </ul>
            <li>
              <a href="#baking">Baking Mixes</a>
            </li>
            <li>
              <a href="#breakfast">Breakfast Mixes</a>
            </li>
            <li>
              <a href="#variety">Variety Packs</a>
            </li>
            <li>
              <a href="#snackpacks">Snack Packs</a>
            </li>
            <li>
              <a href="#gifts">Gifts</a>
            </li>
            <li>
              <a href="#merch">Merch</a>
            </li>
          </ul>
        </div>
        <div className="rightmainproducts col-lg-9 col-12">
          <CrunchyCookies />
          <SoftBaked />
          <Bakingmixes />
          <BreakfastMixes />
          <VarietyPacks />
          <SnackPacks />
          <Gifts />
          <Merch />
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
