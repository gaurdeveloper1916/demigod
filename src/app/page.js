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
  metadataBase: new URL('https://www.demigodhouse.com'),
  title: "DemiGod House | Media, Marketing & Events",
  description: "DemiGod House specializes in media, marketing, and event management. We provide world-class corporate event solutions, wedding planning, and brand experiences across the globe.",

  keywords: [
    "Best Corporate Event Management Company",
    "Best Wedding Planners",
    "Best Corporate Event Management Company in USA",
    "Best Corporate Event Management Company in New York",
    "Best Corporate Event Management Company in UK",
    "Best Corporate Event Management Company in London",
    "Best Corporate Event Management Company in Chicago",
    "Best Corporate Event Management Company in Mumbai",
    "Best Corporate Event Management Company in New Delhi",
    "Best Corporate Event Management Company in Jaipur",
    "Best Corporate Event Management Company in Bengaluru",
    "Best Corporate Event Management Company in Pune",
    "Best Corporate Event Management Company in South Africa",
    "Best Corporate Event Management Company in Thailand",
    "Best Corporate Event Management Company in Dubai",
    "Best Corporate Event Management Company in Spain",
    "Best Corporate Event Management Company in Germany",
    "Best Corporate Event Management Company in Poland",
  ],

  alternates: {
    canonical: 'https://www.demigodhouse.com/',
  },

  openGraph: {
    title: "DemiGod House | Media, Marketing & Events",
    description: "Leading corporate event management company with expertise in media, marketing, and luxury event planning worldwide. Experience excellence in event execution.",
    url: 'https://www.demigodhouse.com',
    siteName: 'DemiGod House',
    type: 'website',
    images: [
      {
        url: 'https://www.demigodhouse.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "DemiGod House | Media, Marketing & Events",
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "DemiGod House | Media, Marketing & Events",
    description: "DemiGod House specializes in media, marketing, and world-class event planning. Your trusted partner for corporate and luxury events worldwide.",
    images: 'https://www.demigodhouse.com/images/twitter-image.jpg',
    site: '@YourTwitterHandle', 
  },

  robots: {
    index: true,
    follow: true,
  },

  other: {
    'fb:app_id': 'YourFacebookAppID', 
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
