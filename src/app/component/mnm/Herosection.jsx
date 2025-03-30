import React from "react";
import './index.css'
function Herosection() {
  return (
    <div
      className="img-fluid position-relative  "
      aria-label="MEDIA AND MARKETING WITH DEMIGOD HOUSE, Brand Developement & Marketing, Print-media & Electronic-media, Advertising, Brand Seed Funding, Brand Private-Equity Investments ,B2B Events, B2C Events"
      style={{
        backgroundImage: "url('./m&m/landingimage.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ backgroundColor: "#0000009c", fontFamily: 'monospace' }} className="col-lg-8 col-12 text-center  px-5 py-3 rounded">
        <h3 className="colo-bg fw-bold largefont text-white ">MEDIA AND MARKETING  WITH <br />DEMIGOD HOUSE</h3>
        <h4><p className="text-white ">
          Venture Capital, Brand Association , Brand Seed Funding , Brand Developement , Brand Marketing , Print-media & Electronic-media Advertising , Digital Media Marketing , Event Management Services - B2B / B2C / Private Events!
        </p></h4>

      </div>

    </div>
  );
}

export default Herosection;
