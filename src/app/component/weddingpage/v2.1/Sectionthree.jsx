"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import WeddingCard from "./Subcomponent/Weedingcard";
import { IoChevronForward, IoChevronForwardSharp } from "react-icons/io5";
import { GrFormPrevious } from "react-icons/gr";

// import "./wedding.css";

const Sectionthree = () => {
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const cards = [
    {
      image: "https://guestpix.com/wp-content/uploads/2024/05/IMG_0643-scaled.jpg",
      heading: "Consultation and planning",
      subHeading: "We’ll start with a 45-minute complimentary Zoom call to get to know you, understand your unique love story, and explore your dream wedding vision. From your ideal destination to special requests, we’ll cover everything to ensure we’re the perfect match for bringing your big day to life."
    },
    {
      image: "bea.jpeg",
      heading: "Destination & Venue Selection",
      subHeading: "After securing your design fee, you’ll officially be a part of the Demigod House family. We’ll curate up to three exquisite venue options tailored to your style, budget, and guests’ needs. Together, we’ll refine your choice until it’s everything you’ve dreamed of and more."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPN9oCvxuMq5KCwd-iV_VEHTvGGQZtDhjig&s",
      heading: "Design and Decor Management",
      subHeading: "Leave the logistics to us. We’ll negotiate with your venue to secure ideal dates, the best room rates, and exclusive perks. You’ll also receive a personalized wedding website to streamline guest bookings, while we handle every special request with precision and care."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaydaJxbVVHB16gJnZRLSVFM9sXtPvlWDbZg&s",
      heading: "Budget Management",
      subHeading: "As your big day approaches, we’ll manage timelines, deposit reminders, and essential travel updates. You’ll also meet your on-site wedding coordinator, ensuring every detail is seamless. When it’s time to celebrate, you’ll enjoy a stress-free experience with our dedicated team on standby."
    },
    {
      image: "vendor.webp",
      heading: "Vendor Sourcing and management",
      subHeading: "We take care of sourcing and coordinating with top-notch vendors to bring your wedding vision to life. From florals to entertainment, every element will be meticulously planned, so you can relax and fully immerse yourself in your special day."
    },

    {
      image: "gift.webp",
      heading: "Wedding Invitation and Gifting",
      subHeading: "Add a personal touch to your celebration with thoughtfully curated wedding Invitation and gifts. We’ll ensure each detail aligns with your style, leaving a lasting impression on your guests and making your day even more memorable."
    },
    {
      image: "hospi.webp",
      heading: "Guest RSVP & Hospitality Management",
      subHeading: "We make it easy for your guests to RSVP and plan their travel with our comprehensive hospitality management. From welcome gifts to personalized itineraries, we’ll create a flawless experience that your loved ones will cherish."
    },
    {
      image: "logi.webp",
      heading: "Logistic Management",
      subHeading: "From transportation to timelines, we handle all logistical aspects of your wedding. Our expert planning ensures every detail runs smoothly, so you and your guests can focus on enjoying the celebration without a worry in the world."
    },

  ]


  return (

    <div className="d-flex flex-lg-row flex-md-row flex-column">
      <div className="col-lg-4">
        <div
          className="w-100  object-fit-cover position-relative p-5 d-flex flex-column justify-content-center align-items-cente"
          style={{
            backgroundImage: `url('./images/effort.png')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: '100vh'
          }}
        >
          <p className="effortless-text text-white">Effortless Execution</p>
          <p className="text-white">
            Demigod House eight-step proven process allows us to develop and execute a custom-tailored plan for the destination wedding of your dreams.
          </p>
          <div className="d-flex gap-5">
            <div className="bg-white rounded-pill">
              <GrFormPrevious className="cursor-pointer" onClick={next} size={55} color="black" />
            </div>
            <div className="bg-white rounded-pill">
              <GrFormPrevious
                className="cursor-pointer"
                onClick={previous}
                style={{ transform: "rotate(-180deg)" }}
                size={55}
                color="black"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-cente align-items-center">
        <div className="col-lg-9 col-11 mt-lg-5 ">
          <div className=" slider2 ">
            <Slider {...settings2} ref={sliderRef}>
              {cards.map((card, index) => (
                <WeddingCard key={index} margin={(index + 1) % 2 === 0} image={card.image} heading={card.heading} subHeading={card.subHeading} />
              ))}
            </Slider>


          </div>
        </div>
      </div>

    </div>



  );
};

export default Sectionthree;
