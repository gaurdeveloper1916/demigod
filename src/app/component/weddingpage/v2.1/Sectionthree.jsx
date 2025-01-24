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


  const cards = [{ image: "https://guestpix.com/wp-content/uploads/2024/05/IMG_0643-scaled.jpg",
    heading:"Connect",
    subHeading:"We’ll first get to know each other on a 45-minute complimentary Zoom call. This is where we’ll dive deeper into your specific wedding vision, dream destination, your love story, and any special needs or requests you may have. We’ll also answer all your questions, so you can make sure we’re the best fit for you!"
   },
   { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CUjA6ZIv98H6yTZ68qvw3EvRkZlP0EyCkg&s",
    heading:"Design",
    subHeading:"Next, we’ll send over your design fee to get started – and now you’re officially a Demigod House We’ll begin designing your wedding, presenting up to three options that speak to your style, budget, guests’ needs, and big wedding dreams. Then, we’ll tweak your favorite option until it’s perfect."
   },
   { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPN9oCvxuMq5KCwd-iV_VEHTvGGQZtDhjig&s",
    heading:"Manage",
    subHeading:"Now, you can leave all the complicated logistics to us. We’ll negotiate with your chosen resort to secure your dates, the best room rate possible, and extra special perks. You’ll also receive a custom wedding website to share with your guests, so they can book themselves with ease. If you or your guests have any special requests, we’ll take care of them for you."
   },
   { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaydaJxbVVHB16gJnZRLSVFM9sXtPvlWDbZg&s",
    heading:"Support",
    subHeading:"As your big day approaches, we’ll keep you in the loop with deposit due dates, must-know travel info, and an introduction to your on-site wedding coordinator. When you jet off to your dream destination (yay!), you’ll know exactly who to call if you need assistance or have a question. Our team is on standby to support you, so your destination wedding goes off without a hitch."
   },
   { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuAz9HFpDfCVxYC9AREgR6t5bQCRkSUuNtg&s",
    heading:"Savor",
    subHeading:"With every detail taken care of for you, you can relax and revel in your celebration shared with loved ones. Let your big day unfurl seamlessly as you embrace every moment of indulgence and inspired design. This is the Demigod House difference."
   },
  //  { image: "https://media.istockphoto.com/id/1933374098/photo/newlyweds-celebrating-with-their-guests-at-beach-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=mBbcn9c4Kq_kMA0WzeTXB48Jk6P3raONF1SbuKHugrY=",
  //   heading:"Connect",
  //   subHeading:"We’ll first get to know each other on a 45-minute complimentary Zoom call. This is where we’ll dive deeper into your specific wedding vision, dream destination, your love story, and any special needs or requests you may have. We’ll also answer all your questions, so you can make sure we’re the best fit for you!"
  //  }
   
  
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
            height:'100vh'
          }}
        >
          <p className="effortless-text text-white">Effortless Execution</p>
          <p className="text-white">
            Demigod House five-step proven process allows us to develop and execute a custom-tailored plan for the destination wedding of your dreams.
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

      <div className="col-lg-8 col-11 mt-lg-5">
        <div className=" slider2 ">
          <Slider {...settings2} ref={sliderRef}>
            {cards.map((card, index) => (
              <WeddingCard key={index} margin={(index + 1) % 2 === 0} image={card.image} heading= {card.heading} subHeading={card.subHeading} />
            ))}
          </Slider>


        </div>
      </div>
    </div>



  );
};

export default Sectionthree;
