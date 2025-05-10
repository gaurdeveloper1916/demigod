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
        className="mb-4"
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
              <img className="logoImage" src="./new_logo1.png" alt="Logo" />
            </a>
          </Offcanvas.Title>
          <BsX size={35} className="text-white" onClick={handleClose} />
        </Offcanvas.Header>
        <Offcanvas.Body style={{ marginTop: where === "corporate" ? "-1%" : "-6%" }}>
          <Accordion
            defaultActiveKey="0"
            className={`${where === "corporate" ? "d-flex flex-column gap-4 px-5" : "gap-3 px-3"}`}
          >
            {data.map((item, i) => (
              <div key={i + 1} className="py-2"> {/* Added padding for spacing */}
                <a className="text-deco text-white text-decoration-none" href={item.attributes.url}>
                  <div className="d-flex justify-content-between align-items-center"> {/* Center items properly */}
                    <p className={`text-web mb-0 ${where === "corporate" ? "fs-0" : "smallfont fs-6"}`}>
                      {item.attributes.corporate}
                    </p>
                    <MdOutlineArrowUpward size={25} color="white" className="rotate-45" />
                  </div>
                </a>
              </div>
            ))}
          </Accordion>
        </Offcanvas.Body>

      </Offcanvas>
    </>
  );
}



function Header({ where }) {
  const [isSticky, setIsSticky] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(document.documentElement.scrollTop > 0);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <div className="d-lg-block d-none">
        <div
          style={{ zIndex: 999 }}
          className={`d-flex header-hover w-100 position-fixed top-0 align-items-center ${isSticky ? "bg-black" : ""}`}
        >
          <div className="px-5 w-100 d-flex gap-5 justify-content-between">
            {/* Logo */}
            <div className="position-relative">
              <a href="/" className="text-deco">
              <div className="text-center">
              <img className="logoImage cursor" src="./new_logo1.png" alt="Logo of Demigod House" />
              {/* <h6 style={{color:"#866b2f"}} className=" fw-bold ">DEMIGOD HOUSE</h6> */}
              </div>
                <p className={`position-absolute ${where !== 'corporate' ? 'logo-text' : 'logo-text-corporate'}`}>Media.Marketing.Event’s</p>
              </a>
            </div>

            {/* Navigation */}
            <div className="d-flex justify-content-center align-items-center gap-3 headerlist">
              {data.map((item, i) => (
                <div key={i}>
                  <a
                    style={{ textDecoration: "none" }}
                    href={item.attributes.url}
                    className={`fs-6 fw-bold m-0 header-text-new ${hoveredIndex === i ? "text-transform-hover" : ""}`}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >

                    {hoveredIndex === i && !item.attributes.reverse ? item.attributes.onHoverText : ""}     {item.attributes.URLText} {hoveredIndex === i && item.attributes.reverse ? item.attributes.onHoverText : ""}
                  </a>
                  {/* {item.attributes.onHover && (
                    <FaChevronDown
                      size={17}
                      color="white"
                      className={`header-drop-icon mx-1 ${hoveredIndex === i ? "rotate-icon" : ""}`}
                    />
                  )} */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="container-fluid p-0 d-lg-none d-block bg-black p-2">
        <div className="d-flex justify-content-between align-items-center">
          <img className="w-50" src="./new_logo1.png" alt="Logo" />
          {/* <p className={`position-absolute ${where === "corporate" ? "logo-text-corporate" : "logo-text"}`}>
            Media.Marketing.Event’s
          </p> */}
          <OffCanvasExample placement="end" name="end" data={data} where={where} />
        </div>
      </div>
    </>
  );
}

export default Header;


