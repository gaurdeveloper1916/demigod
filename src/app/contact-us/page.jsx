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
function page(props) {
  const [bigImage, setBigImage] = useState(
    "https://www.shutterstock.com/shutterstock/photos/2159023891/display_1500/stock-photo-happy-businesspeople-laughing-while-collaborating-on-a-new-project-in-an-office-group-of-diverse-2159023891.jpg"
  );

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
          backgroundImage: "url('/images/contact-us.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-lg-10  d-flex flex-column justify-content-center align-items-center p-lg-5 p-4">
          <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center mt-5">
            <p className="contact_heading m-0">Contact Us</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
              quae ut excepturi assumenda eos vero quaerat fugit ea similique
              reprehenderit corrupti incidunt laboriosam maxime porro
              perspiciatis, autem numquam tempore debitis!
            </p>
            {/* <div className="border col-lg-2  py-1 px-2 d-flex flex-column rounded-pill  justify-content-center align-items-center my-3 ">
              <RiArrowDropDownLine size={30} />
            </div> */}
          </div>
          <div
            className="d-flex position-absolute  latest_event"

          >
            <p className="d-flex flex-row-reverse  font-weight-normal ">
              SEE THE LATEST EVENTS{" "}
            </p>
            <MdArrowOutward size={25} />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center flex-lg-row flex-column text-white mt-5">
        <div className="col-lg-10">
          <div className="d-flex flex-lg-row flex-column gap-4">
            <div className="col-lg-8 px-5">
              <h4 className=" text-warning">Honesty Intrested in US</h4>
              <p className=" ">
                If you require any further amet consectetur adipisicing elit.
                <br></br> Eius commodi excepturi voluptatem quo nisi rerum
                debitis odio.<br></br> Iusto adipisci delectus natus laboriosam
                dolorum quas at deleniti.{" "}
              </p>
              <p className="smallfont fw-bold">
                We are most selective voluptatem quo nisi rerum debitis odio.
                <br></br>
                Iusto adipisci delectus natus laboriosam dolorum quas at
                deleniti.
              </p>
              <hr />
              <div className="d-flex ">
                <IoLocation size={24} className="text-warning" />
                <p className="mx-2">
                  Via Bettole,68 240550 Parrirano(BS)Italia
                </p>
              </div>
              <div className="d-flex">
                <FaPhone size={18} className="text-warning" />
                <p className="mx-2">+91 938386262</p>
              </div>
              <div className="d-flex">
                <CgMail size={24} className="text-warning" />
                <p className="mx-2">info@demigod.com</p>
              </div>

              <p className="fw-bold">Stay Tuned</p>
              <div className="d-flex gap-3">
                <BsInstagram />
                <BsTwitter />
                <BsLinkedin />
                <FaFacebook />
              </div>
              <div className=" mt-lg-4">
                <button
                  className="button-all mt-5 px-4 py-2  text-black fw-bold"
                  type="button "
                >
                  Check Us Out
                </button>
              </div>
            </div>
            <div className="col-lg-4 ">
              <img
                className="img-fluid w-100"
                src="./images/contact_about.png"
              ></img>
            </div>
          </div>
        </div>
      </div>

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
            <h4>Fill In your Details</h4>
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
              <label>Phone Number</label>
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
                  className="rounded img-fluid w-100"
                  style={{ maxHeight: "90px", objectFit: "cover" }}
                  src="./images/dj.jpg"
                  alt="small1"
                  onClick={() => handleSmallImageClick("./images/dj.jpg")} // Click event
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="rounded img-fluid w-100"
                  style={{ maxHeight: "90px", objectFit: "cover" }}
                  src="./images/party.jpg"
                  alt="small2"
                  onClick={() => handleSmallImageClick("./images/party.jpg")} // Click event
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="rounded img-fluid w-100"
                  style={{ maxHeight: "90px", objectFit: "cover" }}
                  src="./images/partygirl.jpg"
                  alt="small3"
                  onClick={() => handleSmallImageClick("./images/partygirl.jpg")} // Click event
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="rounded img-fluid w-100"
                  style={{ maxHeight: "90px", objectFit: "cover" }}
                  src="./images/dj.jpg"
                  alt="small4"
                  onClick={() => handleSmallImageClick("./images/dj.jpg")} // Click event
                />
              </div>
            </div>
            <div className="col-lg-8 mt-3 mx-3">
              <h5 className="fw-bold text-white">Address</h5>
              <p className="m- smallfont text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Ex
                dolorem nisi amet repellendus in ab dignissimos, impedit,
                molestias corrupti voluptatum
              </p>
              <p className="text-white m-0">+91 982727272</p>
              <p className="text-white m-0">info@demigod.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default page;
