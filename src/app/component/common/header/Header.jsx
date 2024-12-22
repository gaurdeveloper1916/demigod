"use client";
import Link from "next/link";
import "./index.css";
import React, { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa6";
import { GiTelepathy } from "react-icons/gi";
import { MdArrowDropUp } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import { RxHamburgerMenu } from "react-icons/rx";
import { data } from "../../constant/Dummy";
import { FaChevronDown } from "react-icons/fa";

import { BsX } from 'react-icons/bs';


function OffCanvasExample({ data }) {
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
        <Offcanvas.Header closeButton={false} className="d-flex justify-content-between">
          <Offcanvas.Title>
            <Link href="/">
              <img className="logoImage" src="./images/demigodnew.png" alt="Logo"></img>
            </Link>
          </Offcanvas.Title>
          <BsX className="offcanvas-close-icon fs-1 text-white" onClick={handleClose} />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Accordion defaultActiveKey="0">
            {data.map((item, i) => {
              // {console.log(item.attributes.URLText)}
              return (
                <div key={i + 1}>
                  {item.attributes.onHover ? (
                    <Accordion.Item eventKey={i + 1}>
                      <Accordion.Header className={`${item.attributes.URLText === 'Wedding' ? 'mb-2' : 'my-3'}`}>
                        {" "}
                        {item.attributes.URLText}
                      </Accordion.Header>
                      <Accordion.Body >
                        <div className="header-text-new">
                          <Link className="text-white text-deco " href={item.attributes.url}>
                            {item.attributes.corporate}
                          </Link>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  ) : (
                    <Link href={item.attributes.url}>
                      {" "}
                      <button className="my-2 border border-dark header-list mediumfont  rounded text-start  text-black mobile-list-header " style={{ padding: "14px" }}>
                        {" "}
                        {item.attributes.URLText}
                      </button>
                    </Link>
                  )}
                </div>
              );
            })}
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
          className={`d-flex header-hover  w-100  position-fixed top-0 justify-content-center align-items-center   ${isSticky ? "bg-black" : ""
            }`}
        >
          <div className="d-flex justify-content-center align-items-center col-lg-12  ">
            <div className="d-flex gap-5">
              <Link href="/">
                {" "}
                <img
                  className="logoImage cursor"
                  src="./images/demigodnew.png"
                ></img>
              </Link>

              <div className="d-flex justify-content-center align-items-center gap-3  headerlist  ">
                {data.map((item, i) => {
                  return (
                    <>
                      <div key={i + 1}>
                        <ul className="ul-custom custom-sub-opacity cursor-pointer mb-0">
                          <li className=" linehight fs-6">
                            <div className="d-flex justify-content-center align-items-center">
                              <Link
                                style={{ textDecoration: "none" }}
                                href={item.attributes.url}
                                className={`fs-6 fw-bold m-0 header-text-new ${isHovered ? "text-transform-hover" : ""
                                  }`}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                              >
                                {item.attributes.URLText}
                              </Link>
                              {item.attributes.onHover && (
                                <FaChevronDown
                                  size={17}
                                  color="white"
                                  className={`header-drop-icon mx-1 ${isHovered ? "rotate-icon" : ""
                                    }`}
                                />
                              )}
                            </div>
                            {item.attributes.onHover ? (
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
                                    {item.attributes.description}
                                    </p>
                                    <div style={{ lineHeight: "2px", marginTop: "20px" }}>
                                      {/* <p className="m-0">
                                        About World of Demigod
                                      </p> */}
                                      <hr />
                                      <div className="col-lg-6">
                                        <div className="d-flex gap-2">
                                          {/* <BsTelephone size={23} /> */}
                                         <div className="d-flex flex-column">
                                         <p className="m-0  fw-bold">
                                            {item.attributes.contact}
                                          </p>
                                          <p className="m-0  fw-bold">We’d Love to Hear From You</p>
                                         </div>
                                        </div>
                                        <p className="smallfont mt-2 text-colour-off-white ">
                                        {item.attributes.contactdescription}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    style={{ lineHeight: "24px" }}
                                    className="col-lg-3 text-white">
                                    <div style={{ lineHeight: "2px" }}>
                                    <p className="m-0 fw-bold">
                                            {item.attributes.title1}
                                          </p>
                                      <hr />
                                    </div>
                                    <div className="d-flex gap-3 des-header">
                                      <div className="col-lg-6">
                                        <div className="d-flex gap-2">
                                          {/* <RiTeamLine size={23} /> */}
                                          <div className="d-flex flex-column">
                                          {/* <p className="m-0 fw-bold">
                                            {item.attributes.title1}
                                          </p> */}
                                          <p className="m- fw-bold">
                                          {item.attributes.subtitle1}
                                          </p>
                                          </div>
                                        </div>
                                        <ul className="ps-1 text-colour-off-white">
                                          <li className="smallfont">{item.attributes.bulletpoints1}</li>
                                          <li className="smallfont">{item.attributes.bulletpoints2}</li>
                                          <li className="smallfont">{item.attributes.bulletpoints3}</li>
                                          <li className="smallfont">{item.attributes.bulletpoints4}</li>
                                          <li className="smallfont">{item.attributes.bulletpoints9}</li>
                                          <li className="smallfont">{item.attributes.bulletpoints10}</li>
                                          <li className="smallfont">{item.attributes.bulletpoints11}</li>
                                          <li className="smallfont">{item.attributes.bulletpoints12}</li>
                                          <li className="smallfont">{item.attributes.bulletpoints5}</li>
                                          <li className="smallfont">{item.attributes.bulletpoints6}</li>
                                          <li className="smallfont">{item.attributes.bulletpoints7}</li>
                                          <li className="smallfont">{item.attributes.bulletpoints8}</li>

                                        </ul>
                                      </div>
                                      
                                    </div>
                                    
                                  </div>
                                  <div className="col-lg-5">
                                    <img
                                      className="img-fluid"
                                      style={{height:"400px"}}
                                      src="./images/smallImage.jpg"
                                    ></img>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </li>
                        </ul>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className=" d-flex justify-content-center align-items-center ">
                <Link href='signin'>
                  <buton
                    type="button"
                    className="very mx-5 px-3 py-1 verySmallFont rounded-pill cursor button-bg text-white fw-bold "
                  >
                    SIGN UP
                  </buton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0 d-lg-none d-block  p-2">
        <div className="d-flex justify-content-between">
          <img className="w-25" src="./images/demigodnew.png"></img>
          {/* <RxHamburgerMenu className='mt-2 ' size={35} /> */}
          <OffCanvasExample placement="end" name="end" data={data} />
        </div>
      </div>
    </>
  );
}

export default Header;
