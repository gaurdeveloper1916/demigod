import Footer from "./component/common/footer/Footer";
import Header from "./component/common/header/Header";
import Formdiv from "./component/events/slider/formdiv/page";
import GetTickets from "./component/events/slider/gettickets/page";
import Slider from "./component/events/slider/slider/Slider";
import Map from "./component/googlemap/Map";
import Booknow from "./react-slick/BookNow";
import FridayNight from "./component/homepage/friday/FridayNight";
import Membership from "./component/homepage/Membership";
import Prochainement from "./component/homepage/Prochainement";
// import Slider from "./component/homepage/Slider";
import Testtube from "./component/homepage/TestTube";
import TwoImagesDiv from "./component/homepage/TwoImagesDiv";

export const metadata = {
title: 'Demigod House - Premier Events & Entertainment Venue',
description: 'Experience unforgettable events at Demigod House. Live music, exclusive parties, fine dining, and world-class entertainment. Book your tickets for upcoming shows and special events.',
alternates: {
  canonical: `https://demigodhouse.com`,
},
openGraph: {
  title: 'Demigod House - Where Epic Events Come Alive',
  description: 'Join us for spectacular events featuring top artists, exclusive parties, and premium entertainment experiences in a luxurious venue setting.',
  url: 'https://demigodhouse.com',
  images: [
    {
      url: '/images/demigod-venue.jpg',
    },
  ],
},
twitter: {
  title: 'Demigod House - Premier Entertainment Destination',
  description: 'Your gateway to extraordinary events, parties and entertainment. Follow us for event updates and exclusive offers.',
  image: '/images/demigod-social.jpg',
},
linkedin: {
  title: 'Demigod House - Leading Entertainment Venue',
  description: 'Premier destination for corporate events, live performances, and exclusive entertainment experiences.',
  image: '/images/demigod-linkedin.jpg',
}
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
