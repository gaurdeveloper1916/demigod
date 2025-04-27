import React from "react";
import Customslider from "./slider/Customslider";

function Industryevents(props) {
  return (
    <div className="d-flex d-lg-block d-none justify-content-center align-items-center  ">
      <div className="col-lg-12">
        <div className="d-flex justify-content-center align-items-center mx-5">
          <div className="col-lg-4">

             <h5><p  style={{fontWeight:'400'}} className="text-secondary "> <span  style={{fontWeight:'400'}} className="text-white">Demigod House</span>: Your Strategic Partner in Event Management, Media, and Marketing
            </p></h5>
            <p style={{ fontWeight: '200' }} className="text-white">At Demigod House, we provide a time-tested, structured, and results-driven sales, advertising, and marketing execution plan  with great success for brands across diversified sectors. Our approach ensures 12%-35% ROI profitability, Period ! While maintaining effectiveness and efficiency for every clientele investments.Sectors We Are Pioneering, Practicing & Monopolistically Leading Across Global Markets are as follows:
            </p>
          </div>
          <div className="col-lg-8">
            {/* <Sliders/> */}
            <Customslider />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Industryevents;
