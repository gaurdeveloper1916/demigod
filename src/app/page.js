import Footer from "./component/common/footer/Footer";
import Header from "./component/common/header/Header";
import Formdiv from "./component/events/slider/formdiv/page";
import GetTickets from "./component/events/slider/gettickets/page";
import Slider from "./component/events/slider/slider/Slider";
import Map from "./component/googlemap/Map";
import Booknow from "./component/homepage/BookNow";
import FridayNight from "./component/homepage/friday/FridayNight";
import Membership from "./component/homepage/Membership";
import Prochainement from "./component/homepage/Prochainement";
// import Slider from "./component/homepage/Slider";
import Testtube from "./component/homepage/TestTube";
import TwoImagesDiv from "./component/homepage/TwoImagesDiv";

export default function Home() {
  return (
    <div className="bg-black container-fluid p-0">
      <Header />
      <Slider />
      <TwoImagesDiv />
      <Prochainement />
      <Membership />
      <Booknow />
      <GetTickets/>
      <Formdiv/>
      {/* <Testtube /> */}
      <FridayNight />

    </div>
  );
}
