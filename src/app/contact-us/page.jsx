"use client";
// import React, { useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// import Header from "../component/common/header/Header";
import Faq from "./Faq";
// import "./index.css";
// import Slider from "react-slick";

// const locations = [
//   {
//     name: "Jaipur",
//     image: "https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-city-1-hero?qlt=82&ts=1726660605161",
//     address: "Regd. Office - D-10  Kabir Marg, banipark, Jaipur, RAJ - 302016.",
//     phone: "+91-7023843975",
//     email: "dev@demigodhouse.com",
//   },
//   {
//     name: "Mumbai",
//     image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/40/ce/c3/mumbai-marine-drive-along.jpg?w=900&h=-1&s=1",
//     address: "208,PMB,Charni Road, Opera House,Girgaon – Mumbai 400 004",
//     phone: "+91 83558 97803",
//     email: "dev@demigodhouse.com",
//   },
//   {
//     name: "Delhi",
//     image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Janak_Place_Shopping_Complex.jpg",
//     address: "Baba Kharak Singh Rd, Block P, Connaught Place, New Delhi, Delhi 110001",
//     phone: "+91-7023843975",
//     email: "dev@demigodhouse.com",
//   },
//   {
//     name: "Dubai",
//     image: "https://content.presspage.com/uploads/2431/1920_dubaiconnect.jpg?10000",
//     address: "Anantara Downtown - Level 1 - Marasi Dr - Business Bay - Dubai - United Arab Emirates",
//     phone: "+91-7023843975",
//     email: "dev@demigodhouse.com",
//   }, ,
//   {
//     name: "Sydney, Australia",
//     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg",
//     address: "Shop 1 Kirribilli Wharf, Kirribilli NSW 2061, Australia",
//     phone: "+91-7023843975",
//     email: "dev@demigodhouse.com",
//   },

//   {
//     name: "Washington, D.C.",
//     image: "https://cdn.britannica.com/42/93842-050-295D32A0/US-Capitol-place-meeting-Congress-Washington-DC.jpg",
//     address: "1739 N St NW, Washington, DC 20036, United States",
//     phone: "+91-7023843975",
//     email: "dev@demigodhouse.com",
//   },
//   {
//     name: "California",
//     image: "https://www.choicehotels.com/content/choicehotels/americas/us/en/california/_jcr_content/root/main-par/grid_container_11390_725183502/grid/image.coreimg.jpeg/1731449688802/state-california-body-2.jpeg",
//     address: "3410 Floral Ave, Selma, CA 93662, United States",
//     phone: "+91-7023843975",
//     email: "dev@demigodhouse.com",
//   },
//   {
//     name: "Brussels",
//     image: "https://cdn.britannica.com/61/90461-050-7E15DFEB/Grand-Place-Brussels.jpg",
//     address: "Rue Auguste Orts, Grand Place 3-7, 1000 Bruxelles, Belgium",
//     phone: "+91-7023843975",
//     email: "dev@demigodhouse.com",
//   },
//   {
//     name: "Paris",
//     image: "https://trawel.blob.core.windows.net/trawel/content_files/Europe/77e2ef91-1cf.jpg",
//     address: "Port des Saints-Pères, 75006 Paris, France",
//     phone: "+91-7023843975",
//     email: "dev@demigodhouse.com",
//   },
//   {
//     name: "Germany",
//     image: "https://hblimg.mmtcdn.com/content/hubble/img/schengenvideoimg/mmt/activities/m_Frankfurt_10_l_465_1000.jpg",
//     address: "Harsbergstraße 4, 99826 Lauterbach, Germany",
//     phone: "+91-7023843975",
//     email: "dev@demigodhouse.com",
//   },


//   {
//     name: "Hyderabad",
//     image: "https://i0.wp.com/weekendyaari.in/wp-content/uploads/2024/10/hyd-night-weekend-yaari-.jpg?fit=1224%2C816&ssl=1",
//     address: "C/B, V.P 11-5-422, Red Hills Rd, Red Hills, Lakdikapul, Hyderabad, Telangana 500004",
//     phone: "+91-7023843975",
//     email: "dev@demigodhouse.com",
//   },
// ];
// const NextArrow = ({ onClick }) => (
//   <div
//     className="custom-arrow next-arrow"
//     onClick={onClick}
//     style={{
//       position: "absolute",
//       top: "3%",
//       right: "-32px",
//       zIndex: 1,
//       cursor: "pointer",
//       color: "#fff",
//       fontSize: "2.5rem",
//     }}
//   >
//     <FaAngleRight />
//   </div>
// );

