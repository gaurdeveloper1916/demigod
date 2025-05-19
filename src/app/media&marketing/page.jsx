import React from "react";
import Header from "../component/common/header/Header";
import Herosection from "../component/mnm/Herosection";
import Community from "../component/mnm/Community";
import Industryevents from "../component/mnm/Industryevents";
import Openforbusiness from "../component/mnm/Openforbusiness";
import Getintouch from "../component/mnm/Getintouch";
import TabsComponent from "../component/mnm/TabsComponent"
import LeadingOrganisation from "../component/mnm/LeadingOrganisation";
import ElectronicCommunity from "../component/mnm/slider/ElectronicCommunity";



export const metadata = {
  metadataBase: new URL('https://www.demigodhouse.com'),
  title: "DemiGod House | Media, Marketing & Events",
  description: "DemiGod House specializes in media, marketing, and events. We provide top-tier brand development, advertising, and seed funding solutions worldwide.",

  keywords: [
    "Best Media and Marketing Agency","Best Digital Marketing Company","Best Social Media Marketing Agency","Best Brand Marketing Agency","Best Influencer Marketing Company","Best Content Marketing Agency","Best Video Production Company","Best PR and Communications Agency","Best Experiential Marketing Agency","Best Creative Advertising Agency","Best SEO and Digital Strategy Firm","Best Performance Marketing Agency","Best Media Buying Agency","Best Integrated Marketing Solutions Provider","Best Corporate Branding Agency","Best Event Marketing Services","Best Corporate Event Management Company","Best Wedding Planners","Best Corporate Event Management Company in USA","Best Corporate Event Management Company in New York","Best Corporate Event Management Company in UK","Best Corporate Event Management Company in London","Best Corporate Event Management Company in Chicago","Best Corporate Event Management Company in Mumbai","Best Corporate Event Management Company in New Delhi","Best Corporate Event Management Company in Jaipur","Best Corporate Event Management Company in Bengaluru","Best Corporate Event Management Company in Pune","Best Corporate Event Management Company in South Africa","Best Corporate Event Management Company in Thailand","Best Corporate Event Management Company in Dubai","Best Corporate Event Management Company in Spain","Best Corporate Event Management Company in Germany","Best Corporate Event Management Company in Poland","Luxury Event Planning","Corporate Event Solutions","Brand Experience Agency","Wedding Event Management","International Event Planners","Corporate Meeting Planners","Conference Management Services","Product Launch Events","Award Ceremony Organizers","Team Building Events","Virtual Event Management","Hybrid Event Solutions","Exhibition Management","Trade Show Organizers","Corporate Gala Events","Destination Wedding Planning","Celebrity Event Management","Fashion Show Management","Music Festival Organizers","Sports Event Management","Corporate Entertainment Solutions","Event Marketing Services","Event Technology Solutions","Sustainable Event Management","MICE Event Planning","Corporate Retreat Planning"
],

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
    <div className="container-fluid p-0 bg-black overflow-hidden w-100">
      <div className="w-100 m-0">
        <Header />
        <Herosection /> 
        <div className="w-100">
          <Community/> 
        </div>
        <div className="w-100">
          <ElectronicCommunity/> 
        </div>
        <div className="w-100">
          <LeadingOrganisation/> 
        </div>
        <div className="w-100">
          <Industryevents/>
        </div>
        <div className="w-100">
          <TabsComponent/>
        </div>
        <div className="w-100">
          <Openforbusiness/>
        </div>
        <Getintouch/> 
      </div>
    </div> 
  );
}

export default Index;
