"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import "./index.css";

const data = [
  {
    images: [
      {
        size: 8,
        src: "/images/landing-page-images/section2/big_image.webp",
        link: "/landingpage",
        title: "Event /01",
        description: "Vin Fete",
        category: "BRANDING-WEBDESIGN",
      },
      {
        size: 4,
        src: "/images/smallImage.jpg",
        link: "/landingpage",
        title: "Event /01",
        description: "INSIDE SOFTWARE",
        category: "BRANDING-WEBDESIGN-HELLOW",
      },
    ],
  },
  {
    images: [
      {
        size: 4,
        src: "/images/landing-page-images/section2/smallimage.webp",
        link: "/landingpage",
        title: "Event /01",
        description: "The Throne Prince",
        category: "BRANDING-WEBDESIGN",
      },
      {
        size: 8,
        src: "/images/landing-page-images/section2/bigimage.webp",
        link: "/landingpage",
        title: "Event /01",
        description: "The Royal Tiara",
        category: "BRANDING-WEBDESIGN",
      },
    ],
  },
  {
    images: [
      {
        size: 8,
        src: "/images/landing-page-images/section2/1bigimage.webp",
        link: "/landingpage",
        title: "Event /01",
        description: "Whiskey on european map",
        category: "BRANDING-WEBDESIGN",
      },
      {
        size: 4,
        src: "/images/smallImage.jpg",
        link: "/landingpage",
        title: "Event /01",
        description: "INSIDE SOFTWARE",
        category: "BRANDING-WEBDESIGN",
      },
    ],
  },
];

function TwoImagesDiv() {
  return (
    <div className="container-fluid p-5 mb-5 col-lg-11">
      {data.map((section, index) => (
        <div className="d-flex gap-3 mt-5 p-lg-0 p-2" key={index}>
          {section.images.map((image, i) => (
            <div className={`col-lg-${image.size} ${i === 0 ? "mt-5" : ""}`} key={i}>
              <Link href={image.link}>
                <img className="img-fluid w-100" src={image.src} alt={image.title} />
              </Link>
              <div className="d-flex align-items-center justify-content-between mx-2">
                <div className="text-white verySmallFont">
                  <p className="m-0">{image.title}</p>
                  <p className="fs-5 font-bold">{image.description}</p>
                </div>
                <div className="text-white verySmallFont">
                  <p className="m-0">{image.category}</p>
                  <div className="row-reverse">
                    <MdArrowOutward size={25} />
                  </div>
                </div>
              </div>
              <hr className="text-white hrClass" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TwoImagesDiv;
