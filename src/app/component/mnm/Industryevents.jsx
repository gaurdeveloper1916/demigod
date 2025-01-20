import React from "react";
import Customslider from "./slider/Customslider";

function Industryevents(props) {
  return (
    <div className="d-flex d-lg-block d-none justify-content-center align-items-center  ">
      <div className="col-lg-12">
        <div className="d-flex justify-content-center align-items-center mx-5">
        <div className="col-lg-4">
            {/* <p className="text-white h1 fw-bold"><span className="gradient-text fw-bold  h1 fw-bold">Meet</span> us at</p>
            <p className="h1 fw-bold text-white">these <span  className="gradient-text fw-bold h1 fw-bold" >industry</span></p>
            <p className="fw-bold text-white h1">events</p> */}
            <p className="text-white "> <span className="gradient-text fs-5">Demigod House</span>: Your Strategic Partner in Event Management, Media, and Marketing
            </p>
            <p className="text-white">At Demigod House, we provide a time-tested, structured, and results-driven sales, advertising, and marketing execution plan for brands across diverse sectors. Our approach ensures epic profitability, while maintaining effectiveness and efficiency for every client.Sectors We Are Pioneering, Practicing & Monopolistically Leading Across Global Markets:
            </p>
        </div>
        <div className="col-lg-8">
            {/* <Sliders/> */}  
            <Customslider/>
        </div>
        </div>
      </div>

    </div>
  );
}

export default Industryevents;
