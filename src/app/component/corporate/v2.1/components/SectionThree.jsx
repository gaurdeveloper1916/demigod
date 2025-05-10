'use client'
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const SectionThree = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // First timeline for name and background animations
      gsap.timeline({
        scrollTrigger: {
          trigger: ".sec-2-scroll-wrap",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        }
      })
      .from('.sec-2-scroll-wrap .name', {
        y: "20%",
        scale: "0.9",
        rotateX: "-90deg",
      })
      .to('.sec-2-scroll-wrap .name', {
        letterSpacing: "0em",
      }, 0)
      .from('.sec-2-scroll-wrap .bg-imgs-ct', {
        scale: 1.4,
      }, 0)
      .to('.sec-2', {
        pointerEvents: "auto",
      }, 0);

      // Second timeline for row animations
      gsap.timeline({
        scrollTrigger: {
          trigger: ".sec-2-scroll-wrap",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      })
      .to('.sec-2-scroll-wrap .imgs-row.first', {
        y: "-20%",
      }, 0)
      .to('.sec-2-scroll-wrap .imgs-row.second', {
        y: "20%",
      }, 0)
      .to('.sec-2-scroll-wrap .imgs-row.third', {
        y: "-20%",
      }, 0);
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef}>
      <main>
        <div className="sec-2">
          <div className="sec-2-scroll-wrap">
            <div className="sec-2-inner">
              <h1 className="name">Corporate Event</h1>
              <div className="dark-overlay"></div>
              <div className="bg-imgs-ct fixed-sec">
                <div className="imgs-row first">
                  <div className="row-inner">
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        data-srcset="/corporate-v2/award.webp"
                        srcSet="/corporate-v2/award.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/corporate-v2/award.webp"
                        data-src="/corporate-v2/award.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/corporate-v2/Confe.webp"
                        data-srcset="/corporate-v2/Confe.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/corporate-v2/Confe.webp"
                        data-src="/corporate-v2/Confe.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/corporate-v2/network.webp"
                        data-srcset="/corporate-v2/network.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/corporate-v2/network.webp"
                        data-src="/corporate-v2/network.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/corporate-v2/Product.webp"
                        data-srcset="/corporate-v2/Product.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/corporate-v2/Product.webp"
                        data-src="/corporate-v2/Product.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/corporate-v2/seminar.webp"
                        data-srcset="/corporate-v2/seminar.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/corporate-v2/seminar.webp"
                        data-src="/corporate-v2/seminar.webp"
                      />
                    </picture>
                  </div>
                </div>
                <div className="imgs-row second">
                  <div className="row-inner">
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/corporate-v2/board.webp"
                        data-srcset="/corporate-v2/board.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/corporate-v2/board.webp"
                        data-src="/corporate-v2/board.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/corporate-v2/compmile.webp"
                        data-srcset="/corporate-v2/compmile.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/corporate-v2/compmile.webp"
                        data-src="/corporate-v2/compmile.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/corporate-v2/retreat.webp"
                        data-srcset="/corporate-v2/retreat.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/corporate-v2/retreat.webp"
                        data-src="/corporate-v2/retreat.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/corporate-v2/award.webp"
                        data-srcset="/corporate-v2/award.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/corporate-v2/award.webp"
                        data-src="/corporate-v2/award.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/corporate-v2/fund.web"
                        data-srcset="/corporate-v2/fund.web"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/corporate-v2/fund.web"
                        data-src="/corporate-v2/fund.web"
                      />
                    </picture>
                  </div>
                </div>
                <div className="imgs-row third">
                  <div className="row-inner">
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/corporate-v2/tradee.webp"
                        data-srcset="/corporate-v2/tradee.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/corporate-v2/tradee.webp"
                        data-src="/corporate-v2/tradee.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/corporate-v2/share.webp"
                        data-srcset="/corporate-v2/share.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/corporate-v2/share.webp"
                        data-src="/corporate-v2/share.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/corporate-v2/Politi.webp"
                        data-srcset="/corporate-v2/Politi.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/corporate-v2/Politi.webp"
                        data-src="/corporate-v2/Politi.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/corporate-v2/fund.webp"
                        data-srcset="/corporate-v2/fund.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/corporate-v2/fund.webp"
                        data-src="/corporate-v2/fund.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/corporate-v2/tradee.webp"
                        data-srcset="/corporate-v2/tradee.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/corporate-v2/tradee.webp"
                        data-src="/corporate-v2/tradee.webp"
                      />
                    </picture>
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

export default SectionThree;
