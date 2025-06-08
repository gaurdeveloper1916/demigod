'use client'
import React, { useContext } from "react";
import {  MdArrowOutward } from "react-icons/md";
import './index.css'
import Link from "next/link";
import { Auth } from "../../../context/AppContext";
import { useRouter } from 'next/navigation';


const Prochainement = () => {
  const router = useRouter();

  const { handleUpdate, imageForLandingPage } = useContext(Auth);

  function handleChange(title, description, ticketdes, imdVideo, leftImage, rightImage) {
    handleUpdate(title, description, ticketdes)
    imageForLandingPage(leftImage, imdVideo, rightImage)
    router.push('/landingpage');

  }

  const arr = [
    {
      image: "/event-page/economic_patriots.webp",
      leftImage: "",
      rightImage: "",
      linking:"/landingpage?slug=economic-patriots-summit-europe",
      event_name: "Economic Patriots Summit Euprope ",
      desc: "Calling all European business minds! Get ready for an eye-opening summit that'll shake up how we think about Europe's money matters.",
      ticketsDes: "🌟 Connect with real business heroes who've been there, done that\n🤝 Network with folks who speak your language - no corporate jargon\n💡 Get practical tips you can use right away\n🎯 Learn winning strategies from people who've built success from scratch\n🚀 Walk away with action steps, not just theory\n✨ Be part of Europe's next big economic story"
    },
    {
      image: "/event-page/india_patriots.webp",

      leftImage: "",
      rightImage: "",
      linking:"/landingpage?slug=economic-patriots-summit-india",
      event_name: "Economic Patriots Summit India",
      desc: "Hey India! Ready to be part of something big? Join us for a game-changing summit where we're talking real business, real growth, and real opportunities.",
      ticketsDes: "🎉 Meet successful Indian entrepreneurs who started just like you\n💪 Get insider knowledge from people who understand our market\n📱 Learn how to use tech to grow your business\n🤝 Make connections that actually matter\n💡 Get real solutions for real business challenges\n🌟 Be part of India's economic revolution"
    },
    {
      image: "/event-page/us_patroits.webp",
      event_name: "Economic Patriots Summit USA",
      leftImage: "",
      rightImage: "",
      linking:"/landingpage?slug=economic-patriots-summit-usa",
      desc: "America, let's talk business! Join us for a no-nonsense summit where we cut through the fluff and focus on what really works in today's economy.",
      ticketsDes: "🗽 Get straight talk from American business veterans\n💡 Learn street-smart business strategies that work\n🤝 Connect with fellow entrepreneurs who get it\n🚀 Get practical tools for growing your business\n💪 Turn challenges into opportunities\n🌟 Be part of America's next success story"
    }
  ];
  return (
    <div className="container-fluid px-4 px-lg-5 py-5 mb-5 col-lg-12 upcoming-container">
      <div className="d-flex justify-content-between align-items-center mb-2 px-2">
        <div>
          <h4 className="text-white px-2">Upcoming Events</h4>
        </div>
      </div>
      <p className="text-secondary fw-bold px-3 mb-4">Stay updated with the latest Economic Patriots Summits happening around the world.</p>
      <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center gap-5 px-3">
        {arr.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.linking}
            >
              <div
                onClick={() => { handleChange(item.event_name, item.desc, item.ticketsDes, item.image, item.leftImage, item.rightImage) }}
                className="d-flex flex-column justify-content-center align-items-center px-3">
                <div className="product col-lg-10 position-relative">
                  <div className="imgbox">
                    <img className="w-100  img-fluid" src={item.image} alt={item.event_name} />
                  </div>
                  <div className="specifies d-flex justify-content-center align-items-center">
                    <div className="position-absolute fontdiv">
                      <h3 className="m-0 mediumfont text-white fw-bold">{item.event_name}</h3>
                    </div>
                  </div>
                </div>
                <div style={{ backgroundColor: '#866b2f' }} className="w-100 py-2 my-2 cursor rounded">
                
                  <div className="d-flex justify-content-between text-white mx-3 align-items-center">
                    <div>
                      <p className="m-0 fw-bold">{item.event_name}</p>
                      
                    </div>
                    <div className="bg-warning rounded-pill">
                      <MdArrowOutward className="p-1" size={30} />
                    </div>
                  </div>
              
                 
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Prochainement;