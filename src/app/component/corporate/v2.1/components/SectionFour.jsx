import React, { useEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionFour = () => {
  const animationConfig = useMemo(
    () => ({
      baseConfig: {
        y: "100%",
        opacity: 0,
        ease: "expo.out",
        scrollTrigger: {
          start: () => `top ${window.innerHeight * 0.9}px`,
          toggleActions: "play none none reverse",
        },
      },
      headlines: {
        duration: 1.8,
        stagger: 0.1,
      },
      text: {
        duration: 1.5,
        stagger: 0.015,
      },
    }),
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline animation
      gsap.from(".multi-line-headline span", {
        ...animationConfig.baseConfig,
        ...animationConfig.headlines,
        scrollTrigger: {
          ...animationConfig.baseConfig.scrollTrigger,
          trigger: ".multi-line-headline",
        },
      });

      // Text animation
      gsap.from(".serif-text-ct span", {
        ...animationConfig.baseConfig,
        ...animationConfig.text,
        scrollTrigger: {
          ...animationConfig.baseConfig.scrollTrigger,
          trigger: ".serif-text-ct",
        },
      });
    });

    return () => ctx.revert(); // Cleanup animations on unmount
  }, [animationConfig]);

  return (
    <section>
      <main>
        <div className="sec-3 padding-outer" id="ueber">
          <div className="row">
            <div className="col">
              <div className="grid-ct">
                <h2 className="multi-line-headline text-white">
                  <span>Product Launch</span>
                  <span>ATL/BTL</span>
                  <span>B2B/B2C Marketing</span>
                  <span>Digital Media Meta/Google Ads Campaign</span>
                  <span></span>
                </h2>
                <div className="picture-ct">
                  <div className="aspect-img-ct">
                    <picture
                      data-parallax-strength="1.2"
                      data-parallax-height="9"
                    >
                      <source
                        media="(min-width: 760px)"
                        data-srcset="b.jpg"
                        srcSet="b.jpg"
                      />
                      <img
                        alt="Portrait von Tina Genßler"
                        className="lazy"
                        src="b.jpg"
                        data-src="baa.jpg"
                        data-parallax-target=""
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="serif-text-ct">
                <span>We</span> <span>Provide</span> <span>End to End</span>{" "}
                <span>Solutions</span> <span>for brands</span>{" "}
                <span>B2B & B2C</span> <span>marketing approach</span>{" "}
                  {" "}
                  <span>via a</span> <span>time tested structured plan of</span>
                  <span>action with 99.99%</span> <span>success rate.</span>
                {" "}
                <span>Any form of marketing approach</span>
                <span>i.e. product launch,</span> <span>Logo re-launch, </span> <span>ATL/BTL </span>{" "}<span> activities, Outdoor Media,</span>{" "}
                <span> Digital media ads campaign</span> <span>and akin.</span> <span></span>{" "}
                <span></span>
                <i>
                  <span></span> <span></span>
                </i>{" "}
                <span>Organised,</span> <span>Managed</span>{" "}
                <span> & Executed by </span> <span>Team Demigod House</span> <span>exclusive factor</span>{" "}
                <span>make </span>
                <span>headlines</span> <span>in Domestic & </span> <span>International media.</span>{" "}
                <span></span> <span></span>
                <span></span> <span></span> <span></span>{" "}
                <span></span>
                <i>
                  <span></span> <span></span> <span></span>{" "}
                  <span></span>
                  <span></span> <span></span> <span></span>
                </i>
                <span>.</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SectionFour;
