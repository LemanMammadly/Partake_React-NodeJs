import React from "react";
import "./PressFeature.css";

const PressFeature = () => {
  return (
    <section className="pressfeature">
      <h2>Feature Stories</h2>
      <div className="all d-flex">
        <div className="leftfeature col-lg-6 col-12">
          <div className="feature-title">NOSH</div>
          <div className="feature-text">
            <p>NOSH Announces Nominees for ‘Best of 2022’ Awards</p>
            <div className="date-text">November 14, 2022</div>
          </div>
        </div>
        <div className="rightfeature col-lg-6 col-12">
          <div className="toprightfeature">
            <div className="feature-title">INC.</div>
            <div className="feature-text">
              <p>
                A Business-Minded Mom Makes Sweet Treats Safe for EveryoneDenise
                Woodard's daughter inspired her, but her new company is really
                about inclusion for all
              </p>
              <div className="date-text">September 2022</div>
            </div>
          </div>
          <div className="bottomrightfeature d-flex">
            <div className="leftbottomrightfeature">
              <div className="feature-title">Snack Food & Wholesale Bakery</div>
              <div className="feature-text">
                <p>Partake Foods announces B Corporation Certification</p>
                <div className="date-text">January 4, 2023</div>
              </div>
            </div>
            <div className="rightbottomrightfeature">
              <div className="feature-title">Parade</div>
              <div className="feature-text">
                <p>Ben & Jerry's Unveils First New Flavor of 2023—And It's Dreamy</p>
                <div className="date-text">January 10, 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressFeature;
