"use client";
import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { MdArrowOutward, MdUnsubscribe } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import Link from "next/link";
import BlinkAnimation from './BlinkAnimation'
import "./index.css";

function Footer(props) {
  const eventCategory = [
    "Art Affairs",
    "Agro & Ecological Events",
    " Cultural Events",
    "Educational Events",
    " Exhibition",
    " Food Festivals",
    " Health Events",
    "Kids Zone",
    "Motor Sports",
    "NightLife Events",
    "Religious Events",
    "Sports Events",
    "Tech Events",
    "Travel Events",
  ];
  const servicesList = [
    "General information",
    "About the shelter",
    "Statistic data",
    "Job",
    "Tenders",
    "Contact",
  ];
  const demiGroup = [
    { name: "DemiGod Art", imageUrl: "./header&footer/art_logo_finel-removebg-preview.png",link:"https://www.demigodcloud.com/" },
    { name: "DemiGod Cloud", imageUrl: "https://www.demigodcloud.com/images/demigod%20vector%20nav.webp",link:"https://www.artdemigod.com/" },
    { name: "DemiGod HealthBox", imageUrl: "./header&footer/healthboxlogo.png" },
    { name: "Demigod House", imageUrl: "./header&footer/new_logo.png" ,link:"http://demigodhouse.com/"  },
    { name: "Anagari", imageUrl: "./header&footer/anagari.png", link:"http://www.anagari.com/" },
    { name: "DemiGod Estate", imageUrl: "./header&footer/navlogo.png",link:"http://www.amgbharat.com/" }
  ];
  const shortcut = [
    { name: "M&M", linking: "/" },
    { name: "Corporate", linking: "/corporate-events" },
    { name: "Weddings", linking: "/wedding-planners" },
    { name: "Contact us", linking: "contact-us" },
    { name: "About us", linking: "/about-us" },
    { name: "House Events", linking: "/events" },
  ];
  const events = [
    { slug: 'punjabi-delegates', name: 'Punjabi Delegates' },
    { slug: 'wine-making-festival', name: 'Wine Making Festival' },
    { slug: 'car-o-bar-event', name: 'Car-O-Bar' },
    { slug: 'tinder-night-events', name: 'Tinder Nights' },
    { slug: 'entrepreneurship-forum-2025', name: 'Entrepreneurship Forum' },
  ];
  const events2 = [
    { slug: 'punjabi-delegates', name: "Live Concert's" },
    { slug: 'economic-patriots-summit-india', name: 'Exhibitions' },
    { slug: 'travel-tourism-event', name: 'Travel Events' },
    { slug: 'marathon-mingle-event', name: "Sport's Event" },
    { slug: 'oktober-fest-event', name: 'Art & Craft' },
  ];
  return (
    <>
      <div

        className="container-fluid p-0 bg-black relative z-50 footer-background"
      >
        {/* Marquee Section */}
        <div className="d-lg-block d-none">
          <Marquee
            className="marq "
            scrollamount="25"
            bgcolor="transparent"
            direction="left"
            loop={0}
            speed={150}
          >
            <div className="d-flex gap-4">
              {demiGroup.map((item, i) => (
                <Link  key={i + 1} target="blank" className="text-deco" href={`${item.link}`}>
                 <div className="text-center">
                  <img
                    className="m-0 logoImage-footer-marque"
                    src={item.imageUrl}
                    alt="Logo"
                  />
                  <p className="text-center text-web">{item.name}</p>
                </div>
                </Link>
               
              ))}
            </div>
          </Marquee>
        </div>

        <div className="d-lg-none d-block">
          <BlinkAnimation />

        </div>

        <hr className="text-white" />

        {/* Support and Links Section */}
        <div className="container-fluid py-5">
          <div className="row justify-content-center align-items-start">
            {/* Left Column */}
            <div className="col-lg-10 col-md-12 col-12 d-flex flex-wrap justify-content-between align-items-start gap-4 ">
              <div className="footer_logo  d-lg-block d-none">
                <img
                  src="./header&footer/new_logo.png"
                  alt="Logo"
                  className=" logoImage-footer"
                />
                <ul className="list-unstyled d-flex  justify-content-center align-items-center gap-3 ">
                  <li>
                    <a
                      href="https://www.facebook.com/DemiGodCloud"
                      className="text-white"
                    >
                      <FaFacebookF size={30} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/demigod_house?igsh=MWY4YWRoZ3k5OHN3OQ=="
                      className="text-white"
                    >
                      <FaInstagram size={30} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="X: https://x.com/demigodhouse?t=YuIHCsW6riNaPHr8EfYs_A&s=09"
                      className="text-white"
                    >
                      <FaXTwitter size={30} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/demigod-house-0b1447366/"
                      className="text-white"
                    >
                      <FaLinkedinIn size={30} />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-white smallfont">
                <p className="sub-meduium-font border-0 fw-bold rounded  py-2 text-heading ">
                  Event Categories
                </p>
                <div className="d-flex flex-column gap-2 mediumfont">
                  {events2.map(({ slug, name },index) => (
                    <div key={index} className="d-flex align-items-center">
                      <MdArrowOutward color="white" className="me-2" />
                      <Link
                        key={slug}
                        href={`/landingpage?slug=${slug}`}
                        className="m-0 text-deco text-white"
                      >
                        {name}
                      </Link>
                    </div>

                  ))}
                </div>
              </div>
              <div className=" text-white smallfont">
                <p className="sub-meduium-font border-0 fw-bold rounded py-2  text-heading w-10">
                  Trending Event's
                </p>
                <div className="d-flex flex-column gap-2 mediumfont">
                  <div className="d-flex flex-column gap-2 mediumfont">
                    {events.map(({ slug, name },index) => (
                      <div key={index} className="d-flex align-items-center">
                      <MdArrowOutward color="white" className="me-2" />
                      <Link
                        key={slug}
                        href={`/landingpage?slug=${slug}`}
                        className="m-0 text-deco text-white"
                      >
                        {name}
                      </Link>
                      </div>
                    ))}
                  </div>


                </div>
              </div>
              <div className="text-white smallfont">
                <p className="sub-meduium-font border-0 rounded fw-bold px-2 py-2 text-heading w-10">
                  Page's Link
                </p>
                <div className="d-flex flex-column gap-2  px-2 mt-2">
                  {shortcut.map((item, index) => (
                    <Link key={item} className="text-decoration-none" href={item.linking}>
                      <div className="d-flex align-items-center" key={index}>
                        <MdArrowOutward color="white" className="me-2" />
                        <p className="m-0 text-white mediumfont" >{item.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="text-white smallfont">
                <p className="sub-meduium-font border-0 rounded px-2 py-2 fw-bold w-10 text-heading">
                  Connect with us :
                </p>
                <div className="mt-3 px-3 mediumfont">
                  <p className="m-0">Phone</p>
                  <p className="m-0">+91-8355897803</p>
                  <p>+91-7023843975</p>
                  <p className="m-0">Email</p>
                  <p>dev@demigodhouse.com</p>
                </div>
              </div>

            </div>


          </div>
        </div>


      </div>
    </>
  );
}

export default Footer;