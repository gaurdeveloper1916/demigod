'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './fridaynight.css';  
import Link from 'next/link';

export default function FridayNight() {
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

  const initialImages = [
    {
      img: "/images/landing-page-images/section7/BLUE_COLLAR.webp",
      name: "Blue collar chronicles",
      desc: "Description for Image 1",
    },
    {
      img: "/images/landing-page-images/section7/COUPLE'S_MARATHON.webp",
      name: "Marathon mingle",
      desc: "Description for Image 2",
    },
    {
      img: "/images/landing-page-images/section7/PAINTBALL.webp",
      name: "Warzone Paintfull Tournament",
      desc: "Description for Image 3",
    },
    {
      img: "/images/landing-page-images/section7/STANDUP.webp",
      name: "Comedy Show",
      desc: "Description for Image 4",
    }
  ];

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    centerMode: false,
    focusOnSelect: true,
    dots: true,
    arrows: true, 
    prevArrow: <button className="slick-prev">Prev</button>,
    nextArrow: <button className="slick-next">Next</button>, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div className="container-fluid p-5 mt-5">
      <div className="slider-container">
        <Slider {...settings} ref={sliderRef}>
          {initialImages.map((image, index) => (
            <div key={index} className="d-flex justify-content-center align-items-center p-2">
              <div className="image-container position-relative">
                <img
                  className="img-fluid rounded"
                  src={image.img}
                  alt={image.name}
                />
                <div className="overlay">
                  <h1 className="text-san">{image.name}</h1>
                </div>
                <div className="p-3 text-white visible-on-hover">
                  <h6 className="m-0">{image.name}</h6>
                  <p className="m-0 text-secondary">OSI in San Biagio</p>
                  <p className="text-secondary">22.06.24 18:00</p>
                  <h6 className="m-0">Peter Whelan</h6>
                  <p className="text-secondary">Direttore</p>
                  <Link href="/landingpage">
                    <button className="rounded-pill btn-custom px-4 py-2 text-white">
                      Acquis biGE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div
          style={{ textAlign: "left" }}
          className="d-flex justify-content-center gap-2 my-4 cursor-pointer"
        >
          <div className="rounded-full p-2" onClick={previous}>
            <img
              style={{ transform: "rotate(-180deg)" }}
              className="img-fluid w-50 arrow-img mx-lg-4"
              src="/images/arrow.png"
            />
          </div>
          <div
            className="rounded-full p-2"
            onClick={next}
            style={{ color: "white" }}
          >
            <img
              className="img-fluid w-50 arrow-img mx-lg-4"
              src="/images/arrow.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
