"use client";
import React, { useRef } from "react";
import "./slider.css";
import { IonIcon } from "@ionic/react";
import { arrowBackOutline, arrowForwardOutline } from "ionicons/icons";

const Slider = () => {
  const sliderRef = useRef(null);

  const activate = (direction) => {
    const slider = sliderRef.current;
    const items = slider.querySelectorAll(".item");

    if (direction === "next") {
      slider.appendChild(items[0]); // Move the first item to the end
    } else if (direction === "prev") {
      slider.insertBefore(items[items.length - 1], items[0]); // Move the last item to the beginning
    }
  };

  const handleImageClick = (index) => {
    const slider = sliderRef.current;
    const items = Array.from(slider.querySelectorAll(".item"));

    if (index === 0) {
      activate("prev"); // Move backward when clicking the first visible item
    } else if (index === items.length - 1) {
      activate("next"); // Move forward when clicking the last visible item
    }
  };

  return (
    <div className="container-fluid p-0">
      <main className="main">
        <ul className="slider" ref={sliderRef}>
          {[
            {
              title: '"Lossless Youths"',
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
              backgroundImage:
                "./images/landing-page-images/Punjabideligatescopy4.webp",
            },
            {
              title: '"Estrange Bond"',
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
              backgroundImage: "./images/landing-page-images/STANDUP.webp",
            },
            {
              title: '"The Gate Keeper"',
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
              backgroundImage:
                "./images/landing-page-images/tourdewhiskeycopy.webp",
            },
            {
              title: '"Last Trace Of Us"',
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
              backgroundImage: "./images/landing-page-images/USAcopy.webp",
            },
            {
              title: '"Urban Decay"',
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
              backgroundImage:
                "./images/landing-page-images/Punjabideligatescopy4.webp",
            },
            {
              title: '"The Migration"',
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
              backgroundImage: "./images/landing-page-images/STANDUP.webp",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="item cursor-pointer"
              style={{ backgroundImage: `url('${item.backgroundImage}')` }}
              onClick={() => handleImageClick(index)}
            >
              <div className="content">
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.description}</p>
                <button className="border border-none smallfont m-0 px-4 py-2">
                  Buy now
                </button>
              </div>
            </li>
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
  );
};

export default Slider;
