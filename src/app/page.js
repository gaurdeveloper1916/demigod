import Header from "./component/common/header/Header";
import Formdiv from "./component/events/slider/formdiv/page";
import GetTickets from "./component/events/slider/gettickets/page";
import Slider from "./component/events/slider/slider/Slider";
import Booknow from "./react-slick/BookNow";
import FridayNight from "./component/homepage/friday/FridayNight";
import Membership from "./component/homepage/Membership";
import Prochainement from "./component/homepage/Prochainement";

import TwoImagesDiv from "./component/homepage/TwoImagesDiv";

export const metadata = {
  title: 'Demigod House',
  description: 'Media and Marketing Event’s',
  alternates: {
    canonical: ``,
  },
  openGraph: {
    title: '',
    description: '',
    url:'',
    images: [
      {
        url: '',
      },
    ],
  },
  twitter: {
    title: '',
    description: '',
    image: '',
  },
  linkedin: {
    title:'',
    description: '',
    image: '',
  },
};
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
