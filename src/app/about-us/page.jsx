import Header from "../component/common/header/Header";

import Section1 from "./components/aboutusHero";
import Section2 from "./components/corebeleifs";
import Section3 from "./components/marketculture";
import Section4 from "./components/stategicalliance";
import Section5 from "./components/$500investment";
import Section6 from "./components/ourcommitments";
import Section7 from "./components/carbonCredits";
import Section8 from "./components/visionary";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      
        <Section1 />
      
      <div className="section-wrapper">
        <Section2 />
      </div>
      <div className="section-wrapper">
        <Section3 />
      </div>
      <div className="section-wrapper">
        <Section4 />
      </div>
      <div className="section-wrapper">
        <Section5 />
      </div>
      <div className="section-wrapper">
        <Section6 />
      </div>
      <div className="section-wrapper">
        <Section7 />
      </div>
      <div className="section-wrapper">
        <Section8 />
      </div>
    </div>
  );
};

export default page;