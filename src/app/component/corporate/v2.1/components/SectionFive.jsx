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
                        <i>Product Launch</i>
                        <span className="extra-info">
                            <p>Launch your product with flair, creating excitement and expanding your brand's reach.</p>
                          </span>
                      </span>
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
                        Conferences
                          <span className="extra-info">
                          <p>Educate, inspire, and connect with audiences through impactful conferences featuring keynote speakers and breakout sessions.</p>
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
                      <i>Trade Shows</i>
                      <span className="extra-info">
                      <p>Showcase your brand and connect with potential clients at engaging trade shows.</p>
                          </span>
                      </span>
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
                      <i>Appreciation Ceremonies</i>
                      <span className="extra-info">
                      <p>Celebrate employees and clients with memorable events that express gratitude.</p>
                      </span>
                      </span>
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
                      <i>Team-Building</i>
                      <span className="extra-info">
                        <p>Enhance teamwork with fun activities and adventures that build stronger connections.</p>
                        </span>
                      </span>
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
                      <i>Board Meetings</i>
                      <span className="extra-info">
                      <p>Enhance teamwork with fun activities and adventures that build stronger connections.</p>
                      </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="title-ct">
                <h4 className="einsatzgebiete-title">corporate event</h4>
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
