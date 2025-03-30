"use client";
import React, { useState } from "react";
import { GiStarShuriken } from "react-icons/gi";
import { IoChevronForwardOutline } from "react-icons/io5";
import TypeWriterText from "../constant/TypeWriterText";
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function LeadingOrganisation(props) {
  const Data = [
    {
      heading: "Brand Association",
      description:
        "Our flagship offerings include Brand Association and Capital Procurement—where we collaborate with industrial leaders to fuel strategic brand growth and redefine market dominance.",
    },
    {
      heading: "Brand Development",
      description:
        "We specialize in crafting compelling brand identities that resonate with your target audience. From brand positioning to storytelling, our strategies help establish a strong and lasting presence in the market.",
    },
    {
      heading: "Marketing",
      description:
        "Our expert marketing solutions span digital, traditional, and innovative strategies to connect brands with their audience effectively. Whether it's campaign management or analytics, we deliver measurable results.",
    },
    {
      heading: "Print & Electronic Media",
      description:
        "Partnering with top-tier media outlets worldwide, we provide unmatched visibility for your brand through expertly curated content in both print and electronic formats.",
    },
    {
      heading: "Brand Seed Funding",
      description:
        "We support emerging brands by facilitating seed funding opportunities. Our network of investors and industry experts ensures the financial backing needed to turn visionary ideas into reality.",
    },
    {
      heading: "Brand Private Equity Offering",
      description:
        "DemiGod House assists brands in accessing private equity markets, offering strategic advice and execution to fuel growth and expansion.",
    },
    {
      heading: "B2B & B2C Events",
      description:
        "As part of outdoor-marketing campaign, we organize and manage variety of B2B & B2C events for brands direct interactions with their consumers via our events globally.",
    },
    {
      heading: "From Startups to Multinationals",
      description:
        "At Demigod House, we cater to businesses of all sizes. Whether you're a budding startup or a global multinational, our expertise ensures tailored strategies that drive growth and success across industries.",
    },
    {
      heading: "Hybrid Environments",
      description:
        "We embrace the future of work and collaboration by fostering hybrid environments. Our solutions bridge physical and digital spaces, enabling seamless operations and connectivity for your business.",
    },
    {
      heading: "Brand Association",
      description:
        "Our flagship offerings include Brand Association and Capital Procurement—where we collaborate with industrial leaders to fuel strategic brand growth and redefine market dominance.",
    },
    {
      heading: "Get In Touch",
      description:
        "Ready to elevate your brand to new heights? Contact Demigod House today for customized solutions and unparalleled expertise in brand development, marketing, and beyond.",
    },

  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(Data[currentIndex].heading);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <div className="col-lg-9">
        <div className="d-flex flex-lg-row flex-md-row flex-column justify-content-center align-items-center gap-5 p-4 overflow-hidden">
          <div className="col-lg-7" data-aos="fade-right" data-aos-duration="800">
            <div className=" text-black ">

              <span className="prodservices" >DemiGod House</span> <br /> <span className="prodservices" >Products & Services </span>
              <p className="sub-text">A Marketing Agency with universal approach in print and electronic media sectors with astounding, effective & efficient brand marketing campaign's of 100% success track record.</p>
            </div>

          </div>
          <div className="col-lg-5"  >
            {/* <div className="bg-whites p-lg-5 p-4 rounded">
              <h4 className="mt-5 text-white fw-bold">
                <TypeWriterText text={Data[currentIndex].heading} speed="50" />
              </h4>
              <div className="text-black">
                <TypeWriterText
                  text={Data[currentIndex].description}
                  speed="10"
                />
              </div>
              <div className="d-flex justify-content-end">
                <IoChevronForwardOutline onClick={handleClick} size={35} color="black" className="fw-bold" />

              </div>

            </div> */}
            <div
              id="textCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              {/* Indicators */}
              <div className="carousel-indicators">
                {Data.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#textCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              {/* Carousel Items (Text Only) */}
              <div className="carousel-inner" data-aos="fade-right" data-aos-duration="800">
                {Data.map((item, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <div data-aos="fade-right" data-aos-duration="800" style={{ minHeight: "200px" }} className="d-flex flex-column align-items-center justify-content-center text-center p-4 bg-dar text-black rounded">
                      <h4 className="fw-bold ">{item.heading}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadingOrganisation;
