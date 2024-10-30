"use client"
import React, { useEffect, useState } from "react";
import Header from "../common/header/Header";
import './index.css'
import Link from "next/link";

// Data
const initialImages = [
  {
    img: "https://img.freepik.com/free-photo/medium-shot-kid-cheating-school-test_23-2150104930.jpg?size=626&ext=jpg",
    name: "Image 1",
    desc: "Description for Image 1",
  },
  {
    img: "https://t3.ftcdn.net/jpg/06/99/52/94/240_F_699529470_u7ZaG6otV8Cnn5WwHFc8YowT9IRXhFr8.jpg",
    name: "Image 2",
    desc: "Description for Image 2",
  },
  {
    img: "https://img.freepik.com/free-photo/horror-scene-with-eerie-classroom_23-2150975108.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=sph",
    name: "Image 3",
    desc: "Description for Image 3",
  },
  {
    img: "https://img.freepik.com/free-photo/foggy-autumn-night_181624-10942.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=ais",
    name: "Image 4",
    desc: "Description for Image 4",
  },
  {
    img: "https://img.freepik.com/free-photo/dark-sunset_1361-177.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=ais",
    name: "Image 5",
    desc: "Description for Image 5",
  },
  {
    img: "https://img.freepik.com/free-photo/greyscale-shot-bare-tree-park-covered-with-fog_181624-17189.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=ais",
    name: "Image 6",
    desc: "Description for Image 6",
  },
];

// Carousel
const Slider = () => {
  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        moveItems();
      }, 6000);

      return () => clearInterval(interval);
    }, [currentIndex]);
    const [isSticky, setIsSticky] = useState(false);
  const moveItems = () => {
    const nextIndex = (currentIndex + 1) % images.length;

    setCurrentIndex(nextIndex);
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  const getCircularIndex = (index, length) => {
    return (index + length) % length;
  };
  return (
    <>
      <div className="container-fluid p-0 position-realtive ">
     
        <div
          className="d-flex gap-4 justify-space-between flex-lg-row flex-column event-container"
          style={{
            backgroundImage: `url(${images[currentIndex].img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transition: "background-image 0.5s ease-in-out",
            height:"90vh",
          }}
        >
          <div className="col-lg-4 p-3 mt-5">
            <p className="text-white mt-lg-5">2023 | 1hour 40 Minutes | Horror</p>
            <p className="text-white smallfont">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              harum reprehenderit facilis unde voluptatem quaerat nihil magnam.
              Nemo eos labore, error autem at quam ad, impedit exercitationem
              aut nostrum enim?
            </p>
            <div className="d-flex gap-3">
              <Link href="/landingpage">
                <button className="button-all px-4 py-2  text-white fw-bold" type="button ">
                  Watch
                </button>
              </Link>
              <Link href="/landingpage">
                <button className="button-all px-4 py-2  text-white fw-bold" type="button ">
                  My List
                </button>
              </Link>
             
            </div>
          </div>
          <div className="col-lg-7 mt-lg-5">
            <div className="carousel-container mt-5">
              <div className="d-flex flex-column">
                <div className="carousel-items">
                  {/* Render 5 items on the screen */}
                  {Array(5)
                    .fill()
                    .map((_, index) => {
                      const imageItem =
                        images[
                          getCircularIndex(
                            currentIndex + index - 2,
                            images.length
                          )
                        ];
                      return (
                        <div
                      
                          key={index}
                          className={`${index === 2 ? "center" : "opacity"} ${
                            (index === 0 || index === 4) &&
                            "end d-none d-md-block d-lg-block"
                          }
                        ${
                          (index === 1 || index === 3) &&
                          "d-none d-md-block d-lg-block"
                        }`}
                          onClick={() =>
                            handleItemClick(
                              getCircularIndex(
                                currentIndex + index - 2,
                                images.length
                              )
                            )
                          }
                        >
                          <img className="h-50 img-home-slider" src={imageItem.img} alt="item" />
                        </div>
                      );
                    })}
                </div>
                
              </div>
            </div>
          </div>
        </div>

     </div>
     
      
    </>
  );
};
export default Slider;
