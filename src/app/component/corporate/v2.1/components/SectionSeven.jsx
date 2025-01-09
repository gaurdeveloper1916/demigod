"use client";

import React, { useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import {
  Navigation,
  Scrollbar,
  Controller,
  EffectFade,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

gsap.registerPlugin(ScrollTrigger);

const SectionSeven = () => {
  useLayoutEffect(() => {
    // Initialize animations
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".sec-6 h3",
            start: () => "top " + window.innerHeight * 0.9,
            toggleActions: "play none none reverse",
          },
        })
        .from(".sec-6 h3 span:first-of-type", {
          x: "5%",
          opacity: 0,
          duration: 2,
          ease: "Expo.easeOut",
        })
        .from(
          ".sec-6 h3 span:last-of-type",
          {
            paddingLeft: "0",
            opacity: 0,
            duration: 2,
            ease: "Expo.easeOut",
          },
          0
        );

      gsap.from(".sec-6 .reviewsSwiperDesktopCt", {
        y: "25%",
        opacity: 0,
        duration: 2,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: ".sec-6 .reviewsSwiperDesktopCt",
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Cleanup function
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  useEffect(() => {
    let mobileSwiper;
    let desktopSwiper;
    let galleryThumbs;

    const initSwiper = () => {
      if (document.querySelector(".swiper")) {
        if (window.innerWidth < 760) {
          mobileSwiper = new Swiper(".swiper.reviewsSwiperMobile", {
            modules: [Navigation, Scrollbar, A11y],
            loop: true,
            autoHeight: true,
            speed: 400,
            slidesPerView: 1,
            watchSlidesProgress: true,
            a11y: {
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            scrollbar: {
              el: ".swiper-scrollbar",
            },
          });

          let isTouched = false;

          mobileSwiper.on("touchStart", function () {
            isTouched = true;
          });

          mobileSwiper.on("slideChange", function () {
            if (isTouched) {
              mobileSwiper.el.classList.add("touched");
              isTouched = false; // Reset the flag
            }
          });
        } else {
          desktopSwiper = new Swiper(".swiper.reviewsSwiperDesktop", {
            modules: [Navigation, EffectFade, A11y],
            loop: true,
            autoHeight: true,
            speed: 700,
            slidesPerView: 1,
            initialSlide: 1,
            effect: "fade",
            fadeEffect: {
              crossFade: true,
            },
            a11y: {
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });

          galleryThumbs = new Swiper(".swiper.imgSwiper", {
            modules: [Navigation],
            slidesPerView: 2,
            speed: 700,
            loop: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        }
      }
    };

    // Initialize Swiper
    initSwiper();

    // Handle window resize
    const handleResize = () => {
      if (mobileSwiper) mobileSwiper.destroy();
      if (desktopSwiper) desktopSwiper.destroy();
      if (galleryThumbs) galleryThumbs.destroy();
      initSwiper();
    };

    window.addEventListener("resize", handleResize);

    // Cursor follow functionality
    const cursorFollow = document.querySelector(".cursor-follow");
    if (cursorFollow && window.innerWidth > 759) {
      const span = cursorFollow.querySelector("span");
      let posX = 0;
      let posY = 0;
      let mouseX = 0;
      let mouseY = 0;

      const delay = 0.12;

      function followCursor() {
        const distX = mouseX - posX;
        const distY = mouseY - posY;
        posX += distX * delay;
        posY += distY * delay;

        cursorFollow.style.left = posX + "px";
        cursorFollow.style.top = posY + "px";

        requestAnimationFrame(followCursor);
      }

      function mouseDownHandler() {
        if (cursorFollow) {
          cursorFollow.classList.add("cursor-down");
        }
      }

      function mouseUpHandler() {
        if (cursorFollow) {
          cursorFollow.classList.remove("cursor-down");
        }
      }

      document.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      followCursor();

      const elementsToShowCursor =
        document.querySelectorAll("[data-show-cursor]");
      elementsToShowCursor.forEach((element) => {
        element.addEventListener("mouseover", function () {
          cursorFollow.style.transition = "transform 0.3s";
          cursorFollow.style.transform = "scale(1)";
          document.addEventListener("mousedown", mouseDownHandler);
          document.addEventListener("mouseup", mouseUpHandler);
        });
        element.addEventListener("mouseleave", function () {
          cursorFollow.style.transition = "transform 0.3s";
          cursorFollow.style.transform = "scale(0)";
          document.removeEventListener("mousedown", mouseDownHandler);
          document.removeEventListener("mouseup", mouseUpHandler);
        });
      });

      const elementsCursorLeft =
        document.querySelectorAll("[data-cursor-left]");
      elementsCursorLeft.forEach((element) => {
        element.addEventListener("mouseover", function () {
          cursorFollow.classList.add("cursor-left");
        });
        element.addEventListener("mouseleave", function () {
          cursorFollow.classList.remove("cursor-left");
        });
      });

      const elementsCursorRight = document.querySelectorAll(
        "[data-cursor-right]"
      );
      elementsCursorRight.forEach((element) => {
        element.addEventListener("mouseover", function () {
          cursorFollow.classList.add("cursor-right");
        });
        element.addEventListener("mouseleave", function () {
          cursorFollow.classList.remove("cursor-right");
        });
      });

      // Cleanup
      return () => {
        document.removeEventListener("mousemove", followCursor);
        document.removeEventListener("mousedown", mouseDownHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
      };
    }

    // Cleanup
    return () => {
      if (mobileSwiper && mobileSwiper.destroy) mobileSwiper.destroy();
      if (desktopSwiper && desktopSwiper.destroy) desktopSwiper.destroy();
      if (galleryThumbs && galleryThumbs.destroy) galleryThumbs.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section>
      <main>
        <div className="sec-6 overflow-hidden footer-trigger padding-outer" id="testimonials">
          <div className="row">
            <div className="col">
              <h3>
                <span>Das sagt</span>
                <span>die Branche</span>
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="swiper reviewsSwiperMobile">
                <picture className="finger">
                  <source
                    media="(min-width: 760px)"
                    srcSet="section7/finger.svg"
                    data-srcset="section7/finger.svg"
                  />
                  <img
                    alt="Finger - Icon"
                    className="lazy"
                    src="section7/finger.svg"
                    data-src="section7/finger.svg"
                  />
                </picture>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="swiper-card">
                      <div className="img-ct">
                        <picture>
                          <source
                            media="(min-width: 760px)"
                            srcSet="section7/anne-mobile.png"
                            data-srcset="section7/anne-mobile.png"
                          />
                          <img
                            alt="Anne Kikuts, Director Marketing, IBM iX DACH"
                            className="lazy"
                            src="section7/anne-mobile.png"
                            data-src="section7/anne-mobile.png"
                          />
                        </picture>
                      </div>
                      <div className="text-ct">
                        <p>
                          "Ich hatte das Vergnügen für 2,5 Jahre mit Tina
                          zusammenzuarbeiten und kann aus erster Hand
                          bestätigen, dass sie eine außergewöhnliche
                          Führungskraft ist. Ihre Fähigkeit, komplexe Themen zu
                          durchdringen und kreative Ideen zu entwickeln,
                          beeindruckt mich jedes Mal aufs Neue. Sie ist nicht
                          nur eine großartige Teamplayerin, sondern trifft auch
                          an entscheidenden Stellen kluge Entscheidungen, die
                          Projekte voranbringen. Wer mit Tina zusammenarbeitet,
                          wird von ihrer strategischen Denkweise und ihrer
                          Fähigkeit, Ideen in erfolgreiche Lösungen umzusetzen,
                          profitieren."
                        </p>
                        <div className="line"></div>
                        <p className="name">
                          Anne Kikuts, Director Marketing, IBM iX DACH
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="swiper-card">
                      <div className="img-ct">
                        <picture>
                          <source
                            media="(min-width: 760px)"
                            srcSet="section7/anna-mobile.png"
                            data-srcset="section7/anna-mobile.png"
                          />
                          <img
                            alt="Anna-Corina Meyer, Managing Director, Mallorca Elements"
                            className="lazy"
                            src="section7/anna-mobile.png"
                            data-src="section7/anna-mobile.png"
                          />
                        </picture>
                      </div>
                      <div className="text-ct">
                        <p>
                          "Tina ist nicht nur eine herausragende Eventplanerin
                          im MICE-Bereich, sondern auch ein wundervoller Mensch.
                          Ihre lösungsorientierte Herangehensweise und ihre
                          ruhige Art machen die Zusammenarbeit äußerst angenehm.
                          Zudem ist sie ein äußerst effizienter Typ, der sich
                          nicht davor scheut, projektverantwortlich zu handeln –
                          so macht die gemeinsame Eventplanung gleich noch mehr
                          Spaß. Ich freue mich jetzt schon auf weitere
                          gemeinsame Projekte in der Zukunft. Solltet ihr
                          jemanden z.B. zur Unterstützung für eure Incentive
                          Organisation suchen, kann ich Tina von Herzen und
                          uneingeschränkt empfehlen."
                        </p>
                        <div className="line"></div>
                        <p className="name">
                          Anna-Corina Meyer, Managing Director, Mallorca
                          Elements
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="swiper-card">
                      <div className="img-ct">
                        <picture>
                          <source
                            media="(min-width: 760px)"
                            srcSet="section7/aljoscha-mobile.png"
                            data-srcset="section7/aljoscha-mobile.png"
                          />
                          <img
                            alt="Aljoscha Höhn, Moderator"
                            className="lazy"
                            src="section7/aljoscha-mobile.png"
                            data-src="section7/aljoscha-mobile.png"
                          />
                        </picture>
                      </div>
                      <div className="text-ct">
                        <p>
                          "Als Moderator habe ich schon einige tolle Shows mit
                          Tina umgesetzt. Jedes Mal lief alles wunderbar rund
                          und ich habe mich sehr wohlgefühlt. Gerne jederzeit
                          wieder."
                        </p>
                        <div className="line"></div>
                        <p className="name">Aljoscha Höhn, Moderator</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="swiper-card">
                      <div className="img-ct">
                        <picture>
                          <source
                            media="(min-width: 760px)"
                            srcSet="section7/sarah-mobile.png"
                            data-srcset="section7/sarah-mobile.png"
                          />
                          <img
                            alt="Sarah Zielke-Vogt, Eventmanagerin, Telekom Deutschland GmbH"
                            className="lazy"
                            src="section7/sarah-mobile.png"
                            data-src="section7/sarah-mobile.png"
                          />
                        </picture>
                      </div>
                      <div className="text-ct">
                        <p>
                          "Tina ist ein absolut wertvoller Mensch bei jedem
                          Event. Sie ist nicht nur total kommunikativ und
                          herzlich, sondern bringt mit ihren kreativen Ideen und
                          ihrem Blick für Besonderes einen frischen Wind in
                          jedes Event. Ich bin als Kunde absolut zufrieden und
                          kann sie nur wärmstens empfehlen."
                        </p>
                        <div className="line"></div>
                        <p className="name">
                          Sarah Zielke-Vogt, Eventmanagerin, Telekom Deutschland
                          GmbH
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-buttons-ct">
                  <div className="swiper-scrollbar"></div>
                </div>
              </div>

              <div className="reviewsSwiperDesktopCt" data-show-cursor="">
                <div className="row bottom">
                  <div className="col large-6">
                    <div className="swiper imgSwiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="swiper-card">
                            <div className="img-ct">
                              <picture>
                                <source
                                  media="(min-width: 760px)"
                                  srcSet="section7/anna-desk.png"
                                  data-srcset="section7/anna-desk.png"
                                />
                                <img
                                  alt="Anna-Corina Meyer, Managing Director, Mallorca Elements"
                                  className="lazy"
                                  src="section7/anna-desk.png"
                                  data-src="section7/anna-desk.png"
                                />
                              </picture>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="swiper-card">
                            <div className="img-ct">
                              <picture>
                                <source
                                  media="(min-width: 760px)"
                                  srcSet="section7/anne-desk.png"
                                  data-srcset="section7/anne-desk.png"
                                />
                                <img
                                  alt="Anne Kikuts, Director Marketing, IBM iX DACH"
                                  className="lazy"
                                  src="section7/anne-desk.png"
                                  data-src="section7/anne-desk.png"
                                />
                              </picture>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="swiper-card">
                            <div className="img-ct">
                              <picture>
                                <source
                                  media="(min-width: 760px)"
                                  srcSet="section7/sarah-desk.png"
                                  data-srcset="section7/sarah-desk.png"
                                />
                                <img
                                  alt="Sarah Zielke-Vogt, Eventmanagerin, Telekom Deutschland GmbH"
                                  className="lazy"
                                  src="section7/sarah-desk.png"
                                  data-src="section7/sarah-desk.png"
                                />
                              </picture>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="swiper-card">
                            <div className="img-ct">
                              <picture>
                                <source
                                  media="(min-width: 760px)"
                                  srcSet="section7/aljoscha-desk.png"
                                  data-srcset="section7/aljoscha-desk.png"
                                />
                                <img
                                  alt="Aljoscha Höhn, Moderator"
                                  className="lazy"
                                  src="section7/aljoscha-desk.png"
                                  data-src="section7/aljoscha-desk.png"
                                />
                              </picture>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col large-4 large-prefix-1 text-col">
                    <div className="swiper reviewsSwiperDesktop">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="swiper-card">
                            <div className="text-ct">
                              <p>
                                "Tina ist nicht nur eine herausragende
                                Eventplanerin im MICE-Bereich, sondern auch ein
                                wundervoller Mensch. Ihre lösungsorientierte
                                Herangehensweise und ihre ruhige Art machen die
                                Zusammenarbeit äußerst angenehm. Zudem ist sie
                                ein äußerst effizienter Typ, der sich nicht
                                davor scheut, projektverantwortlich zu handeln –
                                so macht die gemeinsame Eventplanung gleich noch
                                mehr Spaß. Ich freue mich jetzt schon auf
                                weitere gemeinsame Projekte in der Zukunft.
                                Solltet ihr jemanden z.B. zur Unterstützung für
                                eure Incentive Organisation suchen, kann ich
                                Tina von Herzen und uneingeschränkt empfehlen."
                              </p>
                              <div className="name-ct">
                                <div className="line"></div>
                                <p className="name">
                                  Anna-Corina Meyer, Managing Director, Mallorca
                                  Elements
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="swiper-card">
                            <div className="text-ct">
                              <p>
                                "Ich hatte das Vergnügen für 2,5 Jahre mit Tina
                                zusammenzuarbeiten und kann aus erster Hand
                                bestätigen, dass sie eine außergewöhnliche
                                Führungskraft ist. Ihre Fähigkeit, komplexe
                                Themen zu durchdringen und kreative Ideen zu
                                entwickeln, beeindruckt mich jedes Mal aufs
                                Neue. Sie ist nicht nur eine großartige
                                Teamplayerin, sondern trifft auch an
                                entscheidenden Stellen kluge Entscheidungen, die
                                Projekte voranbringen. Wer mit Tina
                                zusammenarbeitet, wird von ihrer strategischen
                                Denkweise und ihrer Fähigkeit, Ideen in
                                erfolgreiche Lösungen umzusetzen, profitieren."
                              </p>
                              <div className="name-ct">
                                <div className="line"></div>
                                <p className="name">
                                  Anne Kikuts, Director Marketing, IBM iX DACH
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="swiper-card">
                            <div className="text-ct">
                              <p>
                                "Tina ist ein absolut wertvoller Mensch bei
                                jedem Event. Sie ist nicht nur total
                                kommunikativ und herzlich, sondern bringt mit
                                ihren kreativen Ideen und ihrem Blick für
                                Besonderes einen frischen Wind in jedes Event.
                                Ich bin als Kunde absolut zufrieden und kann sie
                                nur wärmstens empfehlen."
                              </p>
                              <div className="name-ct">
                                <div className="line"></div>
                                <p className="name">
                                  Sarah Zielke-Vogt, Eventmanagerin, Telekom
                                  Deutschland GmbH
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="swiper-card">
                            <div className="text-ct">
                              <p>
                                "Als Moderator habe ich schon einige tolle Shows
                                mit Tina umgesetzt. Jedes Mal lief alles
                                wunderbar rund und ich habe mich sehr
                                wohlgefühlt. Gerne jederzeit wieder."
                              </p>
                              <div className="name-ct">
                                <div className="line"></div>
                                <p className="name">Aljoscha Höhn, Moderator</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-buttons-ct">
                  <div
                    className="swiper-button-next"
                    data-cursor-right=""
                  ></div>
                  <div className="swiper-button-prev" data-cursor-left=""></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="cursor-follow">
        <span>
          <picture className="arrow-left">
            <img
              alt="Pfeil links - Icon"
              className="lazy"
              src="section7/arrow-left.svg"
              data-src="section7/arrow-left.svg"
            />
          </picture>
        </span>
      </div>
    </section>
  );
};

export default SectionSeven;
