import React from "react";
import { MdArrowOutward } from "react-icons/md";

const SingleUpDownSlider = ({ margin, image }) => {
  return (
    <div
      className={`card  p-4 text-white ${margin ? "margin-custom" : ""}`}
      style={{ backgroundColor: "#353535" }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="d-flex gap-4">
        <div>
          <h6>Tour les Eveyhlsc</h6>
          <hr className="m-0" />
          <p className="smallfont py-4 text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            tempore odit non quaerat? A, ullam voluptatum{" "}
          </p>
        </div>
        <div>
          <h6>Tour les Eveyhlsc</h6>
          <hr className="m-0" />
          <p className="smallfont py-4 text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            tempore odit non quaerat? A, ullam voluptatum{" "}
          </p>
        </div>
        <div>
          <h6>Tour les Eveyhlsc</h6>
          <hr className="m-0" />

          <p className="smallfont py-4 text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            tempore odit non quaerat? A, ullam voluptatum{" "}
          </p>
        </div>
        <div>
          <h6>Tour les Eveyhlsc</h6>
          <hr className="m-0" />

          <p className="smallfont py-4 text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            tempore odit non quaerat? A, ullam voluptatum{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleUpDownSlider;
