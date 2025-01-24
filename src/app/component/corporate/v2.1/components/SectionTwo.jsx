'use client'
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const SectionTwo = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate text lines
      gsap.from(".sec-1 .wenn-ct span", {
        x: "-20%",
        opacity: 0,
        duration: 2.5,
        ease: "Expo.easeOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".sec-1 .wenn-ct",
          start: () => 'top ' + window.innerHeight * 0.9,
          toggleActions: "play none none reverse",
        }
      });

      // Animate gradient circles
      gsap.from(".gradient-circle", {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".gradient-ct",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef}>
      <main>
        <div className="sec-1">
          <div className="row end">
            <div className="col large-10">
              <div className="wenn-ct">
                <span className="line s1-slider-text">
                Corporate Events with DemiGod House <br />  is a world <i>standard's exposure integrated with </i> attractions i.e.{" "}
                </span>
                <span className="line s1-slider-text mt-3">
                GEN Z Tech Decore, Mesmerising Flower Decor and artwork by celebrity artist, Pyrotronics, Drone Shows, Tradional decore, live entertainment , talent management 
                  {/* Wenn{" "}
                  <i>
                    Konzept zu <br />
                    Projektplan
                  </i>{" "}
                  werden muss... */}
                </span>
                <span className="line s1-slider-text mt-3">
                5 Star hospitality accomodation and transport services, PR & Markets news breaker!
                </span>
              </div>
            </div>
          </div>
          <div className="gradient-ct blue">
            <div className="gradient-circle blue"></div>
          </div>
          <div className="gradient-ct pink">
            <div className="gradient-circle pink"></div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SectionTwo;
