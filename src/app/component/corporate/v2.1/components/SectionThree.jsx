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
                        data-srcset="/section-3/award.webp"
                        srcSet="/section-3/award.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/award.webp"
                        data-src="/section-3/award.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/Confe.webp"
                        data-srcset="/section-3/Confe.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/Confe.webp"
                        data-src="/section-3/Confe.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/network.webp"
                        data-srcset="/section-3/network.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/network.webp"
                        data-src="/section-3/network.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/Product.webp"
                        data-srcset="/section-3/Product.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/Product.webp"
                        data-src="/section-3/Product.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/seminar.webp"
                        data-srcset="/section-3/seminar.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/seminar.webp"
                        data-src="/section-3/seminar.webp"
                      />
                    </picture>
                  </div>
                </div>
                <div className="imgs-row second">
                  <div className="row-inner">
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/board.webp"
                        data-srcset="/section-3/board.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/board.webp"
                        data-src="/section-3/board.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/compmile.webp"
                        data-srcset="/section-3/compmile.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/compmile.webp"
                        data-src="/section-3/compmile.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/retreat.webp"
                        data-srcset="/section-3/retreat.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/retreat.webp"
                        data-src="/section-3/retreat.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/award.webp"
                        data-srcset="/section-3/award.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/award.webp"
                        data-src="/section-3/award.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/fund.web"
                        data-srcset="/section-3/fund.web"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/fund.web"
                        data-src="/section-3/fund.web"
                      />
                    </picture>
                  </div>
                </div>
                <div className="imgs-row third">
                  <div className="row-inner">
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/tradee.webp"
                        data-srcset="/section-3/tradee.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/tradee.webp"
                        data-src="/section-3/tradee.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/share.webp"
                        data-srcset="/section-3/share.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/share.webp"
                        data-src="/section-3/share.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/Politi.webp"
                        data-srcset="/section-3/Politi.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/Politi.webp"
                        data-src="/section-3/Politi.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/fund.webp"
                        data-srcset="/section-3/fund.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/fund.webp"
                        data-src="/section-3/fund.webp"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/tradee.webp"
                        data-srcset="/section-3/tradee.webp"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/tradee.webp"
                        data-src="/section-3/tradee.webp"
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
