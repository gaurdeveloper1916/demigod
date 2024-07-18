"use client";
import React from "react";
import Slider from "react-slick";
import "./fridaynight.css";
function FridayNight() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          dots: true,
        },
      },
    ],
  };
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
      img: "https://www.shutterstock.com/image-photo/young-people-dancing-night-club-260nw-351380480.jpg",
      name: "Image 5",
      desc: "Description for Image 5",
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

  return (
    <div className="container mt-5">
      <div className="slider-container ">
        <Slider {...settings}>
          {initialImages.map((item,i) => {
            return (
              <div key={i+1} className="d-flex justify-content-center align-items-center p-2">
                <div className="image-container position-relative">
                  <img
                    className="img-fluid rounded"
                    src={item.img}
                    alt="Your Image"
                  ></img>
                  <div className="overlay">
                    <h1 className="text-san">SAN</h1>
                  </div>
                  <div className="p-3 text-white visible-on-hover">
                    <h6 className="m-0">Chiesa San Biagio</h6>
                    <p className="m-0 text-secondary">OSI in San Biagio</p>
                    <p className="text-secondary">22.06.24 18:00</p>
                    <h6 className="m-0">Peter Whelan</h6>
                    <p className="text-secondary">Direttore</p>
                    <button className="rounded-pill  btn-custom  px-4 py-2  text-white">Acquis biGE</button>
                  </div>
                </div>

              </div>
          

            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default FridayNight;
