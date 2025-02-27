import React from "react";


function Herosection() {
  return (
    <div
      className="img-fluid position-relative  "
      aria-label="MEDIA AND MARKETING WITH DEMIGOD HOUSE, Brand Developement & Marketing, Print-media & Electronic-media, Advertising, Brand Seed Funding, Brand Private-Equity Investments ,B2B Events, B2C Events"  
      style={{
        backgroundImage: "url('Image/m&m/hero/Hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{backgroundColor:"#0000009c"}} className="col-lg-8 col-12 text-center  px-5 py-3 rounded">
        <h1 className="colo-bg fw-bold largefont text-white ">MEDIA AND MARKETING WITH DEMIGOD HOUSE</h1>
        <h3><p className="text-white">
        Brand Developement & Marketing, Print-media & Electronic-media, Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B / B2C Events!
        </p></h3>
       
      </div>
    
    </div>
  );
}

export default Herosection;
