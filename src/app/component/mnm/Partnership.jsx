import React from "react";
import Openforbusiness from "./Openforbusiness";
import Partnershipslider from "./slider/Partnershipslider";
import { GiStarShuriken } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";

function Partnership() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="col-lg-10 col-12 p-lg-0 p-3">
        <div className="d-flex flex-lg-row flex-column  gap-5 overflow-hidden">
          <div
          data-aos="fade-right" data-aos-duration="1200"
            style={{ backgroundColor: "#32326a" }}
            className="col-lg-6 p-1  "
          >
            <Partnershipslider />
          </div>
          <div className="col-lg-6 " data-aos="fade-right" data-aos-duration="1200">
            <p className="h1 text-white fw-bold">
              <span className="gradient-text fw-bold">Open</span> to new{" "}
            </p>
            <p className="h2 gradient-text fw-bold">Partnerships</p>
            <div className="col-lg-8">
              <p className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                natus, itaque architecto doloribus sapiente, esse cum a
                reprehenderit iusto aspernatur fugit porro similique! Obcaecati
                excepturi beatae, harum omnis eveniet laudantium.Dicta natus,
                itaque architecto doloribus sapiente, esse cum a reprehenderit
                iusto aspernatur fugit porro similique! Obcaecati excepturi
                beatae, harum omnis eveniet laudantium
              </p>
              <div className="col-lg- d-flex ">
                <button className="know-more-button border border-0 rounded-pill  text-white px-3 py-2 fw-bold">
                  <GiStarShuriken color="white" /> Become a Partner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partnership;
