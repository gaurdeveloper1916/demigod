"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import './index.css'
const Customslider = () => {
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
    // centerPadding: "50px",
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
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
  const cards = Array.from({ length: 6 }, (_, index) => ({
    margin: (index + 1) % 2 === 0,
  }));

  return (
    <div className="container">
      <div style={{ marginTop: "10rem" }} className=" mx-4 p-4 bg-cards ">
        <Slider {...settings2} ref={sliderRef}>
          <div className={`text-white p-3 bg-cards-inner`}>
            <img
              src="/images/wedding.jpg "
              className=" w-100"
              //   //height={250}
              //   width={200}
              alt="..."
            />
            <div className="d-flex">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                  OCTOBER 2024
                </h6>
                <div>
                  <h6 className="m-0 fw-bold">Hack Summit,SF</h6>
                  <p className=" verySmallFont ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam aspernatur esse quia architecto assumenda
                  </p>
                  <p className="border-0 px-2 py-2 text-white ">
                    LEARN MORE
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`text-white  p-3 zoom-container bg-cards-inner`}>
            <img
              src="/images/wedding.jpg "
              className="w-100 "
            
              alt="..."
            />
            <div className="d-flex justify-content-between 5">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                  January 2024
                </h6>
                <div>
                  <h6 className="m-0 fw-bold">Hack Summit,SF</h6>
                  <p className=" verySmallFont ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam aspernatur esse quia architecto assumenda
                  </p>
                  <p className="border-0 bg px-2 py-1 text-white ">
                    LEARN MORE
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`text-white  p-3 zoom-container bg-cards-inner`}>
            <img
              src="/images/wedding.jpg "
              className="w-100 "
              
              alt="..."
            />
            <div className="d-flex justify-content-between 5">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                  Feburary 2024
                </h6>
                <div>
                  <h6 className="m-0 fw-bold">Hack Summit,SF</h6>
                  <p className=" verySmallFont ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam aspernatur esse quia architecto assumenda
                  </p>
                  <p className="border-0 px-2 py-2 text-white ">
                    LEARN MORE
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={`text-white  p-3 zoom-container bg-cards-inner`}>
            <img
              src="/images/wedding.jpg "
              className=" w-100"
              //height={250}
              //width={240}
              alt="..."
            />
            <div className="d-flex justify-content-between 5">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                  March 2024
                </h6>
                <div>
                  <h6 className="m-0 fw-bold">Hack Summit,SF</h6>
                  <p className=" verySmallFont ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam aspernatur esse quia architecto assumenda
                  </p>
                  <p className="border-0 px-2 py-2 text-white ">
                    LEARN MORE
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={`text-white  p-3 zoom-container bg-cards-inner`}>
            <img
              src="/images/wedding.jpg "
              className="w-100 "
              //height={250}
              //width={240}
              alt="..."
            />
            <div className="d-flex justify-content-between 5">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                  April 2024
                </h6>
                <div>
                  <h6 className="m-0 fw-bold">Hack Summit,SF</h6>
                  <p className=" verySmallFont ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam aspernatur esse quia architecto assumenda
                  </p>
                  <p className="border-0 px-2 py-2 text-white ">
                    LEARN MORE
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={`text-white  p-3 zoom-container bg-cards-inner`}>
            <img
              src="/images/wedding.jpg "
              className=" w-100"
              //height={250}
              //width={240}
              alt="..."
            />
            <div className="d-flex justify-content-between 5">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                  May 2024
                </h6>
                <div>
                  <h6 className="m-0 fw-bold">Hack Summit,SF</h6>
                  <p className=" verySmallFont ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam aspernatur esse quia architecto assumenda
                  </p>
                  <p className="border-0 px-2 py-2 text-white ">
                    LEARN MORE
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
          
        </Slider>
        <div  className="d-flex  flex-column">
          <div className="d-flex   gap-2 mt-4">
            <div
              className=" rounded-full  p-2"
              onClick={previous}
              style={{ color: "white" }}
            >
              {/* <FiChevronLeft className="stroke-2" size={25} /> */}
              <img
                style={{ transform: "rotate(-180deg)",width:'60px' }}
                className="img-fluid arrow-img mx-lg-4"
                src="/images/arrow.png"
              ></img>
            </div>
            <div
              className=" rounded-full  p-2"
              onClick={next}
              style={{ color: "white" }}
            >
              {/* <FiChevronRight className="stroke-2" size={25} /> */}
              <img
                 style={{ width:'60px' }}
                className="img-fluid arrow-img mx-lg-4"
                src="/images/arrow.png"
              ></img>
            </div>
          </div>
          <div className="d-flex ml-4  px-4 text-white">(1/5)</div>
        </div>
      </div>
    </div>
  );
};

export default Customslider;
