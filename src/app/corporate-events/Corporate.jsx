"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../component/common/header/Header";
import "./styles.css";
import SectionOne from "../component/corporate/v2.1/components/SectionOne";
import SectionTwo from "../component/corporate/v2.1/components/SectionTwo";
import SectionFour from "../component/corporate/v2.1/components/SectionFour";
import SectionFive from "../component/corporate/v2.1/components/SectionFive";
import SectionSeven from "../component/corporate/v2.1/components/SectionSeven";
import SectionThree from "../component/corporate/v2.1/components/SectionThree";
import StatisticsSection from "../component/StatisticsSection";

gsap.registerPlugin(ScrollTrigger);

const CorporatePage = () => {
  const lenisRef = useRef();

  // useEffect(() => {
  //   // Initialize Lenis smooth scroll
  //   lenisRef.current = new Lenis({
  //     duration: 1.25,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     orientation: "vertical",
  //     gestureOrientation: "vertical",
  //     smoothWheel: true,
  //     wheelMultiplier: 1,
  //     smoothTouch: false,
  //     touchMultiplier: 2,
  //     infinite: false,
  //   });

  //   // Connect lenis scroll to RAF and GSAP ticker
  //   function raf(time) {
  //     lenisRef.current?.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   // Update ScrollTrigger on scroll
  //   lenisRef.current.on("scroll", ScrollTrigger.update);

  //   // Connect GSAP ticker to Lenis
  //   gsap.ticker.add((time) => {
  //     lenisRef.current?.raf(time * 1000);
  //   });

  //   // Disable GSAP ticker lag smoothing
  //   gsap.ticker.lagSmoothing(0);

  //   // Initialize scroll to anchor functionality
  //   const handleAnchorClick = (e) => {
  //     const target = e.currentTarget;
  //     if (target.hasAttribute("data-anchor-target")) {
  //       e.preventDefault();
  //       const targetId = target.getAttribute("data-anchor-target");
  //       lenisRef.current?.scrollTo(targetId, {
  //         offset: 0,
  //         duration: 1.2,
  //         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //       });
  //     }
  //   };

  //   // Add click listeners to anchor elements
  //   document.querySelectorAll("[data-anchor-target]").forEach((anchor) => {
  //     anchor.addEventListener("click", handleAnchorClick);
  //   });

  //   // Cleanup function
  //   return () => {
  //     // Destroy Lenis instance
  //     lenisRef.current?.destroy();

  //     // Remove GSAP ticker
  //     gsap.ticker.remove(lenisRef.current?.raf);

  //     // Remove anchor click listeners
  //     document.querySelectorAll("[data-anchor-target]").forEach((anchor) => {
  //       anchor.removeEventListener("click", handleAnchorClick);
  //     });

  //     // Kill all ScrollTrigger instances
  //     ScrollTrigger.getAll().forEach((st) => st.kill());
  //   };
  // }, []);

  return (
    <section className="min-vh-100">
      <Header where='corporate'/>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      {/* <SectionFour/> */}
      <SectionFour
        headlineItems={[
          "Product Launch",
          "ATL / BTL  event's",
          "B2B / B2C Marketing",
          "Digital Media",
          "Meta / Google Ad Campaign",
        ]}
        description="We provide end-to-end solutions for brands' B2B & B2C marketing approaches via a time-tested structured plan of action with a 99.99% success rate. Any form of marketing approach—product launch, logo re-launch, ATL/BTL activities, outdoor media, digital media ad campaigns, and akin—is organized, managed, and executed by Team Demigod House. Our exclusive factor makes headlines in domestic and international media."
      imageSrc = "4section.webp"
      />
      <StatisticsSection
        statistics={[
          { value: "At Demigod House, we champion global humanitarian causes and combat climate change through impactful fundraising and charity initiatives. Together, we drive meaningful change for a sustainable and compassionate future.", label1: "Charity and", label2: "Fundraising Events"  },
          { value: "We host exclusive networking events for entrepreneurs, SMEs, MSMEs, and MNCs with 7-star & 5-star hospitality in the best venues of world capitals, i.e., New York, London, Dubai, Abu Dhabi, Amsterdam, Athens, Bangkok, Beijing, Berlin, Zurich, Cape Town, Brasília, Brussels, Buenos Aires, Cairo, Sydney, Dublin, Copenhagen, Kathmandu, Kuala Lumpur, Madrid, Mexico City, Monaco, Moscow, Mumbai, Paris, Santiago, Seoul, Singapore, Taipei, Tokyo, Vienna, Warsaw, Washington D.C., and Wellington.", label1: "Networking", label2: "Events" },
          { value: "We successfully manage and promote political narratives with complete integrity , harmony and professionalism across many democracies globally.", label1: "Political", label2: "Events" },
        ]}
      />
      <SectionFive />

      {/* <SectionSix /> */}
      <StatisticsSection
        statistics={[
          { value: "We manage and organize the most modern and tech-savvy conferences, seminars and webseminars, with atmospheric and integrated decor tailored to the subject of the event.", label1: "Conference and", label2: "Seminars" },
          { value: "Expo and trade shows organised by DemiGod house always result in a tremendous amount of increase in the sale and promotion of the participant’s brand products / services at global platforms or world of commerce ! Connecting businesses, innovators, and audiences to showcase and celebrate cutting-edge products and services worldwide.", label1: "Exhibition's &" ,label2: "Trade Show"},
          { value: "Our expertise curates unforgettable, headline-making award ceremonies with innovative decor designs and the latest technology, including drone shows, pyrotronics, fireworks, and a majestic entertainment experience at exquisite locations.", label1: "Award Ceremony" },
        ]}
      />x

      <SectionFour
             headlineItems={[
              "Company Milestone",
              "CSR / Overseas Ceremony",
              "Experimental  Event's",
        ]}
      description="We celebrate your company milestones with meticulously planned events that showcase your journey and achievements. Our facilitation / CSR ceremonies honor excellence with memorable and impactful recognition. Through experimental and immersive experiences, we create unique moments that captivate your audience. Our Experimental events at global platform deliver's tailored solutions and strategic promotional campaigns that drive  brand success across G20 markets."
      imageSrc="4section.webp"
/>

      {/* <SectionFour/> */}
      {/* <SectionSeven /> */}

    </section>
  );
};

export default CorporatePage;
