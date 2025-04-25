"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";
import Link from "next/link";

const CarouselSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="carousel-container-test">
      {/* Left Navigation Button */}
      <button className="custom-button-test left" onClick={() => sliderRef.current?.slickPrev()}>
        <FaChevronLeft />
      </button>

      <Slider ref={sliderRef} {...settings} className="carousel-slider">
        {/* <div>
          <video className="slide-video-test" autoPlay loop muted>
            <source src="/1.MP4" type="video/mp4" />
          </video>
        </div> */}
        <div className="position-relative">
          <img
            
            className="slide-image w-100"
            src="/event-page/punjabideligates.png"
            alt="Slide 4"
            style={{ height: '100vh', objectFit: 'cover', opacity: 1}}
          />
          <button className="border-0 rounded position-absolute  fs-6 text-white px-3">Book Now </button>


        </div>
        <div className="position-relative">
          <video className="slide-video-test" autoPlay loop muted>
            <source src="/368510590484226049.mp4" type="video/mp4" />
          </video>
          <div
            style={{ background: "linear-gradient(to bottom right, #0000009c, #866b2f)", bottom: '-4.5rem' }}
            className="position-absolute  start-50 translate-middle text-center px-5 py-3"
          // data-aos="fade-up"
          // data-aos-duration="1000"
          >
            <h1
              style={{ fontFamily: 'ui-serif' }}
              className=" text-white weight100"
            >
              CAR-O-BAR –  <br /> Powered by Demigod House
            </h1>
            <p
              className="text-white fs-5 variety"
            // data-aos="fade-up"
            // data-aos-duration="1500"
            >
              A premier ultra-luxury car exhibition for global manufacturers, high-net-worth collectors,farming solutions, sustainable technologies, and the future of agri-business, all in one place.
            </p>
            <Link href='/landingpage?slug=car-o-bar-event'>
              <button className="border-0 rounded  fs-6 text-white px-3">Book Now </button>

            </Link>
          </div>

        </div>
        {/* <div>
          <video className="slide-video-test" autoPlay loop muted>
            <source src="/WhatsApp Video 2025-04-16 at 20.10.07.mp4" type="video/mp4" />
          </video>
        </div> */}
        {/* <div className="position-relative">
          <video className="slide-video-test" autoPlay loop muted>
            <source src="/agrotech.mp4" type="video/mp4" />
          </video>
          <div
            style={{ background: "linear-gradient(to bottom right, #0000009c, #866b2f)", bottom: '-4.5rem' }}
            className="position-absolute  start-50 translate-middle text-center px-5 py-3"
          // data-aos="fade-up"
          // data-aos-duration="1000"
          >
            <h1
              style={{ fontFamily: 'ui-serif' }}
              className=" text-white weight100"
            >
              Agro Tech 2025 –  <br /> Powered by Demigod House
            </h1>
            <p
              className="text-white fs-5 variety"
            // data-aos="fade-up"
            // data-aos-duration="1500"
            >
              Demigod House brings you Agro Tech 2025 — a celebration of innovation in agriculture. Discover smart farming solutions, sustainable technologies, and the future of agri-business, all in one place.
            </p>
            <Link href='/landingpage?slug=agro-tech'>
              <button className="border-0 rounded  fs-6 text-white px-3">Book Now </button>

            </Link>
          </div>
        </div> */}

        {/* <div>
          <img className="slide-image" src="/event-page/enter.jpeg" alt="Slide 3" />
        </div> */}
        <div className="position-relative">
          <img
            className="slide-image w-100"
            src="/event-page/enterprenuship.jpg"
            alt="Slide 4"
            style={{ height: '100vh', objectFit: 'cover' }}
          />
          <div
            style={{ background: "linear-gradient(to bottom right, #0000009c, #866b2f)" }}
            className="position-absolute bottom-0 start-50 translate-middle text-center px-5 py-3 gred-color"
          // data-aos="fade-up"
          // data-aos-duration="1000"
          >
            <h1
              style={{ fontFamily: 'ui-serif' }}
              className=" text-white weight100"
            >
              Entrepreneurship Forum 2025 –  <br /> Powered by Demigod House
            </h1>
            <p
              className="text-white fs-5 variety"
            // data-aos="fade-up"
            // data-aos-duration="1500"
            >
              Demigod House is proud to host the upcoming Entrepreneurship Forum – a platform for innovators, dreamers, and future leaders.
            </p>
            <Link href='/landingpage?slug=entrepreneurship-forum-2025'>
              <button className="border-0 rounded  fs-6 text-white px-3">Book Now </button>

            </Link>
          </div>
        </div>

        <div className="position-relative">
          <img
            className="slide-image w-100"
            src="/event-page/agrotech.png"
            alt="Slide 4"
            style={{ height: '100vh', objectFit: 'cover' }}
          />
          <div
            style={{ background: "linear-gradient(to bottom right, #0000009c, #866b2f)", bottom: '-4.5rem' }}
            className="position-absolute  start-50 translate-middle text-center px-5 py-3"
          // data-aos="fade-up"
          // data-aos-duration="1000"
          >
            <h1
              style={{ fontFamily: 'ui-serif' }}
              className=" text-white weight100"
            >
              Agro Tech 2025 –  <br /> Powered by Demigod House
            </h1>
            <p
              className="text-white fs-5 variety"
            // data-aos="fade-up"
            // data-aos-duration="1500"
            >
              Demigod House brings you Agro Tech 2025 — a celebration of innovation in agriculture. Discover smart farming solutions, sustainable technologies, and the future of agri-business, all in one place.
            </p>
            <Link href='/landingpage?slug=agro-tech'>
              <button className="border-0 rounded  fs-6 text-white px-3">Book Now </button>

            </Link>
          </div>
        </div>
        <div className="position-relative">
          <img
            className="slide-image w-100"
            src="/event-page/DFC.webp"
            alt="Slide 4"
            style={{ height: '100vh', objectFit: 'cover' }}
          />
          <div
            style={{ background: "linear-gradient(to bottom right, #0000009c, #866b2f)", bottom: '-4.5rem' }}
            className="position-absolute  start-50 translate-middle text-center px-5 py-3"
          // data-aos="fade-up"
          // data-aos-duration="1000"
          >
            <h1
              style={{ fontFamily: 'ui-serif' }}
              className=" text-white weight100"
            >
              Demigod Fighting Cub (DFC) –  <br /> Rise of the Celestial Beast
            </h1>
            <p
              className="text-white fs-5 variety"
            // data-aos="fade-up"
            // data-aos-duration="1500"
            >
              Enter a mythical arena where divine power meets primal fury. In DFC, train your cub, master ancient powers, and battle to become a true demigod.o prove their might. Train your cub, master ancient powers, and dominate in a world where gods are born, not made.            </p>
            <button className="border-0 rounded  fs-6 text-white px-3">Book Now </button>
          </div>
        </div>
        {/* <div>
          <img className="slide-image" src="/event-page/agrotech.png" alt="Slide 4" />
        </div> */}
      </Slider>

      {/* Right Navigation Button */}
      <button className="custom-button-test right" onClick={() => sliderRef.current?.slickNext()}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CarouselSection;
