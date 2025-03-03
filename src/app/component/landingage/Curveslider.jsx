"use client";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import './landing.css';

const Curveslider = () => {
  const swiperRef = useRef(null);
  
  useEffect(() => {
    swiperRef.current = new Swiper(".swiper", {
      loop: true,
      spaceBetween: 20,
      centeredSlides: true,
      breakpoints: {
        640: { slidesPerView: 1 }, 
        768: { slidesPerView: 2 }, 
        1024: { slidesPerView: 3 }, 
      },
    });
  }, []);
  
  return (
    <div className="swiper my-5 ">
      <div className="swiper-wrapper mt-5">
        {/* Image Slide */}
        <div className="swiper-slide">
          <div className="media-container">
            <img
              src="./event-page/wine_inner.png"
              alt="landing page slider"
            />
          </div>
        </div>

       
        <div className="swiper-slide">
          <div className="media-container">
            <video autoPlay muted loop>
              <source src="./event-page/wine_festval_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* More Image Slides */}
        <div className="swiper-slide">
          <div className="media-container">
            <img
             src="./event-page/wine_inner.png"
              alt="landing page slider"
            />
          </div>
        </div>
        
        <div className="swiper-slide">
          <div className="media-container">
            <img
              src="./event-page/wine_inner.png"
              alt="landing page slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curveslider;
