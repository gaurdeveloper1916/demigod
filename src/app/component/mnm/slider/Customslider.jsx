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
    autoplay:true,
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

  const cards = Array.from({ length: 6 }, (_, index) => ({
    margin: (index + 1) % 2 === 0,
  }));

  return (
    <div className="container">
      <div className=" mx-4 p-4 bg-cards ">
        <Slider className='react-slick-new' {...settings2} ref={sliderRef}>
          <div className={`text-white p-3 bg-cards-inner`}>
            <img
              src="auto.jpeg "
              // className=" "
                height={250}
                width={200}
              alt="Automotive sector brand marketing, Automotive sector brand Developement, Automotive sector brand advertising, Automotive sector brand seed funding, Automotive sector B2B Events, Automotive sector B2C Events, Automotive sector brand management, Automotive sector brand promotion"
            />
            <div className="d-flex">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                Automotive
                </h6>
                <div>
                  {/* <h6 className="m-0 fw-bold">Hack Summit,SF</h6> */}
                  <p className=" verySmallFont ">
                  We create marketing strategies that drive awareness and sales for automotive brands, focusing on both traditional and digital marketing approaches.
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
          <div className={`text-white p-3 bg-cards-inner`}>
            <img
              src="real.jpeg"
              className=" "
              //   //height={250}
              //   width={200}
              alt="Real Estate sector brand marketing,Real Estate sector brand advertising, Real Estate sector brand seed funding, Real Estate sector B2B Events, Real Estate sector B2C Events, Real Estate sector brand management, Real Estate sector brand promotion"
            />
            <div className="d-flex">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                Real Estate
                </h6>
                <div>
                  {/* <h6 className="m-0 fw-bold">Hack Summit,SF</h6> */}
                  <p className=" verySmallFont ">
                  Our real estate marketing strategies use the latest tools to connect potential buyers with properties, resulting in higher conversions and faster sales cycles.
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
          <div className={`text-white  p-3 zoom-container bg-cards-inner`}>
            <img
              src="event.jpeg"
              className=" "
            
              alt="Event Management sector brand marketing, Event Management sector brand advertising, Event Management sector brand seed funding, Event Management sector B2B Events, Event Management sector B2C Events, Event Management sector brand management, Event Management sector brand promotion"
            />
            <div className="d-flex justify-content-between 5">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                Event Management
                </h6>
                <div>
                  {/* <h6 className="m-0 fw-bold">Hack Summit,SF</h6> */}
                  <p className=" verySmallFont ">
                  From corporate events to large-scale consumer experiences, we craft memorable moments that resonate with attendees, ensuring a lasting impression.
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
          <div className={`text-white  p-3 zoom-container bg-cards-inner`}>
            <img
              src="jewel.webp"
              className=" "
              
              alt="Jewellery sector brand marketing, Jewellery sector brand advertising, Jewellery sector brand seed funding, Jewellery sector B2B Events, Jewellery sector B2C Events, Jewellery sector brand management, Jewellery sector brand promotion, Jewellery sector brand Developement, Jewellery sector brand advertising, Jewellery sector brand seed funding, Jewellery sector B2B Events, Jewellery sector B2C Events, Jewellery sector brand management, Jewellery sector brand promotion"
            />
            <div className="d-flex justify-content-between 5">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                Jewellery
                </h6>
                <div>
                  <p className=" verySmallFont ">
                  Our expertise in jewellery marketing ensures an impactful presence, driving brand recognition and engagement with affluent clientele.
                  </p>
                  
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={`text-white  p-3 zoom-container bg-cards-inner`}>
            <img
              src="jewel.jpeg"
              className=""
              //height={250}
              //width={240}
              alt="Gems sector brand marketing, Gems sector brand advertising, Gems sector brand seed funding, Gems sector B2B Events, Gems sector B2C Events, Gems sector brand management, Gems sector brand promotion, Gems sector brand Developement, Gems sector brand advertising, Gems sector brand seed funding, Gems sector B2B Events, Gems sector B2C Events, Gems sector brand management, Gems sector brand promotion"
            />
            <div className="d-flex justify-content-between 5">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                Gems
                </h6>
                <div>
                  {/* <h6 className="m-0 fw-bold">Hack Summit,SF</h6> */}
                  <p className=" verySmallFont ">
                  We provide bespoke solutions for the gemstone industry, leveraging creativity and innovation to elevate brand positioning and visibility.
                  </p>
                 
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={`text-white  p-3 zoom-container bg-cards-inner`}>
            <img
              src="phrma.webp"
              className=" "
              //height={250}
              //width={240}
              alt="..."
            />
            <div className="d-flex justify-content-between 5">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold ">
                Pharma OTC 
                </h6>
                <div>
                  {/* <h6 className="m-0 fw-bold">Hack Summit,SF</h6> */}
                  <p className=" verySmallFont ">
                  Our tailored marketing and event management services promote OTC products with a focus on customer trust and long-term growth.
                  </p>
                 
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={`text-white  p-3 zoom-container bg-cards-inner`}>
            <img
              src="fmcg.jpeg "
              className=" "
              //height={250}
              //width={240}
              alt="..."
            />
            <div className="d-flex justify-content-between 5">
              <div className="text-white verySmallFont">
                <h6 className="m-0 my-3 gradient-text fw-bold "> FMCG </h6>
                <div>
                  {/* <h6 className="m-0 fw-bold">Hack Summit,SF</h6> */}
                  <p className=" verySmallFont ">
                  We help FMCG brands establish dominance through strategic campaigns that increase market penetration and brand loyalty.
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
                alt="previous"
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
                alt="next"
              ></img>
            </div>
          </div>
          <div className="d-flex ml-4  px-4 text-white">(1/7)</div>
        </div>
      </div>
    </div>
  );
};

export default Customslider;
