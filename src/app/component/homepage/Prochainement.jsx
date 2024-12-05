'use client'
import React from "react";
import { MdArrowCircleLeft, MdArrowCircleRight, MdArrowOutward } from "react-icons/md";
import './index.css'
import Link from "next/link";
const Prochainement
 = () => {
  const arr = [
    {
      image:
        "/images/landing-page-images/section3/EUR.webp",
      event_name: "Economic Patriots Summit Euprope",
      desc: "",
    },
    {
      image:
        "/images/landing-page-images/section3/INDIA.webp",
        event_name: "Economic Patriots Summit India",
      desc: "",
    },
    {
      image:
        "/images/landing-page-images/section3/USA.webp",
        event_name: "Economic Patriots Summit USA",
      desc: "",
    }
  ];
  return (
    <div className=" p-5">
      <div className="d-flex justify-content-between align-items-center mx-lg-4 mx-0">
       <div>
         <h4 className="text-white">Prochainement</h4></div>
      <div>
      <div className="d-lg-block d-md-block d-none">
      <button className="px-4 py-2 rounded smallfont bg-black text-white border">Programmation</button>
      <MdArrowCircleLeft className="cursor"  color="white"size={34}/>
      <MdArrowCircleRight className="cursor" color="white"size={34} />
      </div>

      </div>
      </div>
      <p className="text-white mx-lg-4 mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium culpa distinctio, ipsa ut assumenda nemo a sint architecto maxime doloremque expedita, aliquam veritatis accusamus dignissimos. Ratione eaque iste eligendi laboriosam. ipsa ut assumenda nemo a sint architecto maxime doloremque expedita, </p>
      <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center  gap-5 ">
        {arr.map((item, index) => {
          return (
           <>
              <Link href="/landingpage">
                <div className="d-flex  flex-column justify-content-center align-items-center">
                  <div class="product col-lg-10 position-realtive">
                    <div class="imgbox  ">
                      <img className="w-100 img-fluid" src={item.image} class="img-fluid" />
                    </div>
                    <div class="specifies d-flex justify-content-center align-items-center">
                      <div className="position-absolute fontdiv">
                        <h3 className="m-0 mediumfont text-white fw-bold">{item.event_name}</h3>
                        <p className="m-0 smallfont text-center text-white fw-bold">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#866b2f' }} className="w-100  py-2 my-2 cursor  rounded">

                    <div className="d-flex justify-content-between text-white  mx-3 align-items-center">
                      <div >
                        <p className="m-0 fw-bold">{item.event_name}</p>
                        <p className="m-0 fw-bold">{item.desc}</p>
                      </div>
                      <div className="bg-warning rounded-pill">
                        <MdArrowOutward className="p-1" size={30} />

                      </div>

                    </div>
                  </div>

                </div>
              </Link>
             
           </>
          
          );
        })}
      </div>
    </div>
  );
};
export default Prochainement
;