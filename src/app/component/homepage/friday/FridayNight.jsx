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
      desc: "An engaging journey through the lives of hardworking individuals in various industries.",
    },
    {
      img: "/images/landing-page-images/section7/COUPLE'S_MARATHON.webp",
      name: "Influencers Award Ceremony",
      desc: "A prestigious evening celebrating the achievements of top influencers across various platforms.",
    },
    {
      img: "/images/landing-page-images/section7/PAINTBALL.webp",
      name: "Warzone Paintfull Tournament",
      desc: "An exciting, action-packed paintball tournament where teams battle for supremacy.",
    },
    {
      img: "/images/landing-page-images/section7/STANDUP.webp",
      name: "Comedy Show",
      desc: "A night of laughter and fun with performances by some of the best stand-up comedians.",
    },
    {
      img: "/images/landing-page-images/section7/STANDUP.webp",
      name: "Career Expo",
      desc: "A networking event for students and professionals to explore new career opportunities.",
    }
  ];


  const settings = {
    slidesToShow: 3,
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
                  <p className="m-0 text-secondary">Location: India</p>
                  <p className="text-secondary">{image.name === "Blue Collar Chronicles" ? "22.06.24 18:00" :
                    image.name === "Influencers Award Ceremony" ? "25.06.24 19:00" :
                    image.name === "Warzone Paintball Tournament" ? "30.06.24 15:00" :
                    image.name === "Comedy Show" ? "05.07.24 20:00" :
                    image.name === "Career Expo" ? "12.07.24 09:00" :
                    "Date: TBD"}</p>
                  <h6 className="m-0">Peter Whelan</h6>
                  <p className="text-secondary">{image.name === "Blue Collar Chronicles" || image.name === "Career Expo" ? "Peter Whelan" :
                    image.name === "Influencers Award Ceremony" ? "John Doe" :
                    image.name === "Warzone Paintball Tournament" ? "Sarah Smith" :
                    image.name === "Comedy Show" ? "Mike Johnson" : "Speaker"}</p>

                <p className="text-secondary">
                    {image.name === "Blue Collar Chronicles" ? "Direttore" :
                    image.name === "Influencers Award Ceremony" ? "Event Organizer" :
                    image.name === "Warzone Paintball Tournament" ? "Tournament Organizer" :
                    image.name === "Comedy Show" ? "Comedian" :
                    image.name === "Career Expo" ? "Organizer" : "Speaker"}
                  </p>
                  <Link
              href={{
                pathname: '/landingpage',
                query: { name: image.name},
                
              }}>
                    <button className="rounded-pill btn-custom px-4 py-2 text-white">
                    {image.name === "Blue Collar Chronicles" ? "Join Now" :
                  image.name === "Influencers Award Ceremony" ? "Learn More" :
                  image.name === "Warzone Paintball Tournament" ? "Register Now" :
                  image.name === "Comedy Show" ? "Get Tickets" :
                  image.name === "Career Expo" ? "Explore Opportunities" : "Learn More"}                   </button>
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
      <div className="text-center mt-5">
        <h2>Join us for an unforgettable Friday night!</h2>
        <p>Experience the best events and activities, curated just for you.</p>
        <Link href="/events">
          <button className="btn btn-primary px-4 py-2">Explore All Events</button>
        </Link>
      </div>
    </div>
  );
}
