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
            src="/wedding-section5/1.jpg"
            alt="Wedding Image 1"
          />
          <div className="inner-img content-wrapper">
            <h2>Find Inspiration

            </h2>
            <p className="fs-6 gradient-text">
              Look at other wedding websites for inspiration before you start creating your own. This will help you figure out what you’ll want to include on your own site. Check out these gorgeous wedding website examples to see how it’s done.</p>
          </div>
          <img
            className="inner-img"
            src="/wedding-section5/2.jpg"
            alt="Wedding Image 2"
          />
          <div className="inner-img content-wrapper">
            <h2>Choose Your Template

            </h2>
            <p className="fs-6 gradient-text">Pick from a collection of beautiful wedding website templates to showcase your big day. Select the one template you feel works best to display your event. You can customize anything with professional website design features that will make your site\</p>
          </div>
          <img
            className="inner-img"
            src="/wedding-section5/3.jpg"
            alt="Wedding Image 3"
          />
          <div className="inner-img content-wrapper">
            <h2>Personalize Your Site
            </h2>
            <p className="fs-6 gradient-text">Add a custom calendar showing the dates of your bachelor/bachelorette parties, wedding shower, rehearsal dinner and wedding. Design your own logo with Wix Logo Maker that captures your personality as a couple. Add your wedding playlist to set the vibe for your wedding celebration.\</p>
          </div>
          <img
            className="inner-img"
            src="/wedding-section5/4.jpg"
            alt="Wedding Image 4"
          />
          <div className="inner-img content-wrapper">
            <h2>Share Your Wedding Details
            </h2>
            <p className="fs-6 gradient-text">Let everyone know when and where your celebration is by adding your wedding date and a map with your venue’s location. Provide a contact page so guests can reach you. Link your gift registries and add your wed</p>
          </div>
          <img
            className="inner-img"
            src="https://zaneandzoe.com/static/19bffd292942f66a7fb7d54ce9a7e029/a3cdc/zane-zoe-1.webp"
            alt="Wedding Image 5"
          />
          <div className="inner-img content-wrapper">
            <h2>Get Your Own Domain

            </h2>
            <p className="fs-6 gradient-text ">Personalize your wedding site with a custom domain. Guests will use this to easily find your event online. For example, use your first names like kevin-alice.com.</p>
          </div>
          <img
            className="inner-img"
            src="https://zaneandzoe.com/static/19bffd292942f66a7fb7d54ce9a7e029/a3cdc/zane-zoe-1.webp"
            alt="Wedding Image 5"
          />
        </div>
      </div>
      <div id="page1"></div>
    </div>
  );
};

export default Sectionfive;
