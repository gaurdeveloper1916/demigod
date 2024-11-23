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
      slider.append(items[0]);
    } else if (direction === "prev") {
      slider.prepend(items[items.length - 1]);
    }
  };

  return (
    <div className="container-fluid p-0">
      <main className="main ">
        <ul className="slider" ref={sliderRef}>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('./images/landing-page-images/Punjabideligatescopy4.webp')",
            }}
          >
            <div className="content">
              <h2 className="title">"Lossless Youths"</h2>
              <p className="description col-lg-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                fuga voluptatum, iure corporis inventore praesentium nisi. Id
                laboriosam ipsam enim.
              </p>
              <button className="border border-none smallfont m-0 px-4 py-2 ">Buy now</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage: "url('./images/landing-page-images/STANDUP.webp')",
            }}
          >
            <div className="content">
              <h2 className="title">"Estrange Bond"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                fuga voluptatum, iure corporis inventore praesentium nisi. Id
                laboriosam ipsam enim.
              </p>
              <button className="border border-none smallfont m-0 px-4 py-2 ">Buy now</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('./images/landing-page-images/tourdewhiskeycopy.webp')",
            }}
          >
            <div className="content">
              <h2 className="title">"The Gate Keeper"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                fuga voluptatum, iure corporis inventore praesentium nisi. Id
                laboriosam ipsam enim.
              </p>
              <button className="border border-none smallfont m-0 px-4 py-2  ">Buy now</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('./images/landing-page-images/USAcopy.webp')",
            }}
          >
            <div className="content">
              <h2 className="title">"Last Trace Of Us"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                fuga voluptatum, iure corporis inventore praesentium nisi. Id
                laboriosam ipsam enim.
              </p>
              <button className="border border-none smallfont m-0 px-4 py-2 ">Buy now</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('./images/landing-page-images/Punjabideligatescopy4.webp')",
            }}
          >
            <div className="content">
              <h2 className="title">"Urban Decay"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                fuga voluptatum, iure corporis inventore praesentium nisi. Id
                laboriosam ipsam enim.
              </p>
              <button className="border border-none smallfont m-0 px-4 py-2 ">Buy now</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('./images/landing-page-images/STANDUP.webp')",
            }}
          >
            <div className="content">
              <h2 className="title">"The Migration"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                fuga voluptatum, iure corporis inventore praesentium nisi. Id
                laboriosam ipsam enim.
              </p>
              <button className=" border border-0">Buy now</button>
            </div>
          </li>
        </ul>
        <nav className="nav ">
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
