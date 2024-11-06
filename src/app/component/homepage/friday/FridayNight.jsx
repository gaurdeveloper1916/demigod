'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './fridaynight.css';  // Your custom styles
import Link from 'next/link';

export default function FridayNight() {
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Go to the next slide
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Go to the previous slide
    }
  };

  const initialImages = [
    {
      img: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?cs=srgb&dl=pexels-cottonbro-3171837.jpg&fm=jpg",
      name: "Image 1",
      desc: "Description for Image 1",
    },
    {
      img: "https://t4.ftcdn.net/jpg/01/20/28/25/360_F_120282530_gMCruc8XX2mwf5YtODLV2O1TGHzu4CAb.jpg",
      name: "Image 2",
      desc: "Description for Image 2",
    },
    {
      img: "https://img.freepik.com/free-photo/people-celebrating-party_53876-14410.jpg",
      name: "Image 3",
      desc: "Description for Image 3",
    },
    {
      img: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg",
      name: "Image 4",
      desc: "Description for Image 4",
    },
    {
      img: "https://www.shutterstock.com/image-photo/young-people-dancing-night-club-260nw-351380480.jpg",
      name: "Image 5",
      desc: "Description for Image 5",
    },
    {
      img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFydHl8ZW58MHx8MHx8fDA%3D",
      name: "Image 6",
      desc: "Description for Image 6",
    },
    {
      img: "https://img.freepik.com/free-photo/people-celebrating-party_53876-14410.jpg",
      name: "Image 7",
      desc: "Description for Image 7",
    },
    {
      img: "https://img.freepik.com/free-photo/people-celebrating-party_53876-14410.jpg",
      name: "Image 8",
      desc: "Description for Image 8",
    },
  ];

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    centerMode: false,
    focusOnSelect: true,
    dots: true,
    arrows: true, // Enable default arrows if needed
    prevArrow: <button className="slick-prev">Prev</button>, // Customize the previous arrow
    nextArrow: <button className="slick-next">Next</button>, // Customize the next arrow
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
                  <h1 className="text-san">SAN</h1>
                </div>
                <div className="p-3 text-white visible-on-hover">
                  <h6 className="m-0">Chiesa San Biagio</h6>
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

        {/* Custom previous and next buttons */}
        <div
          style={{ textAlign: "left" }}
          className="d-flex justify-content-between gap-2 my-4 cursor-pointer"
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
