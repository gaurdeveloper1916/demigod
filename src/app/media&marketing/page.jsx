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
  title: 'Media & Marketing | Demigod House',
  description: "India's Leading Marketing Agency - 13+ Years of Excellence in Brand Development, Seed Funding, Digital Marketing, Print Media Advertising, and B2B/B2C Events. Expert solutions in Contract Manufacturing, Private Equity & Brand Marketing.",
  alternates: {
    canonical: '/media-marketing',
  },
  openGraph: {
    title: 'Media & Marketing Services | Demigod House',
    description: "India's Leading Marketing Agency - 13+ Years of Excellence in Brand Development, Seed Funding, Digital Marketing, Print Media Advertising, and B2B/B2C Events. Expert solutions in Contract Manufacturing, Private Equity & Brand Marketing.",
    url: '/media-marketing',
    siteName: 'Demigod House',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Demigod House Media & Marketing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media & Marketing Services | Demigod House',
    description: "India's Leading Marketing Agency - 13+ Years of Excellence in Brand Development, Seed Funding, Digital Marketing, Print Media Advertising, and B2B/B2C Events.",
    images: '/images/twitter-image.jpg',
  },
  robots: {
    index: true,
    follow: true,
  }
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
      <Partnership/>
      <Getintouch/> 
      {/* <AOSInit /> */}
    </div> 
  );
}

export default Index;
