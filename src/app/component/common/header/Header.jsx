"use client";
import Link from "next/link";
import "./index.css";
import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import { data } from "../../constant/Dummy";
import { FaChevronDown } from "react-icons/fa";

import { BsX } from 'react-icons/bs';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineArrowUpward } from "react-icons/md";


function OffCanvasExample({ data, where }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <RxHamburgerMenu
        color="white"
        onClick={handleShow}

        style={{ marginTop: "12px" }}
        size={30}
      />
      <Offcanvas
        className="bg-black"
        show={show}
        onHide={handleClose}
        placement="end"
        name="end"
      >
        <Offcanvas.Header closeButton={false} className="d-flex justify-content-between p-2">
          <Offcanvas.Title>
            <a href="/">
              <img className="logoImage" src="./images/demigodnew.png" alt="Logo"></img>
            </a>
          </Offcanvas.Title>
          <BsX size={35} className=" text-white" onClick={handleClose} />
        </Offcanvas.Header>
        <Offcanvas.Body style={{ marginTop: where === 'corporate' ? '-1%' : '-6%' }}>

          <Accordion defaultActiveKey="0" className={`${where === 'corporate' ? 'd-flex flex-column gap-5 px-5' : ''}`}>
            {data.map((item, i) => {
              // {console.log(item.attributes.URLText)}
              return (
                <div style={{ lineHeight: '8px' }} key={i + 1}>
                  <a className="text-deco" href={item.attributes.url}>
                    <div className="d-flex justify-content-between">
                      <p className={`text-web ${where === 'corporate' ? '' : 'smallfont'}`}>  {item.attributes.corporate}</p>

                      <div >
                        <MdOutlineArrowUpward size={25} color="white" className="transform rotate-45" />
                      </div>

                    </div>
                  </a >
                  <hr className="text-white" />

                </div>
              );
            })}
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



function Header({ where }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div className="d-lg-block d-none ">
        <div
          style={{ zIndex: "999" }}
          className={`d-flex header-hover  w-100 position-fixed top-0 align-items-center   ${isSticky ? "bg-black" : ""
            }`}
        >
          <div className="  px-5 w-100 d-flex gap-5 justify-content-between">
            <div className="position-relative">
              <Link className="" href="/">
                {" "}
                <img
                  className="logoImage cursor"
                  src="./images/demigodnew.png"
                ></img>
                <p className='position-absolute logo-text'>Media.Marketing.Event’s</p>
              </Link>
            </div>


            <div className="d-flex justify-content-center align-items-center gap-3  headerlist  ">
              {data.map((item, i) => {
                return (
                  <>
                    <div key={i + 1}>
                      <ul className="ul-custom custom-sub-opacity cursor-pointer mb-0">
                        <li className=" linehight fs-6">
                          <div className="d-flex justify-content-center align-items-center">
                            <a
                              style={{ textDecoration: "none" }}
                              href={item.attributes.url}
                              className={`fs-6 fw-bold m-0 header-text-new ${hoveredIndex === i ? "text-transform-hover" : ""
                                }`}
                              onMouseEnter={() => setHoveredIndex(i)}
                              onMouseLeave={() => setHoveredIndex(null)}
                            >
                              {item.attributes.URLText}{" "}
                              {hoveredIndex === i ? item.attributes.onHoverText : ""}
                            </a>
                            {item.attributes.onHover && (
                              <FaChevronDown
                                size={17}
                                color="white"
                                className={`header-drop-icon mx-1 ${isHovered ? "rotate-icon" : ""
                                  }`}
                              />
                            )}
                          </div>
                          {/* {item.attributes.onHover ? (
                              <div
                                style={{
                                  left: "0%",
                                  top: "4.6rem",
                                  zIndex: "1",
                                }}
                                className="custom-opacity w-100  bg-white d-flex border-top position-absolute  align-items-center "
                              >
                                <div className="d-flex gap-4 bg-black w-100 p-5">
                                  <div
                                    style={{ lineHeight: "24px" }}
                                    className="col-lg-4  text-white"
                                  >
                                    <Link className="text-white text-deco" href={item.attributes.url}>
                                      <h2 className="fw-bold header-text-new ">
                                        {" "}
                                        {item.attributes.corporate}
                                      </h2>
                                    </Link>
                                    <p className="smallfont text-colour-off-white ">
                                      Demigod House - Media, Marketing and Event management entity 
                                      elit. Eaque, quos natus rerum maiores est
                                      non delectus aspernatur, similique
                                      repudiandae tempora obcaecati molestiae
                                      nostrum deleniti totam. Consequuntur harum
                                      xyz xyz xyz xyz ! 
                                    </p>
                                    <div style={{ lineHeight: "2px" }}>
                                     
                                      <hr />
                                    </div>
                                  </div>
                                  <div
                                    style={{ lineHeight: "24px" }}
                                    className="col-lg-5 text-white "
                                  >
                                   
                                    <div className="d-flex gap-3 des-header">
                                      <div className="col-lg-6">
                                        <div className="d-flex gap-2">
                                          <div className="d-flex flex-column">
                                          <p className="m-0 fs-3 fw-bold header-text-new">
                                            Live Concert
                                          </p>
                                        
                                          </div>
                                        </div>
                                        <ul className="ps-1 text-colour-off-white  my-3">
                                          <li className="smallfont fs-6">R&B Concert's</li>
                                          <li className="smallfont fs-6">Pop concert </li>
                                          <li className="smallfont fs-6">Electronic Fest</li>
                                          <li className="smallfont fs-6">Punjabi Concert</li>

                                        </ul>


                                      </div>
                                      <div className="col-lg-6">
                                        <div className="d-flex gap-2">
                                          <div className="flex flex-column">
                                          <p className="m-0 fs-3 fw-bold header-text-new">
                                            Carrer at Now
                                          </p>
                                         
                                          </div>
                                        </div>
                                        <ul className="ps-1 text-colour-off-white  my-3">
                                          <li className="smallfont fs-6">The Hidden Benefits of events</li>
                                          <li className="smallfont fs-6">From Couch Potato to Productivity Guru</li>
                                          <li className="smallfont fs-6">The Art of the Last-Minute Panic</li>
                                          <li className="smallfont fs-6">The Hidden Benefits of events</li>

                                        </ul>
                                      </div>
                                    </div>
                                    <div className="d-flex gap-3 mt-4">
                                      <div className="col-lg-6">
                                        <div className="d-flex gap-2">
                                         <div className="flex flex-column">
                                         <p className="m-0 fs-3 fw-bold header-text-new">
                                            Our Partner
                                          </p>
                                         
                                         </div>
                                        </div>
                                        <ul className="ps-1 my-3  text-colour-off-white">
                                          <li className="smallfont fs-6">The Hidden Benefits of events</li>
                                          <li className="smallfont fs-6">From Couch Potato to Productivity Guru</li>
                                          <li className="smallfont fs-6">The Art of the Last-Minute Panic</li>
                                          <li className="smallfont fs-6">The Hidden Benefits of events</li>

                                        </ul>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="d-flex gap-2">
                                         <div className="d-flex flex-column">
                                         <p className="m-0 fs-3 fw-bold header-text-new">
                                            Contact With us
                                          </p>
                                         </div>
                                        </div>
                                        <p className="smallfont mt-2 text-colour-off-white  my-3">
                                          If You need to talk, sit amet
                                          adipisicing elit. Cupiditate eum error
                                          nulla mollitia sunt ullam suscipit
                                          quis!
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-2 ">
                                    <img
                                      className="img-fluid"
                                      src="./images/smallImage.jpg"
                                    ></img>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              ""
                            )} */}
                        </li>
                      </ul>
                    </div>
                  </>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      <div className="container-fluid p-0 d-lg-none d-block bg-black p-2">
        <div className="d-flex justify-content-between">
          <img className="w-25" src="./images/demigodnew.png"></img>
          <p className={`position-absolute ${where === 'corporate' ? 'logo-text-corporate' : 'logo-text'}`}>Media.Marketing.Event’s</p>

          <OffCanvasExample placement="end" name="end" data={data} where={where} />
        </div>
      </div>
    </>
  );
}

export default Header;
