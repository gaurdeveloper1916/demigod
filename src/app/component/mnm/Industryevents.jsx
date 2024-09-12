import React from "react";
import Customslider from "./slider/Customslider";

function Industryevents(props) {
  return (
    <div className="d-flex d-lg-block d-none justify-content-center align-items-center  ">
      <div className="col-lg-12">
        <div className="d-flex justify-content-center align-items-center mx-5">
        <div className="col-lg-4">
            <p className="text-white h1 fw-bold"><span className="gradient-text fw-bold  h1 fw-bold">Meet</span> us at</p>
            <p className="h1 fw-bold text-white">these <span  className="gradient-text fw-bold h1 fw-bold" >industry</span></p>
            <p className="fw-bold text-white h1">events</p>
            <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, minus sint ipsa autem accusamus, excepturi consequuntur similique consequatur doloremque eum est quas voluptatum id, assumenda nulla unde? Optio, modi cumque.</p>
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
