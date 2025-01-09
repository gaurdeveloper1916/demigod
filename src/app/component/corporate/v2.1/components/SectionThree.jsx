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
              <h1 className="name">Times Event</h1>
              <div className="dark-overlay"></div>
              <div className="bg-imgs-ct fixed-sec">
                <div className="imgs-row first">
                  <div className="row-inner">
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        data-srcset="/section-3/scroll-img-1.jpg"
                        srcSet="/section-3/scroll-img-1.jpg"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/scroll-img-1.jpg"
                        data-src="/section-3/scroll-img-1.jpg"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/scroll-img-2.jpg"
                        data-srcset="/section-3/scroll-img-2.jpg"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/scroll-img-2.jpg"
                        data-src="/section-3/scroll-img-2.jpg"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/scroll-img-3.jpg"
                        data-srcset="/section-3/scroll-img-3.jpg"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/scroll-img-3.jpg"
                        data-src="/section-3/scroll-img-3.jpg"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/scroll-img-4.jpg"
                        data-srcset="/section-3/scroll-img-4.jpg"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/scroll-img-9.jpg"
                        data-src="/section-3/scroll-img-9.jpg"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/scroll-img-1.jpg"
                        data-srcset="/section-3/scroll-img-1.jpg"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/scroll-img-1.jpg"
                        data-src="/section-3/scroll-img-1.jpg"
                      />
                    </picture>
                  </div>
                </div>
                <div className="imgs-row second">
                  <div className="row-inner">
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/scroll-img-5.jpg"
                        data-srcset="/section-3/scroll-img-5.jpg"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/scroll-img-5.jpg"
                        data-src="/section-3/scroll-img-5.jpg"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/scroll-img-6.jpg"
                        data-srcset="/section-3/scroll-img-6.jpg"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/scroll-img-6.jpg"
                        data-src="/section-3/scroll-img-6.jpg"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/scroll-img-7.jpg"
                        data-srcset="/section-3/scroll-img-7.jpg"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/scroll-img-7.jpg"
                        data-src="/section-3/scroll-img-7.jpg"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/scroll-img-8.jpg"
                        data-srcset="/section-3/scroll-img-8.jpg"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/scroll-img-8.jpg"
                        data-src="/section-3/scroll-img-8.jpg"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/scroll-img-5.jpg"
                        data-srcset="/section-3/scroll-img-5.jpg"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/scroll-img-5.jpg"
                        data-src="/section-3/scroll-img-5.jpg"
                      />
                    </picture>
                  </div>
                </div>
                <div className="imgs-row third">
                  <div className="row-inner">
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/scroll-img-9.jpg"
                        data-srcset="/section-3/scroll-img-9.jpg"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/scroll-img-9.jpg"
                        data-src="/section-3/scroll-img-9.jpg"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/scroll-img-10.jpg"
                        data-srcset="/section-3/scroll-img-10.jpg"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/scroll-img-10.jpg"
                        data-src="/section-3/scroll-img-10.jpg"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/scroll-img-11.jpg"
                        data-srcset="/section-3/scroll-img-11.jpg"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/scroll-img-11.jpg"
                        data-src="/section-3/scroll-img-11.jpg"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/scroll-img-10.jpg"
                        data-srcset="/section-3/scroll-img-10.jpg"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/scroll-img-10.jpg"
                        data-src="/section-3/scroll-img-10.jpg"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(min-width: 760px)"
                        srcSet="/section-3/scroll-img-4.jpg"
                        data-srcset="/section-3/scroll-img-4.jpg"
                      />
                      <img
                        alt="Impressionen von Eventveranstaltungen"
                        className="lazy"
                        src="/section-3/scroll-img-4.jpg"
                        data-src="/section-3/scroll-img-4.jpg"
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
