"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SingleUpDownSlider from "./SingleUpDownSlider";

const Slickslider = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: null, // Remove default next arrow
    prevArrow: null, // Remove default previous arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
  const images = [
    "https://media.istockphoto.com/id/1321020131/photo/concert-crowd-venue.webp?a=1&b=1&s=612x612&w=0&k=20&c=awJjJIoog4CtcsHYd_YxkfSATMaSj8GB-QA0UgJTYKU=",
    "https://images.unsplash.com/photo-1501527459-2d5409f8cf9f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1468359601543-843bfaef291a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1681830630610-9f26c9729b75?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D",
  ];
  const cards = Array.from({ length: 6 }, (_, index) => ({
    margin: (index + 1) % 2 === 0,
    image: images[index],
  }));
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="col-lg-10 overflow-hidden">
        <div className="mt-5">
          <div
            className="py-2 slider2"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Slider {...settings2} ref={sliderRef}>
              
              {cards.map((card, index) => (
                <SingleUpDownSlider key={index} margin={card.margin} image={card.image} />
              ))}
            </Slider>
            <div style={{ textAlign: "left" }} className="d-flex  gap-2 mt-4">
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

export default Slickslider;
