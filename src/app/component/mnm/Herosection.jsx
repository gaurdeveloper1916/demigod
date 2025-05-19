import React from "react";
import './index.css'

function Herosection() {
  return (
    <div
      className="hero-section position-relative w-100"
      aria-label="MEDIA AND MARKETING WITH DEMIGOD HOUSE, Brand Developement & Marketing, Print-media & Electronic-media, Advertising, Brand Seed Funding, Brand Private-Equity Investments ,B2B Events, B2C Events"  
      style={{
        backgroundImage: "url('Image/m&m/hero/Hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div 
        style={{backgroundColor:"#0000009c"}} 
        className="hero-content col-11 col-md-10 col-lg-8 text-center px-3 px-md-4 px-lg-5 py-3 rounded"
      >
        <h1 className="hero-title fw-bold text-white mb-3">
          MEDIA AND MARKETING<br className="d-none d-md-block"/> WITH DEMIGOD HOUSE
        </h1>
        <div className="hero-description">
          <p className="text-white mb-0 px-2 px-md-3">
            Venture Capital, Brand Association, Brand Seed Funding, Brand Development, Brand Marketing, Print-media & Electronic-media Advertising, Digital Media Marketing, Event Management Services - B2B / B2C / Private Events!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
