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
      img: "key_aspect.jpeg",
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
    <div className="d-flex flex-lg-row flex-md-row flex-column p-3">
      <div className="col-lg-4 col-12 col-md-4 d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column">
          <h5 className="text-white fw-bold">
            <span className="gradient-text fs-5">Demigod House</span>: Your Strategic Partner in Event Management, Media, and Marketing
          </h5>
          <p className="text-white">
            At Demigod House, we make collaboration seamless and impactful. Start by choosing from our tailored services, including brand development, marketing, print and electronic media, or third-party manufacturing. Connect with us via our website, email, or phone to share your vision and let our experts guide you. Once you submit a proposal, we’ll evaluate it to ensure alignment with our expertise and contact you to discuss next steps. For finalization, join us for an in-person meeting to complete registration, legal documentation, and explore potential seed funding opportunities. Together, we turn ideas into success stories.
          </p>
        </div>
      </div>

      <div className="col-lg-8 col-12 col-md-8">
        <div className="container mt-5">
          <p className="fs-3 text-white">
            Participation
            <span className="gradient-text fw-bold"> For </span>
            Business <IoChevronForwardOutline size={35} color="white" className="fw-bold" />
          </p>
          <div className="slider-container">
            <Swiper
              loop={true}
              ref={swiperRef}
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              modules={[FreeMode, Pagination, Navigation]}
              className="mySwiper"
            >
              {initialImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="d-flex justify-content-center align-items-center p-2 overflow-hidden">
                    <div className="text-center" data-aos="flip-right" data-aos-duration="1200">
                      <img
                        style={{ height: "200px", width: "100%", objectFit: "cover" }}
                        className="img-fluid rounded"
                        src={image.img}
                        alt={image.name}
                      />
                      <div className="bg-whitesh custom-height px-3 py-5 mt-2 text-white">
                        <p className="m-0 gradient-text fw-bold">{image.name}</p>
                        <p className="m-0">{image.desc}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="d-flex gap-2 mt-4">
              <div className="rounded-full p-2" onClick={handlePrev}>
                <FiChevronLeft className="stroke-2" color="white" size={30} />
              </div>
              <div className="rounded-full p-2" onClick={handleNext}>
                <FiChevronRight className="stroke-2" color="white" size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
