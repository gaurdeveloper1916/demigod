"use client";
import React, { useState } from "react";
import { GiStarShuriken } from "react-icons/gi";
import { IoChevronForwardOutline } from "react-icons/io5";
import TypeWriterText from "../constant/TypeWriterText";
import './index.css'
function LeadingOrganisation(props) {
  const Data = [
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
    <div  className="d-flex justify-content-center align-items-center">
      <div className="col-lg-10">
        <div className="d-flex flex-lg-row flex-md-row flex-column justify-content-center align-items-center gap-5 p-4 overflow-hidden">
          <div className="col-lg-7"  data-aos="fade-right" data-aos-duration="1200">
            <p className="h1 text-white">
              DemiGod <span className="gradient-text fw-bold"> House Proposition! </span>
              <p className="font-medium fs-4 mt-2">A Marketing Agency with universal approach in print and electronic media sectors with astounding, effective & efficient brand marketing campaign's of 100% success track record.</p>
            </p>
            {/* <p className="h1 text-white ">
              <span className="gradient-text fw-bold">Ecosystem</span> for
              
            </p> */}
            {/* <p className="h1 text-white">organizations</p> */}
            {/* <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              dolore laudantium, molestiae voluptate maxime iste ad consequatur,
              labore recusandae provident voluptatibus nisi autem cupiditate
              alias non architecto cum? Excepturi, fugit.
            </p> */}
          </div>
          <div  className="col-lg-5"  data-aos="fade-left" data-aos-duration="1200">
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
