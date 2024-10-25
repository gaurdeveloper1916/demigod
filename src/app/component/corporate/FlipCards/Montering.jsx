"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

const Montering = () => {
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
    centerPadding: "50px",
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
    <div className="container overflow-hidden">
      <div style={{ marginTop: "10rem" }} className="py-2 slider2 "  data-aos="fade-right" data-aos-duration="1200" >
        <Slider {...settings2} ref={sliderRef}>
          {/* {cards.map((card, index) => (
            <WeddingCard key={index} margin={card.margin} />
          ))} */}
          <div className={`text-white zoom-container`}>
            <img
              src="https://media.istockphoto.com/id/471055422/photo/concert-crowd.webp?a=1&b=1&s=612x612&w=0&k=20&c=CLq9t_vfC3sNszUBDdfJ94WcGeFS48D1npaYL_w-R7o="
              className=" ps-4 pe-4 pt-4"
              height={300}
              alt="..."
            />
            <div className="d-flex justify-content-between mx-4">
              <div className="text-white verySmallFont">
                <p className="m-0">Event /01</p>
                <p>INSIDE SOFTWARE</p>
              </div>
              <div className="text-white verySmallFont">
                <p className="m-0">BRANDING-WEBDESIGN-hellow</p>
                <div className="d-flex justify-content-end">
                  <MdArrowOutward size={25} className="text-end" />
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={`text-white zoom-container`}>
            <img
              src="https://media.istockphoto.com/id/1486287149/photo/group-of-multiracial-asian-business-participants-casual-chat-after-successful-conference-event.webp?a=1&b=1&s=612x612&w=0&k=20&c=w6LTgtP8zZnJgg9g7jemKYcmAWjv4lxNlPyZ-PjVwkE="
              className=" ps-4 pe-4 pt-4"
              height={300}
              alt="..."
            />
            <div className="d-flex justify-content-between mx-4">
              <div className="text-white verySmallFont">
                <p className="m-0">Event /01</p>
                <p>INSIDE SOFTWARE</p>
              </div>
              <div className="text-white verySmallFont">
                <p className="m-0">BRANDING-WEBDESIGN-hellow</p>
                <div className="d-flex justify-content-end">
                  <MdArrowOutward size={25} className="text-end" />
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={`text-white zoom-container`}>
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D "
              className=" ps-4 pe-4 pt-4"
              height={300}
              alt="..."
            />
            <div className="d-flex justify-content-between mx-4">
              <div className="text-white verySmallFont">
                <p className="m-0">Event /01</p>
                <p>INSIDE SOFTWARE</p>
              </div>
              <div className="text-white verySmallFont">
                <p className="m-0">BRANDING-WEBDESIGN-hellow</p>
                <div className="d-flex justify-content-end">
                  <MdArrowOutward size={25} className="text-end" />
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={`text-white zoom-container`}>
            <img
              src="https://images.unsplash.com/photo-1522158637959-30385a09e0da?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGV2ZW50fGVufDB8fDB8fHww "
              className=" ps-4 pe-4 pt-4"
              height={300}
              alt="..."
            />
            <div className="d-flex justify-content-between mx-4">
              <div className="text-white verySmallFont">
                <p className="m-0">Event /01</p>
                <p>INSIDE SOFTWARE</p>
              </div>
              <div className="text-white verySmallFont">
                <p className="m-0">BRANDING-WEBDESIGN-hellow</p>
                <div className="d-flex justify-content-end">
                  <MdArrowOutward size={25} className="text-end" />
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={`text-white zoom-container`}>
            <img
              src="/images/wedding.jpg "
              className=" ps-4 pe-4 pt-4"
              height={300}
              alt="..."
            />
            <div className="d-flex justify-content-between mx-4">
              <div className="text-white verySmallFont">
                <p className="m-0">Event /01</p>
                <p>INSIDE SOFTWARE</p>
              </div>
              <div className="text-white verySmallFont">
                <p className="m-0">BRANDING-WEBDESIGN-hellow</p>
                <div className="d-flex justify-content-end">
                  <MdArrowOutward size={25} className="text-end" />
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={`text-white zoom-container`}>
            <img
              src="/images/wedding.jpg "
              className=" ps-4 pe-4 pt-4"
              height={300}
              alt="..."
            />
            <div className="d-flex justify-content-between mx-4">
              <div className="text-white verySmallFont">
                <p className="m-0">Event /01</p>
                <p>INSIDE SOFTWARE</p>
              </div>
              <div className="text-white verySmallFont">
                <p className="m-0">BRANDING-WEBDESIGN-hellow</p>
                <div className="d-flex justify-content-end">
                  <MdArrowOutward size={25} className="text-end" />
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

export default Montering;
