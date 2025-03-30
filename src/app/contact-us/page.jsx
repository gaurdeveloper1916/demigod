"use client";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import Header from "../component/common/header/Header";
import Faq from "./Faq";
import "./index.css";

const locations = [
  {
    name: "Jaipur",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-city-1-hero?qlt=82&ts=1726660605161",
    address: "Regd. Office - D-10  Kabir Marg, banipark, Jaipur, RAJ - 302016.",
    phone: "+91-7023843975",
    email: "dev@demigodhouse.com",
  },
  {
    name: "Mumbai",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/40/ce/c3/mumbai-marine-drive-along.jpg?w=900&h=-1&s=1",
    address: "208,PMB,Charni Road, Opera House,Girgaon – Mumbai 400 004",
    phone: "+91-7023843975",
    email: "dev@demigodhouse.com",
  },
  {
    name: "Delhi",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Janak_Place_Shopping_Complex.jpg",
    address: "Baba Kharak Singh Rd, Block P, Connaught Place, New Delhi, Delhi 110001",
    phone: "+91-7023843975",
    email: "dev@demigodhouse.com",
  },
  {
    name: "Dubai",
    image: "https://content.presspage.com/uploads/2431/1920_dubaiconnect.jpg?10000",
    address: "Anantara Downtown - Level 1 - Marasi Dr - Business Bay - Dubai - United Arab Emirates",
    phone: "+61-400-123-456",
    email: "sydney@demigodhouse.com",
  }, ,
  {
    name: "Sydney, Australia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg",
    address: "Shop 1 Kirribilli Wharf, Kirribilli NSW 2061, Australia",
    phone: "+61-400-123-456",
    email: "sydney@demigodhouse.com",
  },
  {
    name: "Mumbai, India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg",
    address: "NEAR, Panchavati Society Rd, Vijay Nagar, Friends Colony, Kurla West, Kurla, Mumbai, Maharashtra 400059",
    phone: "+91-8355897803",
    email: "dev@demigodhouse.com",
  },
  {
    name: "Washington, D.C.",
    image: "https://cdn.britannica.com/42/93842-050-295D32A0/US-Capitol-place-meeting-Congress-Washington-DC.jpg",
    address: "1739 N St NW, Washington, DC 20036, United States",
    phone: "+1-212-555-7890",
    email: "usa@demigodhouse.com",
  },
  {
    name: "California",
    image: "https://www.choicehotels.com/content/choicehotels/americas/us/en/california/_jcr_content/root/main-par/grid_container_11390_725183502/grid/image.coreimg.jpeg/1731449688802/state-california-body-2.jpeg",
    address: "3410 Floral Ave, Selma, CA 93662, United States",
    phone: "+44-20-7946-0123",
    email: "uk@demigodhouse.com",
  },
  {
    name: "Brussels",
    image: "https://cdn.britannica.com/61/90461-050-7E15DFEB/Grand-Place-Brussels.jpg",
    address: "Rue Auguste Orts, Grand Place 3-7, 1000 Bruxelles, Belgium",
    phone: "+44-20-7946-0123",
    email: "uk@demigodhouse.com",
  },
  {
    name: "Paris",
    image: "https://trawel.blob.core.windows.net/trawel/content_files/Europe/77e2ef91-1cf.jpg",
    address: "Port des Saints-Pères, 75006 Paris, France",
    phone: "+44-20-7946-0123",
    email: "uk@demigodhouse.com",
  },
  {
    name: "Germany",
    image: "https://hblimg.mmtcdn.com/content/hubble/img/schengenvideoimg/mmt/activities/m_Frankfurt_10_l_465_1000.jpg",
    address: "Harsbergstraße 4, 99826 Lauterbach, Germany",
    phone: "+44-20-7946-0123",
    email: "uk@demigodhouse.com",
  },
  
  {
    name: "New Delhi",
    image: "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg",
    address: "1, Ashoka Rd, Hyderabad House, New Delhi, Delhi 110001",
    phone: "+44-20-7946-0123",
    email: "uk@demigodhouse.com",
  },
  {
    name: "Hyderabad",
    image: "https://i0.wp.com/weekendyaari.in/wp-content/uploads/2024/10/hyd-night-weekend-yaari-.jpg?fit=1224%2C816&ssl=1",
    address: "C/B, V.P 11-5-422, Red Hills Rd, Red Hills, Lakdikapul, Hyderabad, Telangana 500004",
    phone: "+44-20-7946-0123",
    email: "uk@demigodhouse.com",
  },
];

