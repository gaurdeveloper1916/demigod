import Footer from "./component/common/footer/Footer";
import Header from "./component/common/header/Header";
import Slider from "./component/events/slider/slider/Slider";
import Map from "./component/googlemap/Map";
import Booknow from "./component/homepage/BookNow";
import FridayNight from "./component/homepage/FridayNight";
import Membership from "./component/homepage/Membership";
import Prochainement from "./component/homepage/Prochainement";
// import Slider from "./component/homepage/Slider";
import Testtube from "./component/homepage/TestTube";
import TwoImagesDiv from "./component/homepage/TwoImagesDiv";

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <Slider />
      <TwoImagesDiv />
      <Prochainement />
      <Membership />
      <Booknow />
      <Testtube />
      <FridayNight />
      <div className="mt-4">
        {" "}
        <Map />
      </div>
    </div>
  );
}
