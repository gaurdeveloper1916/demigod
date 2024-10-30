"use client";
import Header from "../component/common/header/Header";
import BackSlider from "../component/events/slider/backslider/page";
import Slickslider from "../component/events/slider/backslider/Slickslider";
import BolgueCulture from "../component/events/slider/blogueculture/page";
import Formdiv from "../component/events/slider/formdiv/page";
import GetTickets from "../component/events/slider/gettickets/page";
// import Slider from "../component/events/slider/slider/Slider";
import TabPanel from "../component/events/slider/tabs/TabPanel";
import Slider from "../component/homepage/Slider";
const page = () => {
  return (
    <>
      <div className="bg-black p-0">
        <Header/>
        <Slider />
        <div className="d-md-none d-lg-block d-block">
        <TabPanel />
          </div>
       
        <BolgueCulture />
        <GetTickets/>
        <BackSlider />
        <Slickslider />
        <Formdiv/>
      </div>
    </>
  );
};

export default page;
