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
              {/* <FaLinkedin size={40} className="icon-color" /> */}
              {/* <p className="text-white">Linkdien</p> */}
              <img style={{width:"120px"}}  className="img-circle rounded-pill" src="https://yt3.googleusercontent.com/ytc/AIdro_mpuS6J3PwGJatG2czLGfmZHyE_kNicqukg0jBnCbENmiJl=s900-c-k-c0x00ffffff-no-rj"></img>

            </div>
          </div>
          <div className="position-absolute   x-twitter-container all-container">
            <div className="d-flex flex-column align-items-center">
              {/* <FaXTwitter size={40} className="icon-color" />
              <p className="text-white">Twitter</p> */}
               <img  className="img-circle rounded-pill " src="global.png"></img>
            </div>
          </div>
          <div className="position-absolute   discord-container all-container">
            <div className="d-flex flex-column align-items-center">
              {/* <FaDiscord size={40} className="icon-color" />
              <p className="text-white">Discord</p> */}
              <img  className="img-circle rounded-pill" src="timesof.png"></img>
            </div>
          </div>
          <div className="position-absolute   discord-container2 all-container">
            <div className="d-flex flex-column align-items-center">
              {/* <FaDiscord size={40} className="icon-color" /> */}
              {/* <p className="text-white">Discord</p> */}
              <img style={{width:"150px"}} className="img-circle rounded-pill" src="https://media.licdn.com/dms/image/v2/C4D0BAQFgh_w9sQdWqA/company-logo_200_200/company-logo_200_200/0/1674796371606/hindustantimes_logo?e=2147483647&v=beta&t=w1Je6BGJnr89Nb4elHQUqnICm_fNYeWOFrApPmTWH2s"></img>

            </div>
          </div>
          <div className="position-absolute   youtube-container all-container">
            <div className="d-flex flex-column align-items-center">
              {/* <FaYoutube size={40} className="icon-color" />
              <p className="text-white">YouTube</p> */}
              <img style={{width:"150px"}} className="img-circle rounded-pill" src="rp.png"></img>
            </div>
          </div>
          <div className="position-absolute   forum-container all-container">
            <div className="d-flex flex-column align-items-center">
              {/* <TiMessages size={40} className="icon-color" />
              <p className="text-white">Forum</p> */}
              <img style={{width:"130px"}} className="img-circle rounded-pill" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcI8l357TwseEANRCvI41FiJAWw7wtd4zyMw&s"></img>
            </div>
          </div>
          <div className="position-absolute   wiki-container all-container">
            <div className="d-flex flex-column align-items-center">
              {/* <FaWikipediaW size={40} className="icon-color" />
              <p className="text-white">WIKI</p> */}
              <img style={{width:"110px"}} className="img-circle rounded-pill" src="ch.png"></img>
            </div>
          </div>
          <div className="position-absolute   snap-container all-container">
            <div className="d-flex flex-column align-items-center">
              {/* <FaWikipediaW size={40} className="icon-color" />
              <p className="text-white">Snapchat</p> */}
              <img style={{width:"110px"}} className="img-circle rounded-pill" src="age.png"></img>
            </div>
          </div>
          <div className="position-absolute   tele-container all-container">
            <div className="d-flex flex-column align-items-center">
              {/* <FaTelegramPlane size={40} className="icon-color" />
              <p className="text-white">Tele</p> */}
              <img style={{width:"100px"}} className="img-circle rounded-pill" src="die.png"></img>
            </div>
          </div>
          <div className="position-absolute   forum-container2 all-container">
            <div className="d-flex flex-column align-items-center">
              {/* <TiMessages size={40} className="icon-color" />
              <p className="text-white">Forum</p> */}
              <img style={{width:"150px"}} className="img-circle rounded-pill" src="NYK.png"></img>
            </div>
          </div>
          <div className="position-absolute   wiki-container2 all-container">
            <div className="d-flex flex-column align-items-center">
              {/* <FaWikipediaW size={40} className="icon-color" />
              <p className="text-white">WIKI</p> */}
              <img style={{width:"70px"}} className="img-circle rounded-pill" src="japan.png"></img>
            </div>
          </div>
          <div className="position-absolute   tele-container2 all-container">
            <div className="d-flex flex-column align-items-center">
              {/* <FaTelegramPlane size={40} className="icon-color" />
              <p className="text-white">Tele</p> */}
              <img style={{width:"110px"}} className="img-circle rounded-pill" src="strai.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
