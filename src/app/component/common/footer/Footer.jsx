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
import './index.css'

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
    "DemiGod Art",
    "DemiGod Cloud",
    "DemiGod Estate",
    "DemiGod HealthBox",
    "DemiGod Shield",
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
  className="container-fluid p-0 bg-black"
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
            className="m-0"
            style={{ width: "150px", height: "60px" }}
            src="/images/demigodnew.png"
            alt="Logo"
          />
          <p className="text-center text-web">{item}</p>
        </div>
      ))}
    </div>
  </Marquee>

  <hr className="text-white" />

  {/* Support and Links Section */}
  <div className="container ">
    <div className="row justify-content-center align-items-start">
      {/* Left Column */}
      <div className="col-lg-12 col-md-12 col-12 d-flex flex-wrap justify-content-center align-items-start gap-4">
        <div className="text-white verySmallFont">
          <button className="verySmallFont border-0 rounded px-3 py-2 text-white ">
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
        <div className="text-white verySmallFont">
          <button className="verySmallFont border-0 rounded px-3 py-2 text-white w-10">
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
        <div className="text-white verySmallFont">
          <button className="verySmallFont border-0 rounded px-3 py-2 text-white w-10">
            Shortcuts
          </button>
          <div className="d-flex flex-column gap-3 mediumFont px-2 mt-2">
            {["Home", "Events", "Corporate", "Weddings"].map((item, index) => (
              <div className="d-flex align-items-center" key={index}>
                <MdArrowOutward color="white" className="me-2" />
                <p className="m-0">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-white verySmallFont">
          <button className="verySmallFont border-0 rounded px-3 py-2 text-white w-10">
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
        <div className="text-white verySmallFont">
        <button className="verySmallFont border-0 rounded px-3 py-2 text-white">
          Follow us on Social Media
        </button>
        <ul className="list-unstyled d-flex justify-content-center gap-3 mt-3">
          <li>
            <a href="https://www.facebook.com/DemiGodCloud" className="text-white">
              <FaFacebookF size={20} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/DemiGodCloud" className="text-white">
              <FaInstagram size={20} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/DemiGodCloud" className="text-white">
              <FaXTwitter size={20} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/company/DemiGodCloud" className="text-white">
              <FaLinkedinIn size={20} />
            </a>
          </li>
        </ul>
        </div>
      </div>

      {/* Right Column */}
      {/* <div className="col-lg-6 col-md-6 col-12 d-flex  gap-4">
        <div className="text-white verySmallFont">
          <button className="verySmallFont border-0 rounded px-3 py-2 text-white w-10">
            Shortcuts
          </button>
          <div className="d-flex flex-column gap-3 mediumFont px-2 mt-2">
            {["Home", "Events", "Corporate", "Weddings"].map((item, index) => (
              <div className="d-flex align-items-center" key={index}>
                <MdArrowOutward color="white" className="me-2" />
                <p className="m-0">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-white verySmallFont">
          <button className="verySmallFont border-0 rounded px-3 py-2 text-white w-10">
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
      </div> */}
    </div>
  </div>

  {/* Social Media Section */}
  {/* <div className="container py-4">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-10 col-12 text-white text-center">
        <button className="verySmallFont border-0 rounded px-3 py-2 text-white">
          Follow us on Social Media
        </button>
        <ul className="list-unstyled d-flex justify-content-center gap-3 mt-3">
          <li>
            <a href="https://www.facebook.com/DemiGodCloud" className="text-white">
              <FaFacebookF size={20} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/DemiGodCloud" className="text-white">
              <FaInstagram size={20} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/DemiGodCloud" className="text-white">
              <FaXTwitter size={20} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/company/DemiGodCloud" className="text-white">
              <FaLinkedinIn size={20} />
            </a>
          </li>
        </ul>
        <p>@demigodhouse</p>
      </div>
    </div>
  </div> */}

  {/* Footer Info */}
  <div className="container py-5">
    <div className="row justify-content-between align-items-center">
      <div className="col-lg-10 col-md-9 col-12 text-white">
        <button className="verySmallFont border-0 rounded px-3 py-2 text-white">
          Access Link
        </button>
        <div className="mt-3">
          <div className="d-flex gap-4">
            <div className="d-flex gap-2">
              <FaUserCheck size={18} />
              <p>Register Your Events with Us</p>
            </div>
            <div className="d-flex gap-2">
              <MdUnsubscribe size={18} />
              <p>Subscribe to our Journal</p>
            </div>
          </div>
          <h4 className="mediumFont">DemigodHouse - Lorem Ipsum House</h4>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            consectetur exercitationem officiis reprehenderit neque...
          </p>
          <div className="d-flex gap-4">
            <Link href="#" className="text-white">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-12 text-center">
        <img
          src="./images/demigodnew.png"
          alt="Logo"
          className="img-fluid"
        />
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Footer;
