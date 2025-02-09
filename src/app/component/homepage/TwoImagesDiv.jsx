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

          title: "Wine Making Festival- Fete Du Vines",
          description: "Join us for the Wine Making Festival - Fete Du Vines, a celebration of the art and tradition of winemaking. Enjoy wine tastings, vineyard tours, and workshops led by expert vintners. Experience the rich culture and history of winemaking in a festive atmosphere with live music, gourmet food, and more.",
          // category: "BRANDING-WEBDESIGN",
        },
        {
          size: 4,
          src: "/images/smallImage.jpg",
          link: "/landingpage",
            title: "Tinder Nights",
            description: "A night of excitement and entertainment awaits you at the Tinder Nights Festival. Join us for an unforgettable evening filled with fun activities, great food, and amazing company. Don't miss out on this unique experience that promises to create lasting memories."
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
          description: "Join us for an exclusive event featuring the D'Throne Prince. Experience a royal celebration with exquisite performances, gourmet dining, and a majestic atmosphere. Don't miss this chance to be part of a regal affair.",
          // category: "BRANDING-WEBDESIGN",
        },
        {
          size: 8,
          src: "/images/landing-page-images/section2/bigimage.webp",
          link: "/landingpage",
          // title: "Event /04",
          title: "D'Royal Tiara",
          description: "D'Royal Tiara is a grand event celebrating the elegance and beauty of royal tiaras. Join us for an evening of glamour, fine dining, and exquisite performances. Witness the unveiling of the most stunning tiaras and enjoy a night of luxury and sophistication.",
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
          description: "Cutinary O' Affaris is a culinary extravaganza that brings together food enthusiasts and top chefs. Enjoy a variety of gourmet dishes, cooking demonstrations, and interactive workshops. Indulge in a gastronomic adventure and discover new flavors and culinary techniques."

          // category: "BRANDING-WEBDESIGN",
        },
        {
          size: 4,
          src: "/images/smallImage.jpg",
          link: "/landingpage",
          // title: "Event /06",
            title: "Marathon Mingle des",
            description: "Marathon Mingle des is an exciting event that brings together marathon enthusiasts from all over. Participate in a thrilling marathon race, enjoy the camaraderie of fellow runners, and celebrate your achievements with a post-race party. Whether you're a seasoned runner or a beginner, this event promises an unforgettable experience."
          // category: "BRANDING-WEBDESIGN",
        },
      ],
    },
  ];
  return (
    <div
      className="container-fluid p-5 mb-5 col-lg-11"
      style={{
        backgroundImage: `url('/ve.jpg')`,
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