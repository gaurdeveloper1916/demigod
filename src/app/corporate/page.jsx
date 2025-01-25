"use client";

import SectionSix from "@/app/component/corporate/v2.1/components/SectionFive";
import SectionSeven from "@/app/component/corporate/v2.1/components/SectionSix";
import SectionThree from "@/app/component/corporate/v2.1/components/SectionSeven";
import "./styles.css";
import Header from "../component/common/header/Header";

const CorporatePage = () => {
  return (
    <section className="min-vh-100">
      <Header/>
     
      <SectionSix />
      <SectionSeven />

      <SectionThree />
    </section>
  );
};

export default CorporatePage;
