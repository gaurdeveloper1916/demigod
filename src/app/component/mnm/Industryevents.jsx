import React from "react";
import Customslider from "./slider/Customslider";

function Industryevents(props) {
  return (
    <div className="d-flex d-lg-block d-none justify-content-center align-items-center  ">
      <div className="col-lg-12">
      <h4 className="text-black text-center">
        <span style={{color:'#866b2f'}} className=" fw-bold fs-2 ">Demigod House:</span><span className="sub-meduium-font"> Your Strategic Partner in Event Management,<br/> Media, and Marketing</span>
      </h4>

        <div className="d-flex justify-content-center align-items-center mx-5">

        <div className="col-lg-4">
            {/* <p className="text-white h1 fw-bold"><span className="gradient-text fw-bold  h1 fw-bold">Meet</span> us at</p>
            <p className="h1 fw-bold text-white">these <span  className="gradient-text fw-bold h1 fw-bold" >industry</span></p>
            <p className="fw-bold text-white h1">events</p> */}
           {/* <b> <h4><p className="text-black "> <span className="gradient-text fs-10">Demigod House</span>: Your Strategic Partner in Event Management, Media, and Marketing
            </p></h4></b> */}
            <p className="text-black fs-5 lh-sm">At Demigod House, we provide a time-tested, structured, and results-driven sales, advertising, and marketing execution plan  with great success for brands across diversified sectors. Our approach ensures 12%-35% ROI profitability, Period ! While maintaining effectiveness and efficiency for every clientele investments.Sectors We Are Pioneering, Practicing & Monopolistically Leading Across Global Markets are as follows:
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
