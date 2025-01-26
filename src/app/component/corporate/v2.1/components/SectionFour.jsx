"use client";

import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionFour = ({
  headlineItems = [
    "Product Launch",
    "ATL BTL",
    "B2B/B2C Marketing",
    "Digital Media",
    "Meta/Google Add Campaign",
  ],
  description = `We provide end-to-end solutions for brands' B2B & B2C marketing approaches via a time-tested structured plan of action with a 99.99% success rate. Any form of marketing approach—product launch, logo re-launch, ATL/BTL activities, outdoor media, digital media ad campaigns, and akin—is organized, managed, and executed by Team Demigod House. Our exclusive factor makes headlines in domestic and international media.`,
  imageSrc = "4section.webp",
}) => {
  const sectionRef = useRef(null);

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
      const section = sectionRef.current;

      // Animate headline items
      gsap.from(".multi-line-headline span", {
        ...animationConfig.baseConfig,
        ...animationConfig.headlines,
        scrollTrigger: {
          ...animationConfig.baseConfig.scrollTrigger,
          trigger: section.querySelector(".multi-line-headline"),
        },
      });

      // Animate description text
      gsap.from(".serif-text-ct span", {
        ...animationConfig.baseConfig,
        ...animationConfig.text,
        scrollTrigger: {
          ...animationConfig.baseConfig.scrollTrigger,
          trigger: section.querySelector(".serif-text-ct"),
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup animations on unmount
  }, [animationConfig]);

  return (
    <section ref={sectionRef}>
      <main>
        <div className="sec-3 padding-outer" id="ueber">
          <div className="row">
            {/* Headline Column */}
            <div className="col">
              <div className="grid-ct">
                <h2 className="multi-line-headline text-white">
                  {headlineItems.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </h2>
                <div className="picture-ct">
                  <div className="aspect-img-ct">
                    <picture
                      data-parallax-strength="1.2"
                      data-parallax-height="9"
                    >
                      <source
                        media="(min-width: 760px)"
                        data-srcset={imageSrc}
                        srcSet={`./${imageSrc}`}
                      />
                      <img
                        alt="Dynamic Section Image"
                        className="lazy"
                        src={imageSrc}
                        data-src={imageSrc}
                        data-parallax-target=""
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Column */}
            <div className="col">
              <div className="serif-text-ct">
                {description.split(" ").map((word, index) => (
                  <span key={index}>{word} </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SectionFour;
