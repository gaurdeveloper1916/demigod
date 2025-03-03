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

    { name: "DemiGod Art", imageUrl: "https://www.artdemigod.com/assets/image/art%20logo%20finel.png" },
    { name: "DemiGod Cloud", imageUrl: "https://www.demigodcloud.com/images/demigod%20vector%20nav.webp" },
    { name: "DemiGod HealthBox", imageUrl: "./logo/healthboxlogo.png" },
    { name: "Demigod", imageUrl: "./logo/demigodlogo.png" },

    { name: "Anagari", imageUrl: "./logo/anagari.png" },
    { name: "DemiGod Estate", imageUrl: "./images/navlogo.png" }

  ];
  const shortcut = [
    { name: "M&M", linking: "/" },
    { name: "Corporate", linking: "/corporate-events" },
    { name: "Weddings", linking: "/wedding-planners" },
    { name: "Contact us", linking: "contact-us" },
    { name: "About us", linking: "/about-us" },
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
                <div key={i + 1} className="text-center">
                  <img
                    className="m-0 logoImage-footer-marque"
                    src={item.imageUrl}
                    alt="Logo"
                  />
                  <p className="text-center text-web">{item.name}</p>
                </div>
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
                  src="./images/demigodnew.png"
                  alt="Logo"
                  className="img-fluid logoImage-footer"
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
                      href="https://www.instagram.com/DemiGodCloud"
                      className="text-white"
                    >
                      <FaInstagram size={30} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/DemiGodCloud"
                      className="text-white"
                    >
                      <FaXTwitter size={30} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/company/DemiGodCloud"
                      className="text-white"
                    >
                      <FaLinkedinIn size={30} />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-white smallfont">
                <p className="sub-meduium-font border-0 fw-bold rounded px-2 py-2 text-heading ">
                  Help Or Support ?
                </p>
                <div className="mt-3 px-2  mediumfont ">
                  <p className="ml-4">Phone</p>
                  <p className="m-0">+91-8355897803</p>
                  <p>+91-7023843975</p>
                  <p className="m-0">Email</p>
                  <p>dev@demigodhouse.com</p>
                </div>
              </div>
              <div className="text-white smallfont">
                <p className="sub-meduium-font border-0 fw-bold rounded px-2 py-2  text-heading w-10">
                  Event Categories
                </p>
                <div className="mt-3 px-3 mediumfont">
                  <p className="m-0">Phone</p>
                  <p className="m-0">+91-8355897803</p>
                  <p>+91-7023843975</p>
                  <p className="m-0">Email</p>
                  <p>dev@demigodhouse.com</p>
                </div>
              </div>
              <div className="text-white smallfont">
                <p className="sub-meduium-font border-0 rounded fw-bold px-2 py-2 text-heading w-10">
                  Shortcuts
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
                  Services
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