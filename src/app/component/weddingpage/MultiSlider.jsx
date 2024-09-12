"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import "./wedding.css";

const MultiSlider = () => {
  let sliderRef = useRef(null);
  let sliderRef2 = useRef(null);
  let sliderRef3 = useRef(null);
  let sliderRef4 = useRef(null);


  const next = () => {
    sliderRef.current.slickNext();
    sliderRef2.current.slickNext();

    sliderRef3.current.slickNext();
    sliderRef4.current.slickNext();

  };
  const previous = () => {
    sliderRef.current.slickPrev();
    sliderRef2.current.slickPrev();

    sliderRef3.current.slickPrev();
    sliderRef4.current.slickPrev();


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
      <div className="mt-5 d-flex flex-lg-row flex-column" >
        <div className="d-flex col-lg-8 col-12  overflow-hidden"> 

        
        <div className="col-lg-6 col-6  ">
          <Slider {...settings} ref={sliderRef} >
            <div>
              <img
                alt="image"
                src="/images/wedgallery03.png"
                className="img-fluid object-contain"
              />
            </div>
            <div>
              <img
                alt="image"
                src="/images/wedgallery11.png"
                className="img-fluid object-contain"
              />
            </div>
          </Slider>
        </div>
        <div className="col-lg-6  col-6 ">
          <div className="row">
            <Slider {...settings} ref={sliderRef2}>
              <div>
                <img
                  alt="image"
                  src="/images/wedgallery02.png "
                  className="img-fluid object-contain w-100"
                />
              </div>
              <div>
                <img
                  alt="image"
                  src="/images/wedgallery01.png"
                  className="img-fluid object-contain w-100"
                />
              </div>
            </Slider>
          </div>
          <div className="row">
            <Slider {...settings} ref={sliderRef3}>
              <div>
                <img
                  alt="image"
                  src="/images/wedgallery02.png"
                  className="img-fluid object-contain w-100"
                />
              </div>
              <div>
                <img
                  alt="image"
                  src="/images/wedgallery01.png"
                  className="img-fluid object-contain w-100"
                />
              </div>
            </Slider>
          </div>
        </div>
        </div>
        <div className="col-lg-3 col-11  d-flex  flex-column justify-content-between ">
          <div>
            <Slider {...settings} ref={sliderRef4} >
                <div>
                <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odio
              veniam magni quisquam cupiditate similique autem assumenda! Sed
              optio eos ad dolor, magni nemo accusamus. Natus accusantium cum
              rem amet!
            </p>

                </div>
                <div>
                <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odio
              veniam magni quisquam cupiditate similique autem assumenda! Sed
              optio eos ad dolor, magni nemo accusamus. Natus accusantium cum
              rem amet!
            </p>

                </div>

            </Slider>
           
           
          </div>
          
          
           <div style={{ textAlign: "left" }} className="d-flex  flex-column">
          <div className="d-flex justify-content-end gap-2 mt-4">
            <div
              className=" rounded-full  p-2"
              onClick={previous}
              style={{ color: "white" }}
            >
              {/* <FiChevronLeft className="stroke-2" size={25} /> */}
              <img
                style={{ transform: "rotate(-180deg)",width:'90px' }}
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
                 style={{ width:'90px' }}
                className="img-fluid arrow-img mx-lg-4"
                src="/images/arrow.png"
              ></img>
            </div>
          </div>
          <div className="d-flex justify-content-end text-white px-4">(1/5)</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MultiSlider;
