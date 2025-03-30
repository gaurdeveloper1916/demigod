import React from "react";
import "./index.css";

function Herosection() {
  return (
    <div
      className="img-fluid position-relative"
      aria-label="MEDIA AND MARKETING WITH DEMIGOD HOUSE, Brand Development & Marketing, Print-media & Electronic-media, Advertising, Brand Seed Funding, Brand Private-Equity Investments, B2B Events, B2C Events"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black", 
        backgroundImage: "url('./m&m/_.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: 0.6, // Adjust darkness
        }}
      ></div>

      {/* Content */}
      <div
        style={{ fontFamily: "monospace", position: "relative", zIndex: 1 }}
        className="col-lg-8 col-12 text-center px-5 py-3 rounded"
      >
        <h3 data-aos="fade-down" data-aos-duration="800" className="colo-bg fw-bold largefont text-white">
          MEDIA AND MARKETING WITH <br />
          DEMIGOD HOUSE
        </h3>
        <h4>
          <p data-aos="fade-up" data-aos-duration="800" className="text-white">
            Venture Capital, Brand Association, Brand Seed Funding, Brand
            Development, Brand Marketing, Print-media & Electronic-media
            Advertising, Digital Media Marketing, Event Management Services -
            B2B / B2C / Private Events!
          </p>
        </h4>
      </div>
    </div>
  );
}

export default Herosection;
