"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SingleUpDownSlider from "./SingleUpDownSlider";

const UpdownSlider = () => {
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

  const settings2 = {
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: null, // Remove default next arrow
    prevArrow: null, // Remove default previous arrow
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

  // Generate the card data dynamically with conditional margin
  const cards = Array.from({ length: 6 }, (_, index) => ({
    margin: (index + 1) % 2 === 0,
  }));

  return (
    <div className="d-flex justify-content-center align-items-center">
    <div className="col-lg-10 overflow-hidden">
    <div className="mt-5">
      <div className="py-2 slider2"  data-aos="fade-up" data-aos-duration="1500">
        <Slider {...settings2} ref={sliderRef}>
          {cards.map((card, index) => (
            <SingleUpDownSlider key={index} margin={card.margin} />
          ))}
        </Slider>
        <div
          style={{ textAlign: "left" }}
          className="d-flex  gap-2 mt-4"
        >
          <div className="rounded-full p-2" onClick={previous}>
            <FiChevronLeft className="stroke-2" color="white" size={30} />
          </div>
          <div
            className="rounded-full p-2"
            onClick={next}
            style={{ color: "white" }}
          >
            <FiChevronRight className="stroke-2" size={30} />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default UpdownSlider;
