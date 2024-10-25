"use client";
import React, { useState, useEffect } from "react";
import anime from "animejs"; // Don't forget to install anime.js
import Hammer from "hammerjs"; // Install HammerJS for gesture support
import "./scroll.css";

const Onscroll = () => {
  const [state, setState] = useState({
    photo: 0,
    animationActive: false,
    completed: false, // Track when the slider is completed
  });


  const images = [
    "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://images.unsplash.com/photo-1495566273813-b897730c1d3d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://images.unsplash.com/photo-1497450526346-652d470c83a9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://images.unsplash.com/photo-1571489730822-0c7332fb10ab?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://images.unsplash.com/photo-1563112605-04054b77e22d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  ];

  const handleSlide = (toSlide, currentSlide) => {
    if (toSlide > currentSlide) {
      var direction = "down";
    }
    if (toSlide < currentSlide) {
      var direction = "up";
    }
  
    if (toSlide === images.length && direction === "down") {
      toSlide = 0; 
      document.body.style.overflow = 'hidden'; 
    }
  
    if (toSlide < 0) {
      toSlide = 0; 
    }
    if (toSlide >= images.length) {
      toSlide = images.length - 1; 
    }
  
    setState((prev) => ({
      ...prev,
      animationActive: true,
      photo: toSlide,
    }));
  
    const ele = document.querySelector(`.image[data-key="${currentSlide}"]`);
    const eleNext = document.querySelector(`.image[data-key="${toSlide}"]`);
  
    const inAni = anime({
      targets: eleNext,
      translateY: 0,
      scale: 1,
      opacity: 1,
      duration: 1300,
      easing: "easeOutQuart",
      autoplay: false,
      complete: () => {
        eleNext.classList.add("current");
        setState((prev) => ({ ...prev, animationActive: false }));
      },
    });
  
    inAni.play();
  };
  

  const handleMouseWheel = (e) => {
    const dir = Math.sign(e.deltaY); 
    if (!state.animationActive && !state.completed) {
      handleSlide(state.photo + dir, state.photo);
      if (dir === 1) {
        document.body.style.overflow = "hidden";
      }
    }
  };

  const handleKeyDown = (e) => {
    if (!state.animationActive && !state.completed) {
      let next = state.photo;
      switch (e.keyCode) {
        case 38: // up
          next += 1;
          document.body.style.overflow = "hidden"; // Scrolling within slider
          break;
        case 40: // down
          next -= 1;
          document.body.style.overflow = "hidden"; // Scrolling within slider
          break;
        default:
          return;
      }
      handleSlide(next, state.photo);
    }
  };

  useEffect(() => {
    // Set overflow: hidden on mount
    document.body.style.overflow = "hidden";

    // Remove overflow when slider is completed
    if (state.completed) {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("wheel", handleMouseWheel);
    window.addEventListener("keydown", handleKeyDown);

    const slider = document.querySelector(".slider");
    const hammer = new Hammer(slider);
    hammer.add(new Hammer.Pan({ direction: Hammer.DIRECTION_ALL }));
    hammer.on("panup pandown", (ev) => {
      if (!state.animationActive && !state.completed) {
        const dir = ev.type === "panup" ? -1 : 1;
        handleSlide(state.photo + dir, state.photo);
        document.body.style.overflow = "hidden"; // Lock scrolling on pan
      }
    });

    return () => {
      window.removeEventListener("wheel", handleMouseWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [state]);

  return (
    <>
      <div className="slider" data-state={state.photo}>
        <div className="status">
          <div className="point" data-current={state.photo}></div>
          {images.map((_, index) => (
            <div
              key={index}
              className={`stat ${state.photo === index ? "current" : ""}`}
              data-key={index}
            ></div>
          ))}
        </div>

        <div className="text">
          {["Scroll", "or", "press", "up", "and", "down"].map((text, index) => (
            <div
              key={index}
              className={state.photo === index ? "current" : ""}
              data-key={index}
            >
              {text}
            </div>
          ))}
        </div>

        {images.map((image, index) => (
          <div
            key={index}
            className={`image ${state.photo === index ? "current" : ""}`}
            data-key={index}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      {/* Show the lorem text when the slider completes */}
      {state.completed && (
        <div className="completion-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            vel libero provident itaque reprehenderit ea earum neque, debitis
            eum beatae iste aut voluptatem pariatur! Amet dolorum eligendi porro
            velit id?
          </p>
        </div>
      )}
    </>
  );
};

export default Onscroll;
