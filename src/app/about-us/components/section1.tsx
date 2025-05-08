"use client";
import React from 'react';
import Head from 'next/head';

const Section1: React.FC = () => {
  return (
    <>
         <Head>
        <title>About Us | DemiGod House</title>
        <meta name="description" content="About DemiGod House - Next-generation brand investment and acceleration firm" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="about-us-section position-relative">
        {/* Dark overlay image container */}
        <div className="position-relative overflow-hidden" style={{ height: '100vh' }}>
          <div 
            className="bg-image w-100 h-100 opacity-25"
            style={{
              backgroundImage: "url('./about-us/handshake-business-men-concept.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              // filter: 'brightness(0.4)',
              // backgroundColor: '#000'
            }}
          ></div>
          
          {/* Content overlay */}
          <div className="container position-relative h-100">
            <div className="row h-100 w-100 align-items-center justify-content-between">
              <div className="col-md-3 text-white">
                <h1 className="display-5 fw-bold">ABOUT US</h1>
              </div>
              <div data-aos="fade-up" data-aos-duration="500" className="col-md-6 text-white">
                <p className="lead text-center" style={{ fontSize: '1.4rem', lineHeight: '1.2' }}>
                DemiGod House is a next-generation brand investment and acceleration firm, operating at  the intersection of capital, marketing, and operational scale. We build, fund, and scale  brands that don’t just enter markets, they lead them.  With a presence across 48+ countries, we partner with founders, investors, and institutions to  transform high-potential ventures into global market icons. Backed by a robust network of  media alliances, retail infrastructure, and strategic capital, we bring structure to vision and  velocity to growth.  Our portfolio spans critical growth sectors, from Pharma and FMCG to emerging consumer  tech-powering businesses that drive economic value, create jobs, and shape culture.
                </p>
                {/* <p className="lead" style={{ fontSize: '2rem', lineHeight: '1.2' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic, quidem sed at voluptas vel fugiat ipsam officiis modi quod voluptates sit, cupiditate asperiores autem possimus quaerat exercitationem. Veritatis, laboriosam?
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Include Bootstrap JS (optional, only if you need Bootstrap's JS functionality) */}
      {/* <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></script> */}

      {/* Inline styles to match the specific design */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        
        .about-us-section {
          background-color: #000;
          color: white;
        }
        
        .lead {
          font-weight: 300;
          letter-spacing: 0.3px;
        }
      `}</style>
    </>
  );
};

export default Section1;