import React from "react";
import "./Highlights.css";
import { Link } from "react-router-dom";

const Highlights = () => {
  return (
    <section className="highlights">
      <h2>Highlights</h2>
      <div className="allhighlights d-flex">
        <Link to="" className="highlightbox">
          <div className="highlighttitle">
            Amazon <br /> News
          </div>
          <div className="highlighttext">
            <h3>
              Celebrating a record-breaking holiday season for Amazon, with
              customers purchasing more items than ever before from our selling
              partners
            </h3>
            <div className="higlightdate">December 29, 2022</div>
          </div>
        </Link>
        <Link to="" className="highlightbox">
          <div className="highlighttitle">Kitchn</div>
          <div className="highlighttext">
            <h3>
              I Have Celiac Disease, and These Are 14 of My Favorite Gluten-Free
              Finds of 2022
            </h3>
            <div className="higlightdate">December 15, 2022</div>
          </div>
        </Link>
        <Link to="" className="highlightbox">
          <div className="highlighttitle">Delish</div>
          <div className="highlighttext">
            <h3>This Black-Owned Vegan Snack Brand Lives Up To The Hype</h3>
            <div className="higlightdate">December 29, 2022</div>
          </div>
        </Link>
        <Link to="" className="highlightbox">
          <div className="highlighttitle">TechCrunch</div>
          <div className="highlighttext">
            <h3>
              Partake Foods whips up new allergy-friendly products following new
              cash infusion
            </h3>
            <div className="higlightdate">October 4, 2022</div>
          </div>
        </Link>
        <Link to="" className="highlightbox">
          <div className="highlighttitle">Inc.</div>
          <div className="highlighttext">
            <h3>
              Celebrating a record-breaking holiday season for Amazon, with
              customers purchasing more items than ever before from our selling
              partners
            </h3>
            <div className="higlightdate">December 29, 2022</div>
          </div>
        </Link>
        <Link to="" className="highlightbox">
          <div className="highlighttitle">Dwell</div>
          <div className="highlighttext">
            <h3>
              8 Kitchen Staples That Partake Founder Denise Woodard Swears By
            </h3>
            <div className="higlightdate">August 8, 2022</div>
          </div>
        </Link>
        <Link to="" className="highlightbox">
          <div className="highlighttitle">CNN</div>
          <div className="highlighttext">
            <h3>One mom's mission to make safe snacks for all</h3>
            <div className="higlightdate">March 21, 2022</div>
          </div>
        </Link>
        <Link to="" className="highlightbox">
          <div className="highlighttitle">CBS News</div>
          <div className="highlighttext">
            <h3>
              A mother wanted her daughter to have allergy-friendly cookies. She
              was rejected by 86 investors before finding success
            </h3>
            <div className="higlightdate">February 14, 2022</div>
          </div>
        </Link>
        <Link to="" className="highlightbox">
          <div className="highlighttitle">Forbes</div>
          <div className="highlighttext">
            <h3>
              Partake Foods’ HBCU Fellows Program Is A Model For The Food
              Industry
            </h3>
            <div className="higlightdate">July 22, 2021</div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Highlights;
