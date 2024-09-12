"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import "../wedding.css";

const WeddingSlider = () => {
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  let sliderRef3 = useRef(null);
  let sliderRef4 = useRef(null);
  // let sliderRef5 = useRef(null);

  const next = () => {
    sliderRef1.current.slickNext();
    sliderRef2.current.slickNext();
    sliderRef3.current.slickNext();
    sliderRef4.current.slickNext();
    // sliderRef5.current.slickNext();
  };

  const previous = () => {
    sliderRef1.current.slickPrev();
    sliderRef2.current.slickPrev();
    sliderRef3.current.slickPrev();
    sliderRef4.current.slickPrev();
    // sliderRef5.current.slickPrev();
  };

  const settings = {
    infinite: true,
    centerPadding: "100px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <div className="mt-5 d-flex flex-lg-row flex-column">
        <div className="col-lg-4 col-11 d-flex flex-column justify-content-between">
          <div>
            <Slider {...settings} ref={sliderRef4}>
              <div className="text-white">
                <p className="text-venus m-0">VENUES</p>
                <p className="dream_text">for your dream wedding...</p>

                <p className="text-white width-75">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  odio veniam magni quisquam cupiditate similique autem
                  assumenda! Sed optio eos ad dolor, magni nemo accusamus. Natus
                  accusantium cum rem amet!
                </p>
              </div>

              <div className="text-white">
                <p className="text-venus m-0">TESTING</p>
                <p className="dream_text">for your dream wedding...</p>

                <p className="text-white width-75">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  odio veniam magni quisquam cupiditate similique autem
                  assumenda! Sed optio eos ad dolor, magni nemo accusamus. Natus
                  accusantium cum rem amet!
                </p>
              </div>

              <div className="text-white">
                <p className="text-venus m-0">MARS</p>
                <p className="dream_text">for your dream wedding...</p>

                <p className="text-white width-75">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  odio veniam magni quisquam cupiditate similique autem
                  assumenda! Sed optio eos ad dolor, magni nemo accusamus. Natus
                  accusantium cum rem amet!
                </p>
              </div>
            </Slider>
          </div>
          <div style={{ textAlign: "left" }} className="d-flex flex-column mb-4">
            <div className="d-flex justify-content-end gap-lg-5 gap-md-5 gap-4 mt-4 mx-lg-5">
              <div
                className="rounded-full p-2 d-flex justify-content-center align-items-center"
                onClick={previous}
                style={{
                  border: "2px solid white",
                  color: "white",
                  cursor: "pointer",
                  borderRadius: "50px",
                  width: "50px",
                  height: "50px",
                }}
              >
                <GrPrevious size={20} />
              </div>

              <div
                className="rounded-full p-2 d-flex justify-content-center align-items-center"
                onClick={next}
                style={{
                  border: "2px solid white",
                  color: "white",
                  cursor: "pointer",
                  borderRadius: "50px",
                  width: "50px",
                  height: "50px",
                }}
              >
                <GrNext size={20} />
              </div>
            </div>
            {/* <div className="d-flex justify-content-end text-white px-4">
              (1/5)
            </div> */}
          </div>
        </div>
        <div className="d-flex col-lg-8 gap-3 col-12 overflow-hidden">
          <div className="col-lg-4 col-6">
            <Slider {...settings} ref={sliderRef1}>
              <div>
                <img
                  alt="image"
                  src="/images/wedgallery03.png"
                  className="slider_img"
                  style={{ height: "600px" }}
                />
              </div>
              <div>
                <img
                  alt="image"
                  src="/images/wedgallery11.png"
                  className="slider_img"
                />
              </div>
            </Slider>
          </div>
          <div className="col-lg-4 col-6">
            <Slider {...settings} ref={sliderRef2}>
              <div>
                <img
                  alt="image"
                  src="/images/wedgallery02.png"
                  className="slider_img"
                />
              </div>
              <div>
                <img
                  alt="image"
                  src="/images/wedgallery01.png"
                  className="slider_img"
                />
              </div>
            </Slider>
          </div>
          <div className="col-lg-4 col-6">
            <Slider {...settings} ref={sliderRef3}>
              <div>
                <img
                  alt="image"
                  src="/images/wedgallery03.png"
                  className="slider_img"
                />
              </div>
              <div>
                <img
                  alt="image"
                  src="/images/wedgallery11.png"
                  className="slider_img"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingSlider;
