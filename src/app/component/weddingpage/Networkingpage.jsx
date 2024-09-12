"use client";
import React, { useState } from "react";
import { MdArrowOutward, MdOutlineArrowForward } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./wedding.css";
function Networkingpage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="col-lg-10 ">
        <div
          className="d-flex flex-column justify-content-center align-items-center text-white "
          style={{
            backgroundImage: "url('/images/networking.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-lg-10  d-flex  justify-content-center align-items-center p-lg-5 p-4">
            <div className="col-lg-6"></div>
            <div className="col-lg-6 col-12 d-flex flex-column justify-content-center  mt-5">
              <p className="contact_heading m-0 text-warning">
                Networking Events
              </p>
              <h6>Discover Events Tailored for your company</h6>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
                quae ut excepturi assumenda eos vero quaerat fugit ea similique
                reprehenderit corrupti incidunt laboriosam maxime porro
                perspiciatis, autem numquam tempore debitis!
              </p>
              {/* <div>
                {!isHovered ? (
                  <div
                    className="border col-lg-2 py-1 px-5 d-flex flex-column rounded-pill justify-content-center align-items-center my-3"
                    onMouseEnter={() => setIsHovered(true)}
                  >
                    <RiArrowDropDownLine size={30} />
                  </div>
                ) : (
                  <div
                    className="border full-circle col-lg-2 bg-white d-flex flex-column p-3 justify-content-center align-items-center"
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <MdOutlineArrowForward color="black" size={30} />
                  </div>
                )}
              </div> */}
              <div className="icon-container">
                <div
                  className={`icon-wrapper border col-lg-2 py-1 px-5 d-flex flex-column rounded-pill justify-content-center align-items-center my-3  ${
                    isHovered ? "hide" : "show"
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                >
                  <RiArrowDropDownLine size={30} />
                </div>
                <div
                  className={`icon-wrapper border full-circle col-lg-2 bg-white d-flex flex-column p-3 justify-content-center align-items-center ${
                    isHovered ? "show" : "hide"
                  }`}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <MdOutlineArrowForward color="black" size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Networkingpage;
