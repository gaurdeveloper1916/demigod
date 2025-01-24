import React from "react";
import { SiNewyorktimes } from "react-icons/si";
import { SiThewashingtonpost } from "react-icons/si";
import { SiNbc } from "react-icons/si";
import { SiBuzzfeed } from "react-icons/si";
import { SiVox } from "react-icons/si";
import { TbBrandNationalGeographic } from "react-icons/tb";
import { FcBbc } from "react-icons/fc";
import { SiWarnerbros } from "react-icons/si";
import { ImTv } from "react-icons/im";
import { FaMeta } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";
import { TbNews } from "react-icons/tb";


import "./index.css";
function ElectronicCommunity() {
  return (
    <div className="d-flex justify-content-center align-items-center d-lg-block  d-none mt-5 mb-5">
      <div className="col-lg-8 mt-4 ">
        <div style={{ height: "38rem", overflow: "inherit" }} className="d-flex justify-content-center px-5 position-relative">
        <div style={{lineHeight:'4rem'}} className="d-flex flex-column text-white">
            <p className="m-0 community-fs  fw-bold">Our Global<span className="gradient-text fw-bold"> Electronic</span> </p>
            <p className="m-0 community-fs fw-bold"><span className="gradient-text  fw-bold">Media</span>channel partners </p>
            <p className="m-0 text-center"></p>
          </div>
          <div className="position-absolute   linkdien-container all-container">
            <div className="d-flex flex-column align-items-center">
            <SiNewyorktimes size={40} className="icon-color" />
              {/* <p className="text-white">Linkdien</p> */}
            </div>
          </div>
          <div className="position-absolute   x-twitter-container all-container">
            <div className="d-flex flex-column align-items-center">
              <SiThewashingtonpost size={40} className="icon-color" />
              {/* <p className="text-white">Twitter</p> */}
            </div>
          </div>
          <div className="position-absolute   discord-container all-container">
            <div className="d-flex flex-column align-items-center">
              <SiNbc size={40} className="icon-color" />
              {/* <p className="text-white">Discord</p> */}
            </div>
          </div>
          <div className="position-absolute   discord-container2 all-container">
            <div className="d-flex flex-column align-items-center">
              <SiBuzzfeed size={40} className="icon-color" />
              {/* <p className="text-white">Discord</p> */}
            </div>
          </div>
          <div className="position-absolute   youtube-container all-container">
            <div className="d-flex flex-column align-items-center">
              <SiVox size={40} className="icon-color" />
              {/* <p className="text-white">YouTube</p> */}
            </div>
          </div>
          <div className="position-absolute   forum-container all-container">
            <div className="d-flex flex-column align-items-center">
              <TbBrandNationalGeographic size={40} className="icon-color" />
              {/* <p className="text-white">Forum</p> */}
            </div>
          </div>
          <div className="position-absolute   wiki-container all-container">
            <div className="d-flex flex-column align-items-center">
              <SiWarnerbros size={40} className="icon-color" />
              {/* <p className="text-white">WIKI</p> */}
            </div>
          </div>
          <div className="position-absolute   snap-container all-container">
            <div className="d-flex flex-column align-items-center">
              <FcBbc size={40} className="icon-color" />
              {/* <p className="text-white">Snapchat</p> */}
            </div>
          </div>
          <div className="position-absolute   tele-container all-container">
            <div className="d-flex flex-column align-items-center">
              <ImTv size={40} className="icon-color" />
              {/* <p className="text-white">Tele</p> */}
            </div>
          </div>
          <div className="position-absolute   forum-container2 all-container">
            <div className="d-flex flex-column align-items-center">
              <FaMeta size={40} className="icon-color" />
              {/* <p className="text-white">Forum</p> */}
            </div>
          </div>
          <div className="position-absolute   wiki-container2 all-container">
            <div className="d-flex flex-column align-items-center">
              <IoLogoGoogleplus size={40} className="icon-color" />
              {/* <p className="text-white">WIKI</p> */}
            </div>
          </div>
          <div className="position-absolute   tele-container2 all-container">
            <div className="d-flex flex-column align-items-center">
              <TbNews size={40} className="icon-color" />
              {/* <p className="text-white">Tele</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElectronicCommunity;
