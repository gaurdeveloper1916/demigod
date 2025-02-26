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
      img: "ser.webp",
      name: "Choose Your Service",
      desc: "Select from brand development, marketing, print & electronic media, or third-party manufacturing tailored to your needs.",
      alt: "Service selection illustration showing different business services"
    },
    {
      img: "con.webp",
      name: "Connect With Us",
      desc: "Reach out to Demigod House via our website, email, or phone. Share your vision, and let us guide you forward.",
      alt: "Connection and communication illustration"
    },
    {
      img: "prop.webp",
      name: "Proposal Evaluation",
      desc: "We'll review your proposal, and if it aligns with our expertise, we'll contact you to discuss next steps.",
      alt: "Proposal evaluation and review process illustration"
    },
    {
      img: "pers.webp",
      name: " In-Person Meeting",
      desc: "Meet with us to finalize registration, legal documentation, and discuss seed funding opportunities (if applicable).",
      alt: "In-person business meeting illustration"
    },
    // {
    //   img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFydHl8ZW58MHx8MHx8fDA%3D",
    //   name: "Image 6",
    //   desc: "Description for Image 6",
    // },
    // {
    //   img: "https://img.freepik.com/free-photo/people-celebrating-party_53876-14410.jpg",
    //   name: "Image 7",
    //   desc: "Description for Image 7",
    // },
    // {
    //   img: "https://img.freepik.com/free-photo/people-celebrating-party_53876-14410.jpg",
    //   name: "Image 8",
    //   desc: "Description for Image 8",
    // },
    // {
    //   img: "https://img.freepik.com/free-photo/people-celebrating-party_53876-14410.jpg",
    //   name: "Image 756",
    //   desc: "Description for Image 8",
    // },
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
           <h5><b> <span className="gradient-text fs-5">Demigod House</span>: Your Strategic Partner in Event Management, Media, and Marketing
          </b></h5></p>
          <p className="text-white">
          At Demigod House, we make collaboration seamless and impactful. Start by choosing from our tailored services, including brand development, marketing, print and electronic media, or third-party manufacturing. Connect with us via our website, email, or phone to share your vision and let our experts guide you. Once you submit a proposal, we’ll evaluate it to ensure alignment with our expertise and contact you to discuss next steps. For finalization, join us for an in-person meeting to complete registration, legal documentation, and explore potential seed funding opportunities. Together, we turn ideas into success stories.
          </p>
        </div>
      </div>

      <div className="col-lg-8 col-12 col-md-8">
        <div className="container mt-5">
          <p className="h1 text-white ">
            Participation 
            <span className="gradient-text fw-bold"> For </span>
            Business  <IoChevronForwardOutline size={35} color="white" className="fw-bold" />

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
                        style={{height:"200px"}}
                        className="img-fluid rounded w-100"
                        src={image.img}
                        alt={image.name}
                      />
                      <div className="bg-whitesh custom-height px-3 py-5 mt-2 ">
                        {/* <h6 className="fw-bold gradient-text ">26.08.24</h6> */}
                        <p className="m-0 gradient-text">{image.name}</p>
                        <p className="m-0 text-white  verySmallFont">{image.desc}</p>
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
