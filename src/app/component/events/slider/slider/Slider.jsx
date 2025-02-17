"use client";
import React, { useRef } from "react";
import "./slider1.css";
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
                "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')",
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
              backgroundImage: "url('https://i.redd.it/tc0aqpv92pn21.jpg')",
            }}
          >
            <video
              autoPlay
              muted
              loop
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                objectFit: "cover",
              }}
            >
              <source src="/1.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <div className="content">
              <h2 className="title">"Estrange Bond"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                fuga voluptatum, iure corporis inventore praesentium nisi. Id
                laboriosam ipsam enim.
              </p>
              <button className="border border-none smallfont m-0 px-4 py-2 ">Buy now</button>
            </div> */}
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://images7.alphacoders.com/878/878663.jpg')",
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
                "url('https://images7.alphacoders.com/878/878663.jpg')",
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
                "url('https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg')",
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
                "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')",
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
