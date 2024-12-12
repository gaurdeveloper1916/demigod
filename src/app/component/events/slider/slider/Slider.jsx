'use client'
import React, { useRef, useState } from "react";
import "./slider1.css";
import { IonIcon } from "@ionic/react";
import { arrowBackOutline, arrowForwardOutline } from "ionicons/icons";
import TypeWriterText from "@/app/component/constant/TypeWriterText";

const Slider = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "./images/landing-page-images/section1/55.jpg"
  );
  const [currentIndex, setCurrentIndex] = useState(1); 
  const sliderRef = useRef(null);

  const activate = (direction) => {
    const items = sliderRef.current.querySelectorAll(".item");
    let newIndex = currentIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % items.length;
    } else if (direction === "prev") {
      newIndex = (currentIndex - 1 + items.length) % items.length;
    }

    setCurrentIndex(newIndex);
    setBackgroundImage(sliderItems[newIndex].backgroundImage);
  };

  const sliderItems = [
    {
      id: 0,
      title: '"Lossless Youths"',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      backgroundImage:
        "./images/landing-page-images/section1/22.jpg",
    },
    {
      id: 1,
      title: '"DFC"',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      backgroundImage: "./images/landing-page-images/section1/44.jpg",
    },
    {
      id: 2,
      title: '"Entrepreneursship Forum"',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      backgroundImage: "./images/landing-page-images/section1/55.jpg",
    },
    {
      id: 3,
      title: '"Punjabi deligates"',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
        backgroundImage: "./images/landing-page-images/section1/22.jpg",    },
    {
      id: 4,
      title: '"Lossless Youths"',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
        backgroundImage: "./images/landing-page-images/section1/44.jpg",

    },
    {
      id: 5,
      title: '"DFC"',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      backgroundImage: "./images/landing-page-images/section1/DFC.webp",
    },
  ];

  const handleImageClick = (index) => {
    console.log(index)
    setCurrentIndex(index);
    setBackgroundImage(sliderItems[index].backgroundImage);
  };

  return (
    <div className="">
      <div
        className="relative h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          objectFit: "cover",
          backgroundSize: "cover",
          // backgroundPosition: "center center",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <div
          className={`overlay-content  ${currentIndex !== null ? "show" : ""}`}
        >
          <h2 className="title text-black"><TypeWriterText text={sliderItems[currentIndex].title} speed={20}/></h2>
          <p className="description text-black">{sliderItems[currentIndex].description}</p>
        </div>
        <div className="absolute top-10 bottom-0">
          <main className="main">
            <ul className="slider" ref={sliderRef}>
              {sliderItems.map((item, index) => (
                <li
                  key={item.id}
                  className={`item ${index === currentIndex ? "active" : ""}`}
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                    objectFit: "cover",
                  }}
                  onClick={() => handleImageClick(index)} // Pass index on click
                ></li>
              ))}
            </ul>
            <nav className="nav">
              <IonIcon
                className="btn prev"
                icon={arrowBackOutline}
                onClick={() => activate("prev")}
              />
              <IonIcon
                className="btn next"
                icon={arrowForwardOutline}
                onClick={() => activate("next")}
              />
            </nav>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Slider;