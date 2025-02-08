'use client';

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sectionfive = () => {
  const animationRef = useRef(null);


  useEffect(() => {
    if (!animationRef.current) {
      animationRef.current = gsap.to("#page2 .inner", {
        x: "-270%",
        scrollTrigger: {
          trigger: "#page2",
          scroller: "body",
          start: "top 0%",
          end: "top -190%",
          scrub: 2,
          pin: true,
        },
      });
    }
  }, []);

  return (
    <div>
      <div id="page2">
        <div className="inner">
          <img
            className="inner-img"
            src="Destination.png"
            alt="Wedding Image 1"
          />
          <div className="inner-img content-wrapper gradient-text">
            <h2>Destination Weddings

            </h2>
            <p className="fs-6 text-white">
              Say "I do" in a breathtaking location at a destination wedding. Whether it's a tropical beach in Asia pacific or Caribbean islands', a romantic castle in Europe or India, or a serene mountain retreat in Swiss alps or Himalaya's , destination weddings' blend the joy of travel with the intimacy of your big day. It's the perfect way to create unforgettable memories in a picturesque setting.</p>
          </div>
          <img
            className="inner-img"
            src="celeb.jpg"
            alt="Wedding Image 2"
          />
          <div className="inner-img content-wrapper gradient-text">
            <h2>Celebrity Weddings
            </h2>
            <p className="fs-6 text-white">We understand the importance of privacy, professionalism and keeping paparazzi at the bay during a celebrity's wedding planning / execution . Apart from 7 Star hospitality and transportation services for the guest we ensure to perform and manage every ceremonial affairs or decor in the most cinematic and royal format. 
            </p>
          </div>
          <img
            className="inner-img"
            src="tradi.jpg"
            alt="Wedding Image 3"
          />
          <div className="inner-img content-wrapper gradient-text">
            <h2>Traditional Weddings
            </h2>
            <p className="fs-6 text-white">Celebrate your roots with a traditional wedding. These ceremonies are steeped in cultural customs and rituals, showcasing timeless elegance and meaningful traditions. From vibrant attire to symbolic rites, traditional weddings honor heritage while uniting families in a celebration of love and legacy.</p>
          </div>
          <img
            className="inner-img"
            src="trad.avif"
            alt="Wedding Image 4"
          />
          <div className="inner-img content-wrapper gradient-text">
            <h2>Courthouse Weddings
            </h2>
            <p className="fs-6 text-white">Let everyone know when and where your celebration is by adding your wedding date and a map with your venue’s location. Provide a contact page so guests can reach you. Link your gift registries and add your wed</p>
          </div>
          <img
            className="inner-img"
            src="https://zaneandzoe.com/static/19bffd292942f66a7fb7d54ce9a7e029/a3cdc/zane-zoe-1.webp"
            alt="Wedding Image 5"
          />
          <div className="inner-img content-wrapper gradient-text">
            <h2>Elopements

            </h2>
            <p className="fs-6 text-white ">For couples who prefer intimacy over grandeur, elopements are the perfect choice. With just the two of you (or a small group of loved ones), elopements focus on the romance and authenticity of your love story. Exchange vows in scenic, unique locations for a day that's truly your own.</p>
          </div>
          <img
            className="inner-img"
            src="https://zaneandzoe.com/static/19bffd292942f66a7fb7d54ce9a7e029/a3cdc/zane-zoe-1.webp"
            alt="Wedding Image 5"
          />

          {/* new added */}
          <div className="inner-img content-wrapper gradient-text">
            <h2>Priya misha

            </h2>
            <p className="fs-6 text-white ">For couples who prefer intimacy over grandeur, elopements are the perfect choice. With just the two of you (or a small group of loved ones), elopements focus on the romance and authenticity of your love story. Exchange vows in scenic, unique locations for a day that's truly your own.</p>
          </div>
          <img
            className="inner-img"
            src="https://zaneandzoe.com/static/19bffd292942f66a7fb7d54ce9a7e029/a3cdc/zane-zoe-1.webp"
            alt="Wedding Image 5"
          />
           <div className="inner-img content-wrapper gradient-text">
            <h2>kartik gaur

            </h2>
            <p className="fs-6 text-white ">For couples who prefer intimacy over grandeur, elopements are the perfect choice. With just the two of you (or a small group of loved ones), elopements focus on the romance and authenticity of your love story. Exchange vows in scenic, unique locations for a day that's truly your own.</p>
          </div>
          {/* <img
            className="inner-img"
            src="https://zaneandzoe.com/static/19bffd292942f66a7fb7d54ce9a7e029/a3cdc/zane-zoe-1.webp"
            alt="Wedding Image 5"
          /> */}

        </div>
      </div>
      <div id="page1"></div>
    </div>
  );
};

export default Sectionfive;
