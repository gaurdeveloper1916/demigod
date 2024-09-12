import React from "react";
import "./footer.css"; // Import the CSS styles
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="feature">
        <i className="fa-solid fa-house"></i>
        <div className="line-height-custom">
          <p className="m-0 ">Accommodation</p>
          <small className="m-0">5 days</small>
        </div>
      </div>
      <hr />
      <div className="feature">
        <i className="fa-solid fa-headphones"></i>
        <div className="line-height-custom">
          <p className="m-0">Live guide</p>
          <small className="m-0">available</small>
        </div>
      </div>
      <hr />
      <div className="feature">
        <i className="fa-solid fa-clock"></i>
        <div className="line-height-custom">
          <p className="m-0">Easy cancellation</p>
          <small className="m-0">cancel before 48 hours</small>
        </div>
      </div>
      <hr />
      <button className="btn fw-bold">Book Now</button>
    </div>
  );
};

export default Footer;
