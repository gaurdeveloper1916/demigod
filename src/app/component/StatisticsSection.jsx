"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import styles from "./StatisticsSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const StatisticsSection = ({
  statistics = [
    { value: "500+", label1: "Successful", label2: "Projects" },
    { value: "100+", label1: "Happy", label2: "Clients" },
    { value: "50+", label1: "Team", label2: "Members" },
  ],
}) => {
  const sectionRef = useRef(null);
  const linesRef = useRef(null);
  const gradientsRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const lines = linesRef.current;
    const gradients = gradientsRef.current;

    const ctx = gsap.context(() => {
      // Initial lines animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section.querySelector(".sec-5-scroll-wrap"),
            start: "top center",
            end: "top top",
            scrub: true,
          },
        })
        .to(lines, {
          height: "12.76rem",
          autoAlpha: 1,
        });

      gsap.to(section.querySelectorAll(".text-ct .usp-ct"), {
        autoAlpha: 1,
        duration: 1,
      });

      // Lines fade out animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section.querySelector(".sec-5-scroll-wrap"),
            start: "bottom bottom",
            end: "bottom center",
            scrub: 0.5,
          },
        })
        .set(lines, {
          autoAlpha: 0,
        })
        .to(lines, {
          autoAlpha: 0,
          scaleY: "0",
        });

      // Create animations for each statistic dynamically
      statistics.forEach((_, index) => {
        const positions = {
          0: { start: "top center", end: "top+=37% center" },
          1: { start: "top+=33.33% center", end: "top+=70% center" },
          2: { start: "top+=66.66% center", end: "bottom center" },
        };

        const className = ["one", "two", "three"][index];
        const uspElement = section.querySelector(`.usp-ct.${className}`);
        const lineElement = section.querySelector(
          `.line.${className} .line-inner`
        );

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section.querySelector(".sec-5-scroll-wrap"),
              start: positions[index].start,
              end: positions[index].end,
              scrub: true,
            },
          })
          .from(uspElement.querySelectorAll("span"), {
            opacity: 0,
            y: "6rem",
            stagger: 0.05,
          })
          .to(uspElement.querySelectorAll("span"), {
            opacity: 0,
            y: "-6rem",
            stagger: 0.05,
          })
          .from(
            lineElement,
            {
              scaleY: 0,
            },
            0
          );
      });

      // Gradient animations
      const blueGradient = section.querySelector(".gradient-ct.blue");
      const pinkGradient = section.querySelector(".gradient-ct.pink");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section.querySelector(".sec-5-scroll-wrap"),
            start: "top top",
            end: "bottom top",
            scrub: 2,
          },
        })
        .to(blueGradient, {
          left: "55%",
          top: "10%",
          autoAlpha: 1,
          pointerEvents: "auto",
        })
        .to(
          pinkGradient,
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
            trigger: section.querySelector(".sec-5-inner"),
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        })
        .from(gradients, {
          autoAlpha: "0",
          pointerEvents: "none",
          scale: "0",
          y: "-100%",
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section.querySelector(".sec-5-scroll-wrap"),
            start: "bottom bottom",
            end: "bottom top",
            scrub: true,
          },
        })
        .to(gradients, {
          autoAlpha: "0",
          pointerEvents: "none",
          scale: "0",
        });
    }, section); // Scope GSAP context to our section

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [statistics]);

  return (
    <section ref={sectionRef} className="section-six">
      <main>
        <div className="sec-5">
          <div className="sec-5-scroll-wrap">
            <div className="sec-5-inner">
              <div ref={gradientsRef} className="gradients-wrapper">
                <div className="gradient-ct blue">
                  <div className="gradient-circle blue"></div>
                </div>
                <div className="gradient-ct pink">
                  <div className="gradient-circle pink"></div>
                </div>
              </div>
              <div className="text-ct">
                {statistics.map((stat, index) => (
                  <div
                    key={index}
                    className={`usp-ct ${["one", "two", "three"][index]}`}
                  >
                    <span>{stat.label1}</span>
                    <span>{stat.label2}</span>
                    <span className="serif"><p className="fs-2">{stat.value}</p></span>

                  </div>
                ))}

                <div ref={linesRef} className="lines-ct">
                  {statistics.map((_, index) => (
                    <div
                      key={index}
                      className={`line ${["one", "two", "three"][index]}`}
                    >
                      <div className="line-inner"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default StatisticsSection;
