'use client'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Header from '../common/header/Header';
import Map from '../googlemap/Map';
import './index.css';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const Testing = () => {
    const Data = [
        {
            heading: "Brand Association",
            description:
                "Our flagship offerings include Brand Association and Capital Procurement—where we collaborate with industrial leaders to fuel strategic brand growth and redefine market dominance.",
            image: "./brand_association.jpeg"
        },
        {
            heading: "Brand Development",
            description:
                "We specialize in crafting compelling brand identities that resonate with your target audience. From brand positioning to storytelling, our strategies help establish a strong and lasting presence in the market.",
            image: "./brand.jpg"
        },
        {
            heading: "Marketing",
            description:
                "Our expert marketing solutions span digital, traditional, and innovative strategies to connect brands with their audience effectively. Whether it's campaign management or analytics, we deliver measurable results.",
            image: "./homepage/marketing.jpeg"
        },
        {
            heading: "Print & Electronic Media",
            description:
                "Partnering with top-tier media outlets worldwide, we provide unmatched visibility for your brand through expertly curated content in both print and electronic formats.",
            image: "./image/print.jpg"
        },
        {
            heading: "Brand Seed Funding",
            description:
                "We support emerging brands by facilitating seed funding opportunities. Our network of investors and industry experts ensures the financial backing needed to turn visionary ideas into reality.",
            image: "./homepage/brand_seed_funding.jpeg"
        },
        {
            heading: "Brand Private Equity Offering",
            description:
                "DemiGod House assists brands in accessing private equity markets, offering strategic advice and execution to fuel growth and expansion.",
            image: "./homepage/Brand_Private_Equity_Offering.jpeg"
        },
        {
            heading: "B2B & B2C Events",
            description:
                "As part of outdoor-marketing campaign, we organize and manage variety of B2B & B2C events for brands direct interactions with their consumers via our events globally.",
            image: "./homepage/b2b.jpeg"
        },
        {
            heading: "From Startups to Multinationals",
            description:
                "At Demigod House, we cater to businesses of all sizes. Whether you're a budding startup or a global multinational, our expertise ensures tailored strategies that drive growth and success across industries.",
            image: "./homepage/startups.jpeg"
        },
        {
            heading: "Hybrid Environments",
            description:
                "We embrace the future of work and collaboration by fostering hybrid environments. Our solutions bridge physical and digital spaces, enabling seamless operations and connectivity for your business.",
            image: "./homepage/hybrid.jpeg"
        },
    ];

    // Refs for custom navigation
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <div>
                <div className="px-lg-5 px-3 px-md-5 background_video">
                    <video autoPlay loop muted className="video-background">
                        <source src="/demigod.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="d-flex p-0  postion-relative d-flex  vh-100 align-items-center justify-content-center ">
                        <div className="col-lg-12  d-flex text-cont  ">
                            <div data-aos="fade-up"
                                    data-aos-duration="1000" className=" background-text  text-center my-5 px-5 py-4 rounded">
                                <h1
                                    style={{ fontFamily: 'ui-serif', lineHeight: '65px', fontSize:'60px' }}
                                    className="display-2 video-text mb-2 text-start"
                                    
                                >
                                    Demigod House
                                </h1>
                                <p
                                    style={{  lineHeight: '43px' ,fontSize:'33.2px'}}
                                    className="video-text mt-4 variety text-start col-lg-12"
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                >
                                    Brand Association | Brand Capital Procurement | Brand Seed Funding | Brand Development | Brand
                                    Marketing | Print-media & Electronic-media Advertising | Digital Media Marketing | Event Management
                                    Services - B2B / B2C / Private Events!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center p-5 bg-black">
                    <div className="col-lg-10">
                        <div className="d-flex gap-4 justify-content-center align-items-center">
                            <div className="col-lg-3 text-white demigod-text">
                                <p>DemiGod House<br /> Industries</p>
                            </div>
                            <div className="col-lg-9 text-white">
                                <p className="marketing-agency-text">
                                    A Marketing Agency with universal approach in print and electronic media sectors with
                                    astounding, effective & efficient brand marketing campaign's of 100% success track record.
                                </p>
                            </div>
                        </div>

                        {/* Custom buttons */}
                        <div className="d-flex justify-content-end gap-2 my-3">
                        {/* <FaLongArrowAltLeft  />
                        <FaLongArrowAltRight /> */}
                            <button ref={prevRef} className="btn btn-light btn-sm border-0  bg-black"><GoArrowLeft color='white' size={30} /></button>
                            <button ref={nextRef} className="btn btn-light btn-sm border-0 bg-black"><GoArrowRight color='white' size={30} /></button>
                        </div>

                        {/* Swiper */}
                        <div className="swiper-container-demigod mt-3">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={20}
                                slidesPerView={3}
                                navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                onSwiper={(swiper) => {
                                    // fix navigation after component is mounted
                                    setTimeout(() => {
                                        swiper.params.navigation.prevEl = prevRef.current;
                                        swiper.params.navigation.nextEl = nextRef.current;
                                        swiper.navigation.destroy();
                                        swiper.navigation.init();
                                        swiper.navigation.update();
                                    });
                                }}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {Data.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="automobile" data-aos="fade-up" data-aos-duration="1500">
                                            <img
                                                style={{ height: "200px", borderRadius: "20px" }}
                                                className="img-fluid w-100 p-2"
                                                src={item.image}
                                                alt={item.heading}
                                            />
                                            <div className="smallfont px-2 py-2" style={{ lineHeight: "20px" }}>
                                                <p className="p-0 fw-bold h6">{item.heading}</p>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                </div>

                <Map />
            </div>
        </>
    );
};

export default Testing;
