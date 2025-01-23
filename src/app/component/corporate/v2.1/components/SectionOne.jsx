import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SectionOne = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const marqueeElements = document.querySelectorAll('[data-marquee-target]');

    marqueeElements.forEach((marquee) => {
      const marqueeContent = marquee.querySelector('.marquee-content');
      const marqueeScroll = marquee.querySelector('.marquee-scroll');
      
      // Calculate marquee speed
      const marqueeItemsWidth = marqueeContent.offsetWidth;
      let marqueeSpeed = Number(marquee.getAttribute('data-marquee-speed')) * (marqueeItemsWidth / window.innerWidth);

      // Duplicate content based on data-marquee-duplicate attribute
      if (marquee.getAttribute('data-marquee-duplicate') === "3") {
        for (let i = 0; i < 3; i++) {
          const clone = marqueeContent.cloneNode(true);
          marqueeScroll.appendChild(clone);
        }
      } else {
        const clone = marqueeContent.cloneNode(true);
        marqueeScroll.appendChild(clone);
      }

      // Adjust speed for different screen sizes
      if (window.innerWidth <= 540) {
        marqueeSpeed = marqueeSpeed * 0.25;
      } else if (window.innerWidth <= 1024) {
        marqueeSpeed = marqueeSpeed * 0.5;
      }

      // Set initial direction
      let marqueeDirection = marquee.getAttribute('data-marquee-direction') === 'right' ? -1 : 1;

      // Create the marquee animation
      const marqueeAnim = gsap.to(marquee.querySelectorAll('.marquee-content'), {
        xPercent: -100,
        repeat: -1,
        duration: marqueeSpeed,
        ease: "linear",
        paused: true
      }).totalProgress(0.5);

      gsap.set(marquee.querySelectorAll(".marquee-content"), {
        xPercent: 0
      });

      // Create ScrollTrigger
      ScrollTrigger.create({
        trigger: marquee,
        start: "top bottom",
        end: "bottom top",
        onUpdate(self) {
          if (self.direction !== marqueeDirection) {
            marqueeDirection *= -1;
            if (marquee.getAttribute('data-marquee-direction') === 'right') {
              gsap.to(marqueeAnim, {
                timeScale: (marqueeDirection * -1),
                overwrite: true
              });
            } else {
              gsap.to(marqueeAnim, {
                timeScale: marqueeDirection,
                overwrite: true
              });
            }
          }
          marquee.setAttribute('data-marquee-status', 
            self.direction === -1 ? 'normal' : 'inverted'
          );
        },
        onEnter: () => marqueeAnim.play(),
      });

      // Extra speed on scroll
      const marqueeScrollSpeed = Number(marquee.getAttribute('data-marquee-scroll-speed'));
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: marquee,
          start: "0% 100%",
          end: "100% 0%",
          scrub: 0
        }
      });

      if (marquee.getAttribute('data-marquee-direction') === 'left') {
        tl.fromTo(marqueeScroll, {
          x: `${marqueeScrollSpeed}vw`,
        }, {
          x: `${marqueeScrollSpeed * -1}vw`,
          ease: "none"
        });
      } else if (marquee.getAttribute('data-marquee-direction') === 'right') {
        tl.fromTo(marqueeScroll, {
          x: `${marqueeScrollSpeed * -1}vw`,
        }, {
          x: `${marqueeScrollSpeed}vw`,
          ease: "none"
        });
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section>
      <header className="index-header" id="home">
        <div className="row sub-claim-row">
          <div className="col">
            <div className="sub-claim s1-slider">
              {/* <span className="fw-bold">You Articulate & We Execute Pragmatically</span>
              <span style={{fontSize:'25px'}}>We organize astounding events through our team management, innovation, creativity, and flawless execution.</span>
              <span style={{fontSize:'25px'}}>From New York to New Delhi, we provide our end-to-end corporate event management services, including product launches, trade shows, appreciation ceremonies, board meetings, shareholder meetings, and more.</span>
            
              <i>
                <span>unvergessliche</span> <span>Momente</span>
              </i>{" "}
              <span>zu</span> <span>verwandeln.</span> */}
              <b><h1 className="w-100"><span >You Articlate & We Execute Pragmatically</span> </h1></b>{" "}
              <div className="col-lg-8">
              <h3 className="s1-slider" ><p className="s1-slider-font" >We organise astounding events by our team management,innovation, creativity, and flawless execution.</p>
             <p className="s1-slider-font">From New york to New Delhi we provide our end to end corporate event Management services i.e. product launch,Trade shows,Appreciation ceremonies,Board meetings,Shareholder meetings and akin.</p></h3>

              </div>
             
            </div>
          </div>
        </div>
        <div className="bg-ct">
          {/* <picture
            className="bg first-layer"
            data-parallax-strength="2.5"
            data-parallax-height="5"
          >
            <source
              media="(min-width: 760px)"
              srcSet="images/first-layer-desk.png"
            />
            <img
              alt="Eventgesellschaft in einem Restaurant - vorderste Ebene"
              src="images/first-layer.png"
              data-parallax-target=""
            />
          </picture> */}
          <div className="claim claim-fade-in">
            <div
              className="marquee"
              data-marquee-target=""
              data-marquee-duplicate="3"
              data-marquee-direction="left"
              data-marquee-status="normal"
              data-marquee-speed="25"
              data-marquee-scroll-speed="12"
            >
              <div className="marquee-scroll">
                <div className="marquee-content">
                  <span className="list-item">Experience India's Best Corporate Event Management</span>
                  <div className="line"> </div>
                  <span className="list-item">With Five Star Hospitality Services</span>
                  <div className="line"> </div>
                  <span className="list-item">Most Divine Experience via.</span>
                  <div className="line"> </div>
                  <span className="list-item">Corporate Events With DemiGod House</span>
                  <div className="line"> </div>
                  {/* <span className="list-item">It's about time</span> */}
                  {/* <div className="line"> </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <picture
            className="bg second-layer"
            data-parallax-strength="3.5"
            data-parallax-height="5"
          >
            <source
              media="(min-width: 760px)"
              srcSet="images/second-layer-desk.png"
            />
            <img
              alt="Eventgesellschaft in einem Restaurant - zweite Ebene"
              src="images/second-layer.png"
              data-parallax-target=""
            />
          </picture>
          <picture
            className="bg third-layer"
            data-parallax-strength="4.7"
            data-parallax-height="5"
          >
            <source
              media="(min-width: 760px)"
              srcSet="images/third-layer-desk.png"
            />
            <img
              alt="Eventgesellschaft in einem Restaurant - dritte Ebene"
              src="images/third-layer.png"
              data-parallax-target=""
            />
          </picture> */}
          <picture
            className="bg fourth-layer"
            data-parallax-strength="5.5"
            data-parallax-height="5"
          >
            <source
              media="(min-width: 760px)"
              srcSet="./slider-2.jpg"
            />
            <img
              alt="Eventgesellschaft in einem Restaurant - hinterste Ebene"
              src="./slider-2.jpg"
              data-parallax-target=""
            />
          </picture>
        </div>
      </header>
    </section>
  );
};

export default SectionOne;
