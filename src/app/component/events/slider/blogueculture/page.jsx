'use client'

import React, { useState } from "react";
import { MdArrowCircleRight } from "react-icons/md";
import "./blogue.css";
import Link from "next/link";

function BolgueCulture(props) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const arr = [
    {
      image: "/images/canada.png/",
      event_name: "Mara Tremblaye et",
      desc: "Hauterive",
    },
    {
      image: "/images/dubai.png/",
      event_name: "Mara Tremblaye et",
      desc: "Hauterive",
    },
    {
      image: "/images/canada.png/",
      event_name: "Mara Tremblaye et",
      desc: "Hauterive",
    },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center my-5 p-lg-0 p-3">
      <div className="col-lg-11">
        <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center gap-5">
          {arr.map((item, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <div className="product col-lg-10 position-relative">
                  <div className="imgbox position-relative ">
                    <img
                      className="w-100 img-fluid"
                      src={item.image}
                      alt={item.event_name}
                    />
                    <div className="position-absolute bg-red bottom-0">
                      <div  style={{
                            backgroundColor: "#353535",
                          }} className="d-flex justify-content-center rounded align-items-center">
                        <img
                          className="rounded-pill"
                          style={{ width: "30px", height: "30px" }}
                          src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg"
                        ></img>
                        <div
                          className="d-flex flex-column p-2 "
                        >
                          <p className="verySmallFont m-0 text-white">Tous less</p>
                          {/* <p className="verySmallFont m-0 text-white text-center">hellow</p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="specifies d-flex justify-content-center align-items-center">
                    <div className="position-absolute fontdiv">
                      {/* hellow */}
                      {/* <h3 className="m-0 mediumfont text-white fw-bold">
                        {item.event_name}
                      </h3>
                      <p className="m-0 smallfont text-center text-white fw-bold">
                        {item.desc}
                      </p> */}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: `${isHovered ? "white" : "#353535"}`,
                  }}
                  className="w-100 py-2 my-2 cursor rounded"
                >
                  <div className="d-flex justify-content-between mx-3 align-items-center">
                    <div>
                      <p
                        style={{ color: isHovered ? "black" : "white" }}
                        className="m-0 fw-bold smallfont"
                      >
                        Bonorum et Malorum : ut
                      </p>
                      <p
                        style={{ color: isHovered ? "black" : "white" }}
                        className="m-0 fw-bold smallfont"
                      >
                        labore et dolore magna
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mx-3 align-items-center">
                    <div className="d-flex gap-2 justify-content-center align-items-center">
                      <div
                        className="rounded-pill"
                        style={{
                          backgroundColor: "#866b2f",
                          height: "10px",
                          width: "10px",
                        }}
                      ></div>
                    
                      <p
                        style={{ color: isHovered ? "black" : "white" }}
                        className="m-0 fw-bold smallfont"
                      >
                        Publish in 23 April 2024
                      </p>
                    </div>
                    <Link href="/landingpage">
                      <div>
                        <MdArrowCircleRight
                          size={30}
                          color={isHovered ? "#353535" : "white"}
                        />
                      </div>
                    </Link>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BolgueCulture;
