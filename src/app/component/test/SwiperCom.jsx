import Header from '../common/header/Header';
import Map from '../googlemap/Map';
import './index.css';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

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

  return (
    <>
      <div>
        {/* Background Video Section */}
        <div className="px-lg-5 px-3 px-md-5 background_video">
          <video autoPlay loop muted className="video-background">
            <source src="/demigod.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="row gx-5 position-relative d-flex justify-content-center vh-100 align-items-center">
            <div className="col-lg-8 text-cont p-lg-5 p-3 p-md-4">
              <div className="text-center my-5 p-5 rounded-pill">
                <h1
                  style={{ fontFamily: 'ui-serif', lineHeight: '70px' }}
                  className="display-2 video-text mb-2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Demigod House
                </h1>
                <p
                  style={{ fontFamily: 'ui-serif', lineHeight: '34px' }}
                  className="video-text mt-4 variety"
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

        {/* About Section */}
        <div className="d-flex justify-content-center align-items-center p-5 bg-black">
          <div className="col-lg-10">
            <div className="d-flex gap-4 justify-content-center align-items-center">
              <div className="col-lg-3 text-white demigod-text">
                <p>DemiGod House<br />Industries</p>
              </div>
              <div className="col-lg-9 text-white">
                <p className="marketing-agency-text">
                  A Marketing Agency with universal approach in print and electronic media sectors with
                  astounding, effective & efficient brand marketing campaigns of 100% success track record.
                </p>
              </div>
            </div>

            {/* Swiper Section */}
            <div className="mt-5">
              <Swiper
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                modules={[Pagination, Navigation, Autoplay]}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {Data.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div key={i} className="automobile" data-aos="fade-up" data-aos-duration="1500">
                      <div className="bottom-0 px-2">
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
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </div>

        {/* Map Section */}
        <Map />
      </div>
    </>
  );
}

export default Testing;
