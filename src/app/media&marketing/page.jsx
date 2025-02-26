import React from "react";
import Header from "../component/common/header/Header";
import Herosection from "../component/mnm/Herosection";
import Community from "../component/mnm/Community";
import Ecosystem from "../component/mnm/Ecosystem";
import Industryevents from "../component/mnm/Industryevents";
import Openforbusiness from "../component/mnm/Openforbusiness";
import Partnership from "../component/mnm/Partnership";
import Getintouch from "../component/mnm/Getintouch";
import TabsComponent from "../component/mnm/TabsComponent"
import SwiperContainer from "../component/mnm/trusted/SwiperContainer";
import Trusted from "../component/mnm/trusted/Trusted";
import OnScrollToChnageDiv from "../component/resuablecomponents/OnScrollToChnageDiv";
import LeadingOrganisation from "../component/mnm/LeadingOrganisation";
import Footer from "../component/common/footer/Footer";
import ElectronicCommunity from "../component/mnm/slider/ElectronicCommunity";
import Sectionone from "../component/mnm/Sectionone"
import Repetativemandm from "../component/mnm/Repetativemandm"
import AOSInit from "../component/AOSInit";


export const metadata = {
  metadataBase: new URL('https://www.demigodhouse.com'),
  title: "DemiGod House | Media, Marketing & Events",
  description: "DemiGod House specializes in media, marketing, and events. We provide top-tier brand development, advertising, and seed funding solutions worldwide.",

  keywords: ["Best Marketing Agency in Mumbai", "Best Marketing Agency in New Delhi", "Best Marketing Agency in India", "Best Marketing Agency in Dubai", "Best Marketing Agency in London", "Best Brand Development Agency in India", "Brand Seed Funding", "Advertising Agency", "Top Marketing Agency in Mumbai", "Top Marketing Agency in New Delhi", "Top Marketing Agency in India", "Top Marketing Agency in Dubai", "Top Marketing Agency in London", "Top Brand Development Agency in India", "Top Brand Seed Funding", "Top Advertising Agency", "Digital Marketing Services", "Social Media Marketing", "Content Marketing", "SEO Services", "PPC Advertising", "Brand Strategy", "Event Management", "PR Services", "Media Planning", "Marketing Consultancy", "Creative Agency", "Integrated Marketing", "B2B Marketing", "B2C Marketing", "Marketing Analytics", "Email Marketing", "Influencer Marketing", "Brand Identity Design", "Marketing ROI", "Lead Generation", "Market Research", "Campaign Management", "Marketing Automation", "Video Marketing", "Corporate Events", "Brand Positioning", "Growth Marketing", "Performance Marketing", "Marketing Strategy", "Marketing Solutions"],

  alternates: {
    canonical: 'https://www.demigodhouse.com/',
  },

  openGraph: {
    title: "DemiGod House | Media, Marketing & Events",
    description: "Leading marketing and brand development agency offering expert advertising, seed funding, and media solutions in India, Dubai, London, and beyond.",
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
    description: "Top marketing agency for brand development, advertising, and seed funding in Mumbai, New Delhi, Dubai, London, and more.",
    images: 'https://www.demigodhouse.com/images/twitter-image.jpg',
    site: '@YourTwitterHandle', // Replace with your actual Twitter handle
  },

  robots: {
    index: true,
    follow: true,
  },

  other: {
    'fb:app_id': 'YourFacebookAppID', // Replace with your actual Facebook App ID
  },
};

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
      <TabsComponent/>
      {/* <Sectionone/>   */}
      {/* <Repetativemandm/> */}

      <Openforbusiness/>
      {/* <Partnership/> */}
      <Getintouch/> 
      {/* <AOSInit /> */}
    </div> 
  );
}

export default Index;
