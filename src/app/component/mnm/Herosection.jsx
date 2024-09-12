import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

function Herosection() {
  return (
    <div
      className="img-fluid position-relative fade-in " data-aos="zoom-in" data-aos-duration="1500"
      style={{
        backgroundImage: "url('/images/m&m/earth.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="col-lg-6 text-center">
        <h1 className="colo-bg fw-bold largefont gradient-text ">MEDIA AND MARKETING WITH DEMIGOD HOUSE</h1>
        <p className="text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
          tempora, fugit necessitatibus dolores, quidem hic recusandae
          consectetur explicabo id at adipisci saepe laudantium, commodi
          consequatur minus! Corrupti placeat laboriosam pariatur.
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="mx-5 px-4 py-2 border-0 verySmallFont rounded-pill cursor button-bg text-white fw-bold"
          >
            Know More
          </button>
        </div>
      </div>
      <div
        className="d-flex w-100 text-white justify-content-between px-5 position-absolute"
        style={{ bottom: '20px' }}
      >
        <div className="d-flex align-items-center">
          <Link href='/contact-us' className="mediumfont text-deco text-white">
            Contact
          </Link>
          <MdArrowOutward size={21} />
        </div>
        <div className="d-flex align-items-center">
          <p className="mediumfont m-0">Scroll</p>
          <MdArrowOutward size={21} />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
