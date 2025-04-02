'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './fridaynight.css';
import Link from 'next/link';

export default function FridayNight() {
  const sliderRef = useRef(null);
  // const { handleUpdate } = useContext(Auth);

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
      img: "/event-page/exhbition.jpeg",
      name: "Exhbition Expo",
      desc: "An Exhibition Expo is a large-scale event where businesses, organizations, and individuals showcase their products, services, innovations, or art to a targeted audience. These expos often cater to specific industries such as technology, fashion, healthcare, or education.",
    },
    {
      img: "/event-page/pharma.jpeg",
      name: "Pharma Expo",
      desc: "A Pharma Expo is a specialized trade exhibition focused on the pharmaceutical industry. It serves as a platform for pharmaceutical companies, healthcare professionals, researchers, and manufacturers to showcase innovations, products, and technologies related to medicine, drug development, and healthcare solutions.",
    },
    {
      img: "/event-page/travel-Tourism.jpeg",
      name: "Travel & Tourism Expo",
      desc: "A Travel & Tourism Expo is a large-scale event that brings together travel agencies, tourism boards, airlines, hospitality brands, and adventure companies to showcase destinations, travel services, and experiences. These expos serve as a hub for networking, business collaborations, and discovering new travel trends.",
    },
    {
      img: "/event-page/tech-expo.jpeg",
      name: "Tech Expo",
      desc: "A Tech Expo is a large-scale event that showcases the latest advancements in technology, innovation, and digital transformation. It serves as a platform for tech companies, startups, developers, and industry leaders to present their cutting-edge products, software, and solutions.",
    },
    {
      img: "/event-page/destate.jpeg",
      name: "D'estate Expo",
      desc: "D'Estate Expo is a leading real estate exhibition that brings together industry experts, investors, developers, and homebuyers under one roof. Whether you're looking for residential, commercial, or luxury properties, this expo offers exclusive opportunities to explore top-tier real estate projects and investment prospects.",
    },
    {
      img: "/event-page/carrer-expo.jpeg",
      name: "Carrer Expo",
      desc: "A Career Expo is a premier event where job seekers, professionals, and recruiters come together to explore career opportunities, industry trends, and skill development. Whether you're a fresh graduate, an experienced professional, or a company looking for top talent, this expo serves as a dynamic platform for networking and career advancement.",
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
    <div className="container-fluid p-lg-5 p-0 mt-5">
      <div className="slider-container">
        <Slider {...settings} ref={sliderRef}>
          {initialImages.map((image, index) => (
            <div key={index} className="d-flex justify-content-center align-items-center p-2">
              <div className="image-container position-relative">
                <img
                style={{height:'270px'}}
                  className="rounded img-fluid w-100"
                  src={image.img}
                  alt={image.name}
                />
                <div className="overlay">
                  <h1 className="text-san">{image.name}</h1>
                </div>
                <div className="p-3 text-white visible-on-hover">
                  <h6 className="m-0 fw-bold">{image.name}</h6>
                  <p className='mt-2'>{image.desc}</p>
                  {/* <p className="m-0 text-secondary">Location: India</p>
                  <p className="text-secondary">{image.name === "Blue Collar Chronicles" ? "22.06.24 18:00" :
                    image.name === "Influencers Award Ceremony" ? "25.06.24 19:00" :
                    image.name === "Warzone Paintball Tournament" ? "30.06.24 15:00" :
                    image.name === "Comedy Show" ? "05.07.24 20:00" :
                    image.name === "Career Expo" ? "12.07.24 09:00" :
                    "Date: TBD"}</p> */}
                  {/* <p className="text-secondary">{image.name === "Blue Collar Chronicles" || image.name === "Career Expo" ? "Peter Whelan" :
                    image.name === "Influencers Award Ceremony" ? "John Doe" :
                    image.name === "Warzone Paintball Tournament" ? "Sarah Smith" :
                    image.name === "Comedy Show" ? "Mike Johnson" : "Speaker"}</p> */}

                  {/* <p className="text-secondary">
                    {image.name === "Blue Collar Chronicles" ? "Direttore" :
                    image.name === "Influencers Award Ceremony" ? "Event Organizer" :
                    image.name === "Warzone Paintball Tournament" ? "Tournament Organizer" :
                    image.name === "Comedy Show" ? "Comedian" :
                    image.name === "Career Expo" ? "Organizer" : "Speaker"}
                  </p> */}
                  <Link
                    href={{
                      pathname: '/landingpage',
                      query: { name: image.name },

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
     
    </div>
  );
}
