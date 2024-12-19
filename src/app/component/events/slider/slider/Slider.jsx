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
      title: '"Enterprenuership Forum"',
      description:
        "Enterprenuership 111 Forum happening across G20 Countries with upto $,100,00,0000/- seed & private equity funding for Start-up's,SME's & MSME ",
      backgroundImage:
        "./images/landing-page-images/section1/22.jpg",
    },
    {
      id: 1,
      title: '"DFC"',
      description:
        "DemiGod Fight Club, a fighting tournament happening in world capital's rewarding the most toughfest and hardcore Man-machine with championship Prize Money of $1,00,000/- !",
      backgroundImage: "./images/landing-page-images/section1/44.jpg",
    },
    {
      id: 2,
      title: '"D Aero Expo"',
      description:
        " DemiGod Aero Expo, an event attracting global airlines manufacturer for the Air Show & Airplane exhibition one of it's kind with Global Dignitaries participating for the Modern Aero tech ! ",
      backgroundImage: "./images/landing-page-images/section1/55.jpg",
    },
    {
      id: 3,
      title: '" Car-O-Bar"',
      description:
        "Car-O-Bar an event all about partying desi style in the most customised automobile of town. Party Fast & furious movies theme party with rewards for the most hybrid & customised automobiles",
        backgroundImage: "./images/landing-page-images/section1/22.jpg",    },
    {
      id: 4,
      title: '"Enterprenuership Forum"',
      description:
        "Enterprenuership 111 Forum happening across G20 Countries with upto $,100,00,0000/- seed & private equity funding for Start-up's,SME's & MSME",
        backgroundImage: "./images/landing-page-images/section1/44.jpg",

    },
    {
      id: 5,
      title: '"DFC"',
      description:
        "DemiGod Fight Club, a fighting tournament happening in world capital's rewarding the most toughfest and hardcore Man-machine with championship Prize Money of $1,00,000/- !",
      backgroundImage: "./images/landing-page-images/section1/DFC.webp",
    },
  ];

  const handleImageClick = (index) => {
    console.log(index)
    setCurrentIndex(index);
    setBackgroundImage(sliderItems[index].backgroundImage);
  };

  return (
    <div className="d-lg-block d-md-block d-none">
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
                  onClick={() => handleImageClick(index)} 
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