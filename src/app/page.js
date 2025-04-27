import Header from "./component/common/header/Header";
import Industryevents from "./component/mnm/Industryevents";
import TabsComponent from "./component/mnm/TabsComponent";
import Openforbusiness from "./component/mnm/Openforbusiness";
import Getintouch from "./component/mnm/Getintouch";
import Testing from "./component/test/Testing"

export const metadata = {
  metadataBase: new URL('https://www.demigodhouse.com'),
  title: "DemiGod House | Media, Marketing & Events in India & International ! ( DemiGod House Entity is all about Brand Association, Brand Capital Procurement, Brand Seed Funding, Brand Development, Brand Marketing, Brand Management, Print-Media & Electronic Media Advertising, Digital Media Marketing, Event Management Services -  Corporate Events, Weddings and Commercial Events. ) ",
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
    title: "DemiGod House | Media, Marketing & Events ( DemiGod House Entity is all about Brand Association, Brand Capital Procurement, Brand Seed Funding, Brand Development, Brand Marketing, Brand Management, Print-Media & Electronic Media Advertising, Digital Media Marketing, Event Management Services -  Corporate Events, Weddings and Commercial Events. ) ",
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
      <Testing />
      <Industryevents />
      <TabsComponent />
      <Openforbusiness />
      <Getintouch />
    </div>
  );
}
