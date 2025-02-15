"use client"
import React, { useContext } from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import './book.css'
import Link from "next/link";
import { Auth } from "../../context/AppContext";
const Booknow = () => {
  const { handleUpdate } = useContext(Auth);

  const [currentSlide, setCurrentSlide] = useState("standup");
  return (
    <>
      <div className="container-fluid p-5">
        <div
          className="book_now_user d-flex flex-lg-row flex-column"
          style={{
            display: "flex",
            height: '100vh',
            background: `url(${currentSlide === "standup"
              ? "/images/landing-page-images/section4/test.webp"
              : currentSlide === "djnight"
                ? "/images/landing-page-images/section4/oktober_fest.webp"
                : "/images/landing-page-images/section4/yacht_party.webp"
              }) center center / contain no-repeat`,
          }}
        >
          <div
            className={`slider1 ${currentSlide === "standup" ? "active" : ""}`}
            onClick={(e) => setCurrentSlide("standup")}
          >

            <div className="booknow__title_wrapper">
              <FaPlus className="plus_icon" />
              <p
                className={`book_title ${currentSlide === "standup" ? "active" : ""
                  }`}
              >
                standup
              </p>
            </div>

            <div
              className={`book_now_user_content ${currentSlide === "standup" ? "active" : ""
                }`}
            >
              <p className="text-uppercase">D'Yacht Party</p>
              <h1>
                Sail into Luxury & Celebration
              </h1>
              <p>
                Step aboard a magnificent yacht and indulge in an unforgettable evening of luxury,
                music, and entertainment. Enjoy breathtaking ocean views, gourmet dining, and an
                exclusive party atmosphere like no other.
              </p>
              <Link href="/landingpage">
                <button onClick={() => {
                  handleUpdate(`D'Yacht Party`, `Sail into Luxury & Celebration`, ` Step aboard a magnificent yacht and indulge in an unforgettable evening of luxury,
              music, and entertainment. Enjoy breathtaking ocean views, gourmet dining, and an
              exclusive party atmosphere like no other.`)
                }} className="btn">Book Now</button>

              </Link>
            </div>
          </div>

          <div
            className={`slider1 ${currentSlide === "djnight" ? "active" : ""}`}
            onClick={(e) => setCurrentSlide("djnight")}
          >

            <div className="booknow__title_wrapper">
              <FaPlus className="plus_icon" />
              <p
                className={`book_title text-uppercase ${currentSlide === "djnight" ? "active" : ""
                  }`}
              >
                Oktober fest
              </p>
            </div>

            <div
              className={`book_now_user_content ${currentSlide === "djnight" ? "active" : ""
                }`}
            >
              <h1>
                Celebrate Oktoberfest in Style
              </h1>
              <h2><p>
                Join us for a festive Oktoberfest celebration filled with traditional Bavarian music,
                authentic German cuisine, and the finest selection of beers. Experience the joy of
                this world-famous festival with exciting games, live performances, and a vibrant
                atmosphere.
              </p></h2>
              <Link href="/landingpage">
                <button className="btn ">Book Now</button>

              </Link>
            </div>
          </div>

          <div
            className={`slider1 ${currentSlide === "dandiyanight" ? "active" : ""
              }`}
            onClick={(e) => setCurrentSlide("dandiyanight")}
          >

            <div className="booknow__title_wrapper">
              <FaPlus className="plus_icon" />
              <p
                className={`book_title text-uppercase ${currentSlide === "dandiyanight" ? "active" : ""
                  }`}
              >
                Movie Theme Event
              </p>
            </div>

            <div
              className={`book_now_user_content ${currentSlide === "dandiyanight" ? "active" : ""
                }`}
            >
              <p className="text-uppercase fs-5 font-bold"> Movie Theme Event </p>
              <h1>
                Experience the Magic of Movies
              </h1>
              <p>
                Step into a world of cinematic wonder with our exclusive Movie Theme Event.
                Enjoy immersive decor, live performances, and themed experiences inspired
                by blockbuster hits.
              </p>
              <Link href="/landingpage">
                <button className="btn ">Book Now</button>

              </Link>
            </div>
          </div>

          <div
            className={`slider1 ${currentSlide === "videoevent" ? "active" : ""
              }`}
            onClick={(e) => setCurrentSlide("videoevent")}
          >

            <div className="booknow__title_wrapper">
              <FaPlus className="plus_icon" />
              <p
                className={`book_title text-uppercase ${currentSlide === "videoevent" ? "active" : ""
                  }`}
              >
                Video Event
              </p>
            </div>

            <div
              className={`book_now_user_content ${currentSlide === "videoevent" ? "active" : ""
                }`}
            >
              <p className="text-uppercase fs-5 font-bold"> Video Event</p>
              <h1>
                Explore the Future of Visual Storytelling
              </h1>
              <p>
                Join industry leaders and enthusiasts at our upcoming Video Event, where we'll delve into the latest trends in video production, editing techniques, and distribution strategies. Network with professionals, attend workshops, and gain insights to elevate your visual content.
              </p>
              <Link href="/landingpage">
                <button className="btn ">Book Now</button>

              </Link>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Booknow;
