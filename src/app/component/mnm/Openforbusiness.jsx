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
    <div className="d-flex flex-lg-row flex-md-row flex-column p-4">

      <div className="col-lg-4 col-12 col-md-4 d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column ">
          <p className="text-white">
            <span className="gradient-text fs-5">Demigod House</span>: Your Strategic Partner in Event Management, Media, and Marketing
          </p>
          <p className="text-white">
            At Demigod House, we provide a time-tested, structured, and results-driven sales, advertising, and marketing execution plan for brands across diverse sectors. Our approach ensures epic profitability, while maintaining effectiveness and efficiency for every client. Sectors We Are Pioneering, Practicing & Monopolistically Leading Across Global Markets:
          </p>
        </div>
      </div>

      <div className="col-lg-8 col-12 col-md-8">
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
                  <div className="d-flex justify-content-center align-items-center p-2 overflow-hidden">
                    <div className="" data-aos="flip-right" data-aos-duration="1200">
                      <img
                        className="img-fluid rounded"
                        src={image.img}
                        alt={image.name}
                      />
                      <div className="bg-whitesh px-3 py-5 mt-2 ">
                        <h6 className="fw-bold gradient-text ">26.08.24</h6>
                        <p className="m-0 gradient-text">Hack Summit , SF</p>
                        <p className="m-0 text-white  verySmallFont">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure eos corrupti praesentium impedit fugit, temporibus nobis dolore, corporis unde odio et sint architecto in, ut nam soluta optio? Ipsa, recusandae!</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div style={{ textAlign: "left" }} className="d-flex  gap-2 mt-4">
              <div className="rounded-full p-2" onClick={handlePrev}>
                <FiChevronLeft className="stroke-2" color="white" size={30} />
              </div>
              <div
                className="rounded-full p-2"
                onClick={handleNext}
                style={{ color: "white" }}
              >
                <FiChevronRight className="stroke-2" size={30} />

              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

  );
}
