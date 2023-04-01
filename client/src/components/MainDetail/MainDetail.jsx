import React from "react";
import "./MainDetail.css";

const MainDetail = () => {

    const changeImg=()=>{
        document.getElementById('imgmain').src=document.getElementById('changeImg').src
    }

  return (
    <section className="maindetail">
      <div className="leftmaindetail col-lg-6">
        <div className="allleftimg">
        <div className="allminileftimg">
            <div className="imgleft">
              <img
                onClick={changeImg}
                id='changeImg'
                className="img-fluid minimg"
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/products/CrunchyChocolateChipcookiestack_6_1500x.png?v=1646839332"
                alt=""
              />
            </div>
          </div>
         <div className="mainimgdiv">
         <img
            id="imgmain"
            className="mainimg img-fluid"
            src="https://cdn.shopify.com/s/files/1/0012/2296/7353/products/CrunchyCC_2400x2400_45angle_1500x.png?v=1646839332"
            alt=""
          />
         </div>
        </div>
      </div>
      <div className="rightmaindetail col-lg-6"></div>
    </section>
  );
};

export default MainDetail;
