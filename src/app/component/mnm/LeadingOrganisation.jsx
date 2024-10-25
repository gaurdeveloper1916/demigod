"use client";
import React, { useState } from "react";
import { GiStarShuriken } from "react-icons/gi";
import { IoChevronForwardOutline } from "react-icons/io5";
import TypeWriterText from "../constant/TypeWriterText";
import './index.css'
function LeadingOrganisation(props) {
  const Data = [
    {
      heading: "From end user to MSSP",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Explicabo, ea officiis! At, rerum excepturi nisi consequatur neque vero repellat obcaecati quisquam minima? Quas alias culpaullam iste, itaque beatae natus",
    },
    {
      heading: "From Starts to Multinationals",
      description:
        " amet consectetur adipisicing elit.Explicabo, ea officiis! At, rerum excepturi nisi consequatur neque vero repellat obcaecati quisquam minima? Quas alias culpaullam iste, itaque beatae natus",
    },
    {
      heading: "Hybrid Enviornments",
      description:
        "Lorem ipsum dolor sit,  ea officiis! At, rerum excepturi nisi consequatur neque vero repellat obcaecati quisquam minima? Quas alias culpaullam iste, itaque beatae natus",
    },
    {
      heading: "Get In Touch",
      description:
        " amet consectetur adipisicing elit.Explicabo, ea officiis! At, rerum excepturi nisi consequatur neque vero repellat obcaecati quisquam minima? Quas alias culpaullam iste, itaque beatae natus",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(Data[currentIndex].heading);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };

  return (
    <div  className="d-flex justify-content-center align-items-center">
      <div className="col-lg-10">
        <div className="d-flex flex-lg-row flex-md-row flex-column justify-content-center align-items-center gap-5 p-4 overflow-hidden">
          <div className="col-lg-6"  data-aos="fade-right" data-aos-duration="1200">
            <p className="h1 text-white">
              We're a <span className="gradient-text fw-bold"> Trusted</span>
            </p>
            <p className="h1 text-white ">
              <span className="gradient-text fw-bold">Ecosystem</span> for
              leading
            </p>
            <p className="h1 text-white">organizations</p>
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              dolore laudantium, molestiae voluptate maxime iste ad consequatur,
              labore recusandae provident voluptatibus nisi autem cupiditate
              alias non architecto cum? Excepturi, fugit.
            </p>
          </div>
          <div  className="col-lg-6"  data-aos="fade-left" data-aos-duration="1200">
            <div  style={{ height: '350px' }} className="bg-whitesh p-lg-5 p-4 rounded">
              <h4 className="mt-5 text-white fw-bold">
                <TypeWriterText text={Data[currentIndex].heading} speed="50" />
              </h4>
              <p className="text-white">
                <TypeWriterText
                  text={Data[currentIndex].description}
                  speed="10"
                />
              </p>
              <div
                className="d-flex flex-row-reverse mt-lg-5 mt-0 arrow"
                onClick={handleClick}
              >
                <IoChevronForwardOutline size={35} color="white" className="fw-bold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadingOrganisation;
