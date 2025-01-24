"use client"
import React, { useState } from "react";
import "./index.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GiStarShuriken } from "react-icons/gi";
import Link from "next/link";

function Testtube() {
  const multipleTestTube = [390, 460, 350, 460, 350];
  const tubeData = [
    {
      evtName: "Dubai Events",
      evtDes:
        "Virginia, looked up on of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Lati professor at Hampden-Sydney College in ",
    },
    {
      evtName: "Singapur Events",
      evtDes:
        "It has roots piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Lati professor at Hampden-Sydney College in Virginia, looked up on of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      evtName: "Malashiya Events",
      evtDes:
        "Contrary to popular belief, Lorem Ipsum is not simply rand text. It has roots piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable",
    },
  ];
  const [intialState, setIntialState] = useState(tubeData[0]);

  return (
    <>
      <div className="container-fluid p-5 mt-5 bg-black">
        <div>
          <div className=" d-flex gap-2 m-0 justify-content-center align-items-center ">
            <div className=" d-flex col-lg-9 gap-3">
              <h1 className="text-white fw-bold">EVENT</h1>
              <p className="text-white  m-0 w-100 mt-2 event-name">
                {" "}
                <hr className="" />
                <p>(THE STORY)</p>
              </p>{" "}
            </div>
          </div>
          <div className=" d-flex gap- justify-content-center align-items-center ">
            <div className=" d-flex col-lg-8 gap-3">
              <h1 className="text-warning fw-bold">NAME</h1>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-lg-12  d-flex flex-lg-row flex-column   justify-content-center">
            <div className="col-lg-4">
              <div className="d-flex gap-2 justify-content-center align-items-center">
                {multipleTestTube.map((item, index) => {
                  return (
                    <div
                      style={{
                        position: "relative",
                        height: `${item - 150}px`,
                      }}
                      key={index + 1}
                    >
                      <video autoPlay loop muted className="tube-bg-video">
                        <source
                          src="./images/testing.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>

                      <div className="test-tube-1"></div>
                    </div>
                  );
                })}
                l
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex flex-column  ">
                <p className="text-white evnt-txt-des  p-lg-0 p-4 mt-lg-0 mt-4">{intialState.evtDes}</p>
                <div className="d-flex gap-1 justify-content-center align-items-center">
                  <div className="col-lg-8 d-flex ">
                    <Link href="/landingpage">
                      <button className="know-more-button px-4 px-2  py-2 fw-bold">
                        Know More <GiStarShuriken />
                      </button>
                    </Link>


                    <Link href="/landingpage">
                      <button className="know-more-arrow">
                        <IoIosArrowRoundForward />
                      </button>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testtube;
