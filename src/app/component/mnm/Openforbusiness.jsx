"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { GiStarShuriken } from "react-icons/gi";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function Openforbusiness() {
  const swiperRef = useRef(null);

  const initialImages = [
    {
      img: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?cs=srgb&dl=pexels-cottonbro-3171837.jpg&fm=jpg",
      name: "Image 1",
      desc: "Description for Image 1",
    },
    {
      img: "https://t4.ftcdn.net/jpg/01/20/28/25/360_F_120282530_gMCruc8XX2mwf5YtODLV2O1TGHzu4CAb.jpg",
      name: "Image 2",
      desc: "Description for Image 2",
    },
    {
      img: "https://img.freepik.com/free-photo/people-celebrating-party_53876-14410.jpg",
      name: "Image 3",
      desc: "Description for Image 3",
    },
    {
      img: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg",
      name: "Image 4",
      desc: "Description for Image 4",
    },
    {
      img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFydHl8ZW58MHx8MHx8fDA%3D",
      name: "Image 6",
      desc: "Description for Image 6",
    },
    {
      img: "https://img.freepik.com/free-photo/people-celebrating-party_53876-14410.jpg",
      name: "Image 7",
      desc: "Description for Image 7",
    },
    {
      img: "https://img.freepik.com/free-photo/people-celebrating-party_53876-14410.jpg",
      name: "Image 8",
      desc: "Description for Image 8",
    },
  ];

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="container mt-5">
      <p className="h1 text-white ">
            Open
            <span className="gradient-text fw-bold"> -For </span>
            Business                  <IoChevronForwardOutline size={35} color="white" className="fw-bold" />

          </p>
      <div className="slider-container">
        <Swiper
          loop={true}
          ref={swiperRef}
          effect="flip"
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          {initialImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="d-flex justify-content-center align-items-center p-2">
                <div className=" position-relative" data-aos="flip-left" data-aos-duration="1200">
                  <img
                    className="img-fluid rounded"
                    src={image.img}
                    alt={image.name}
                  />
                  <div className="bg-whitesh px-3 py-5 mt-2 ">
                    <h6  className="fw-bold gradient-text ">26.08.24</h6>
                    <p className="m-0 gradient-text">Hack Summit , SF</p>
                    <p className="m-0 text-white  verySmallFont">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure eos corrupti praesentium impedit fugit, temporibus nobis dolore, corporis unde odio et sint architecto in, ut nam soluta optio? Ipsa, recusandae!</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      
        <div  className="d-flex  flex-column">
          <div className="d-flex  gap-2 mt-4">
            <div
              className=" rounded-full  p-2"
              onClick={handlePrev}
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
              onClick={handleNext}
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
          <div className="d-flex text-white px-4">(1/5)</div>
        </div>
      </div>
    </div>
  );
}
