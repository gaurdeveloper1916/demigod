import React from "react";
import Header from "../component/common/header/Header";
import "./index.css";
import Herosection from "../component/mnm/Herosection";
import Community from "../component/mnm/Community";
import Ecosystem from "../component/mnm/Ecosystem";
import Industryevents from "../component/mnm/Industryevents";
import Openforbusiness from "../component/mnm/Openforbusiness";
import Partnership from "../component/mnm/Partnership";
import Getintouch from "../component/mnm/Getintouch";
import SwiperContainer from "../component/mnm/trusted/SwiperContainer";
import Trusted from "../component/mnm/trusted/Trusted";
import OnScrollToChnageDiv from "../component/resuablecomponents/OnScrollToChnageDiv";
import LeadingOrganisation from "../component/mnm/LeadingOrganisation";
import Footer from "../component/common/footer/Footer";
import ElectronicCommunity from "../component/mnm/slider/ElectronicCommunity";
function Index() {
  return (
    <div className="container-fluid p-0 bg-black">
      <Header />
      {/* <Trusted/> */}
      <Herosection />
      <Community/>
      <ElectronicCommunity/>
      <LeadingOrganisation/>
      {/* <Ecosystem /> */}
      <Industryevents/>
      <Openforbusiness/>
      <Partnership/>
      <Getintouch/>
    </div>
  );
}

export default Index;
