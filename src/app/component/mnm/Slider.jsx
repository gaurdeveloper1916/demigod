"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

const Sliders = () => {
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
    slidesToShow: 1.9,
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
      <div style={{ marginTop: "10rem" }} className="py-2 slider2 ">
        <Slider {...settings2} ref={sliderRef} >
          {/* {cards.map((card, index) => (
            <WeddingCard key={index} margin={card.margin} />
          ))} */}
          <div className={`text-white zoom-container mx-2 px-2 `}>
            <img
              src="/images/wedding.jpg "
              className=" ps-4 pe-4 pt-4 object-cover "
              height={300}
                   
                    
              alt="..."
            />
            <div className="d-flex">
            <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                  OCTOBER 2024
                </h6>
                <div>
                  <h6 className="m-0 fw-bold">Hack Summit,SF</h6>
                  <p className=" verySmallFont text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam aspernatur esse quia architecto assumenda, quod eum
                    iste est corrupti quisquam minus mollitia, veritatis
                    adipisci, magni debitis natus omnis harum aliquam!
                  </p>
                  <button className="border-0 px-2 py-1 text-white rounded-pill">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={`text-white zoom-container mx-2 px-2`}>
            <img
              src="/images/wedding.jpg "
              className=" ps-4 pe-4 pt-4"
              height={300}
              
              

              alt="..."
            />
            <div className="d-flex justify-content-between 5">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                  OCTOBER 2024
                </h6>
                <div>
                  <h6 className="m-0 fw-bold">Hack Summit,SF</h6>
                  <p className=" verySmallFont text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam aspernatur esse quia architecto assumenda, quod eum
                    iste est corrupti quisquam minus mollitia, veritatis
                    adipisci, magni debitis natus omnis harum aliquam!
                  </p>
                  <button className="border-0 px-2 py-1 text-white rounded-pill">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={`text-white zoom-container mx-2 px-2`}>
            <img
              src="/images/wedding.jpg "
              className=" ps-4 pe-4 pt-4"
              height={300}
              
              

              alt="..."
            />
            <div className="d-flex justify-content-between 5">
            <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                  OCTOBER 2024
                </h6>
                <div>
                  <h6 className="m-0 fw-bold">Hack Summit,SF</h6>
                  <p className=" verySmallFont text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam aspernatur esse quia architecto assumenda, quod eum
                    iste est corrupti quisquam minus mollitia, veritatis
                    adipisci, magni debitis natus omnis harum aliquam!
                  </p>
                  <button className="border-0 px-2 py-1 text-white rounded-pill">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={`text-white zoom-container mx-2 px-2`}>
            <img
              src="/images/wedding.jpg "
              className=" ps-4 pe-4 pt-4"
              height={300}
              
              

              alt="..."
            />
            <div className="d-flex justify-content-between 5">
            <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                  OCTOBER 2024
                </h6>
                <div>
                  <h6 className="m-0 fw-bold">Hack Summit,SF</h6>
                  <p className=" verySmallFont text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam aspernatur esse quia architecto assumenda, quod eum
                    iste est corrupti quisquam minus mollitia, veritatis
                    adipisci, magni debitis natus omnis harum aliquam!
                  </p>
                  <button className="border-0 px-2 py-1 text-white rounded-pill">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={`text-white zoom-container mx-2 px-2`}>
            <img
              src="/images/wedding.jpg "
              className=" ps-4 pe-4 pt-4"
              height={300}
              
              

              alt="..."
            />
            <div className="d-flex justify-content-between 5">
            <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                  OCTOBER 2024
                </h6>
                <div>
                  <h6 className="m-0 fw-bold">Hack Summit,SF</h6>
                  <p className=" verySmallFont text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam aspernatur esse quia architecto assumenda, quod eum
                    iste est corrupti quisquam minus mollitia, veritatis
                    adipisci, magni debitis natus omnis harum aliquam!
                  </p>
                  <button className="border-0 px-2 py-1 text-white rounded-pill">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={`text-white zoom-container mx-2 px-2`}>
            <img
              src="/images/wedding.jpg "
              className=" ps-4 pe-4 pt-4"
              height={300}
              
              

              alt="..."
            />
            <div className="d-flex justify-content-between 5">
            <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                  OCTOBER 2024
                </h6>
                <div>
                  <h6 className="m-0 fw-bold">Hack Summit,SF</h6>
                  <p className=" verySmallFont text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam aspernatur esse quia architecto assumenda, quod eum
                    iste est corrupti quisquam minus mollitia, veritatis
                    adipisci, magni debitis natus omnis harum aliquam!
                  </p>
                  <button className="border-0 px-2 py-1 text-white rounded-pill">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>
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
  );
};

export default Sliders;
