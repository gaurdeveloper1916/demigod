"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";

const CarouselSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Default arrows हटा दिए गए हैं
    pauseOnHover: false,
  };

  return (
    <div className="carousel-container-test">
      {/* Left Navigation Button */}
      <button className="custom-button-test left" onClick={() => sliderRef.current?.slickPrev()}>
        <FaChevronLeft />
      </button>

      <Slider ref={sliderRef} {...settings} className="carousel-slider">
        <div>
          <video className="slide-video-test" autoPlay loop muted>
            <source src="/1.MP4" type="video/mp4" />
          </video>
        </div>
        <div>
          <video className="slide-video-test" autoPlay loop muted>
            <source src="/car-o-bar.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <img className="slide-image" src="/event-page/enter.jpeg" alt="Slide 3" />
        </div>
        <div>
          <img className="slide-image" src="/event-page/agrotech1.jpeg" alt="Slide 4" />
        </div>
      </Slider>

      {/* Right Navigation Button */}
      <button className="custom-button-test right" onClick={() => sliderRef.current?.slickNext()}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CarouselSection;
