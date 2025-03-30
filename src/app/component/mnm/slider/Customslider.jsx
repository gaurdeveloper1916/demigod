"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import './index.css';
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const CustomSlider = ({ }) => {
  const slides = [
    {
      "image": "auto.jpeg",
      "alt": "Automotive sector brand marketing, Automotive sector brand development, Automotive sector brand advertising",
      "title": "Automotive",
      "description": "We create marketing strategies that drive awareness and sales for automotive brands, focusing on both traditional and digital marketing approaches."
    },
    {
      "image": "real.jpeg",
      "alt": "Real Estate sector brand marketing, Real Estate sector brand advertising, Real Estate sector brand management",
      "title": "Real Estate",
      "description": "Our real estate marketing strategies use the latest tools to connect potential buyers with properties, resulting in higher conversions and faster sales cycles."
    },
    {
      "image": "event.jpeg",
      "alt": "Event Management sector brand marketing, Event Management sector brand advertising, Event Management sector brand promotion",
      "title": "Event Management",
      "description": "From corporate events to large-scale consumer experiences, we craft memorable moments that resonate with attendees, ensuring a lasting impression."
    },
    {
      "image": "jewel.webp",
      "alt": "Jewellery sector brand marketing, Jewellery sector brand advertising, Jewellery sector brand management",
      "title": "Jewellery",
      "description": "Our expertise in jewellery marketing ensures an impactful presence, driving brand recognition and engagement with affluent clientele."
    },
    {
      "image": "jewel.jpeg",
      "alt": "Gems sector brand marketing, Gems sector brand advertising, Gems sector brand management",
      "title": "Gems",
      "description": "We provide bespoke solutions for the gemstone industry, leveraging creativity and innovation to elevate brand positioning and visibility."
    },
    {
      "image": "phrma.webp",
      "alt": "Pharma OTC sector brand marketing, Pharma OTC sector brand advertising",
      "title": "Pharma OTC",
      "description": "Our tailored marketing and event management services promote OTC products with a focus on customer trust and long-term growth."
    },
    {
      "image": "fmcg.jpeg",
      "alt": "FMCG sector brand marketing, FMCG sector brand advertising, FMCG sector brand management",
      "title": "FMCG",
      "description": "We help FMCG brands establish dominance through strategic campaigns that increase market penetration and brand loyalty."
    }
  ]

  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0px",
    adaptiveHeight: false,
    autoplay:true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      {/* mx-4 p-4 */}
      <div className="bg-cards mx-2 p-2">
        <Slider className='react-slick-new' {...settings} ref={sliderRef}>
          {slides.map((slide, index) => (
            <div key={index} className={`d-flex justify-content-center align-items-center text-white  bg-cards-inner`}>
              <img
                className="rounded w-100"
                src={slide.image}
                alt={slide.alt}

              />
              <div className="d-flex">
                <div className="text-white mediumfont">
                  <h6 className="m-0 my-2 gradient-text fw-bold">
                    {slide.title}
                  </h6>
                  <p className="mediumfont text-black des-text">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center  align-items-center gap-2 mt-4">
            <div className="rounded-full p-2" onClick={previous} style={{ color: "black" }}>

              <IoMdArrowBack color="black" size={25}/>
            </div>
            <div className="rounded-full p-2" onClick={next} style={{ color: "white" }}>
              <IoMdArrowForward color="black"  size={25}/>



            </div>
          </div>
          <div className="d-flex ml-4 px-4 text-white">(1/{slides.length})</div>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;