'use client'

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
function BackSlider() {
  const images = [
    "/images/networking.png",
    "/images/wedding1.png",
    "/images/wedding4.png",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(".background", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        },
      });
      gsap.to(".background", { opacity: 1, duration: 0.5, delay: 0.5 });
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <div className="col-lg-10">
        <div
          className="background d-flex flex-column justify-content-center align-items-center text-white "
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "background-image 0.5s ease-in-out", // Optional CSS transition
          }}
        >
          <div className="col-lg-10 p-lg-0 p-md-4 p-4">
            <div className="col-lg-7 ">
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                pariatur. Nemo soluta est adipisci{" "}
              </h5>
              <p>21.06.2024</p>
            </div>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              laudantium, quam odit odio ullam fugiat eos a perferendis
              temporibus sed earum distinctio, vitae optio. Temporibus esse sunt
              alias nesciunt! Sequi?
            </p>
            <button className="border border-0 verySmallFont rounded px-4 py-1 text-white">
              Register
            </button>
          </div>


        </div>
      </div>
    </div>
  );
}

export default BackSlider;
