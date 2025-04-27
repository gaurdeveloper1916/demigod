"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0px",
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 2000,
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

  return (
    <div className="container">
      <div className="mx-4 p-4 bg-cards">
        <Slider className="react-slick-new" {...settings2} ref={sliderRef}>
          <div className="text-white p-3 bg-cards-inner">
            <img
              src="auto.jpeg"
              height={200}
              width={200}
              alt="Automotive sector brand marketing"
            />
            <div className="d-flex">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold">
                  Automotive
                </h6>
                <p className="verySmallFont">
                  We create marketing strategies that drive awareness and sales for automotive brands, focusing on both traditional and digital marketing approaches.
                </p>
              </div>
            </div>
          </div>
          <div className="text-white p-3 bg-cards-inner">
            <img
              src="real.jpeg"
              height={200}
              width={200}
              alt="Real Estate sector brand marketing"
            />
            <div className="d-flex">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold">
                  Real Estate
                </h6>
                <p className="verySmallFont">
                  Our real estate marketing strategies use the latest tools to connect potential buyers with properties, resulting in higher conversions and faster sales cycles.
                </p>
              </div>
            </div>
          </div>
          <div className="text-white p-3 zoom-container bg-cards-inner">
            <img
              src="event.jpeg"
              height={200}
              width={200}
              alt="Event Management sector brand marketing"
            />
            <div className="d-flex justify-content-between">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold">
                  Event Management
                </h6>
                <p className="verySmallFont">
                  From corporate events to large-scale consumer experiences, we craft memorable moments that resonate with attendees, ensuring a lasting impression.
                </p>
              </div>
            </div>
          </div>
          <div className="text-white p-3 zoom-container bg-cards-inner">
            <img
              src="jewel.webp"
              height={200}
              width={200}
              alt="Jewellery sector brand marketing"
            />
            <div className="d-flex justify-content-between">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold">
                  Jewellery
                </h6>
                <p className="verySmallFont">
                  Our expertise in jewellery marketing ensures an impactful presence, driving brand recognition and engagement with affluent clientele.
                </p>
              </div>
            </div>
          </div>
          <div className="text-white p-3 zoom-container bg-cards-inner">
            <img
              src="jewel.jpeg"
              height={200}
              width={200}
              alt="Gems sector brand marketing"
            />
            <div className="d-flex justify-content-between">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold">
                  Gems
                </h6>
                <p className="verySmallFont">
                  We provide bespoke solutions for the gemstone industry, leveraging creativity and innovation to elevate brand positioning and visibility.
                </p>
              </div>
            </div>
          </div>
          <div className="text-white p-3 zoom-container bg-cards-inner">
            <img
              src="phrma.webp"
              height={200}
              width={200}
              alt="Pharma OTC sector brand marketing"
            />
            <div className="d-flex justify-content-between">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold">
                  Pharma OTC
                </h6>
                <p className="verySmallFont">
                  Our tailored marketing and event management services promote OTC products with a focus on customer trust and long-term growth.
                </p>
              </div>
            </div>
          </div>
          <div className="text-white p-3 zoom-container bg-cards-inner">
            <img
              src="fmcg.jpeg"
              height={200}
              width={200}
              alt="FMCG sector brand marketing"
            />
            <div className="d-flex justify-content-between">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold">FMCG</h6>
                <p className="verySmallFont">
                  We help FMCG brands establish dominance through strategic campaigns that increase market penetration and brand loyalty.
                </p>
              </div>
            </div>
          </div>
        </Slider>
        <div className="d-flex flex-column">
          <div className="d-flex gap-2 mt-4">
            <div
              className="rounded-full p-2"
              onClick={previous}
              style={{ color: "white" }}
            >
              <img
                style={{ transform: "rotate(-180deg)", width: '60px' }}
                className="img-fluid arrow-img mx-lg-4"
                src="/images/arrow.png"
                alt="previous"
              ></img>
            </div>
            <div
              className="rounded-full p-2"
              onClick={next}
              style={{ color: "white" }}
            >
              <img
                style={{ width: '60px' }}
                className="img-fluid arrow-img mx-lg-4"
                src="/images/arrow.png"
                alt="next"
              ></img>
            </div>
          </div>
          <div className="d-flex ml-4 px-4 text-white">(1/7)</div>
        </div>
      </div>
    </div>
  );
};

export default Customslider;
