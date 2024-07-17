import React from "react";
import { BsInstagram, BsLinkedin, BsMailbox, BsTwitter } from "react-icons/bs";
import {
  FaAngleRight,
  FaFacebook,
  FaPhone,
} from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
import "./index.css";
import Header from "../component/common/header/Header";
function page(props) {
  return (
    <div className="container-fluid bg-black  position-realtive">
      <Header/>
      <div className="d-flex flex-column justify-content-center align-items-center text-white">
        <div className="col-lg-10 d-flex flex-column justify-content-center align-items-center p-5">
          <div className="col-lg-6  d-flex flex-column justify-content-center align-items-center mt-5">
            <h1>Contact Us</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
              quae ut excepturi assumenda eos vero quaerat fugit ea similique
              reprehenderit corrupti incidunt laboriosam maxime porro
              perspiciatis, autem numquam tempore debitis!
            </p>
            <div className="border col-lg-2  py-1 px-2 d-flex flex-column rounded-pill  justify-content-center align-items-center my-3 ">
              <RiArrowDropDownLine size={30} />
            </div>
          </div>
          <div className="d-flex">
            <p className="d-flex flex-row-reverse  font-weight-normal ">
              SEE THE LATEST EVENTS{" "}
            </p>
            <MdArrowOutward size={25} />
          </div>
        </div>
      </div>

      <div className="col-lg-12 text-white ">
        <div className="d-flex gap-4">
          <div className="col-lg-7  px-5">
            <h3 className="mediumfont">Honesty Intrested in US</h3>
            <p className="smallfont">
              If you require any further amet consectetur adipisicing elit. Eius
              commodi excepturi voluptatem quo nisi rerum debitis odio. Iusto
              adipisci delectus natus laboriosam dolorum quas at deleniti.{" "}
            </p>
            <p className="col-lg-10 smallfont fw-bold">
              We are most selective voluptatem quo nisi rerum debitis odio.
              Iusto adipisci delectus natus laboriosam dolorum quas at deleniti.
            </p>
            <hr />
            <div className="d-flex ">
              <IoLocation size={24} />
              <p>Via Bettole,68 240550 Parrirano(BS)Italia</p>
            </div>
            <div className="d-flex">
              <FaPhone size={18} />
              <p>+91 938386262</p>
            </div>
            <div className="d-flex">
              <CgMail size={24} />
              <p>info@demigod.com</p>
            </div>

            <p className="fw-bold">Stay Tuned</p>
            <div className="d-flex gap-3">
              <BsInstagram />
              <BsTwitter />
              <BsLinkedin />
              <FaFacebook />
            </div>
          </div>
          <div className="col-lg-5 ">
            <img
              className="img-fluid"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ebwp_zqcrshThQ8nxX3BfIqQngMIUfLmfjPVEmJ_BDRU1iZm9rzvbh41eiFEpthWrPc&usqp=CAU"
            ></img>
          </div>
        </div>
        <div className="col-lg-6 ">
          <button
            style={{ marginLeft: "3rem" }}
            className="button-all mt-5 px-4 py-2  text-black fw-bold"
            type="button "
          >
            Check Us Out
          </button>
        </div>
      </div>

      {/* 3rd div */}

      <div className="col-lg-12 p-5 bg-success">
        <div className="d-flex gap-4 p-5 bg-danger text-white">
          <div className="col-lg-4 ">
            <h3>Fill In your Details</h3>
            <div className="d-flex flex-column">
              <label>Name</label>
              <input
                type="text"
                className="rounded px-3 py-2 input-box-custom"
                placeholder="Enter your name"
              ></input>
            </div>
            <div className="d-flex flex-column">
              <label>Email</label>
              <input
                type="text"
                className="rounded px-3 py-2 input-box-custom"
                placeholder="Enter your email"
              ></input>
            </div>
            <div className="d-flex flex-column">
              <label>Phone Number</label>
              <input
                type="text"
                className="rounded px-3 py-2 input-box-custom"
                placeholder="Enter your phone"
              ></input>
            </div>
            <div className="d-flex flex-column">
              <label>Leave a message</label>
              <input
                type="text"
                className="rounded px-3 py-5 input-box-custom"
                placeholder="Your Message"
              ></input>
            </div>
            <button
              className="d-flex col-lg-12 justify-content-center align-items-center button-all  mr-5 mt-5  px-4 py-2  text-black fw-bold"
              type="button "
            >
              Submit
            </button>
          </div>
          <div className="col-lg-8  ">
            <img
              style={{ width: "617px", height: "240px" }}
              src="https://www.shutterstock.com/shutterstock/photos/2159023891/display_1500/stock-photo-happy-businesspeople-laughing-while-collaborating-on-a-new-project-in-an-office-group-of-diverse-2159023891.jpg"
            ></img>
            <div className="d-flex justify-content-between align-items-center mt-3 mx-3">
              <p className="text-white fw-bold">Know Our Location</p>
              <FaAngleRight className="text-white" size={30} />
            </div>
            <div className="d-flex gap-3 mx-3">
              <div>
                <img
                  className="rounded"
                  style={{ width: "120px", height: "70px" }}
                  src="./images/dj.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded"
                  style={{ width: "120px", height: "70px" }}
                  src="./images/party.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded"
                  style={{ width: "120px", height: "70px" }}
                  src="./images/partygirl.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded"
                  style={{ width: "120px", height: "70px" }}
                  src="./images/dj.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-8 mt-3 mx-3">
              <p className="m-0 fw-bold text-white">Address</p>
              <p className="m- smallfont text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                dolorem nisi amet repellendus in ab dignissimos, impedit,
                molestias corrupti voluptatum{" "}
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
