import React from "react";
import Customslider from "./slider/Customslider";

function Industryevents(props) {
  return (
    <div className="d-flex d-lg-block d-none justify-content-center align-items-center  ">
      <div className="col-lg-12">
        <div className="d-flex justify-content-center align-items-center mx-5">
          <div className="col-lg-4">

             <h5><p   style={{ lineHeight: '35px', fontSize: '28px' }} className="text-secondary ">SECTORS WE CATER:

            </p></h5>
            <p style={{ fontWeight: '200' }} className="text-white">At DemiGod House, we transcend the conventional agency model. As a distinguished entity within the Hedge Fund Portfolio, we architect visionary campaigns and immersive brand experiences that generate tangible, sustainable value.

            </p>
            <p style={{ fontWeight: '200' }} className="text-white">Rooted in precision, performance, and creative ingenuity, our multidisciplinary approach consistently delivers 12%–35% ROI, not merely as a promise, but as a foundational standard. Every initiative is strategically crafted to amplify brand equity, optimize capital deployment, and maximize returns on every associate and client investment with unwavering consistency.

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
