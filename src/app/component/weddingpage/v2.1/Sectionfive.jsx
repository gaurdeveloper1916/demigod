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
        x: "-150%",
        scrollTrigger: {
          trigger: "#page2",
          scroller: "body",
          start: "top 0%",
          end: "top -150%",
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
            src="https://zaneandzoe.com/static/19bffd292942f66a7fb7d54ce9a7e029/a3cdc/zane-zoe-1.webp"
            alt="img1"
          />
          <img className="inner-img" src="/svgviewer-output.png" alt="img2" />
          <img
            className="inner-img"
            src="	https://zaneandzoe.com/static/54446f87097007dea5feef432df4830f/a3cdc/zane-zoe-3.webp"
            alt="img3"
          />
          <img className="inner-img" src="/svgviewer-output.png" alt="img4" />
          <img
            className="inner-img"
            src="https://zaneandzoe.com/static/267850d669bec346918091dc1efe298a/a3cdc/zane-zoe-2.webp"
            alt="img5"
          />
          <img className="inner-img" src="/svgviewer-output.png" alt="img6" />
          <img
            className="inner-img"
            src="https://zaneandzoe.com/static/19bffd292942f66a7fb7d54ce9a7e029/a3cdc/zane-zoe-1.webp"
            alt="img1"
          />
          <img className="inner-img" src="/svgviewer-output.png" alt="img2" />
          <img
            className="inner-img"
            src="https://zaneandzoe.com/static/19bffd292942f66a7fb7d54ce9a7e029/a3cdc/zane-zoe-1.webp"
            alt="img1"
          />
        </div>
      </div>
      <div id="page1"></div>
    </div>
  );
};

export default Sectionfive;
