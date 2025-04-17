"use client";
import React, { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./book.css";
import Link from "next/link";
import { Auth } from "../../context/AppContext";
import { useRouter } from "next/navigation";

const Booknow = () => {
  const { handleUpdate, imageForLandingPage } = useContext(Auth);
  const router = useRouter();
  const getVideoSrc = () => {
    switch (currentSlide) {
      case "standup":
        return "/event-page/Yacht_party.mp4";
      case "djnight":
        return "/event-page/oktober-fest.mp4";
      case "dandiyanight":
        return "/event-page/starwars_party.mp4";
      default:
        return "";
    }
  };

  const [currentSlide, setCurrentSlide] = useState("standup");
  console.log(currentSlide)
  function handleChange(title, description, ticketdes, imdVideo, leftImage, rightImage) {
    handleUpdate(title, description, ticketdes);
    imageForLandingPage(leftImage, imdVideo, rightImage);
    router.push("/landingpage");
  }

  return (
    <>
      <div className="container-fluid">
        <div className="book_now_user d-flex flex-lg-row flex-column">
          {/* Background Video */}
          <video key={currentSlide} autoPlay muted loop playsInline className="background-video">
            <source src={getVideoSrc()} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Slider 1 */}
          <div
            className={`slider1 ${currentSlide === "standup" ? "active" : ""}`}
            onClick={() => setCurrentSlide("standup")}
          >
            <div className="booknow__title_wrapper">
              <FaPlus className="plus_icon" />
              <p className={`book_title fs-6 fw-bold ${currentSlide === "standup" ? "active" : ""}`}>
                D'Yacht Party
              </p>
            </div>
            <div style={{
              background: "linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(94, 88, 88, 0.6))"
            }} 
            className={`book_now_user_content  p-2 rounded ${currentSlide === "standup" ? "active" : ""}`}>
              <h4>Sail into Luxury & Celebration</h4>
              <p className="mediumfont fs-6">
                Step aboard a magnificent yacht and indulge in an unforgettable evening of luxury,
                music, and entertainment. Enjoy breathtaking ocean views, gourmet dining, and an
                exclusive party atmosphere like no other.
              </p>
              <button
                className="btn text-white"
                onClick={() =>
                  handleChange(
                    "D'Yacht Party",
                    "Yacht party description",
                    "Ticket description",
                    "/event-page/Yacht_party.mp4",
                    "/img/left.jpg",
                    "/img/right.jpg"
                  )
                }
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Slider 2 */}
          <div
          
            className={`slider1 ${currentSlide === "djnight" ? "active" : ""}`}
            onClick={() => setCurrentSlide("djnight")}
          >
            <div className="booknow__title_wrapper">
              <FaPlus className="plus_icon" />
              <p className={`book_title text-uppercase ${currentSlide === "djnight" ? "active" : ""}`}>
                Oktober fest
              </p>
            </div>
            <div style={{
              background: "linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(94, 88, 88, 0.6))"
            }}  className={`book_now_user_content p-2 rounded ${currentSlide === "djnight" ? "active" : ""}`}>
              <h4>Celebrate Oktoberfest in Style</h4>
              <p className="fs-6">
                Join us for a festive Oktoberfest celebration filled with traditional Bavarian music,
                authentic German cuisine, and the finest selection of beers. Experience the joy of
                this world-famous festival with exciting games, live performances, and a vibrant
                atmosphere.
              </p>
              <Link href="/landingpage">
                <button className="btn text-white">Book Now</button>
              </Link>
            </div>
          </div>

          {/* Slider 3 */}
          <div
            className={`slider1 ${currentSlide === "dandiyanight" ? "active" : ""}`}
            onClick={() => setCurrentSlide("dandiyanight")}
          >
            <div className="booknow__title_wrapper">
              <FaPlus className="plus_icon" />
              <p className={`book_title text-uppercase ${currentSlide === "dandiyanight" ? "active" : ""}`}>
                Star Wars Theme Party
              </p>
            </div>
            <div 
            style={{
              background: "linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(94, 88, 88, 0.6))"
            }}  
            className={`book_now_user_content p-2 rounded ${currentSlide === "dandiyanight" ? "active" : ""}`}>
              <h4>Star Wars Theme Party</h4>
              <p className="fs-6">
                Step into a world of cinematic wonder with our exclusive Movie Theme Event.
                Enjoy immersive decor, live performances, and themed experiences inspired
                by blockbuster hits.
              </p>
              <Link href="/landingpage">
                <button className="btn text-white">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booknow;
