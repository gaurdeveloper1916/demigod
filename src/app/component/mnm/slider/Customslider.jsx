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
  const slideData = [
    {
      title: "Automotive",
      img: "./home/auto.jpeg",
      alt: "Automotive sector brand marketing",
      description:
        "We create marketing strategies that drive awareness and sales for automotive brands, focusing on both traditional and digital marketing approaches.",
    },
    {
      title: "Real Estate",
      img: "./home/real.jpeg",
      alt: "Real Estate sector brand marketing",
      description:
        "Our real estate marketing strategies use the latest tools to connect potential buyers with properties, resulting in higher conversions and faster sales cycles.",
    },
    {
      title: "Event Management",
      img: "./home/event.jpeg",
      alt: "Event Management sector brand marketing",
      description:
        "From corporate events to large-scale consumer experiences, we craft memorable moments that resonate with attendees, ensuring a lasting impression.",
    },
    {
      title: "Jewellery",
      img: "./home/jewel.webp",
      alt: "Jewellery sector brand marketing",
      description:
        "Our expertise in jewellery marketing ensures an impactful presence, driving brand recognition and engagement with affluent clientele.",
    },
    {
      title: "Gems",
      img: "./home/jewel.webp",
      alt: "Gems sector brand marketing",
      description:
        "We provide bespoke solutions for the gemstone industry, leveraging creativity and innovation to elevate brand positioning and visibility.",
    },
    {
      title: "Pharma OTC",
      img: "./home/phrma.webp",
      alt: "Pharma OTC sector brand marketing",
      description:
        "Our tailored marketing and event management services promote OTC products with a focus on customer trust and long-term growth.",
    },
    {
      title: "FMCG",
      img: "./home/fmcg.jpeg",
      alt: "FMCG sector brand marketing",
      description:
        "We help FMCG brands establish dominance through strategic campaigns that increase market penetration and brand loyalty.",
    },
  ];


  return (
    <div className="container">
      <div className="mx-4 p-4 bg-cards">
        <Slider className="react-slick-new" {...settings2} ref={sliderRef}>
          {slideData.map((slide, index) => (
            <div key={index} className="text-white p-3 bg-cards-inner zoom-container">
              <img src={slide.img} height={200} width={200} alt={slide.alt} />
              <div className="d-flex justify-content-between">
                <div className="text-white verySmallFont">
                  <h6 className="m-0 my-3 gradient-text fw-bold">{slide.title}</h6>
                  <p className="verySmallFont">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
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
