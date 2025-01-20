'use client'
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const SectionFive = () => {
  useEffect(() => {
    
    // Initialize background image scale
    const bgImage = document.querySelector('.sec-4-scroll-wrap .bg img');
    if (bgImage) {
      gsap.set(bgImage, {
        scale: 1.4,
        force3D: true,
      });
    }

    initializeGSAPAnimations();

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const initializeGSAPAnimations = () => {
    ScrollTrigger.matchMedia({
      "all": function() {
        // Background scale animation
        const bgImage = document.querySelector('.sec-4-scroll-wrap .bg img');
        if (bgImage) {
          gsap.fromTo(bgImage, 
            {
              scale: 1.4,
              force3D: true,
            },
            {
              scale: 1,
              force3D: true,
              ease: "none",
              scrollTrigger: {
                trigger: ".sec-4-scroll-wrap",
                start: "top bottom",
                end: "bottom bottom",
                scrub: 1,
              }
            }
          );
        }

        // Background and title parallel animations
        gsap.timeline({
          scrollTrigger: {
            trigger: ".sec-4-scroll-wrap",
            start: "bottom bottom",
            end: "bottom top",
            scrub: 1,
          }
        })
        .to('.sec-4-scroll-wrap .bg', {
          y: "40%",
          ease: "none",
        })
        .to('.sec-4-scroll-wrap .einsatzgebiete-title', {
          y: "25vh",
          opacity: 0,
          ease: "none",
        }, 0);
      },

      // Desktop animations
      "(min-width: 760px)": function () {
        const gebiet1 = document.querySelector(".gebiet-ct:nth-of-type(1)");
        const gebiet2 = document.querySelector(".gebiet-ct:nth-of-type(2)");
        const gebiet3 = document.querySelector(".gebiet-ct:nth-of-type(3)");
        const gebiet4 = document.querySelector(".gebiet-ct:nth-of-type(4)");
        const gebiet5 = document.querySelector(".gebiet-ct:nth-of-type(5)");
        const gebiet6 = document.querySelector(".gebiet-ct:nth-of-type(6)");

        const tl = gsap.timeline({
          defaults: {
            ease: "none"
          }
        });

        [gebiet1, gebiet2, gebiet3, gebiet4, gebiet5, gebiet6].forEach((gebiet) => {
          gsap.set(gebiet, {
            motionPath: {
              path: "#motionPath",
              align: "#motionPath",
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
              start: 0,
              end: 1,
            }
          });
        });

        const delays = [0, 0.05, 0.1, 0.15, 0.2, 0.25];
        [gebiet1, gebiet2, gebiet3, gebiet4, gebiet5, gebiet6].forEach((gebiet, index) => {
          tl.to(gebiet, {
            motionPath: {
              path: "#motionPath",
              align: "#motionPath",
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
              start: 1,
              end: 0,
            },
            immediateRender: true,
          }, delays[index]);
        });

        ScrollTrigger.create({
          trigger: ".sec-4-scroll-wrap",
          start: "top bottom+=40%",
          end: "bottom top-=40%",
          scrub: true,
          animation: tl,
        });
      },

      // Mobile animations
      "(max-width: 760px)": function () {
        const gebiet1 = document.querySelector(".gebiet-ct:nth-of-type(1)");
        const gebiet2 = document.querySelector(".gebiet-ct:nth-of-type(2)");
        const gebiet3 = document.querySelector(".gebiet-ct:nth-of-type(3)");
        const gebiet4 = document.querySelector(".gebiet-ct:nth-of-type(4)");
        const gebiet5 = document.querySelector(".gebiet-ct:nth-of-type(5)");
        const gebiet6 = document.querySelector(".gebiet-ct:nth-of-type(6)");

        const tl = gsap.timeline({
          defaults: {
            ease: "none"
          }
        });

        [gebiet1, gebiet2, gebiet3, gebiet4, gebiet5, gebiet6].forEach((gebiet) => {
          gsap.set(gebiet, {
            motionPath: {
              path: "#motionPath",
              align: "#motionPath",
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
              start: 0,
              end: 1,
            }
          });
        });

        const delays = [0, 0.166, 0.333, 0.5, 0.666, 0.833];
        [gebiet1, gebiet2, gebiet3, gebiet4, gebiet5, gebiet6].forEach((gebiet, index) => {
          tl.to(gebiet, {
            motionPath: {
              path: "#motionPath",
              align: "#motionPath",
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
              start: 1,
              end: 0,
            },
            immediateRender: true,
          }, delays[index]);
        });

        ScrollTrigger.create({
          trigger: ".sec-4-scroll-wrap",
          start: "top 30%",
          end: "bottom 70%",
          scrub: true,
          animation: tl,
        });
      },
    });
  };

  return (
    <section>
      <main>
        <div className="sec-4" id="services">
          <div className="sec-4-scroll-wrap">
            <div className="sec-4-inner">
              <div className="gebiete-wrapper">
                <svg
                  className="motionPath"
                  viewBox="0 0 1217 124"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="motionPath"
                    d="M1 123.5C1 123.5 367.399 0.5 608.5 0.5C849.601 0.5 1216 123.5 1216 123.5"
                    stroke="transparent"
                  ></path>
                </svg>

                <div className="gebiet-ct">
                  <div className="gebiet">
                    <div className="top">
                      <picture>
                        <img
                          alt="Gesamtprojektleitung - Icon"
                          className="lazy"
                          src="section-5/gesamtprojektleitung.svg"
                          data-src="images/index/einsatzgebiete/gesamtprojektleitung.svg"
                        />
                      </picture>
                    </div>
                    <div className="bottom">
                      <span className="gebiete-title">
                      <i>
                      Team Building Activity

                          <span className="extra-info">
                            (Strengthen relationships and foster collaboration through engaging and enjoyable activities designed to build team spirit.)
                          </span>
                        </i>                      </span>
                    </div>
                  </div>
                </div>
                <div className="gebiet-ct">
                  <div className="gebiet">
                    <div className="top">
                      <picture>
                        <img
                          alt="Teilprojektleitung - Icon"
                          src="section-5/teilprojektleitung.svg"
                        />
                      </picture>
                    </div>
                    <div className="bottom">
                      <span className="gebiete-title">
                        <i>
                        Shareholder Meeting

                          <span className="extra-info">
                            (Inform, inspire, and connect with stakeholders through impactful presentations and discussions at shareholder meetings.)
                          </span>
                        </i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="gebiet-ct">
                  <div className="gebiet">
                    <div className="top">
                      <picture>
                        <img
                          alt="Regie-Assistenz - Icon"
                          src="section-5/regie-assistenz.svg"
                        />
                      </picture>
                    </div>
                    <div className="bottom">
                      <span className="gebiete-title">
                      <i>
                      Wellness Events

                          <span className="extra-info">
                            (Promote well-being and mindfulness with events focused on relaxation, fitness, and holistic health.)
                          </span>
                        </i>                      </span>
                    </div>
                  </div>
                </div>
                <div className="gebiet-ct">
                  <div className="gebiet">
                    <div className="top">
                      <picture>
                        <img
                          alt="Onsite Managerin - Icon"
                          src="section-5/onsite-managerin.svg"
                        />
                      </picture>
                    </div>
                    <div className="bottom">
                      <span className="gebiete-title">
                      <i>
                      Client Appreciation Event

                          <span className="extra-info">
                            (Celebrate and show gratitude to clients with personalized and memorable experiences.
                            )
                          </span>
                        </i>                      </span>
                    </div>
                  </div>
                </div>
                <div className="gebiet-ct">
                  <div className="gebiet">
                    <div className="top">
                      <picture>
                        <img
                          alt="Incentive Reisen - Icon"
                          src="section-5/incentive-reisen.svg"
                        />
                      </picture>
                    </div>
                    <div className="bottom">
                      <span className="gebiete-title">
                      <i>
                      Incentive Trips

                          <span className="extra-info">
                            (Reward employees or clients with exciting trips that combine leisure and adventure, enhancing loyalty and motivation.)
                          </span>
                        </i>                      </span>
                    </div>
                  </div>
                </div>
                <div className="gebiet-ct">
                  <div className="gebiet">
                    <div className="top">
                      <picture>
                        <img
                          alt="Streaming Events - Icon"
                          src="section-5/streaming-events.svg"
                        />
                      </picture>
                    </div>
                    <div className="bottom">
                      <span className="gebiete-title">
                      <i>
                      Symposiums

                          <span className="extra-info">
                            (Facilitate knowledge sharing and discussions on key topics through expert-led sessions and interactive formats.)
                          </span>
                        </i>                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="title-ct">
                <h2 className="einsatzgebiete-title">Corporate Event
                </h2>
              </div>
              <div className="bg">
                <picture>
                  <source
                    media="(min-width: 760px)"
                    srcSet="/section-5-bg.jpg"
                    data-srcset="/section-5-bg.jpg"
                  />
                  <img
                    alt="Eventgäste an einer Bar"
                    className="lazy"
                    src="/section-5-bg.jpg"
                    data-src="images/index/einsatzgebiete/einsatzgebiete-bg.jpg"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SectionFive;
