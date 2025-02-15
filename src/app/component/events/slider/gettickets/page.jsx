import Link from "next/link";
import React from "react";
import './index.css'
function GetTickets() {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
        }}
      >
        <source src="/images/disco.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered Content */}
      <div
        className="text-center text-white d-flex flex-column justify-content-center align-items-center"
        style={{ position: "relative", zIndex: 2, width: "90%" }}
      >
        <h6 className="explore-text">
          EXPLORE THE ENCHANTING WORLD OF <br /> SYLVIRA WITH DIMIRRI VEGAS AND LIKE MINE
        </h6>

        <div className="mt-4">
          <h6 className="explore-text">THE CHAINSMOKER</h6>
          <p style={{ fontFamily: "emoji", fontSize: "22px" }}>
            AFROJACK LOST FREQUENCIES MARLON HOFFSTANDT MAIN <br /> STEVE AOKI TIMMY TRUMPET AND MANY MORE
          </p>
        </div>

        {/* Button */}
        <Link href="/landingpage">
          <button className="button-all bg-warning fw-bold text-black px-4 py-2 mt-3" type="button">
            GET TICKETS
          </button>
        </Link>
      </div>
    </div>
  );
}

export default GetTickets;
