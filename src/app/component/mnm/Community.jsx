import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa6";
import { FaWikipediaW } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

import "./index.css";
function Community() {
  return (
    <div className="d-flex justify-content-center align-items-center d-lg-block  d-none mb-5">
      <div className="col-lg-8 mt-4 ">
        <div style={{ height: "38rem", overflow: "inherit" }} className="d-flex justify-content-center px-5 position-relative">
          <div style={{lineHeight:'4rem'}} className="d-flex flex-column text-white">
            <p className="m-0 community-fs  fw-bold">Our Global<span className="gradient-text fw-bold"> Print</span> </p>
            <p className="m-0 community-fs fw-bold"><span className="gradient-text  fw-bold">Media</span> partner channel</p>
            <p className="m-0 text-center">click on the circle to know our review</p>
          </div>
          <div className="position-absolute   linkdien-container all-container">
            <div className="d-flex flex-column align-items-center">
              <FaLinkedin size={40} className="icon-color" />
              <p className="text-white">Linkdien</p>
            </div>
          </div>
          <div className="position-absolute   x-twitter-container all-container">
            <div className="d-flex flex-column align-items-center">
              <FaXTwitter size={40} className="icon-color" />
              <p className="text-white">Twitter</p>
            </div>
          </div>
          <div className="position-absolute   discord-container all-container">
            <div className="d-flex flex-column align-items-center">
              <FaDiscord size={40} className="icon-color" />
              <p className="text-white">Discord</p>
            </div>
          </div>
          <div className="position-absolute   discord-container2 all-container">
            <div className="d-flex flex-column align-items-center">
              <FaDiscord size={40} className="icon-color" />
              <p className="text-white">Discord</p>
            </div>
          </div>
          <div className="position-absolute   youtube-container all-container">
            <div className="d-flex flex-column align-items-center">
              <FaYoutube size={40} className="icon-color" />
              <p className="text-white">YouTube</p>
            </div>
          </div>
          <div className="position-absolute   forum-container all-container">
            <div className="d-flex flex-column align-items-center">
              <TiMessages size={40} className="icon-color" />
              <p className="text-white">Forum</p>
            </div>
          </div>
          <div className="position-absolute   wiki-container all-container">
            <div className="d-flex flex-column align-items-center">
              <FaWikipediaW size={40} className="icon-color" />
              <p className="text-white">WIKI</p>
            </div>
          </div>
          <div className="position-absolute   snap-container all-container">
            <div className="d-flex flex-column align-items-center">
              <FaWikipediaW size={40} className="icon-color" />
              <p className="text-white">Snapchat</p>
            </div>
          </div>
          <div className="position-absolute   tele-container all-container">
            <div className="d-flex flex-column align-items-center">
              <FaTelegramPlane size={40} className="icon-color" />
              <p className="text-white">Tele</p>
            </div>
          </div>
          <div className="position-absolute   forum-container2 all-container">
            <div className="d-flex flex-column align-items-center">
              <TiMessages size={40} className="icon-color" />
              <p className="text-white">Forum</p>
            </div>
          </div>
          <div className="position-absolute   wiki-container2 all-container">
            <div className="d-flex flex-column align-items-center">
              <FaWikipediaW size={40} className="icon-color" />
              <p className="text-white">WIKI</p>
            </div>
          </div>
          <div className="position-absolute   tele-container2 all-container">
            <div className="d-flex flex-column align-items-center">
              <FaTelegramPlane size={40} className="icon-color" />
              <p className="text-white">Tele</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
