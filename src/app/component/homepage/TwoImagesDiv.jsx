'use client'
import Link from "next/link";
import { useContext } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Auth } from "../../../context/AppContext";
import './index.css'
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
          description: "Ready to crush some grapes the old-school way? Get your feet wet (literally!) at this wild wine-making party. We're ditching the stuffy wine talk for hands-on fun - squish grapes, mix your own secret blend, and yes, plenty of tasting! Whether you're a wine newbie or a seasoned sipper, come unleash your inner vintner. Warning: Purple feet and big smiles guaranteed! 🍇✨",
          ticketdes: "This event is for wine lovers who want to learn the art of winemaking. Participants will get to crush grapes, mix their own blend, and taste different wines. Whether you're a wine newbie or a seasoned sipper, this event promises a fun and educational experience."
          // category: "BRANDING-WEBDESIGN",
        },
        {
          size: 4,
          src: "/images/smallImage.jpg",
          link: "/landingpage",
          title: "Tinder Night Extravaganza",
          description: "Ready to ditch those awkward dating apps? Join us for a night where real sparks fly! 🔥 We've got cool games to break the ice, yummy snacks, and drinks that'll help you loosen up (but not too much 😉). No more swiping left or right - just real people having real fun! Perfect for cool folks in their 20s and 30s who are tired of the same old dating scene. Trust us, this beats staring at your phone all night! ✨💫",
          ticketdes: "This event is for singles in their 20s and 30s who are tired of dating apps and want to meet new people in a fun and relaxed setting. Participants can enjoy games, snacks, and drinks while mingling with other singles. Whether you're looking for love or just want to make new friends, this event promises a fun and memorable night.",
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
          description: "Ready for a royal party that's actually fun? 👑 We're turning traditional fancy events upside down! Think amazing food stations (yes, you can eat with your hands!), cool music that'll get you dancing, and Instagram-worthy photo spots everywhere. Whether you're coming solo or with friends, you'll feel like royalty without the stuffy rules. Plus, there's a surprise midnight performance that'll blow your mind! Don't miss out on this epic night - your social media will thank you later! 🎉✨",
          ticketdes: "This event is for people who want to experience a royal party with a modern twist. Participants can enjoy delicious food, music, and photo opportunities in a fun and relaxed atmosphere. Whether you're coming alone or with friends, this event promises a night of royalty without the formalities. Be sure to stay for the surprise midnight performance that will leave you speechless!",
          // category: "BRANDING-WEBDESIGN",
        },
        {
          size: 8,
          src: "/images/landing-page-images/section2/bigimage.webp",
          link: "/landingpage",
          // title: "Event /04",
          title: "D'Royal Tiara",
          description: "Get ready for the party of your dreams! 👑 We're throwing the most amazing royal-themed bash where YOU get to wear stunning tiaras and feel like absolute royalty. Think fun photo booths with props, delicious food that'll make your mouth water, and the coolest dance floor ever! No boring formal stuff - just pure fun with your friends, awesome music, and memories that'll last forever. Don't forget to bring your camera because every corner is perfect for those Insta-worthy shots! ✨🎉",
          ticketdes: "This event is for people who want to experience a royal-themed party where they can wear tiaras and feel like royalty. Participants can enjoy photo booths, delicious food, and a fun dance floor in a relaxed and enjoyable atmosphere. Whether you're coming alone or with friends, this event promises a night of fun, music, and memories. Be sure to capture the moment with your camera as every corner is perfect for Instagram-worthy shots!",
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
          description: "Ready for a mind-blowing food party? 🍽️ We've got awesome chefs whipping up the most Instagram-worthy dishes you've ever seen! Jump in and learn some cool cooking tricks, taste amazing food that'll make your taste buds dance, and get ready to become a kitchen superstar. From secret sauce recipes to plating like a pro, this isn't your regular cooking class - it's a full-on food adventure! Perfect for foodies who love trying new things. Warning: You might become obsessed with cooking after this! 🔥✨",
          ticketdes: "This event is for foodies who want to experience a fun and interactive cooking party. Participants can learn cooking tricks, taste delicious food, and become kitchen superstars. Whether you're a beginner or an experienced cook, this event promises a unique and exciting culinary adventure. Be prepared to become obsessed with cooking after this unforgettable experience!",
          // category: "BRANDING-WEBDESIGN",
        },
        {
          size: 4,
          src: "/images/smallImage.jpg",
          link: "/landingpage",
          // title: "Event /06",
          title: "Marathon Mingle des",
          description: "Marathon Mingle des is an exciting event that brings together marathon enthusiasts from all over. Participate in a thrilling marathon race, enjoy the camaraderie of fellow runners, and celebrate your achievements with a post-race party. Whether you're a seasoned runner or a beginner, this event promises an unforgettable experience.",
          ticketdes: "This event is for marathon enthusiasts who want to participate in a thrilling marathon race. Whether you're a seasoned runner or a beginner, this event promises an exciting experience with fellow runners and a post-race celebration.",
          // category: "BRANDING-WEBDESIGN",
        },
      ],
    },
  ];
  return (
    <div
      className="container-fluid p-lg-5 p-3 mb-5 col-lg-11"
      style={{
        backgroundImage: `url('/ve.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {data.map((section, index) => (
        <div className="d-flex flex-lg-row flex-column gap-3 mt-5 p-lg-0 p-2" key={index}>
          {section.images.map((image, i) => (
            <div className={`col-lg-${image.size} ${i === 0 ? "mt-5" : ""}`} key={i}>
              <Link
                onClick={() => { handleUpdate(image.title, image.description,image.ticketdes) }}
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
                        
                        className="m-0 text-white image-div-content"
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