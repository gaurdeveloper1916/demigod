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
                  <span>ATL BTL</span>
                  <span>B2B/B2C Marketing,</span>
                  <span>Digital Media</span>
                  <span>Meta/Google Add Campaign</span>
                </h2>
                <div className="picture-ct">
                  <div className="aspect-img-ct">
                    <picture
                      data-parallax-strength="1.2"
                      data-parallax-height="9"
                    >
                      <source
                        media="(min-width: 760px)"
                        data-srcset="4section.webp"
                        srcSet="4section.webp"
                      />
                      <img
                        alt="Portrait von Tina Genßler"
                        className="lazy"
                        src="4section.webp"
                        data-src="4section.webp"
                        data-parallax-target=""
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="serif-text-ct">
                {/* <span>Ich</span> <span>nehme</span> <span>mir</span>{" "}
                <span>die</span> <span>Zeit,</span>
                <span>deine</span> <span>Vision</span>{" "}
                <i>
                  {" "}
                  <span>bis</span> <span>ins</span>
                  <span>kleinste</span> <span>Zahnrad</span>
                </i>{" "}
                <span>zu</span>
                <span>verstehen</span> <span>und</span> <span>umzusetzen.</span>{" "}
                <span>Mit</span> <span>meinem</span> <span>Gespür</span>{" "}
                <span>für</span>
                <i>
                  <span>aktuelle</span> <span>Trends</span>
                </i>{" "}
                <span>sowie</span> <span>meinem</span>
                <span>Blick</span> <span>für's</span> <span>Detail</span>{" "}
                <span>verwandle</span>
                <span>ich</span> <span>jeden</span> <span>Anlass</span>{" "}
                <span>in</span> <span>ein</span>
                <span>Ereignis,</span> <span>das</span> <span>noch</span>{" "}
                <span>lange</span>
                <i>
                  <span>nach</span> <span>dem</span> <span>letzten</span>{" "}
                  <span>Gong</span>
                  <span>in</span> <span>Erinnerung</span> <span>bleibt</span>
                </i>
                <span>.</span> */}
                We Provide End to End Solutions for brands B2B & B2C marketing approach via a time tested structured plan ofaction with 99.99% success rate. Any form of marketing approachi.e. product launch, Logo re-launch, ATL/BTL activities, Outdoor Media, Digital media ads campaign and akin.    Organised, Managed & Executed by Team Demigod House exclusive factor makeheadlines in Domestic & International media. 
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SectionFour;
