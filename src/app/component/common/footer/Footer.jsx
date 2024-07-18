"use client"
import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

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
      <div className="container-fluid  p-0">
        <footer className="footer-cont d-flex text-lg-start text-white ">
          <div className="container p-lg-4">
            <div className="d-flex flex-column justify-content-center   flex-lg-row ">
              <div className="d-flex justify-content-center align-items-center">

             
              <div className="col-lg-12 col-7 text-center  ">
                  <img
                    src="./images/demigodnew.png"
                    //  style={{ width: "300px", height: "94px" }}
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                
              </div>
              </div>
            
              <div className="col-lg-5 d-flex gap-2  ">

                <div className="col-lg-6 ">
           
                    <ul className="list-unstyled text-start">
                      {eventCategory.slice(0, 8).map((item, i) => {
                        return (
                          <li key={i+1} className="mb-2">
                            <FaHandPointRight color="#ebc013" />
                            <a
                              href="#!"
                              className="text-white text-center text-dec fs-custom"
                            >
                              <i className="fas fa-paw pe-3"></i>
                              {item}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
              
                </div>
                <div className="col-lg-6 ">
                    <ul className="list-unstyled text-start">
                      {eventCategory.slice(8, 15).map((item, i) => {
                        return (
                          <li key={i+1} className="mb-2">
                            <FaHandPointRight color="#ebc013" />

                            <a href="#!" className="text-white text-dec fs-custom">
                              <i className="fas fa-paw pe-3"></i>
                              {item}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                </div>
              </div>

              <div className="col-lg-2  col-12  ">
                <h5 className="text-uppercase text-web">Services</h5>
                <ul className="list-unstyled">
                  {servicesList.map((item, i) => {
                    return (
                      <li key={i+1} className="mb-2">
                        <FaHandPointRight color="#ebc013" />
                        <a href="#!" className="text-white text-dec fs-custom">
                          <i className="fas fa-paw pe-3"></i>
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-lg-2   col-12 ">
                <h5 className="text-web text-center   text-uppercase">
                  Connect With Us
                </h5>

                <ul className="list-unstyled d-flex justify-content-center align-items-center gap-4 flex-lg-column flex-row mx-4 p-3">
                  <li>
                    <a
                      className="text-white px-2"
                      href="https://www.facebook.com/DemiGodCloud"
                    >
                      <FaFacebookF size={25} />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white px-2"
                      href="https://www.facebook.com/DemiGodCloud"
                    >
                      <FaInstagram size={25} />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white ps-2"
                      href="https://www.facebook.com/DemiGodCloud"
                    >
                      <FaXTwitter size={25} />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white ps-2"
                      href="https://www.facebook.com/DemiGodCloud"
                    >
                      <FaLinkedinIn size={25} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr></hr>

           <div className="m-0">
            <h6 className="text-center text-web fs-5">DemiGod Group</h6>
           <marquee
              className="marq"
              scrollamount='25'
              bgcolor="transparent"
              direction="left"
              loop=""
            >
              <div className="d-flex gap-4">
                {demiGroup.map((item,i) => {
                  return (
                    <div key={i+1}>
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
            </marquee>
           </div>

            <div className="col-lg-12 col-12 ">
              <div className="">
                <h5 className="text-uppercase text-web">Get in Touch</h5>

                <div className="d-flex gap-3 flex-lg-row flex-column  mt-1">
                  <div>
                    <p className="m-0  fs-custom">Corporate Office</p>
                    <p className="fs-custom">208, PMB,Opera House, Mumbai,Maharashtra, INDIA</p>
                  </div>
                  <div>
                    <p className="m-0  fs-custom">Registered Office</p>
                    <p className="fs-custom">D-10, Kabir Marg, Bani Park, Jaipur,Rajasthan, INDIA</p>
                  </div>
                  <div>
                    <p className="m-0  fs-custom">Phone</p>
                    <p className="m-0 fs-custom">+91-8355897803,+91-7023843975</p>
                  </div>
                  <div>
                    <p className="m-0  fs-custom">Email</p>
                    <p className="m-0 fs-custom">info@demigodhouse.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
