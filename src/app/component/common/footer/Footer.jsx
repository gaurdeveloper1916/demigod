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
          backgroundImage: "./images/footer_bg.png",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}  
        className="container-fluid p-0 pt-5 bg-black"
      >
        <Marquee
          className="marq"
          scrollamount="25"
          bgcolor="transparent"
          direction="left"
          loop={0}
          speed={150}
        >
          <div className="d-flex gap-4">
            {demiGroup.map((item, i) => {
              return (
                <div key={i + 1}>
                  <img
                    className="m-0"
                    style={{ width: "150px", height: "60px" }}
                    src="/images/demigodnew.png"
                  ></img>
                  <p className="text-center text-web">{item}</p>
                </div>
              );
            })}
          </div>
        </Marquee>
        <hr className="text-white" />
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-lg-9 d-flex">
            <div className="col-lg-8 d-flex flex-lg-row flex-md-row flex-column gap-3">
              <div className="text-white verySmallFont">
                <button className="verySmallFont border-0 rounded px-3 py-2 text-white">
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
                <button className="verySmallFont border-0 rounded px-3 py-2 text-white">
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
            </div>
            <div className="col-lg-4">
              <div className="text-white verySmallFont">
                <button className="verySmallFont border-0 rounded px-3 py-2 text-white">
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

        <div className="d-flex  align-items-center mt-5 ">
          <div className="col-lg-12  d-flex flex-follow mx-lg-0 mx-md-0 mx-3 ">
            <div className="col-lg-9 col-9 d-flex flex-lg-row flex-column justify-content-between">

           
            <div className="col-lg-6  col-12 display flex-item flex-column  text-white verySmallFont ">
              <button className="verySmallFont border-0 rounded px-3 py-2     text-white">
                Follow us on Social Media
              </button>
              <ul className="list-unstyled d-flex flex-lg-row flex-col  display text-center gap-3   px-1 mt-2">
                <li>
                  <a
                    className="text-white "
                    href="https://www.facebook.com/DemiGodCloud"
                  >
                    <FaFacebookF size={20} />
                  </a>
                </li>
                <li>
                  <a
                    className="text-white "
                    href="https://www.facebook.com/DemiGodCloud"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    className="text-white "
                    href="https://www.facebook.com/DemiGodCloud"
                  >
                    <FaXTwitter size={20} />
                  </a>
                </li>
                <li>
                  <a
                    className="text-white"
                    href="https://www.facebook.com/DemiGodCloud"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </li>
                <p>@demigodhouse</p>
              </ul>
            </div>
            <div className="col-lg-5   col-12 display text-white verySmallFont ">
              <button className="verySmallFont border-0 rounded px-3 py-2  text-white">
                Shortcuts
              </button>
              <div className="d-flex gap-3 display mediumFont px-2 mt-2">
                <div className="d-flex">
                  <MdArrowOutward color="white" className="mt-1" />
                  <p>Home</p>
                </div>
                <div className="d-flex">
                  <MdArrowOutward color="white" className="mt-1" />
                  <p>Events</p>
                </div>
                <div className="d-flex">
                  <MdArrowOutward color="white" className="mt-1" />
                  <p>Corporate</p>
                </div>
                <div className="d-flex">
                  <MdArrowOutward color="white" className="mt-1" />
                  <p>Weddings</p>
                </div>
                
              </div>
            </div>
            </div>

          </div>




        </div>

        <div className="d-flex justify-content-center align-items-center mt-5 ">
          <div className="col-lg-9 col-12  d-flex flex-lg-row flex-column  align-items-center mb-5">
            <div className="col-lg-10 text-white verySmallFont display mx-lg-0 mx-md-0 mx-3">
              <button className="verySmallFont border-0 rounded px-3 py-2  text-white">
                Access Link
              </button>
              <div className="d-flex gap-3 display">
                <div className="d-flex gap-1 ">
                  <FaUserCheck size={18} className="mt-1" />
                  <p className="mt-1">Register Your events with us</p>
                </div>

                <div className="d-flex gap-1 ">
                  <MdUnsubscribe size={18} className="mt-1" />
                  <p className="mt-1">Subscribe to our Journel</p>
                </div>
              </div>
              <div>
                <h4 className="mediumfont">DemigodHouse-Lorem Ipsum house</h4>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aspernatur consectetur exercitationem officiis reprehenderit
                  neque, placeat dolorum. Ad aliquam inventore reiciendis
                  provident, atque vitae hic natus cupiditate earum consequuntur
                  quisquam Ad aliquam inventore reiciendis
                  provident, atque vitae Ad aliquam inventore reiciendis
                  provident, atque vitae?
                </p>
                <div className="d-flex gap-4  px-3">
                  <Link href='#' className="text-white">Term & Conditions</Link>
                  <Link href='#' className="text-white">Privact Policy</Link>

                </div>
              </div>
            </div>

            <div className="col-lg-2  d-flex justify-content-center align-items-center">
            <img
                    src="./images/demigodnew.png"
                    //  style={{ width: "300px", height: "94px" }}
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
