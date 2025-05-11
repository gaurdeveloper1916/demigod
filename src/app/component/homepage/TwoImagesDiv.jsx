'use client'
import Link from "next/link";
import { useContext } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Auth } from "../../../context/AppContext";
import './index.css';
function TwoImagesDiv() {
  const { handleUpdate, imageForLandingPage } = useContext(Auth);
  const data = [
    {
      images: [
        {
          size: 8,
          src: "/event-page/grand_wine.mp4",
          link: "/landingpage?slug=wine-making-festival",
          leftImage: "./event-page/wine_making.png",
          rightImage: "./event-page/wine_making.png",
          title: "Wine Making Festival-Fete du  Vin ",
          description: "",
          ticketdes: "Step into the enchanting world of The Grand Pour, where tradition meets taste, and every moment is paired with elegance. Celebrate the art of winemaking with a vibrant blend of culture, cuisine, and creativity. From grape stomping to jazz under the stars, this event promises an unforgettable experience for wine lovers, connoisseurs, and creators alike. Join us for a luxurious celebration of vinous glory!",
          overlay: true,
          big: true,
          overlayTitle: "THE GRAND POUR",
          overlaySubTitle: "Experience the Elegance",
          schedule: ['2 weekend of october', 'Win a ticket to france'],
          prizeMoney: 'Best Wine Winner Prize 50K',
          bottomLine: ['Grape Stomping Ritual & Wine-Making Contest', 'Private Vineyard Tours'],
          bottomLine2: ['7-Course Organic Culinary Journey', 'Premium Wine Tastings & Pairings'],
          bottomLine3: ['Drone Show Spectacle', 'Jazz Concert Under the Stars']
        },
        {
          size: 4,
          src: "/event-page/dating.png",
          link: "/landingpage?slug=tinder-night-events",
          title: "Tinder Nights",
          overlay: true,
          big: false,
          leftImage: "",
          rightImage: "",
          description: "Ready to ditch those awkward dating apps? Join us for a night where real sparks fly! 🔥 We've got cool games to break the ice, yummy snacks, and drinks that'll help you loosen up (but not too much 😉). No more swiping left or right - just real people having real fun! Perfect for cool folks in their 20s and 30s who are tired of the same old dating scene. Trust us, this beats staring at your phone all night! ✨💫",
          ticketdes: "This event is for singles in their 20s and 30s who are tired of dating apps and want to meet new people in a fun and relaxed setting. Participants can enjoy games, snacks, and drinks while mingling with other singles. Whether you're looking for love or just want to make new friends, this event promises a fun and memorable night.",
         
        },
      ],
    },
    {
      images: [
        {
          size: 4,

          src: './event-page/smallImage.webp',
          link: "/landingpage?slug=Dthrone-event",
          title: "D'Throne Prince",
          leftImage: "",
          rightImage: "",
          description: "Ready for a royal party that's actually fun? 👑 We're turning traditional fancy events upside down! Think amazing food stations (yes, you can eat with your hands!), cool music that'll get you dancing, and Instagram-worthy photo spots everywhere. Whether you're coming solo or with friends, you'll feel like royalty without the stuffy rules. Plus, there's a surprise midnight performance that'll blow your mind! Don't miss out on this epic night - your social media will thank you later! 🎉✨",

          ticketdes: "This event is for people who want to experience a royal party with a modern twist. Participants can enjoy delicious food, music, and photo opportunities in a fun and relaxed atmosphere. Whether you're coming alone or with friends, this event promises a night of royalty without the formalities. Be sure to stay for the surprise midnight performance that will leave you speechless!",
          overlay: false
        },
        {
          size: 8,
          src: "/event-page/Beauty_Paegant_Poster.mp4",
          link: "/landingpage?slug=beauty-pagent-event",
          title: "D'Royal Tiara",
          leftImage: "",
          rightImage: "",
          description: "Get ready for the party of your dreams! 👑 We're throwing the most amazing royal-themed bash where YOU get to wear stunning tiaras and feel like absolute royalty. Think fun photo booths with props, delicious food that'll make your mouth water, and the coolest dance floor ever! No boring formal stuff - just pure fun with your friends, awesome music, and memories that'll last forever. Don't forget to bring your camera because every corner is perfect for those Insta-worthy shots! ✨🎉",
          ticketdes: "This event is for people who want to experience a royal-themed party where they can wear tiaras and feel like royalty. Participants can enjoy photo booths, delicious food, and a fun dance floor in a relaxed and enjoyable atmosphere. Whether you're coming alone or with friends, this event promises a night of fun, music, and memories. Be sure to capture the moment with your camera as every corner is perfect for Instagram-worthy shots!",
          overlay: false
        }



      ],
    },

    {
      images: [
        {
          size: 8,
          src: "/event-page/culinary_event.mp4",
          link: "/landingpage?slug=flavors-of-love-cooking-festival",
          // title: "Event /05",
          title: "Cutinary O' Affaris",
          leftImage: "",
          rightImage: "",
          description: "Ready for a mind-blowing food party? 🍽️ We've got awesome chefs whipping up the most Instagram-worthy dishes you've ever seen! Jump in and learn some cool cooking tricks, taste amazing food that'll make your taste buds dance, and get ready to become a kitchen superstar. From secret sauce recipes to plating like a pro, this isn't your regular cooking class - it's a full-on food adventure! Perfect for foodies who love trying new things. Warning: You might become obsessed with cooking after this! 🔥✨",
          ticketdes: "This event is for foodies who want to experience a fun and interactive cooking party. Participants can learn cooking tricks, taste delicious food, and become kitchen superstars. Whether you're a beginner or an experienced cook, this event promises a unique and exciting culinary adventure. Be prepared to become obsessed with cooking after this unforgettable experience!",
          overlay: true,
          big: true,
          overlayTitle: "THE CULINARY QUEST",
          overlaySubTitle: "The Future of Flavour",
          schedule: ['1 weekend of december', 'Best dish winner price 75k'],
          prizeMoney: '',
          bottomLine: ['Food making contest', '5 Star dining experience'],
          bottomLine2: ['7-Course Organic Culinary Journey', 'Premium Wine Tastings & Pairings'],
          bottomLine3: ['Drone Show Spectacle', 'Jazz Concert Under the Stars']
        },
        {
          size: 4,
          // src: "/event-page/marathon_mingle.webp",
          src: "./event-page/COUPLE'S_MARATHON.webp",
          link: "/landingpage?slug=marathon-mingle-event",
          // title: "Event /06",
          title: "Marathon Mingle",
          leftImage: "",
          rightImage: "",
          description: "Marathon Mingle des is an exciting event that brings together marathon enthusiasts from all over. Participate in a thrilling marathon race, enjoy the camaraderie of fellow runners, and celebrate your achievements with a post-race party. Whether you're a seasoned runner or a beginner, this event promises an unforgettable experience.",
          ticketdes: "This event is for marathon enthusiasts who want to participate in a thrilling marathon race. Whether you're a seasoned runner or a beginner, this event promises an exciting experience with fellow runners and a post-race celebration.",
          overlay: false
        },
      ],
    },
  ];


  function handleChange(title, description, ticketdes, imdVideo, leftImage, rightImage) {

    handleUpdate(title, description, ticketdes)
    imageForLandingPage(leftImage, imdVideo, rightImage)
  }
  return (
    <div
      className="container-fluid mb-5 col-lg-11"
    // style={{
    //   backgroundImage: `url('/ve.jpg')`,
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   backgroundRepeat: 'no-repeat',
    // }}
    >
      {data.map((section, index) => (
        <div className="d-flex flex-lg-row flex-column gap-3 mt-5 p-lg-0 p-2" key={index}>
          {section.images.map((image, i) => (

            <div onClick={() => { handleChange(image.title, image.description, image.ticketdes, image.src, image.leftImage, image.rightImage) }} className={`col-lg-${image.size} ${i === 0 ? "mt-5" : ""}`} key={i}>
              <Link href={image.link}>
                {image.src.endsWith(".mp4") ? (
                  <div className="video-container w-100 position-relative">
                    <video autoPlay muted loop playsInline className="img-fluid w-100">
                      <source src={image.src} type="video/mp4" />
                    </video>

                    {
                      image.overlay && image.big ?
                        <div>
                          <div style={{ left: '9rem' }} className="position-absolute top-0 mt-4 ">
                            <div className="d-flex justify-content-center flex-column align-items-center text-center px-3">
                              <h1 className="display-4 text-whit fw-bold text-shadow gradient-tex text-web" >{image.overlayTitle}</h1>
                              <p className="fs-4 text-white fst-italic mb-5 text-shadow" >{image.overlaySubTitle}</p>
                            </div>
                          </div>
                          <div style={{ top: '11rem' }} className="position-absolute  ">
                            {
                              image.schedule.map((item, index) => <div key={index} style={{ backgroundColor: "#0000009c", borderTopRightRadius: '30px', borderBottomRightRadius: '30px' }}>
                                <p className="px-5 py-3 text-white mediumfont">{item}</p>

                              </div>)
                            }

                          </div>
                          <div
                            className="position-absolute"
                            style={{
                              top: '11rem',
                              right: 0,



                            }}
                          >
                            <div style={{ backgroundColor: "#0000009c", borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px' }}>
                              <p className=" px-5 py-3 text-white mediumfont">
                                {image.prizeMoney}
                              </p>
                            </div>

                          </div>

                          <div className="position-absolute bottom-0 w-100">
                            <div className="d-flex gap-5 justify-content-center align-items-center mb-4 text-center">
                              <div className="line-height text-white text-shadow">
                                {image.bottomLine.map((item, index) => <p key={index}>{item}</p>)}
                              </div>
                              <div className="line-height text-white text-shadow">
                                {image.bottomLine2.map((item, index) => <p key={index}>{item}</p>)}
                              </div>
                              <div className="line-height text-white text-shadow">
                                {image.bottomLine3.map((item, index) => <p key={index}>{item}</p>)}
                              </div>
                            </div>
                          </div>

                        </div> : ''
                    }








                  </div>
                ) : (
                  <div>
                    {
                      image.overlay && !image.big ?
                        <div className="position-relative">
                          <img className="img-fluid w-100" src={image.src} alt={image.title} />

                          <div
                            className="position-absolute start-0 top-50 translate-middle-y"
                            style={{ zIndex: 2 }}
                          >
                            <div
                              key={index}
                              style={{
                                backgroundColor: "rgba(175, 150, 115, 0.5)",
                                borderTopRightRadius: '30px',
                                borderBottomRightRadius: '30px',
                              }}
                            >
                              <p className="px-5 py-3 fw-semibold text-black mediumfont">Winner Couple get Ticket to Paris</p>
                            </div>
                            <div
                              key={index}
                              style={{
                                backgroundColor: "rgba(175, 150, 115, 0.5)",
                                borderTopRightRadius: '30px',
                                borderBottomRightRadius: '30px',
                              }}
                            >
                              <p className="px-5 py-3 fw-semibold text-black mediumfont">Luxury Gift set (worth 1500+) </p>
                            </div>
                            <div
                              key={index}
                              style={{
                                backgroundColor: "rgba(175, 150, 115, 0.5)",
                                borderTopRightRadius: '30px',
                                borderBottomRightRadius: '30px',
                              }}
                            >
                              <p className="px-5 py-3 fw-semibold text-black mediumfont">Live Brand + Drone Light Show</p>
                            </div>

                          </div>


                          <div className="position-absolute bottom-0 w-100">
                            <div className="d-flex gap-5 justify-content-center align-items-center mb-4 text-center">
                              <div  className="display-5 text-web fw-bold text-shadow ">
                                First Flame
                              </div>

                            </div>
                          </div>
                        </div> : <img className="img-fluid w-100" src={image.src} alt={image.title} />

                    }
                  </div>



                )}
              </Link>
              <div className="mt-3" style={{ lineHeight: "2px" }}>
                <div className="d-flex align-items-center justify-content-between mx-2">
                  <div className="text-white verySmallFont">
                    <div style={{ lineHeight: "30px" }}>
                      <p className="m-0 text-white image-div-content">{image.title}</p>
                    </div>
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
export default TwoImagesDiv;
