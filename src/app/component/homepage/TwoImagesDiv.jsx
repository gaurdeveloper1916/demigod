'use client'

import Link from "next/link";
import { useContext } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Auth } from "../../../context/AppContext";

function TwoImagesDiv() {
  const { handleUpdate } = useContext(Auth)
  const data = [
    {
      images: [
        {
          size: 8,
          src: "/images/landing-page-images/section2/big_image.webp",
          link: "/landingpage",
          // title: "Event /01",

          title: "Wine Making Festival- Fete Du Vines ",
          description: "Wine Making Festival- Fete Du Vines des ",
          // category: "BRANDING-WEBDESIGN",
        },
        {
          size: 4,
          src: "/images/smallImage.jpg",
          link: "/landingpage",
          // title: "Event /02",
          title: "Tinder Nights",
          description: "Tinder Nights des",
          // category: "BRANDING-WEBDESIGN-HELLOW",
        },
      ],
    },
    {
      images: [
        {
          size: 4,
          src: "/images/landing-page-images/section2/smallimage.webp",
          link: "/landingpage",
          // title: "Event /03",
          title: "D'Throne Prince",
          description:"D'Throne Prince des"
          // category: "BRANDING-WEBDESIGN",
        },
        {
          size: 8,
          src: "/images/landing-page-images/section2/bigimage.webp",
          link: "/landingpage",
          // title: "Event /04",
          title: "D'Royal Tiara",
           description:"D'Royal Tiara des"
          // category: "BRANDING-WEBDESIGN",
        },
      ],
    },
    {
      images: [
        {
          size: 8,
          src: "/images/landing-page-images/section2/1bigimage.webp",
          link: "/landingpage",
          // title: "Event /05",
          title: "Cutinary O' Affaris",
          description:"Cutinary O' Affaris des"

          // category: "BRANDING-WEBDESIGN",
        },
        {
          size: 4,
          src: "/images/smallImage.jpg",
          link: "/landingpage",
          // title: "Event /06",
          description: "Marathon Mingle des",

          // category: "BRANDING-WEBDESIGN",
        },
      ],
    },
  ];
  return (
    <div
      className="container-fluid p-5 mb-5 col-lg-11"
      style={{
        backgroundImage: `url('/premium.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {data.map((section, index) => (
        <div className="d-flex gap-3 mt-5 p-lg-0 p-2" key={index}>
          {section.images.map((image, i) => (
            <div className={`col-lg-${image.size} ${i === 0 ? "mt-5" : ""}`} key={i}>
              <Link
                onClick={()=>{handleUpdate(image.title,image.description)}}
                href={{
                  pathname: "/landingpage",
              
                }}
              >
                <img className="img-fluid w-100" src={image.src} alt={image.title} />
              </Link>
              <div className="mt-3" style={{ lineHeight: "2px" }}>
                <div className="d-flex align-items-center justify-content-between mx-2">
                  <div className="text-white verySmallFont">
                    <div style={{ lineHeight: "30px" }}>
                      <p
                        style={{ fontSize: "30px", fontWeight: "700" }}
                        className="m-0 text-white"
                      >
                        {image.title}{" "}
                      </p>
                    </div>
                    <p className="fs-2 font-bold"></p>
                  </div>
                  <div className="text-white verySmallFont">
                    <p className="m-0">{image.category}</p>
                    <div className="row-reverse">
                      <MdArrowOutward size={25} />
                    </div>
                  </div>
                </div>
                <hr className="text-white hrClass p-0" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default TwoImagesDiv