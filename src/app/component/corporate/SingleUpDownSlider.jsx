import React from "react";
import { MdArrowOutward } from "react-icons/md";

const SingleUpDownSlider = ({ margin,image }) => {
  return (
    <div
      className={`card rounded-4 text-white ${margin ? "margin-custom" : ""}`}
      style={{ width: "24rem", backgroundColor: "black" }}
      data-aos="fade-up" data-aos-duration="1000"
    >
      <img
        src={image}
        className="card-img-top ps-4 pe-4 pt-4"
        alt="..."
      />
      <div className="d-flex justify-content-between mx-4">
        <div className="text-white verySmallFont">
          <p className="m-0">Event /01</p>
          <p>INSIDE SOFTWARE</p>
        </div>
        <div className="text-white verySmallFont">
          <p className="m-0">BRANDING-WEBDESIGN-hellow</p>
          <div className="d-flex justify-content-end">
            <MdArrowOutward size={25} className="text-end" />
          </div>
        </div>
      </div>
      <hr className="text-white hrClass" />
    </div>
  );
};

export default SingleUpDownSlider;
