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
    { name: "DemiGod Estate", imageUrl: "http://www.amgbharat.com/assets/images/navlogo.png" }

  ];
  const shortcut = [
    { name: "Home", linking: "/" },
    { name: "M&M", linking: "/m&m" },
    { name: "Corporate", linking: "corporate" },
    { name: "Weddings", linking: "wedding" },
    { name: "Contact us", linking: "contact-us" },
    { name: "About us", linking: "/about_us" },
  ];
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("./images/footer_bg.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="container-fluid p-0 bg-black relative z-50"
      >
        {/* Marquee Section */}
        <Marquee
          className="marq"
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

        <hr className="text-white" />

        {/* Support and Links Section */}
        <div className="container-fluid py-5">
          <div className="row justify-content-center align-items-start">
            {/* Left Column */}
            <div className="col-lg-10 col-md-12 col-12 d-flex flex-wrap justify-content-between align-items-start gap-4 ">
              <div className="footer_logo">
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
                <button className="smallfont border-0 rounded px-3 py-2 text-white ">
                  Help Or Support ?
                </button>
                <div className="mt-3 px-3">
                  <p className="m-0">Phone</p>
                  <p className="m-0">+91-8355723794</p>
                  <p>+91-8355723794</p>
                  <p className="m-0">Email</p>
                  <p>info@demigodhouse.com</p>
                </div>
              </div>
              <div className="text-white smallfont">
                <button className="smallfont border-0 rounded px-3 py-2 text-white w-10">
                  Event Categories
                </button>
                <div className="mt-3 px-3">
                  <p className="m-0">Phone</p>
                  <p className="m-0">+91-8355723794</p>
                  <p>+91-8355723794</p>
                  <p className="m-0">Email</p>
                  <p>info@demigodhouse.com</p>
                </div>
              </div>
              <div className="text-white smallfont">
                <button className="smallfont border-0 rounded px-3 py-2 text-white w-10">
                  Shortcuts
                </button>
                <div className="d-flex flex-column gap-2 mediumFont px-2 mt-2">
                  {shortcut.map((item, index) => (
                    <Link key={item} className="text-decoration-none" href={item.linking}>
                      <div className="d-flex align-items-center" key={index}>
                        <MdArrowOutward color="white" className="me-2" />
                        <p className="m-0 text-white">{item.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="text-white smallfont">
                <button className="smallfont border-0 rounded px-3 py-2 text-white w-10">
                  Services
                </button>
                <div className="mt-3 px-3">
                  <p className="m-0">Phone</p>
                  <p className="m-0">+91-8355723794</p>
                  <p>+91-8355723794</p>
                  <p className="m-0">Email</p>
                  <p>info@demigodhouse.com</p>
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