// const PrevArrow = ({ onClick }) => (
//   <div
//     className="custom-arrow prev-arrow"
//     onClick={onClick}
//     style={{
//       position: "absolute",
//       top: "7%",
//       left: "-33px",
//       zIndex: 1,
//       cursor: "pointer",
//       color: "#fff",
//       fontSize: "2.5rem",
//     }}
//   >
//     <FaAngleLeft />
//   </div>
// );
// function ContactPage() {
//   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

//   return (
//     <div className="container-fluid bg-black position-relative">

//       <Header />


//       <div
//         className="d-flex flex-column justify-content-center align-items-center text-white"
//         style={{
//           backgroundImage: "url('Image/contact/contact.webp')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "80vh",
//           width: "100%",
//         }}
//       >
//         <div className="col-lg-10 text-center p-lg-5 p-4">
//           <h1 className="contact_heading fw-bold">House Addresses</h1>
//           <h2 className="fw-semibold">
//             Reach out to us & get exposure to make your brand a global success story.
//           </h2>
//         </div>
//       </div>

//       <Faq />
//       {/* Contact Form & Location Section */}
//       <div
//         className="col-lg-12 d-flex justify-content-center align-items-center mt-lg-5"
//         style={{
//           backgroundImage: "url('/images/contact_form.png')",
//           backgroundSize: "cover",
//           width: "100%",
//         }}
//       >
//         <div
//           className="d-flex col-lg-10 flex-lg-row flex-column rounded gap-4 p-lg-5 p-4 text-white"
//           style={{
//             background: "rgba(255, 255, 255, 0.1)",
//             boxShadow: "0 26px 42px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           {/* Contact Form */}
//           <div className="col-lg-4">
//             <h4>Ran into a problem? <span>Let us help you out.</span></h4>
//             <div className="d-flex flex-column mt-4">
//               <label>Name</label>
//               <input type="text" className="rounded px-3 py-2 mt-1 input-box-custom" placeholder="Enter your name" />
//             </div>
//             <div className="d-flex flex-column mt-2">
//               <label>Email</label>
//               <input type="text" className="rounded px-3 py-2 mt-1 input-box-custom" placeholder="Enter your email" />
//             </div>
//             <div className="d-flex flex-column mt-2">
//               <label>Mobile No</label>
//               <input type="text" className="rounded px-3 py-2 mt-1 input-box-custom" placeholder="Enter your phone" />
//             </div>
//             <div className="d-flex flex-column mt-2">
//               <label>Leave a message</label>
//               <textarea className="rounded px-3 py-2 input-box-custom" placeholder="Your Message"></textarea>
//             </div>
//             <button className="col-lg-12 submit_button mt-4 px-4 py-2 text-black fw-bold">
//               Submit
//             </button>
//           </div>

//           <div className="col-lg-7">
//             <div className="position-relative">
//               <div
//                 className="position-absolute w-100 text-center p-2"
//                 style={{
//                   bottom: "0px",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   background: "rgba(0, 0, 0, 0.6)",
//                   color: "white",
//                   borderRadius: "8px",
//                 }}
//               >
//                 <p className="m-0 fs-5 font-semibold">
//                   {selectedLocation.name === 'Jaipur' || selectedLocation.name === 'Delhi' || selectedLocation.name === 'Mumbai'
//                     ? ''
//                     : 'Coming Soon@'}
//                 </p>
//                 <p className="m-0 fw-bold">{selectedLocation.address}</p>
//               </div>

//               <img
//                 className="img-fluid w-100 rounded"
//                 style={{ height: "300px" }}
//                 src={selectedLocation.image}
//                 alt={selectedLocation.name}
//               />
//             </div>

//             <div className="d-flex justify-content-between align-items-center mt-3 mx-3">
//               <p className="text-white fw-bold">Know Our Location</p>
//               {/* <FaAngleRight className="text-white" size={30} /> */}
//             </div>