function ContactPage() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className="container-fluid bg-black position-relative">
      <Header />

      {/* Hero Section */}
      <div
        className="d-flex flex-column justify-content-center align-items-center text-white"
        style={{
          backgroundImage: "url('Image/contact/contact.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          width: "100%",
        }}
      >
        <div className="col-lg-10 text-center p-lg-5 p-4">
          <h1 className="contact_heading fw-bold">House Addresses</h1>
          <h2 className="fw-semibold">
            Reach out to us & get exposure to make your brand a global success story.
          </h2>
        </div>
      </div>

      <Faq />

      {/* Contact Form & Location Section */}
      <div
        className="col-lg-12 d-flex justify-content-center align-items-center mt-lg-5"
        style={{
          backgroundImage: "url('/images/contact_form.png')",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <div
          className="d-flex col-lg-10 flex-lg-row flex-column rounded gap-4 p-lg-5 p-4 text-white"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0 26px 42px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Contact Form */}
          <div className="col-lg-4">
            <h4>Ran into a problem? <span>Let us help you out.</span></h4>
            <div className="d-flex flex-column mt-4">
              <label>Name</label>
              <input type="text" className="rounded px-3 py-2 mt-1 input-box-custom" placeholder="Enter your name" />
            </div>
            <div className="d-flex flex-column mt-2">
              <label>Email</label>
              <input type="text" className="rounded px-3 py-2 mt-1 input-box-custom" placeholder="Enter your email" />
            </div>
            <div className="d-flex flex-column mt-2">
              <label>Mobile No</label>
              <input type="text" className="rounded px-3 py-2 mt-1 input-box-custom" placeholder="Enter your phone" />
            </div>
            <div className="d-flex flex-column mt-2">
              <label>Leave a message</label>
              <textarea className="rounded px-3 py-2 input-box-custom" placeholder="Your Message"></textarea>
            </div>
            <button className="col-lg-12 submit_button mt-4 px-4 py-2 text-black fw-bold">
              Submit
            </button>
          </div>

          <div className="col-lg-7 ">
            <div className="position-relative">
              <div
                className="position-absolute w-100 text-center p-2"
                style={{
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(0, 0, 0, 0.6)", 
                  color: "white",
                  borderRadius: "8px",
                }}
              >
                <p className="m-0 fs-5 font-semibold">Coming Soon@</p>
                <p className="m-0 fw-bold">{selectedLocation.address}</p>
              </div>

              {/* Image */}
              <img className="img-fluid w-100 rounded" style={{ height: "300px" }} src={selectedLocation.image} alt={selectedLocation.name} />
            </div>

            <div className="d-flex justify-content-between align-items-center mt-3 mx-3">
              <p className="text-white fw-bold">Know Our Location</p>
              <FaAngleRight className="text-white" size={30} />
            </div>

            <div className="d-flex  mt-3 overflow-x-auto">
              {locations.map((location, index) => (
                <div key={index} className="col-lg-3">
                  <img
                    className="rounded img-fluid"
                    style={{ width: "120px", height: "80px", objectFit: "cover", cursor: "pointer" }}
                    src={location.image}
                    alt={location.name}
                    onClick={() => setSelectedLocation(location)}
                  />
                </div>
              ))}
            </div>

            <div className="col-lg-8 mt-3 mx-3">
              <h5 className="fw-bold text-white">{selectedLocation.name}</h5>
              <p className="text-white">{selectedLocation.address}</p>
              <p className="text-white m-0">{selectedLocation.phone}</p>
              <p className="text-white m-0">{selectedLocation.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
