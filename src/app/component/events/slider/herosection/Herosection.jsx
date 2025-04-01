'use client'
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import './hero.css';

const CarouselSection = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      
      <div className="carousel-inner">
        <div className="carousel-item active">
          <video className="d-block w-100" style={{ width: "100%", height: "100vh", objectFit: "cover" }}  autoPlay loop muted>
            <source src="/1.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="carousel-item">
          <video className="d-block w-100" style={{ width: "100%", height: "100vh", objectFit: "cover" }}  autoPlay loop muted>
            <source src="/car-o-bar.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" style={{ height: '100vh', objectFit: "cover" }} src="./event-page/enter.jpeg" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" style={{ height: '100vh', objectFit: "cover" }} src="./event-page/agrotech1.jpeg" alt="Slide 4" />
        </div>
      </div>

      {/* Custom Previous and Next Buttons */}
      <button className="carousel-control-prev custom-carousel-btn d-flex" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next custom-carousel-btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselSection;
