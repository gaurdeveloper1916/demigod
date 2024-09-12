"use client";
import React, { useRef } from "react";
import WeddingCard from "./WeddingCard";
import Slider from "react-slick";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import "./wedding.css";

const GallerySlider = () => {
  const sliderRef = useRef(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const settings = {
    infinite: true,
    centerPadding: "100px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
  <div className="container">
  <div className="position-relative overflow-hidden">
      <Slider {...settings} ref={sliderRef}>
        <div class="image-container">
          <div className="d-flex  px-5">
            <div className="col-6">
              <div className="d-flex">
                <img
                  alt="image"
                  src="/images/wedgallery04.png "
                  className="img-fluid w-100"
                />
              </div>
              <div className="d-flex">
                <div className="col-6">
                  <img
                    alt="image"
                    src="/images/wedgallery02.png"
                    className="img-fluid object-contain w-100"
                  />
                </div>
                <div className="col-6">
                  <img
                    alt="image"
                    src="/images/wedgallery01.png"
                    className="img-fluid object-contain w-100"
                  />
                </div>
              </div>
              <div className="row">
                <img
                  alt="image"
                  src="/images/wedgallery00.png"
                  className="img-fluid object-contain"
                />
              </div>
            </div>
            <div className="col-6">
              <img
                alt="image"
                src="/images/wedgallery03.png"
                className="img-fluid object-contain"
              />
            </div>
          </div>
        </div>
        <div class="image-container">
          <div className="d-flex">
            <div className="col-6">
              <div className="d-flex">
                <img
                  alt="image"
                  src="/images/wedgallery10.png"
                  className="img-fluid w-100"
                />
              </div>
              <div className="d-flex">
                <div className="col-6">
                  <img
                    alt="image"
                    src="/images/wedgallery12.png"
                    className="img-fluid w-100 object-contain"
                  />
                </div>
                <div className="col-6">
                  <img
                    alt="image"
                    src="/images/wedgallery13.png"
                    className="img-fluid w-100 object-contain"
                  />
                </div>
              </div>
              <div className="row">
                <img
                  alt="image"
                  src="/images/wedgallery14.png"
                  className="img-fluid ''"
                />
              </div>
            </div>
            <div className="col-6">
              <img
                alt="image"
                src="/images/wedgallery11.png"
                className="img-fluid object-contain"
              />
            </div>
          </div>
        </div>
        <div class="image-container">
          <div className="d-flex">
            <div className="col-6">
              <div className="row">
                <img
                  alt="image"
                  src="/images/wedgallery20.png"
                  className="img-fluid w-100"
                />
              </div>
              <div className="d-flex">
                <div className="col-6">
                  <img
                    alt="image"
                    src="/images/wedgallery22.png"
                    className="img-fluid w-100 w-100"
                  />
                </div>
                <div className="col-6">
                  <img
                    alt="image"
                    src="/images/wedgallery23.png"
                    className="img-fluid w-100 object-contain"
                  />
                </div>
              </div>
              <div className="row">
                <img
                  alt="image"
                  src="/images/wedgallery24.png"
                  className="img-fluid object-contain"
                />
              </div>
            </div>
            <div className="col-6">
              <img
                alt="image"
                src="/images/wedgallery21.png"
                className="img-fluid object-contain"
              />
            </div>
          </div>
        </div>
      </Slider>
        
        <div
          className="rounded-5 p-2 custom_position left-arrow  "
          onClick={next}
          // style={{ color: "white" }}
        >
          <FiChevronRight className="" size={30}  />
        </div>
    </div>
  </div>
  );
};

export default GallerySlider;
