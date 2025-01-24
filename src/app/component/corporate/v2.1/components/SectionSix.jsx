"use client";

import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionSix = () => {
  useLayoutEffect(() => {
    // Initialize animations
    const ctx = gsap.context(() => {
      // Initial lines animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".sec-5-scroll-wrap",
            start: "top center",
            end: "top top",
            scrub: true,
          },
        })
        .to(".sec-5 .lines-ct", {
          height: "12.76rem",
          autoAlpha: 1,
        });

      gsap.to(".text-ct .usp-ct", {
        autoAlpha: 1,
        duration: 1,
      });

      // Lines fade out animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".sec-5-scroll-wrap",
            start: "bottom bottom",
            end: "bottom center",
            scrub: 0.5,
          },
        })
        .set(".sec-5 .lines-ct", {
          autoAlpha: 0,
        })
        .to(".sec-5 .lines-ct", {
          autoAlpha: 0,
          scaleY: "0",
        });

      // USP Lines Desktop animations
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".sec-5-scroll-wrap",
            start: "top center",
            end: "top+=37% center",
            scrub: true,
          },
        })
        .from(".usp-ct.one span", {
          opacity: 0,
          y: "6rem",
          stagger: 0.05,
        })
        .to(".usp-ct.one span", {
          opacity: 0,
          y: "-6rem",
          stagger: 0.05,
        })
        .from(
          ".sec-5 .lines-ct .line.one .line-inner",
          {
            scaleY: 0,
          },
          0
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".sec-5-scroll-wrap",
            start: "top+=33.33% center",
            end: "top+=70% center",
            scrub: true,
          },
        })
        .from(".usp-ct.two span", {
          opacity: 0,
          y: "6rem",
          stagger: 0.05,
        })
        .to(".usp-ct.two span", {
          opacity: 0,
          y: "-6rem",
          stagger: 0.05,
        })
        .from(
          ".sec-5 .lines-ct .line.two .line-inner",
          {
            scaleY: 0,
          },
          0
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".sec-5-scroll-wrap",
            start: "top+=66.66% center",
            end: "bottom center",
            scrub: true,
          },
        })
        .from(".usp-ct.three span", {
          opacity: 0,
          y: "6rem",
          stagger: 0.05,
        })
        .to(".usp-ct.three span", {
          opacity: 0,
          y: "-6rem",
          stagger: 0.05,
        })
        .from(
          ".sec-5 .lines-ct .line.three .line-inner",
          {
            scaleY: 0,
          },
          0
        );

      // Gradient animations
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".sec-5-scroll-wrap",
            start: "top top",
            end: "bottom top",
            scrub: 2,
          },
        })
        .to(".sec-5 .gradient-ct.blue", {
          left: "55%",
          top: "10%",
          autoAlpha: 1,
          pointerEvents: "auto",
        })
        .to(
          ".sec-5 .gradient-ct.pink",
          {
            left: "40%",
            top: "35%",
            autoAlpha: 1,
            pointerEvents: "auto",
          },
          0
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".sec-5-inner",
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        })
        .from(".sec-5 .gradients-wrapper", {
          autoAlpha: "0",
          pointerEvents: "none",
          scale: "0",
          y: "-100%",
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".sec-5-scroll-wrap",
            start: "bottom bottom",
            end: "bottom top",
            scrub: true,
          },
        })
        .to(".sec-5 .gradients-wrapper", {
          autoAlpha: "0",
          pointerEvents: "none",
          scale: "0",
        });
    });

    // Cleanup function
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="section-six">
      <main>
        <div className="sec-5">
          <div className="sec-5-scroll-wrap">
            <div className="sec-5-inner">
              <div className="gradients-wrapper">
                <div className="gradient-ct blue">
                  <div className="gradient-circle blue"></div>
                </div>
                <div className="gradient-ct pink">
                  <div className="gradient-circle pink"></div>
                </div>
              </div>
              <div className="text-ct">
                <div className="usp-ct one">
                <span>Charity and</span>
                <span>and Fundraising Events</span>
                  <span className="serif"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ullam repudiandae provident voluptatum et sequi dolorum reiciendis, a veritatis, quae perspiciatis, qui quibusdam nobis! Eveniet recusandae asperiores repudiandae error iste.</p></span>
                 
                </div>
                <div className="usp-ct two">
                  {/* <span className="serif">200+</span> */}
                  <span>Networking</span>
                  <span>Events</span>
                  <span className="serif"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ullam repudiandae provident voluptatum et sequi dolorum reiciendis, a veritatis, quae perspiciatis, qui quibusdam nobis! Eveniet recusandae asperiores repudiandae error iste.</p></span>

                  {/* <p className="usp-ct two"> ipsum dolor sit amet consectetur, adipisicing elit. Quaerat consequuntur voluptate possimus ullam aut. Ad optio placeat ducimus necessitatibus tenetur repudiandae, earum odio hic quae minus, repellat in illum saepe? </p> */}

                </div>
                <div className="usp-ct three">
                  {/* <span className="serif">30+</span> */}
                  <span>Political</span>
                  <span>Events</span>
                  <span className="serif"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ullam repudiandae provident voluptatum et sequi dolorum reiciendis, a veritatis, quae perspiciatis, qui quibusdam nobis! Eveniet recusandae asperiores repudiandae error iste.</p></span>

                </div>

                <div className="lines-ct">
                  <div className="line one">
                    <div className="line-inner"></div>
                  </div>
                  <div className="line two">
                    <div className="line-inner"></div>
                  </div>
                  <div className="line three">
                    <div className="line-inner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SectionSix;
