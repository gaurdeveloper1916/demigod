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

export default function Partnershipslider() {
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
    <div className="container p-3">
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
              // spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              // spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              // spaceBetween: 30,
            },
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          {initialImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="d-flex justify-content-center align-items-center p-2">
                  <img
                    className="img-fluid rounded"
                    src={image.img}
                    alt={image.name}
                  />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div  className="d-flex justify-content-between  px-lg-5 px-2 mt-3">
          <div className="rounded-full cursor" onClick={handlePrev}>
            <p className="fw-bold text-white">PREVIOUS</p>
          </div>
          <div
            className="rounded-full cursor"
            onClick={handleNext}
           
          >
            <p className="fw-bold text-white ">NEXT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