//             {/* Slider with arrows + autoplay */}
//             <div className="position-relative px-4">
//               <Slider
//                 slidesToShow={4}
//                 slidesToScroll={1}
//                 autoplay={true}
//                 autoplaySpeed={2500}
//                 infinite={true}
//                 nextArrow={<NextArrow />}
//                 prevArrow={<PrevArrow />}
//                 responsive={[
//                   {
//                     breakpoint: 992,
//                     settings: {
//                       slidesToShow: 3,
//                     },
//                   },
//                   {
//                     breakpoint: 768,
//                     settings: {
//                       slidesToShow: 2,
//                     },
//                   },
//                   {
//                     breakpoint: 576,
//                     settings: {
//                       slidesToShow: 1,
//                     },
//                   },
//                 ]}
//               >
//                 {locations.map((location, index) => (
//                   <div key={index} className="px-2">
//                     <img
//                       className="rounded img-fluid"
//                       style={{
//                         width: "100%",
//                         height: "80px",
//                         objectFit: "cover",
//                         cursor: "pointer",
//                       }}
//                       src={location.image}
//                       alt={location.name}
//                       onClick={() => setSelectedLocation(location)}
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             </div>

//             <div className="col-lg-8 mt-3 mx-3">
//               <h5 className="fw-bold text-white">{selectedLocation.name}</h5>
//               <p className="text-white">{selectedLocation.address}</p>
//               <p className="text-white m-0">{selectedLocation.phone}</p>
//               <p className="text-white m-0">{selectedLocation.email}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactPage;


import { useState } from 'react';
import Header from '../component/common/header/Header';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    alert('Thank you for your message. We will get back to you soon!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <main>
      <Header />

      {/* 1. Hero Section */}
      <section style={{ background: "linear-gradient(to bottom right, #0000009c, #866b2f)" }} className=" text-white py-5 mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold">Contact Us</h1>
              <p className="lead mb-4">We'd love to hear from you. Reach out to us with any questions about our upcoming event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Contact Form Section */}
      <section className="py-5 mb-5" id="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit Message</button>
              </form>
            </div>
            <div className="col-lg-6">
              <img
                src="./contact-us-image.jpeg"
                alt="Contact our team"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contact Information Section */}
      <section className="py-5 bg-light mb-5" id="contact-info">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2>Contact Information</h2>
              <p className="lead">You can reach us through multiple channels</p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div style={{ background: "linear-gradient(to bottom right, #0000009c, #866b2f)" }} className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center rounded gred-color">
                  <div className="mb-3">
                    <i className="bi bi-geo-alt fs-1 text-primary"></i>
                  </div>
                  <h3 className="card-title h5 text-white">Our Location</h3>
                  <p className="card-text text-white">
                    Regd. Office - D-10  <br />Kabir Marg, banipark, Jaipur, RAJ - 302016.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div style={{ background: "linear-gradient(to bottom right, #0000009c, #866b2f)" }} className="card-body text-center rounded">
                  <div className="mb-3">
                    <i className="bi bi-telephone fs-1 text-primary"></i>
                  </div>
                  <h3 className="card-title text-white h5">Phone Contact</h3>
                  <p className="card-text text-white">
                    General Inquiries:<br />
                    +91-8355897803<br />
                    Support: 91-7023843975
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div style={{ background: "linear-gradient(to bottom right, #0000009c, #866b2f)" }} className="card-body text-center rounded">
                  <div className="mb-3">
                    <i className="bi bi-envelope fs-1 text-primary"></i>
                  </div>
                  <h3 className="card-title h5 text-white">Email Us</h3>
                  <p className="card-text text-white">
                    General Information:<br />
                    dev@demigodhouse.com

                    <br />
                    Support: dev@demigodhouse.com


                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <Faq />

      {/* 5. Map Section */}
      <section className="py-5 mb-5" id="map">
        <div className="container-fluid ">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2>Event Location</h2>
              <p className="lead">Find us easily with this map</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="ratio ratio-16x9 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2408456748925!2d-73.98784532426832!3d40.75850603646583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1681349088485!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Event Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}





