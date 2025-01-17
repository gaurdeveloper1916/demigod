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
                <span className="line">
                {/* <h1 className="title">CORPORATE </h1> */}
                </span>
                <span className="line">
                <h1 className="se-t sie-corporate_2-text st-m-heading st-d-heading se-rc">Corporate Events with DemiGod House is a world standard's exposure integrated with attractions i.e.</h1>{" "}
                  <i>
                  <p className="se-t sie-corporate_3-text st-m-paragraph st-d-paragraph se-rc"> GEN Z Tech Decore, Mesmerising Flower Decor and artwork by celebrity artist, Pyrotronics, Drone Shows, Tradional decore, live entertainment , talent management , 5 Star hospitality accomodation and transport services, PR & Markets news breaker! </p>
                   <br />
                  
                  </i>{" "} 
                </span>
                <span className="line">
                
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