"use client";
import React, { useRef } from "react";
import WeddingCard from "./WeddingCard";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./wedding.css";

const WeddinfSlider = () => {
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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
  // const cards = Array.from({ length: 6 }, (_, index) => ({
  //   margin: (index + 1) % 2 === 0,
  // }));

  const cards=[{image:"https://media.istockphoto.com/id/1933374098/photo/newlyweds-celebrating-with-their-guests-at-beach-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=mBbcn9c4Kq_kMA0WzeTXB48Jk6P3raONF1SbuKHugrY="},
    {image:"https://media.istockphoto.com/id/1388563119/photo/beautiful-bride-and-groom-celebrate-wedding-outdoors-on-a-beach-near-the-ocean-perfect.jpg?s=612x612&w=0&k=20&c=tRvxRAN6Lb6Cu5c1EUaS081UNbKp0TOLu3x1NFj4FoE="},
    {image:"https://media.istockphoto.com/id/1933376240/photo/portrait-of-a-bride-holding-her-bouquet-on-beach-wedding.jpg?s=612x612&w=0&k=20&c=Bu-SxK2KZtKFf5zeawkobT5KTj32HcvDwRPH7-1WxkY=",

    },
    {image:"https://media.istockphoto.com/id/1142225421/photo/elopement-wedding-ride-and-groom-embracing-in-front-of-wedding-altar.jpg?s=612x612&w=0&k=20&c=gpTFAuPsUsXcA0aB2BVbKJRm2QVuvr0OlMInE1MIeQo="},
    {image:"https://media.istockphoto.com/id/1204862788/photo/bride-and-a-groom-is-cutting-wedding-cake-on-banquet-hands-cut-the-cake-with-flowers-newlywed.jpg?s=612x612&w=0&k=20&c=3sAHFcmGSjrvgSMiWXkWndUXyEDdw6XnWaFbgRj9MI8="},
    {image:"https://media.istockphoto.com/id/1933376240/photo/portrait-of-a-bride-holding-her-bouquet-on-beach-wedding.jpg?s=612x612&w=0&k=20&c=Bu-SxK2KZtKFf5zeawkobT5KTj32HcvDwRPH7-1WxkY=",

    }
  ]


  return (
    // <div className="bg-cards-inner ">
    //   <div className="container mt-5   col-lg-10 col-12 d-flex flex-column justify-content-center align-items-center top-destination ">
    //     <h1 className="mt-5">Top Destinations</h1>
    //     <p className=" col-lg-12 col-12">
    //       The first AI that truly understands websites
    //     </p>
    //   </div>
    //   <div className=" container-fluid p-0  ">
    //     <div className="d-flex justify-content-center align-items-center">
          <div className="col-lg-10 col-11 mt-lg-5">
            <div className=" slider2 ">
              <Slider {...settings2} ref={sliderRef}>
                {cards.map((card, index) => (
                  <WeddingCard key={index}   margin={(index + 1) % 2 === 0} image={card.image} />
                ))}
              </Slider>
              <div
                style={{ textAlign: "left" }}
                className="d-flex justify-content-between gap-2 my-4 cursor-pointer"
              >
                <div className="rounded-full p-2" onClick={previous}>
                  <img
                    style={{ transform: "rotate(-180deg)" }}
                    className="img-fluid w-50 arrow-img mx-lg-4"
                    src="/images/arrow.png"
                  ></img>{" "}
                </div>
                <div
                  className="rounded-full p-2"
                  onClick={next}
                  style={{ color: "white" }}
                >
                  <img
                    className="img-fluid w-50 arrow-img mx-lg-4"
                    src="/images/arrow.png"
                  ></img>
                </div>
              </div>
            </div>
          </div>
      
  );
};

export default WeddinfSlider;
