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


  const cards = [{ image: "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg",
    heading:"Connect",
    subHeading:"We’ll first get to know each other on a 45-minute complimentary Zoom call. This is where we’ll dive deeper into your specific wedding vision, dream destination, your love story, and any special needs or requests you may have. We’ll also answer all your questions, so you can make sure we’re the best fit for you!"
   },
   { image: "https://media.istockphoto.com/id/1933374098/photo/newlyweds-celebrating-with-their-guests-at-beach-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=mBbcn9c4Kq_kMA0WzeTXB48Jk6P3raONF1SbuKHugrY=",
    heading:"Priya",
    subHeading:"We’ll first get to know each other on a 45-minute complimentary Zoom call. This is where we’ll dive deeper into your specific wedding vision, dream destination, your love story, and any special needs or requests you may have. We’ll also answer all your questions, so you can make sure we’re the best fit for you!"
   },
   { image: "https://media.istockphoto.com/id/1933374098/photo/newlyweds-celebrating-with-their-guests-at-beach-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=mBbcn9c4Kq_kMA0WzeTXB48Jk6P3raONF1SbuKHugrY=",
    heading:"Connect",
    subHeading:"We’ll first get to know each other on a 45-minute complimentary Zoom call. This is where we’ll dive deeper into your specific wedding vision, dream destination, your love story, and any special needs or requests you may have. We’ll also answer all your questions, so you can make sure we’re the best fit for you!"
   },
   { image: "https://media.istockphoto.com/id/1933374098/photo/newlyweds-celebrating-with-their-guests-at-beach-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=mBbcn9c4Kq_kMA0WzeTXB48Jk6P3raONF1SbuKHugrY=",
    heading:"Connect",
    subHeading:"We’ll first get to know each other on a 45-minute complimentary Zoom call. This is where we’ll dive deeper into your specific wedding vision, dream destination, your love story, and any special needs or requests you may have. We’ll also answer all your questions, so you can make sure we’re the best fit for you!"
   },
   { image: "https://media.istockphoto.com/id/1933374098/photo/newlyweds-celebrating-with-their-guests-at-beach-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=mBbcn9c4Kq_kMA0WzeTXB48Jk6P3raONF1SbuKHugrY=",
    heading:"Connect",
    subHeading:"We’ll first get to know each other on a 45-minute complimentary Zoom call. This is where we’ll dive deeper into your specific wedding vision, dream destination, your love story, and any special needs or requests you may have. We’ll also answer all your questions, so you can make sure we’re the best fit for you!"
   },
   { image: "https://media.istockphoto.com/id/1933374098/photo/newlyweds-celebrating-with-their-guests-at-beach-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=mBbcn9c4Kq_kMA0WzeTXB48Jk6P3raONF1SbuKHugrY=",
    heading:"Connect",
    subHeading:"We’ll first get to know each other on a 45-minute complimentary Zoom call. This is where we’ll dive deeper into your specific wedding vision, dream destination, your love story, and any special needs or requests you may have. We’ll also answer all your questions, so you can make sure we’re the best fit for you!"
   }
   
  
  ]


  return (

    <div className="d-flex ">
      <div className="col-lg-4">
        <div
          className="w-100  object-fit-cover position-relative p-5 d-flex flex-column justify-content-center align-items-cente"
          style={{
            backgroundImage: `url('./images/outing-2.png')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height:'100vh'
          }}
        >
          <p className="effortless-text text-white">Effortless Execution</p>
          <p className="text-white">
            Destination Brides’ five-step proven process allows us to develop and execute a custom-tailored plan for the destination wedding of your dreams.
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
