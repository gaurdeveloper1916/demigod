"use client";
import SectionOne from "@/app/component/corporate/v2.1/components/SectionOne";
import SectionTwo from "@/app/component/corporate/v2.1/components/SectionTwo";
import SectionFour from "@/app/component/corporate/v2.1/components/SectionThree";
import SectionFive from "@/app/component/corporate/v2.1/components/SectionFour";
import SectionSix from "@/app/component/corporate/v2.1/components/SectionFive";
import SectionSeven from "@/app/component/corporate/v2.1/components/SectionSix";
import SectionThree from "@/app/component/corporate/v2.1/components/SectionSeven";
import "./styles.css";

const CorporatePage = () => {
  return (
    <section className="min-vh-100">
      <SectionOne />
      <SectionTwo />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionThree />
    </section>
  );
};

export default CorporatePage;
