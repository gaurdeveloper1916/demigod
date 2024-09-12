import React from "react";
import { GiStarShuriken } from "react-icons/gi";

function Ecosystem(props) {
  return (
    <div className="d-flex justify-content-center align-items-center  px-">
      <div className="col-lg-10">
         <div className="d-flex flex-lg-row flex-md-row flex-column justify-content-center align-items-center gap-5 p-4 overflow-hidden">
        <div className="col-lg-5" data-aos="fade-right" data-aos-duration="1200">
          <p className="h1 text-white">
            <span className="gradient-text fw-bold"> Network</span> &
          </p>
          <p className="h1 text-white ">
            <GiStarShuriken color="white" />{" "}
            <span className="gradient-text fw-bold">Ecosystem</span>
          </p>
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed dolore
            laudantium, molestiae voluptate maxime iste ad consequatur, labore
            recusandae provident voluptatibus nisi autem cupiditate alias non
            architecto cum? Excepturi, fugit. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Sed dolore laudantium, molestiae
            voluptate maxime iste ad consequatur, labore recusandae provident
            voluptatibus nisi autem cupiditate alias non architecto cum?
            Excepturi, fugit.
          </p>
        </div>
        <div className="col-lg-7" data-aos="fade-left" data-aos-duration="1200">
            <div>
            <img className="img-fluid" src="/images/M&M/startdust.png"></img>

            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="col-lg-6">
                    <img className="img-fluid" src="/images/M&M/emmys.png"></img>

                    </div>
                    <div className="col-lg-6">
                    <img className="img-fluid" src="/images/M&M/kfouro.png"></img>

                    </div>

            </div>
            <div>
            <img className="img-fluid h-25" src="/images/M&M/milliminus.png"></img>

            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
