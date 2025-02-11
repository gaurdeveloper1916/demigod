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


export const metadata = {
  title: 'Media & Marketing',
  description: "India's Best and Leading Marketing agency with more 13years of Experience in Brand Seed Funding, 3rd party Contract manufacturing, Private Equity, Brand Marketing, Brand Developement, Advertising in Print Media , Digital Marketing and B2B / B2C Events !" 
  ,
  alternates: {
    canonical: `https://www.demigodhouse.com/m&m`,
  },
  openGraph: {
    title: 'Media & Marketing',
    description: "India's Best and Leading Marketing agency with more 13years of Experience in Brand Seed Funding, 3rd party Contract manufacturing, Private Equity, Brand Marketing, Brand Developement, Advertising in Print Media , Digital Marketing and B2B / B2C Events !",
    url: 'https://www.demigodhouse.com/m&m',
    images: [
      {
        url: 'https://www.demigodhouse.com/images/og-image.jpg',
      },
    ],
  },
  twitter: {
    title: 'Media & Marketing',
    description: "India's Best and Leading Marketing agency with more 13years of Experience in Brand Seed Funding, 3rd party Contract manufacturing, Private Equity, Brand Marketing, Brand Developement, Advertising in Print Media , Digital Marketing and B2B / B2C Events !",
    image: 'https://www.demigodhouse.com/images/twitter-image.jpg',
  },
  linkedin: {
    title: 'Media & Marketing',
    description: "India's Best and Leading Marketing agency with more 13years of Experience in Brand Seed Funding, 3rd party Contract manufacturing, Private Equity, Brand Marketing, Brand Developement, Advertising in Print Media , Digital Marketing and B2B / B2C Events !",
    image: 'https://www.demigodhouse.com/images/linkedin-image.jpg',
  },
};

function Index() {
  return (
    <div className="container-fluid p-0 bg-black">
      {/* <Header /> */}
      <Trusted/>
      {/* <Herosection /> */}
      <Community/> 
      <ElectronicCommunity/> 
      <LeadingOrganisation/>
      <Ecosystem />
     
      <Industryevents/>
      <TabsComponent/>
     <Sectionone/>
      {/* <Repetativemandm/> */}

      <Openforbusiness/>
      <Partnership/>
      <Getintouch/>
    </div>
  );
}

export default Index;
