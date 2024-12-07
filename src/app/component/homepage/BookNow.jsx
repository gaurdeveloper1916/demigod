"use client"
import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import './index.css'
import Link from "next/link";
const Booknow = () => {
  const [currentSlide, setCurrentSlide] = useState("standup");
  return (
    <>
     <div className="container-fluid  p-5">
     <div
        className="book_now_user d-flex flex-lg-row flex-column"
        style={{
          display: "flex",
          background: `url(${
            currentSlide === "standup"
              ? "/images/landing-page-images/section4/test.webp"
              : currentSlide === "djnight"
              ? "/images/landing-page-images/section4/oktober_fest.webp"
              : "/images/landing-page-images/section4/yacht_party.webp"
          }) center center / contain no-repeat`,
        }}
      >
        <div
          className={`slider ${currentSlide === "standup" ? "active" : ""}`}
          onClick={(e) => setCurrentSlide("standup")}
        >
          
          <div className="booknow__title_wrapper">
            <FaPlus className="plus_icon" />
            <p
              className={`book_title ${
                currentSlide === "standup" ? "active" : ""
              }`}
            >
              Ocean gig
            </p>
          </div>

          <div
            className={`book_now_user_content ${
              currentSlide === "standup" ? "active" : ""
            }`}
          >
            <p className="text-uppercase fs-5 font-bold"> Ocean gig</p>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              tempore
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              perferendis perspiciatis in suscipit nobis, quasi tenetur nesciunt
              vitae totam iure.
            </p>
              <Link href="/landingpage">
                <button className="btn">Book Now</button>

              </Link>
          </div>
        </div>

        <div
          className={`slider ${currentSlide === "djnight" ? "active" : ""}`}
          onClick={(e) => setCurrentSlide("djnight")}
        >
          
          <div className="booknow__title_wrapper">
            <FaPlus className="plus_icon" />
            <p
              className={`book_title text-uppercase ${
                currentSlide === "djnight" ? "active" : ""
              }`}
            >
           Oktober fest
            </p>
          </div>

          <div
            className={`book_now_user_content ${
              currentSlide === "djnight" ? "active" : ""
            }`}
          >
            <p className="text-uppercase fs-5 font-bold">  Oktober fest</p>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              tempore
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              perferendis perspiciatis in suscipit nobis, quasi tenetur nesciunt
              vitae totam iure.
            </p>
              <Link href="/landingpage">
                <button className="btn ">Book Now</button>

              </Link>
          </div>
        </div>

        <div
          className={`slider ${
            currentSlide === "dandiyanight" ? "active" : ""
          }`}
          onClick={(e) => setCurrentSlide("dandiyanight")}
        >
         
          <div className="booknow__title_wrapper">
            <FaPlus className="plus_icon" />
            <p
              className={`book_title text-uppercase ${
                currentSlide === "dandiyanight" ? "active" : ""
              }`}
            >
               Yacht Summer
            </p>
          </div>

          <div
            className={`book_now_user_content ${
              currentSlide === "dandiyanight" ? "active" : ""
            }`}
          >
            <p className="text-uppercase fs-5 font-bold">  Yacht Summer</p>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              tempore
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              perferendis perspiciatis in suscipit nobis, quasi tenetur nesciunt
              vitae totam iure.
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
