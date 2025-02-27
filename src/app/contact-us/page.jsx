'use client'
import React, { useState } from "react";
import { BsInstagram, BsLinkedin, BsMailbox, BsTwitter } from "react-icons/bs";
import { FaAngleRight, FaFacebook, FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
import "./index.css";
import Header from "../component/common/header/Header";
import Footer from "../component/common/footer/Footer";
import Faq from './Faq'
import Accordian from "../component/weddingpage/v2.1/Subcomponent/Accordian";
function Page(props) {
  const [bigImage, setBigImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-76k-1SBjyPIb5XNFfAdqlkFogZMRnXiqTQ&s");

  // Function to handle the click event on small images
  const handleSmallImageClick = (imageSrc) => {
    setBigImage(imageSrc);
  };
  return (
    <div className="container-fluid bg-black  position-realtive">
      <Header />
      <div
        className="d-flex flex-column justify-content-center align-items-center text-white"
        style={{
          backgroundImage: "url('Image/contact/contact.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-lg-10 d-flex flex-column justify-content-center align-items-center p-lg-5 p-4">
          <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center mt-5">
            <h1 className="contact_heading m-0  fw-bold" >House Addresses</h1>
            <h2 className="text-center m-4 fw-semibold">
              Reach out to us & get exposure to make your brand a global success story.
            </h2>
            {/* <div className="border col-lg-2  py-1 px-2 d-flex flex-column rounded-pill  justify-content-center align-items-center my-3 ">
              <RiArrowDropDownLine size={30} />
            </div> */}
          </div>
          {/* <div
            className="d-flex position-absolute  latest_event"

          >
            <p className="d-flex flex-row-reverse  font-weight-normal ">
              SEE THE LATEST EVENTS{" "}
            </p>
            <MdArrowOutward size={25} />
          </div> */}
        </div>
      </div>

      {/* <div className="d-flex justify-content-center align-items-center flex-lg-row flex-column text-white mt-5">
        <div className="col-lg-10">
          <div className="d-flex flex-lg-row flex-column gap-4">
            <div className="col-lg-8 px-5">
              <h4 className=" text-warning">READ FAQs</h4>
              <p className=" ">
              Visit- http://support.demigodhouse.com/support/home
              </p>
              <h4 className=" text-warning"> For Brand Seed Funding & Contract Manufacturing</h4>
              <p className=" ">
              Reach us at P: 83558-97803 or E:info@demigodhouse.com
              </p>
              <h4 className=" text-warning"> For B2B / B2C Event's,  Brand Development , Brand Marketing and Private equity </h4>
              <p className=" ">
              Reach us at P: 83558-97803 E-mail us at info@demigodhouse.com
              </p>
              <p className=" ">
              We are available for calls from 0900 hoours till 2200 hours IST 
              </p>
              <p className=" ">
              Our network and economic horizons is across  125 countries !
              </p> 
           


              <hr />
             
            </div>
            <div className="col-lg-4 ">
              <img
                className="img-fluid w-100"
                src="Image/contact/faq.webp"
                alt="Contact us"
              ></img>
            </div>
          </div>
        </div>
      </div> */}
      <Faq/>

      {/* 3rd div */}

      <div
        className="col-lg-12 d-flex justify-content-center align-items-center mt-lg-5"
        style={{
          backgroundImage: "url('/images/contact_form.png')",
          backgroundSize: "cover",
          width: "100%",
          objectFit: "cover"
        }}
      >
        <div
          className="d-flex col-lg-10 flex-lg-row flex-column rounded justify-content-between gap-4 p-lg-5 p-4  text-white"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0 26px 42px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="col-lg-4">
            <h4>Ran into a problem?{""}
              <span>Let us help you out.</span>
            </h4>
            <div className="d-flex flex-column mt-4">
              <label>Name</label>
              <input
                type="text"
                className="rounded px-3 py-2 mt-1 input-box-custom"
                placeholder="Enter your name"
              ></input>
            </div>
            <div className="d-flex flex-column mt-2">
              <label>Email</label>
              <input
                type="text"
                className="rounded px-3 py-2 mt-1 input-box-custom"
                placeholder="Enter your email"
              ></input>
            </div>
            <div className="d-flex flex-column mt-2">
              <label>Mobile No</label>
              <input
                type="text"
                className="rounded px-3 py-2 mt-1 input-box-custom"
                placeholder="Enter your phone"
              ></input>
            </div>
            
            <div className="d-flex flex-column mt-2">
              <label>Leave a message</label>
              <input
                type="text"
                className="rounded px-3 py-5 input-box-custom"
                placeholder="Your Message"
              ></input>
            </div>
            <button
              className="d-flex col-lg-12 justify-content-center align-items-center submit_button mr-5 mt-5  px-4 py-2  text-black fw-bold"
              type="button "
            >
              Submit
            </button>
          </div>
          <div className="col-lg-7">
            {/* Big image */}
            <img
              className="img-fluid w-100"
              style={{ height: "300px" }}
              src={bigImage} // Dynamically changing image
              alt="Large view"
            />
            <div className="d-flex justify-content-between align-items-center mt-3 mx-3">
              <p className="text-white fw-bold">Know Our Location</p>
              <FaAngleRight className="text-white" size={30} />
            </div>
            <div className="d-flex gap-3 mx-3 mt-3">
              {/* Small clickable images */}
              <div className="col-lg-3">
                <img
                  className="rounded img-fluid"
                  style={{ width: "120px", height: "80px", objectFit: "cover" }}
                  src="Image/contact/lon.webp"
                  alt="Contact Our Office in Australia - Sydney City Skyline"
                  onClick={() => handleSmallImageClick("Image/contact/lon.webp")} // Click event
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="rounded img-fluid"
                  style={{ width: "120px", height: "80px", objectFit: "cover" }}
                  src="Image/contact/ind.webp"
                  alt="Get in Touch with Our India Office - Famous Landmarks"
                  onClick={() => handleSmallImageClick("Image/contact/ind.webp")} // Click event
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="rounded img-fluid"
                  style={{ width: "120px", height: "80px", objectFit: "cover" }}
                  src="Image/contact/usa.webp"
                  alt="Contact Our USA Office - New York City Skyline"
                  onClick={() => handleSmallImageClick("Image/contact/usa.webp")} // Click event
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="rounded img-fluid"
                  style={{ width: "120px", height: "80px", objectFit: "cover" }}
                  src="Image/contact/uk.webp"
                  alt="Reach Our UK Office - London Tower Bridge"
                  onClick={() => handleSmallImageClick("Image/contact/uk.webp")} // Click event
                />
              </div>
            </div>

            <div className="col-lg-8 mt-3 mx-3">
              <h5 className="fw-bold text-white">Corporate Office</h5>
              <p className="m- smallfont text-white">
              208, PMB, Opera House, Mumbai,
              Maharashtra, India
              </p>
              <p className="text-white m-0">+91-8355897803</p>
              <p className="text-white m-0">dev@demigodhouse.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Page;


