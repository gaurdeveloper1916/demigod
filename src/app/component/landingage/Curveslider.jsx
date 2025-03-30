"use client";
import { useContext, useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./landing.css";
import { Auth } from "../../../context/AppContext";

const Curveslider = () => {
  const { imageForLandingPage, landingImage, setLandingImage, commonImage } = useContext(Auth)
  const swiperRef = useRef(null);
  useEffect(() => {
    swiperRef.current = new Swiper(".swiper", {
      loop: true,
      spaceBetween: 20,
      centeredSlides: true,
      slidesPerView: "auto",
      initialSlide: 2,
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }, []);

  return (
    <div className="swiper my-5">
      <div className="swiper-wrapper mt-5">
        {/* Image Slide */}
        <div className="swiper-slide">
          <div className="media-container">
            <img src={landingImage.leftImage === '' ? commonImage : landingImage.leftImage} alt="landing page slider" />
          </div>
        </div>

        {/* Image Slide */}
        <div className="swiper-slide">
          <div className="media-container">
            <img src={landingImage.leftImage === '' ? commonImage : landingImage.leftImage} alt="landing page slider" />
          </div>
        </div>

        {/* Center Video Slide */}

        <div className="swiper-slide video-slide">
          <div className="media-container">
            {
              landingImage.midVideo.includes('.mp4') ?
                <div className="video-container">

                  <video autoPlay muted loop>
                    <source src={landingImage.midVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div> : <img src={landingImage.midVideo} alt="landing page slider" />

            }

          </div>
        </div>

        {/* Image Slide */}
        <div className="swiper-slide">
          <div className="media-container">
            <img src={landingImage.rightImage === '' ? commonImage : landingImage.rightImage} alt="landing page slider" />
          </div>
        </div>

        {/* Image Slide */}
        <div className="swiper-slide">
          <div className="media-container">
            <img src={landingImage.rightImage === '' ? commonImage : landingImage.rightImage} alt="landing page slider" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curveslider;
