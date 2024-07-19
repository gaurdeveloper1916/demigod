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

function OffCanvasExample() {
  const data = [
    {
      id: 1,
      attributes: {
        URLText: "Event",
        url: "#",
        createdAt: "2024-06-04T09:37:28.020Z",
        updatedAt: "2024-06-04T09:37:29.014Z",
        publishedAt: "2024-06-04T09:37:29.011Z",
        url_collections: {
          data: [
            {
              id: 1,
              attributes: {
                URLText: "All Services",
                url: "#",
                createdAt: "2024-06-04T09:35:27.861Z",
                updatedAt: "2024-06-04T09:35:28.855Z",
                publishedAt: "2024-06-04T09:35:28.852Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 2,
              attributes: {
                URLText: "Career Counseling",
                url: "#",
                createdAt: "2024-06-04T09:36:08.206Z",
                updatedAt: "2024-06-04T09:36:09.354Z",
                publishedAt: "2024-06-04T09:36:09.350Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 3,
              attributes: {
                URLText: "Study Abroad",
                url: "#",
                createdAt: "2024-06-04T09:36:29.997Z",
                updatedAt: "2024-06-04T09:36:31.080Z",
                publishedAt: "2024-06-04T09:36:31.078Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 4,
              attributes: {
                URLText: "Test Preparation",
                url: "#",
                createdAt: "2024-06-04T09:36:52.535Z",
                updatedAt: "2024-06-04T09:36:53.560Z",
                publishedAt: "2024-06-04T09:36:53.557Z",
                urlicon: {
                  data: null,
                },
              },
            },
          ],
        },
        urlicon: {
          data: null,
        },
      },
    },
    {
      id: 2,
      attributes: {
        URLText: "Corporate",
        url: "#",
        createdAt: "2024-06-04T09:40:16.115Z",
        updatedAt: "2024-06-04T09:40:17.431Z",
        publishedAt: "2024-06-04T09:40:17.428Z",
        url_collections: {
          data: [
            {
              id: 5,
              attributes: {
                URLText: "Success Stories",
                url: "#",
                createdAt: "2024-06-04T09:38:06.587Z",
                updatedAt: "2024-06-04T09:38:07.490Z",
                publishedAt: "2024-06-04T09:38:07.487Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 6,
              attributes: {
                URLText: "My Mentor Process",
                url: "#",
                createdAt: "2024-06-04T09:38:26.711Z",
                updatedAt: "2024-06-04T09:38:27.714Z",
                publishedAt: "2024-06-04T09:38:27.711Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 7,
              attributes: {
                URLText: "Interaction",
                url: "#",
                createdAt: "2024-06-04T09:38:43.749Z",
                updatedAt: "2024-06-04T09:38:44.687Z",
                publishedAt: "2024-06-04T09:38:44.685Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 8,
              attributes: {
                URLText: "Our Philosophy",
                url: "#",
                createdAt: "2024-06-04T09:39:11.099Z",
                updatedAt: "2024-06-04T09:39:12.280Z",
                publishedAt: "2024-06-04T09:39:12.278Z",
                urlicon: {
                  data: null,
                },
              },
            },
          ],
        },
        urlicon: {
          data: null,
        },
      },
    },
    {
      id: 2,
      attributes: {
        URLText: "Wedding",
        url: "#",
        createdAt: "2024-06-04T09:40:16.115Z",
        updatedAt: "2024-06-04T09:40:17.431Z",
        publishedAt: "2024-06-04T09:40:17.428Z",
        url_collections: {
          data: [
            {
              id: 5,
              attributes: {
                URLText: "Success Stories",
                url: "#",
                createdAt: "2024-06-04T09:38:06.587Z",
                updatedAt: "2024-06-04T09:38:07.490Z",
                publishedAt: "2024-06-04T09:38:07.487Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 6,
              attributes: {
                URLText: "My Mentor Process",
                url: "#",
                createdAt: "2024-06-04T09:38:26.711Z",
                updatedAt: "2024-06-04T09:38:27.714Z",
                publishedAt: "2024-06-04T09:38:27.711Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 7,
              attributes: {
                URLText: "Interaction",
                url: "#",
                createdAt: "2024-06-04T09:38:43.749Z",
                updatedAt: "2024-06-04T09:38:44.687Z",
                publishedAt: "2024-06-04T09:38:44.685Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 8,
              attributes: {
                URLText: "Our Philosophy",
                url: "#",
                createdAt: "2024-06-04T09:39:11.099Z",
                updatedAt: "2024-06-04T09:39:12.280Z",
                publishedAt: "2024-06-04T09:39:12.278Z",
                urlicon: {
                  data: null,
                },
              },
            },
          ],
        },
        urlicon: {
          data: null,
        },
      },
    },
    {
      id: 2,
      attributes: {
        URLText: "M&M",
        url: "#",
        createdAt: "2024-06-04T09:40:16.115Z",
        updatedAt: "2024-06-04T09:40:17.431Z",
        publishedAt: "2024-06-04T09:40:17.428Z",
        url_collections: {
          data: [
            {
              id: 5,
              attributes: {
                URLText: "Success Stories",
                url: "#",
                createdAt: "2024-06-04T09:38:06.587Z",
                updatedAt: "2024-06-04T09:38:07.490Z",
                publishedAt: "2024-06-04T09:38:07.487Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 6,
              attributes: {
                URLText: "My Mentor Process",
                url: "#",
                createdAt: "2024-06-04T09:38:26.711Z",
                updatedAt: "2024-06-04T09:38:27.714Z",
                publishedAt: "2024-06-04T09:38:27.711Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 7,
              attributes: {
                URLText: "Interaction",
                url: "#",
                createdAt: "2024-06-04T09:38:43.749Z",
                updatedAt: "2024-06-04T09:38:44.687Z",
                publishedAt: "2024-06-04T09:38:44.685Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 8,
              attributes: {
                URLText: "Our Philosophy",
                url: "#",
                createdAt: "2024-06-04T09:39:11.099Z",
                updatedAt: "2024-06-04T09:39:12.280Z",
                publishedAt: "2024-06-04T09:39:12.278Z",
                urlicon: {
                  data: null,
                },
              },
            },
          ],
        },
        urlicon: {
          data: null,
        },
      },
    },
    {
      id: 5,
      attributes: {
        URLText: "Journal",
        url: "#",
        createdAt: "2024-06-04T09:40:16.115Z",
        updatedAt: "2024-06-04T09:40:17.431Z",
        publishedAt: "2024-06-04T09:40:17.428Z",
        url_collections: {
          data: [
            {
              id: 5,
              attributes: {
                URLText: "Success Stories",
                url: "#",
                createdAt: "2024-06-04T09:38:06.587Z",
                updatedAt: "2024-06-04T09:38:07.490Z",
                publishedAt: "2024-06-04T09:38:07.487Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 6,
              attributes: {
                URLText: "My Mentor Process",
                url: "#",
                createdAt: "2024-06-04T09:38:26.711Z",
                updatedAt: "2024-06-04T09:38:27.714Z",
                publishedAt: "2024-06-04T09:38:27.711Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 7,
              attributes: {
                URLText: "Interaction",
                url: "#",
                createdAt: "2024-06-04T09:38:43.749Z",
                updatedAt: "2024-06-04T09:38:44.687Z",
                publishedAt: "2024-06-04T09:38:44.685Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 8,
              attributes: {
                URLText: "Our Philosophy",
                url: "#",
                createdAt: "2024-06-04T09:39:11.099Z",
                updatedAt: "2024-06-04T09:39:12.280Z",
                publishedAt: "2024-06-04T09:39:12.278Z",
                urlicon: {
                  data: null,
                },
              },
            },
          ],
        },
        urlicon: {
          data: null,
        },
      },
    },
    {
      id: 6,
      attributes: {
        URLText: "Contact",
        url: "#",
        createdAt: "2024-06-04T09:40:16.115Z",
        updatedAt: "2024-06-04T09:40:17.431Z",
        publishedAt: "2024-06-04T09:40:17.428Z",
        url_collections: {
          data: [
            {
              id: 5,
              attributes: {
                URLText: "Success Stories",
                url: "#",
                createdAt: "2024-06-04T09:38:06.587Z",
                updatedAt: "2024-06-04T09:38:07.490Z",
                publishedAt: "2024-06-04T09:38:07.487Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 6,
              attributes: {
                URLText: "My Mentor Process",
                url: "#",
                createdAt: "2024-06-04T09:38:26.711Z",
                updatedAt: "2024-06-04T09:38:27.714Z",
                publishedAt: "2024-06-04T09:38:27.711Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 7,
              attributes: {
                URLText: "Interaction",
                url: "#",
                createdAt: "2024-06-04T09:38:43.749Z",
                updatedAt: "2024-06-04T09:38:44.687Z",
                publishedAt: "2024-06-04T09:38:44.685Z",
                urlicon: {
                  data: null,
                },
              },
            },
            {
              id: 8,
              attributes: {
                URLText: "Our Philosophy",
                url: "#",
                createdAt: "2024-06-04T09:39:11.099Z",
                updatedAt: "2024-06-04T09:39:12.280Z",
                publishedAt: "2024-06-04T09:39:12.278Z",
                urlicon: {
                  data: null,
                },
              },
            },
          ],
        },
        urlicon: {
          data: null,
        },
      },
    },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <RxHamburgerMenu onClick={handleShow} className="mt-2 " size={35} />
      <Offcanvas show={show} onHide={handleClose} placement="end" name="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              className="logoImage"
              src="./asserts/images/demigodnew.png"
            ></img>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {data.map((item, i) => {
            return (
              <>
                <div>
                  <Accordion>
                    <Accordion.Item eventKey="0" className="w-100">
                      <Accordion.Header>
                        {item.attributes.URLText}
                      </Accordion.Header>
                      <Accordion.Body className="p-3">
                        {item.attributes.url_collections.data.map((list, i) => {
                          return (
                            <p key={i+1} className="hover"> {list.attributes.URLText} </p>
                          );
                        })}
                      </Accordion.Body>
                      <hr className="m-0" />
                    </Accordion.Item>
                  </Accordion>
                  {/* <Accordion.Header>Our Services</Accordion.Header> */}
                </div>
              </>
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
function Header() {
  const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 0) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   });
  // }, []);
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
  return (
    <>
      <div className="d-lg-block d-none ">
        <div
          style={{ zIndex: "999" }}
          className={`d-flex header-hover  w-100  position-fixed top-0 justify-content-center align-items-center   ${
            isSticky ? "bg-black" : ""
          }`}
        >
          <div className="d-flex justify-content-center align-items-center col-lg-12 ">
            <div className="d-flex gap-5">
              <img className="logoImage" src="./images/demigodnew.png"></img>

              <div className="d-flex justify-content-center align-items-center gap-2  headerlist  ">
                {data.map((item, i) => {
                  return (
                    <>
                      {item.attributes.url_collections.data.length !== 0 ? (
                        <div key={i+1}>
                          <ul className="ul-custom custom-sub-opacity cursor-pointer mb-0">
                            <li className=" linehight fs-6">
                              <div className="d-flex">
                                <p className=" fs-6 fw-bold  header-text-new">
                                  {" "}
                                  {item.attributes.URLText}
                                </p>
                                <MdArrowDropUp
                                  size={34}
                                  className="header-drop-icon mt-4"
                                />
                              </div>

                              <div
                                style={{
                                  left: "0%",
                                  top: "5.5rem",
                                  zIndex: "1",
                                }}
                                className="custom-opacity w-100  bg-white d-flex border-top position-absolute  align-items-center "
                              >
                                <div className="d-flex gap-4 bg-black w-100 p-5">
                                  <div
                                    style={{ lineHeight: "24px" }}
                                    className="col-lg-4  text-white"
                                  >
                                    <h1 className="fw-bold">ABOUT DEMIGOD</h1>
                                    <p className="smallfont text-colour-off-white ">
                                      Demigod is about consectetur adipisicing
                                      elit. Eaque, quos natus rerum maiores est
                                      non delectus aspernatur, similique
                                      repudiandae tempora obcaecati molestiae
                                      nostrum deleniti totam. Consequuntur harum
                                      ut ullam esse?
                                    </p>
                                    <div style={{ lineHeight: "2px" }}>
                                      <p className="m-0">
                                        About World of Demigod
                                      </p>
                                      <hr />
                                    </div>
                                  </div>
                                  <div
                                    style={{ lineHeight: "24px" }}
                                    className="col-lg-5 text-white "
                                  >
                                    <div style={{ lineHeight: "2px" }}>
                                      <p className="fw-bold text-colour-off-white ">
                                        {" "}
                                        About Us
                                      </p>
                                      <hr />
                                    </div>
                                    <div className="d-flex gap-3 des-header">
                                      <div className="col-lg-6">
                                        <div className="d-flex gap-2">
                                          <RiTeamLine size={23} />
                                          <p className="m-0 fw-bold">
                                            Our Team
                                          </p>
                                        </div>
                                        <p className="smallfont mt-2 text-colour-off-white ">
                                          The Amazing Team sit amet adipisicing
                                          elit. Cupiditate eum error nulla
                                          mollitia sunt ullam suscipit quis!
                                        </p>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="d-flex gap-2">
                                          <GiTelepathy size={20} />
                                          <p className="m-0 fw-bold">
                                            Carrer at Now
                                          </p>
                                        </div>
                                        <p className="smallfont mt-2 text-colour-off-white ">
                                          Carrer kob listing , sit amet
                                          adipisicing elit. Cupiditate eum error
                                          nulla mollitia sunt ullam suscipit
                                          quis!
                                        </p>
                                      </div>
                                    </div>
                                    <div className="d-flex gap-3">
                                      <div className="col-lg-6">
                                        <div className="d-flex gap-2">
                                          <FaHandshake size={25} />
                                          <p className="m-0 fw-bold">
                                            Our Partner
                                          </p>
                                        </div>
                                        <p className="smallfont mt-2 text-colour-off-white ">
                                          Explore demigod partnership
                                          adipisicing elit. Cupiditate eum error
                                          nulla mollitia sunt ullam suscipit
                                          quis!
                                        </p>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="d-flex gap-2">
                                          <BsTelephone size={23} />
                                          <p className="m-0  fw-bold">
                                            Contact With us
                                          </p>
                                        </div>
                                        <p className="smallfont mt-2 text-colour-off-white ">
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
                            </li>
                          </ul>
                        </div>
                      ) : (
                        <Link
                          className=" decoration-none d-flex justify-content-center align-items-center gap-5  mb-3 headerlist list-text"
                          href="#"
                        >
                          {item.attributes.URLText}
                        </Link>
                      )}
                    </>
                  );
                })}
              </div>
              <div className=" d-flex justify-content-center align-items-center mb-3">
                <buton
                  type="button"
                  className="very px-3 py-1 verySmallFont rounded-pill cursor button-bg text-white fw-bold "
                >
                  SIGN UP
                </buton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0 d-lg-none d-block p-2">
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
