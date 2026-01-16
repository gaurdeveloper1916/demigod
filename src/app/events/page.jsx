
import React from "react";
import Header from "../component/common/header/Header";
import "./index.css";

import TwoImagesDiv from "../component/homepage/TwoImagesDiv";
import Prochainement from "../component/homepage/Prochainement";
import Membership from "../component/homepage/Membership";
import Booknow from "../react-slick/BookNow";
import GetTickets from "../component/events/slider/gettickets/page";
import Formdiv from "../component/events/slider/formdiv/page";
import FridayNight from "../component/homepage/friday/FridayNight";

import CarouselSection from "../component/events/slider/herosection/Herosection"
import Link from "next/link";
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
    // <div className="container-fluid p-0 bg-black">
    //   <Header />
      
    //   <CarouselSection/>
    //   <TwoImagesDiv />
    //   <Prochainement />
    //   <Membership />
    //   <Booknow />
    //   <GetTickets />
    //   <Formdiv />
    //   <FridayNight />
    //   <div className="text-center mt-5 text-white">
    //     <h2>Join us for an unforgettable Friday night!</h2>
    //     <p>Experience the best events and activities, curated just for you.</p>
    //     <Link href="/about-us">
    //       <button className="btn btn-primary px-4 py-2">Reach Us</button>
    //     </Link>
    //   </div>
    // </div>
     <>
      {/* MAIN PAGE CONTENT */}
      <div className="container-fluid p-0 bg-black text-white">
        <Header />

        <CarouselSection />
        <TwoImagesDiv />
        <Prochainement />
        <Membership />
        <Booknow />
        <GetTickets />
        <Formdiv />
        <FridayNight />

        <div className="text-center mt-5 pb-5">
          <h2>Join us for an unforgettable Friday night!</h2>
          <p>Experience the best events and activities, curated just for you.</p>
          <Link href="/about-us">
            <button className="btn btn-primary px-4 py-2">
              Reach Us
            </button>
          </Link>
        </div>
      </div>

      {/* BLUR OVERLAY */}
      <div className="blur-overlay">
        <div className="blur-content">
          <div>
            <h1 className="display-5 fw-bold mb-2">
              We are <span className="text-primary">Almost</span> there!
            </h1>

            <p className="mb-4 fs-5">
              Stay tuned for something amazing!!!
            </p>

            {/* Progress Bar */}
            <div className="progress mx-auto" style={{ maxWidth: "500px" }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: "75%" }}
              >
                75%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
