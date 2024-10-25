"use client";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import './landing.css';

const Curveslider = () => {
  const swiperRef = useRef(null);
  
  useEffect(() => {
    swiperRef.current = new Swiper(".swiper", {
      loop: true,
      spaceBetween: 20,
      centeredSlides: true,
      breakpoints: {
        640: {
          slidesPerView: 1, // 1 slide on mobile
        },
        768: {
          slidesPerView: 2, // 2 slides on tablets
        },
        1024: {
          slidesPerView: 3, // 3 slides on desktop
        },
      },
    });
  }, []);
  
  return (
    <div className="swiper  my-5">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <img
            src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <img
            src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1451&q=80"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <img
            src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1467&q=80"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <img
            src="https://images.unsplash.com/photo-1444065707204-12decac917e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Curveslider;
