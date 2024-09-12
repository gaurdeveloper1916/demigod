"use client";
import React, { useRef } from "react";
import WeddingCard from "./WeddingCard";
import Slider from "react-slick";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import "./wedding.css";

const ServicesSlider = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        centerMode: false,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        centerMode: false,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        centerMode: false,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" mt-5 container  overflow-hidden">
      <div className="py-2 slider2">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          <div class="image-container p-4">
            <img
              alt="image"
              src="/images/wedslide1.png"
              className=" img-fluid"
            />
            <div class="overlay">
              <div class="circular-div">
                <div class="text">view more</div>
              </div>
            </div>
          </div>
          <div class="image-container p-4 ">
            <img
              alt="image"
              src="/images/wedslide2.png"
              className=" img-fluid"
            />
            <div class="overlay">
              <div class="circular-div">
                <div class="text">view more</div>
              </div>
            </div>
          </div>
          <div class="image-container p-4">
            <img
              alt="image"
              src="/images/wedslide3.png"
              className=" img-fluid"
            />
            <div class="overlay">
              <div class="circular-div">
                <div class="text">view more</div>
              </div>
            </div>
          </div>
        </Slider>
        <div style={{ textAlign: "left" }} className="d-flex  flex-column">
          <div className="d-flex justify-content-end gap-2 mt-4">
            <div
              className=" rounded-full  p-2"
              onClick={previous}
              style={{ color: "white" }}
            >
              {/* <FiChevronLeft className="stroke-2" size={25} /> */}
              <img
                style={{ transform: "rotate(-180deg)",width:'90px' }}
                className="img-fluid arrow-img mx-lg-4"
                src="/images/arrow.png"
              ></img>
            </div>
            <div
              className=" rounded-full  p-2"
              onClick={next}
              style={{ color: "white" }}
            >
              {/* <FiChevronRight className="stroke-2" size={25} /> */}
              <img
                 style={{ width:'90px' }}
                className="img-fluid arrow-img mx-lg-4"
                src="/images/arrow.png"
              ></img>
            </div>
          </div>
          <div className="d-flex justify-content-end px-4">(1/5)</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;
