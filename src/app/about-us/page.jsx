// import React from "react";
// import Marquee from "react-fast-marquee";
// import './index.css'
import Header from "../component/common/header/Header";

import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import Section7 from "./components/section7";
import Section8 from "./components/section8";




const page = () => {

  // const features = [
  //   {
  //     title: "Why Choose Us?",
  //     text: "With a deep understanding of market trends and innovative strategies, we drive brands toward unparalleled growth. Our results-driven approach ensures your business stays ahead in the competitive landscape.",
  //   },
  //   {
  //     title: "Creative Experts",
  //     text: "Our team of visionary marketers, designers, and strategists crafts compelling campaigns that resonate with your audience. We turn ideas into impactful brand stories that drive engagement and conversions.",
  //   },
  //   {
  //     title: "Launch & Scale",
  //     text: "From seamless campaign execution to continuous optimization, we ensure your brand’s success. We refine strategies based on insights, maximizing reach and impact for sustainable growth.",
  //   },
  // ];
  
  return (
    <>

<Section1/>
<Section2/>
<Section3/>
<Section4/>
<Section5/>
<Section6/>
<Section7/>
<Section8/>



     {/* <div className=""> */}
        <Header/>
    {/*}  <div className="px-lg-5 px-3 px-md-5 background_video">
        <video autoPlay loop muted playsInline className="video-background">
          <source src="/.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="row gx-5 d-flex justify-content-center vh-100 align-items-center">
          <div className="col-lg-8 p-lg-5 p-3 p-md-4">
            <div className="text-center my-5">
              <h1
                className="display-2 fw-bolder text-white mb-2"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                About Us
              </h1>
              <h2
                className="text-white-50 mt-4"
                style={{ fontWeight: "600", lineHeight: "40px" }}
              >
                At our core, we prioritize pushing boundaries, embracing the
                unknown, and fostering a culture of continuous learning.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container px-lg-5 px-4 px-md-5">
          <div className="row  d-flex justify-content-center  ">
            <div className="col-lg-8 p-4">
              <div className="text-center ">
                <div className="d-flex justify-content-center align-items-center">
                  <h4
                    className="  text-white mb-2 p-2  rounded-2 px-4  "
                    style={{
                      border: "1px solid #3d3d3d",
                      backgroundColor: "#252525",
                    }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    Our Story
                  </h4>
                </div>
                <p
                  className="text-white-50 mb-4  mt-4 lead text-jutsify "
                  style={{
                    textAlign: "justify",
                    fontWeight: "500",
                  }}
                >
                  Our journey began in 2011 as an event management and marketing
                  ogency, specializing in corporate events and ATL/BTL marketing
                  for oding brands across India. Over the years, we but a
                  reputation for market Solution. <br></br> <br></br> However,
                  the COVID-19 disruption reshaped global markets, inspiring us
                  10 oive and innovate. In response, we restructured our entity
                  as part of d edge Fund group, expanding our focus beyond
                  marketing fo executing dustrial associations for a diverse
                  portfolio of brands. Today, we dri helping businesses
                  establish dominance in competiive landscapes
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" px-lg-5 px-3 px-md-5 ">
          <div className="row  d-flex justify-content-center overflow-hidden ">
            <div className="col-lg-11 p-4">
              <div className="">
                <h2
                  className=" text-center text-white mb-2"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  Our Differentiator
                </h2>
                <div className="d-flex justify-content-between ">
                  <div className="g-4 row py-5 ">
                    {features.map((feature, index) => (
                      <div
                        className="col-lg-4 col-md-6 col-12 d-flex"
                        key={index}
                        data-aos={
                          index === 0
                            ? "fade-right"
                            : index === 1
                            ? "fade-up"
                            : "fade-left"
                        }
                        data-aos-duration="2000"
                      >
                        <div className="text-light card bg-dark border-0 d-flex flex-column w-100 p-3">
                          <div
                            style={{
                              height: "160px",
                              backgroundColor: "#444",
                              borderRadius: "10px",
                            }}
                          ></div>
                          <div className="card-body d-flex flex-column align-items-start ">
                            <h4>{feature.title}</h4>
                            <p className="mt-2">{feature.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-light bg-black py-5 overflow-hidden">
          <div className="container  ">
            <div data-aos="fade-up" data-aos-duration="1500">
              <div className="d-flex justify-content-center align-items-center">
                <h4
                  className="  text-white mb-2 p-2  rounded-2 px-4  "
                  style={{
                    border: "1px solid #3d3d3d",
                    backgroundColor: "#252525",
                  }}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Our Mission
                </h4>
              </div>

              <div className=" d-flex justify-content-center">
                <div className="col-lg-9">
                  <p
                    className="text-white-50 mb-4  mt-4 lead text-center "
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    Empowering brands to transcend boundaries by delivering
                    innovative solutions in brand marketing, seed funding,
                    venture capital, and contract manufacturing. We are
                    committed to creating impactful alliances, driving
                    sustainable growth, and crafting success stories across B2B
                    and B2C sectors globally. With a future-ready approach and a
                    zero-carbon footprint commitment, we aim to redefine
                    industries while connecting brands to unparalleled
                    opportunities worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-5 align-items-stretch">
              <div className="col-md-4 d-flex">
                <div
                  className="p-4 rounded-3 shadow d-flex flex-column h-100"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <p className="fs-5 mb-0">
                    As a passionate and ambitious agency, we are committed to
                    helping brands make a lasting impact. Our fresh perspective,
                    innovative approach, and dedication to excellence set us
                    apart. We believe in crafting powerful marketing strategies
                    that drive real results.
                  </p>
                </div>
              </div>

              <div className="col-md-4 d-flex">
                <div
                  className="p-4 rounded-3 shadow d-flex flex-column justify-content-center h-100"
                  style={{ border: "1px solid #3d3d3d" }}
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <h1 className="fw-bold">Bold Ideas</h1>
                  <h5 style={{ lineHeight: "30px", flexGrow: 1 }}>
                    We bring fresh, innovative concepts that help businesses
                    stand out in a competitive digital landscape.
                  </h5>
                </div>
              </div>

              <div className="col-md-4 d-flex mt-3 mt-md-0">
                <div
                  className="p-4 rounded-3 shadow d-flex flex-column h-100"
                  style={{ border: "1px solid #3d3d3d" }}
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <h1 className="fw-bold">Data-Driven Strategies</h1>
                  <h5 style={{ lineHeight: "30px", flexGrow: 1 }}>
                    Every decision we make is backed by insights, ensuring
                    maximum impact and measurable growth.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5 mt-lg-5">
          <div className="d-flex justify-content-center align-items-center  py-lg-5 ">
            <div className="col-lg-6 black_shade">
              <Marquee speed={30}>
                <div className="d-flex ">
                  <div className="px-5">
                    <img
                      src="https://www.artdemigod.com/assets/image/art%20logo%20finel.png"
                      width="350px"
                      height="150px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="px-5">
                    <img
                      src="https://www.demigodcloud.com/images/demigod%20vector%20nav.webp"
                      width="350px"
                      height="150px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="px-5">
                    <img
                      src="https://www.demigodcloud.com/images/demigod%20vector%20nav.webp"
                      width="350px"
                      height="150px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="px-5">
                    <img
                      src="./logo/healthboxlogo.png"
                      width="350px"
                      height="150px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="px-5">
                    <img
                      src="./logo/demigodlogo.png"
                      width="350px"
                      height="150px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
        </div>

        <div className="text-light bg-black py-5 overflow-hidden mt-lg-3">
          <div className="container  ">
            <div data-aos="fade-up" data-aos-duration="1500">
              <div className="d-flex justify-content-center align-items-center">
                <h4
                  className="  text-white mb-2 p-2  rounded-2 px-4  "
                  style={{
                    border: "1px solid #3d3d3d",
                    backgroundColor: "#252525",
                  }}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  FAQs
                </h4>
              </div>

              <div className=" d-flex justify-content-center ">
                <p
                  className="text-white mt-3 display-5 "
                  style={{ fontWeight: "600" }}
                >
                  We’re here to help
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center ">
              <div className="col-lg-10 col-md-10 col-12">
                {" "}
                <div
                  className="accordion custom-accordion my-5 "
                  id="faqAccordion"
                >
                  <div className="accordion-item ">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        What is Demigod House ?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show mb-2"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        At our core, we prioritize pushing boundaries, embracing
                        the unknown, and fostering a culture of continuous
                        learning.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What services do we provide?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse mb-2"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        We offer end-to-end creative solutions, from branding
                        and strategy to development and post-launch support.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What is the process?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse mb-2"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Our process includes discovery, ideation, prototyping,
                        execution, and feedback-driven iteration.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        What sectors do we cater?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse mb-2"
                      aria-labelledby="headingFour"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        We serve a wide range of sectors including tech
                        startups, lifestyle brands, fintech, and more.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-light bg-black py-5 overflow-hidden">
          <div className="container  ">
            <div data-aos="fade-up" data-aos-duration="1500">
              <div className="d-flex justify-content-center align-items-center">
                <img src="./logo/demigodlogo.png" width="200px" />
              </div>

              <div className=" d-flex justify-content-center ">
                <div className="col-lg-4 text-center">
                  <p
                    className="text-white mt-3 display-5 "
                    style={{ fontWeight: "600" }}
                  >
                    Let’s talk about your next big move
                  </p>
                  <p
                    className="text-white mt-3 fs-5 "
                    style={{ fontWeight: "600" }}
                  >
                    Hop on a call with us to see how our services can accelerate
                    your growth.
                  </p>

                  <button className="effect effect-3 p-1 mt-3">
                    Schedule a Call back
                  </button>
                  <p className="mt-2 lead">
                    its <strong>Free</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

 */}




    </>
  );
};

export default page;