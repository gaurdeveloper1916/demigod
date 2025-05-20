'use client'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
            image: "/home/brand_association.webp"
        },
        {
            heading: "Brand Development",
            description:
                "We specialize in crafting compelling brand identities that resonate with your target audience. From brand positioning to storytelling, our strategies help establish a strong and lasting presence in the market.",
            image: "/home/Brand_Development.webp"
        },
        {
            heading: "Marketing",
            description:
                "Our expert marketing solutions span digital, traditional, and innovative strategies to connect brands with their audience effectively. Whether it's campaign management or analytics, we deliver measurable results.",
            image: "/home/brand_marketing.jpeg"
        },
        {
            heading: "Print & Electronic Media",
            description:
                "Partnering with top-tier media outlets worldwide, we provide unmatched visibility for your brand through expertly curated content in both print and electronic formats.",
            image: "/home/PRINT_MEDIA_MARKETING.webp"
        },
        {
            heading: "Brand Seed Funding",
            description:
                "We support emerging brands by facilitating seed funding opportunities. Our network of investors and industry experts ensures the financial backing needed to turn visionary ideas into reality.",
            image: "/home/brand_seed_funding.webp"
        },
        {
            heading: "Brand Private Equity Offering",
            description:
                "DemiGod House assists brands in accessing private equity markets, offering strategic advice and execution to fuel growth and expansion.",
            image: "./home/Brand_Private_Equity_Offering.jpeg"
        },
        {
            heading: "B2B & B2C Events",
            description:
                "As part of outdoor-marketing campaign, we organize and manage variety of B2B & B2C events for brands direct interactions with their consumers via our events globally.",
            image: "./home/b2b_b2c_events.webp"
        },
        {
            heading: "From Startups to Multinationals",
            description:
                "At Demigod House, we cater to businesses of all sizes. Whether you're a budding startup or a global multinational, our expertise ensures tailored strategies that drive growth and success across industries.",
            image: "./home/startups.jpeg"
        },
        {
            heading: "Hybrid Environments",
            description:
                "We embrace the future of work and collaboration by fostering hybrid environments. Our solutions bridge physical and digital spaces, enabling seamless operations and connectivity for your business.",
            image: "./home/hybrid.jpeg"
        },
    ];

    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <>
            <div>
                <div className="px-lg-5 px-0 px-md-5 background_video">
                    <video autoPlay loop muted className="video-background">
                        <source src="./home/demigod.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="d-flex p-0 postion-relative d-flex vh-100 align-items-center justify-content-center">
                        <div className="col-lg-12 d-flex text-cont">
                            <div className="background-text text-center my-5 px-3 px-md-5 py-4 rounded w-100">
                                <p style={{ fontFamily: 'ui-serif', lineHeight: '1.2', fontSize:'45px',  fontWeight:'bold' }}
                                   className="display-2 video-text mb-2 text-start">
                                    Media.Marketing.Events
                                </p>
                                <p style={{ lineHeight: '35px', fontSize: '28px' }}
                                   className="video-text mt-4 variety text-start col-lg-12">
                                    Brand Association |
                                    Venture Capital |
                                    Revenue Sharing Model |
                                    Brand Seed Funding |
                                    Brand Marketing |
                                    Brand Development |
                                    Contract Manufacturing |
                                    Retail Interaction & Consumer Base |
                                    Print & Electronic Media Advertising |
                                    Digital Media Marketing |
                                    Event Management Services(B2B/B2C/Private)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Section */}
                <div className="products-section bg-black py-4 px-3 px-md-4 px-lg-5">
                    <div className="container-fluid">
                        {/* Header */}
                        <div className="products-header ">
                            <div className="row align-items-center text-white">
                                <div className="col-12 col-md-4 mb-3 mb-md-0">
                                    <h2 className="products-title ">Our Products & <br /> Services</h2>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p className="products-description">
                                        Media, Marketing, and Events agency under the DemiGod House Hedge Fund portfolio, crafting impactful brand success stories for associates and clients worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="navigation-wrapper d-flex justify-content-end justify-content-md-end gap-3 mb-4">
                            <div 
                                onClick={handlePrev} 
                                className="nav-button" 
                                aria-label="Previous slide"
                                ref={prevRef}
                            >
                                <GoArrowLeft color='white' size={30} />
                            </div>
                            <div 
                                onClick={handleNext} 
                                className="nav-button" 
                                aria-label="Next slide"
                                ref={nextRef}
                            >
                                <GoArrowRight color='white' size={30} />
                            </div>
                        </div>

                        {/* Swiper */}
                        <div className="swiper-container-demigod">
                            <Swiper
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                modules={[Navigation, Pagination, A11y]}
                                spaceBetween={20}
                                slidesPerView={1}
                                loop={true}
                                navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 1,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {Data.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="product-card" data-aos="fade-up" data-aos-duration="1500">
                                            <img
                                                className="product-image"
                                                src={item.image}
                                                alt={item.heading}
                                            />
                                            <div className="product-content">
                                                <h3 className="product-title">{item.heading}</h3>
                                                <p className="product-description">{item.description}</p>
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
