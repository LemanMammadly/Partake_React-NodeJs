import React from "react";
import { Link } from "react-router-dom";
import Menubar from "../Menubar/Menubar";
import "./Header.css";
import { useLogo } from "../Context/LogoContext";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { logo } = useLogo();
  const location = useLocation();
  const path = location.pathname;


  const showProducts = () => {
    if (path === "/") {
      document.getElementById("allproduct").style.display = "block";
      document.getElementById("normimg").src = logo[0].img[1];
      document.querySelector(".containerheader").style.backgroundColor = "#fff";
      document.querySelector(".containerheader").style.transition = ".5s";
    } else if (path === "/about" || path=== '/press' || path==='/ingredients') {
      document.getElementById("allproduct").style.display = "block";
      document.getElementById("normimg").src = logo[0].img[1];
      document.querySelector(".containerheader").style.backgroundColor = "#fff";
      document.querySelector(".containerheader").style.transition = ".5s";
    }else if(path==='/products'){
      document.getElementById("allproduct").style.display = "block";
      document.getElementById("normimg").src = logo[0].img[1];
      document.getElementById("allproduct").style.padding="-10rem 0";
      document.querySelector(".containerheader").style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png)";
      document.querySelector(".containerheader").style.transition = ".5s";
      const allLink = document.getElementsByClassName("link");
      for (let i = 0; i < allLink.length; i++) {
        allLink[i].style.color = "#005099";
      }
    }
  };
  const hide = () => {
    if (path === "/") {
      document.getElementById("allproduct").style.display = "none";
      document.getElementById("normimg").src = logo[0].img[0];
      document.querySelector(".containerheader").style.backgroundColor =
        "#fabfa8";
      document.querySelector(".containerheader").style.transition = ".5s";
    } else if (path === "/about" || path=== '/press' || path==='/ingredients') {
      document.getElementById("allproduct").style.display = "none";
      document.getElementById("normimg").src = logo[0].img[1];
      document.querySelector(".containerheader").style.backgroundColor = "#fff";
      document.querySelector(".containerheader").style.transition = ".5s";
    }else if(path==='/products'){
      document.getElementById("allproduct").style.display = "none";
      document.getElementById("normimg").src = logo[0].img[0];
      document.querySelector(".containerheader").style.backgroundImage ="url(https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Untitled_design_-_2022-05-09T181037.683.png?v=1652134275)"
      document.querySelector(".containerheader").style.transition = ".5s";
      const allLink = document.getElementsByClassName("link");
      for (let i = 0; i < allLink.length; i++) {
        allLink[i].style.color = "#fff";
      }
    }
  };

  const showStory = () => {
    if (path === "/") {
      document.getElementById("allstory").style.display = "block";
      document.getElementById("normimg").src = logo[0].img[1];
      document.querySelector(".containerheader").style.backgroundColor = "#fff";
      document.querySelector(".containerheader").style.transition = ".5s";
    } else if (path === "/about" || path=== '/press' || path==='/ingredients') {
      document.getElementById("allstory").style.display = "block";
      document.getElementById("normimg").src = logo[0].img[1];
      document.querySelector(".containerheader").style.backgroundColor = "#fff";
      document.querySelector(".containerheader").style.transition = ".5s";
    }
    else if(path==='/products'){
      document.getElementById("allstory").style.display = "block";
      document.getElementById("normimg").src = logo[0].img[1];
      document.querySelector(".containerheader").style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png)";
      document.querySelector(".containerheader").style.transition = ".5s";
      const allLink = document.getElementsByClassName("link");
      for (let i = 0; i < allLink.length; i++) {
        allLink[i].style.color = "#005099";
      }
    }
  };
  const hideStory = () => {
    if (path === "/") {
      document.getElementById("allstory").style.display = "none";
      document.getElementById("normimg").src = logo[0].img[0];
      document.querySelector(".containerheader").style.backgroundColor =
        "#fabfa8";
      document.querySelector(".containerheader").style.transition = ".5s";
    } else if (path === "/about" || path=== '/press' || path==='/ingredients') {
      document.getElementById("allstory").style.display = "none";
      document.getElementById("normimg").src = logo[0].img[1];
      document.querySelector(".containerheader").style.backgroundColor = "#fff";
      document.querySelector(".containerheader").style.transition = ".5s";
    }
    else if(path==='/products'){
      document.getElementById("allstory").style.display = "none";
      document.getElementById("normimg").src = logo[0].img[0];
      document.querySelector(".containerheader").style.backgroundImage ="url(https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Untitled_design_-_2022-05-09T181037.683.png?v=1652134275)"
      document.querySelector(".containerheader").style.transition = ".5s";
      const allLink = document.getElementsByClassName("link");
      for (let i = 0; i < allLink.length; i++) {
        allLink[i].style.color = "#fff";
      }
    }
  };

  const showBlog = () => {
    if (path === "/") {
      document.getElementById("allblog").style.display = "block";
      document.getElementById("normimg").src = logo[0].img[1];
      document.querySelector(".containerheader").style.backgroundColor = "#fff";
      document.querySelector(".containerheader").style.transition = ".5s";
    } else if (path === "/about" || path=== '/press' || path==='/ingredients') {
      document.getElementById("allblog").style.display = "block";
      document.getElementById("normimg").src = logo[0].img[1];
      document.querySelector(".containerheader").style.backgroundColor = "#fff";
      document.querySelector(".containerheader").style.transition = ".5s";
    }
    else if(path==='/products'){
      document.getElementById("allblog").style.display = "block";
      document.getElementById("normimg").src = logo[0].img[1];
      document.querySelector(".containerheader").style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png)";
      document.querySelector(".containerheader").style.transition = ".5s";
      const allLink = document.getElementsByClassName("link");
      for (let i = 0; i < allLink.length; i++) {
        allLink[i].style.color = "#005099";
      }
    }
  };
  const hideBlog = () => {
    if (path === "/") {
      document.getElementById("allblog").style.display = "none";
      document.getElementById("normimg").src = logo[0].img[0];
      document.querySelector(".containerheader").style.backgroundColor =
        "#fabfa8";
      document.querySelector(".containerheader").style.transition = ".5s";
    } else if (path === "/about" || path=== '/press' || path==='/ingredients') {
      document.getElementById("allblog").style.display = "none";
      document.getElementById("normimg").src = logo[0].img[1];
      document.querySelector(".containerheader").style.backgroundColor = "#fff";
      document.querySelector(".containerheader").style.transition = ".5s";
    }
    else if(path==='/products'){
      document.getElementById("allblog").style.display = "none";
      document.getElementById("normimg").src = logo[0].img[0];
      document.querySelector(".containerheader").style.backgroundImage ="url(https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Untitled_design_-_2022-05-09T181037.683.png?v=1652134275)"
      document.querySelector(".containerheader").style.transition = ".5s";
      const allLink = document.getElementsByClassName("link");
      for (let i = 0; i < allLink.length; i++) {
        allLink[i].style.color = "#fff";
      }
    }
  };

  const openSearch = () => {
    document.getElementById("allsearch").style.display = "block";
    document.body.classList.add("stop-scrolling");
  };

  const closeSearch = () => {
    document.getElementById("allsearch").style.display = "none";
    document.body.classList.remove("stop-scrolling");
  };
  const hidePopup = () => {
    document.getElementById("allsearch").style.display = "none";
    document.body.classList.remove("stop-scrolling");
  };

  const openBasket = () => {
    document.getElementById("basket").style.display = "block";
    document.body.classList.add("stop-scrolling");
  };
  const closeBasket = () => {
    document.getElementById("basket").style.display = "none";
    document.body.classList.remove("stop-scrolling");
  };

  const hideBasket = () => {
    document.getElementById("basket").style.display = "none";
    document.body.classList.remove("stop-scrolling");
  };

  const openMenubar = () => {
    document.getElementById("menubar").style.display = "block";
    document.body.classList.add("stop-scrolling");
  };

  return (
    <header  className={`containerheader col-12`}  style={{background: window.location.pathname === "/" ? "#fabfa8" : "#fff" , backgroundImage : window.location.pathname==='/products' ? "url(https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Untitled_design_-_2022-05-09T181037.683.png?v=1652134275)" : " " , paddingBottom:  window.location.pathname==='/products' ? "254px" : '' , backgroundSize: window.location.pathname==='/products' ? "100%" : '', backgroundRepeat:window.location.pathname==='/products' ? "no-repeat" : '' }} >
      <div className="hideindesktop" style={{backgroundImage:window.location.pathname==='/products' ? "url(https://cdn.shopify.com/s/files/1/0012/2296/7353/files/MA_Partake_5-layers_1.5x.png?v=1640863314)" : '' , backgroundSize:window.location.pathname==='/products' ? '100%' : '', backgroundPosition: window.location.pathname==='/products' ? 'center' : ''}}></div>
      <div className="all d-flex align-items-center justify-content-center col-lg-12 col-12">
        <div className="left col-lg-4 text-center col-2">
          <Link onClick={openMenubar} className="bars" to="">
            <i style={{color:  window.location.pathname==='/products' ? 'white' : ''}} className="fa-solid fa-bars link"></i>
          </Link>
          <Link className="search" to="">
            <i style={{color:  window.location.pathname==='/products' ? 'white' : ''}} onClick={openSearch} className="fa-solid fa-magnifying-glass link"></i>
          </Link>
          <Link
            onMouseEnter={showProducts}
            onMouseLeave={hide}
            className="productslink link"
            to="/products"
            onClick={()=>window.reload()}
            style={{color:  window.location.pathname==='/products' ? 'white' : ''}}
          >
            Products
          </Link>
          <Link className="link" onMouseEnter={showStory} onMouseLeave={hideStory} to="/"  style={{color:  window.location.pathname==='/products' ? 'white' : ''}}>
            Our Story
          </Link>
          <Link className="link" to="/ingredients"  style={{color:  window.location.pathname==='/products' ? 'white' : ''}}>Ingredients</Link>
        </div>
        {logo &&
          logo.map((logos, _id) => (
            <div className="center col-lg-4 col-6 text-center">
             {window.location.pathname === "/" || window.location.pathname==='/products' ?  <img id="normimg" src={logos.img[0]} alt="" /> :  <img id="normimg" src={logos.img[1]} alt="" /> }
            </div>
          ))}
        <div className="right col-lg-4 col-3 text-center d-flex">
          <div className="rightlinks">
            <Link className="link" to="/"  style={{color:  window.location.pathname==='/products' ? 'white' : ''}}>Find Us</Link>
            <Link className="link" onMouseEnter={showBlog} onMouseLeave={hideBlog} to="/"  style={{color:  window.location.pathname==='/products' ? 'white' : ''}}>
              Blog
            </Link>
          </div>
          <div className="icons" >
            <Link className="searchNorm" to="/" >
              <i style={{color:  window.location.pathname==='/products' ? 'white' : ''}} onClick={openSearch} class="fa-solid fa-magnifying-glass link"></i>
            </Link>
            <Link className="user" to="/">
              <i style={{color:  window.location.pathname==='/products' ? 'white' : ''}} class="fa-regular fa-user link"></i>
            </Link>
            <Link to="/">
              <i style={{color:  window.location.pathname==='/products' ? 'white' : ''}} onClick={openBasket} class="fa-solid fa-dolly link"></i>
            </Link>
          </div>
        </div>
      </div>
      <div id="allproduct" onMouseLeave={hide} onMouseEnter={showProducts}>
        <div id="product" className="productsmenu col-lg-12 d-flex">
          <div className="leftpmenu col-lg-3  text-left mt-3">
            <ul>
              <li>
                <a href="/">Best Sellers</a>
              </li>
              <li>
                <a href="/">Snack Packs</a>
              </li>
              <li>
                <a href="/">Gifts</a>
              </li>
              <li>
                <a href="/">Loyalty Program</a>
              </li>
              <li>
                <a href="/">Build Your Own</a>
              </li>
            </ul>
          </div>
          <div className="rightpmenu col-lg-9">
            <div className="boxes col-lg-12 row">
              <div className="box col-lg-3">
                <img
                  src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Birthday_Cake_Testimonial_c0feafaf-e7e6-4f70-a7ec-3b5d4737ad13.png?v=1642494375w"
                  alt=""
                />
                <br />
                <Link className="p" to="/">
                  VARIETY PACKS
                </Link>
              </div>
              <div className="box col-lg-3">
                <img
                  src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Birthday_Cake_Testimonial_c0feafaf-e7e6-4f70-a7ec-3b5d4737ad13.png?v=1642494375w"
                  alt=""
                />
                <br />
                <Link className="p" to="/">
                  COOKIES
                </Link>
              </div>
              <div className="box col-lg-3">
                <img
                  src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Birthday_Cake_Testimonial_c0feafaf-e7e6-4f70-a7ec-3b5d4737ad13.png?v=1642494375w"
                  alt=""
                />
                <br />
                <Link className="p" to="/">
                  BAKING MIXES
                </Link>
              </div>
              <div className="box col-lg-3">
                <img
                  src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Birthday_Cake_Testimonial_c0feafaf-e7e6-4f70-a7ec-3b5d4737ad13.png?v=1642494375w"
                  alt=""
                />
                <br />
                <Link className="p" to="/">
                  BREAKFAST MIXES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="allstory" onMouseEnter={showStory} onMouseLeave={hideStory}>
        <div id="story" className="storymenu">
          <div className="all col-lg-12 d-flex text-center">
            <div className="box col-lg-3">
              <img
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Denise_Vivi_Homepage_square.jpg?v=1642469781"
                alt=""
              />
              <br />
              <Link onClick={()=>window.reload()} className="p" to="/about">
                ABOUT US
              </Link>
            </div>
            <div className="box col-lg-3">
              <img
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/FAQ_556_556_1.png?v=1642470306"
                alt=""
              />
              <br />
              <Link className="p" to="/">
                FAQ
              </Link>
            </div>
            <div className="box col-lg-3">
              <img
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Ingredients_Menu_220x220_a254a351-a43f-4326-9630-6b50707c68ff.png?v=1642081962"
                alt=""
              />
              <br />
              <Link onClick={()=>window.reload()} className="p" to="/ingredients">
                INGREDIENTS
              </Link>
            </div>
            <div className="box col-lg-3">
              <img
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/press_menu_750x.png?v=1642470439"
                alt=""
              />
              <br />
              <Link onClick={()=>window.reload()} className="p" to="/press">
                PRESS
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="allblog" onMouseEnter={showBlog} onMouseLeave={hideBlog}>
        <div id="blog" className="blogmenu">
          <div className="all col-lg-12 d-flex text-center">
            <div className="box col-lg-4">
              <img
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/From_the_blog_Menu_220x220_9832e985-14cf-4d41-a65e-f1d1ea2a1522.png?v=1642082421"
                alt=""
              />
              <br />
              <Link className="p" to="/">
                FROM THE BLOG
              </Link>
            </div>
            <div className="box col-lg-4">
              <img
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/From_Denise_Menu_2_220x220_b48d2c3f-45a2-403c-a5f8-dcbe9c3368e7.png?v=1642112887"
                alt=""
              />
              <br />
              <Link className="p" to="/">
                FROM DENISE
              </Link>
            </div>
            <div className="box col-lg-4">
              <img
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Recipes_Menu_220x220_71d62ea7-69c1-4b81-a25f-e288f1e688a1.png?v=1642082702"
                alt=""
              />
              <br />
              <Link className="p" to="/">
                PARTAKE RECIPES
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="allsearch">
        <div className="blocker" onClick={hidePopup}></div>
        <div
          id="search"
          className="d-flex align-items-center justify-content-center col-lg-12 col-12"
        >
          <div className="form d-flex align-items-center col-lg-4 col-9">
            <input
              type="text"
              className="form-control shadow-none input"
              placeholder="Search"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <i onClick={closeSearch} className="fa-solid fa-xmark x ml-3"></i>
        </div>
      </div>
      <div id="basket">
        <div className="blockerBasket" onClick={hideBasket}></div>
        <div className="basket">
          <div className="header-basket row col-lg-12 align-items-center">
            <div>
              <h3 className="header mt-4 ml-4">Your Cart</h3>
            </div>
            <span className="mt-3 ml-2">(0)</span>
            <div className="x">
              <i onClick={closeBasket} className="fa-solid fa-xmark x ml-3"></i>
            </div>
          </div>
          <div className="cartcontainer">
            <div className="empty-cart">Your cart is empty</div>
          </div>
        </div>
      </div>
      <Menubar id="menubar" />
    </header>
  );
};

export default Header;
