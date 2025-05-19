"use client";
import React from 'react';
import Head from 'next/head';
import '../index.css';

const aboutusHero: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us | DemiGod House</title>
        <meta name="description" content="About DemiGod House - Next-generation brand investment and acceleration firm" />
      </Head>

      <div className="about-us-section">
        <div className="position-relative vh-100">
          <div className="bg-image" style={{backgroundImage: "url('./about-us/handshake-business-men-concept.webp')"}}></div>
          
          <div className="container position-relative h-100">
            <div className="row h-100 align-items-center">
              <div className="col-md-3">
                <h1 className="display-5 fw-bold text-white">ABOUT US</h1>
              </div>
              <div data-aos="fade-up" data-aos-duration="500" className="col-md-6">
                <p className="section-text text-center">
                  DemiGod House is a next-generation brand investment and acceleration firm, operating at  the intersection of capital, marketing, and operational scale. We build, fund, and scale  brands that don’t just enter markets, they lead them.  With a presence across 48+ countries, we partner with founders, investors, and institutions to  transform high-potential ventures into global market icons. Backed by a robust network of  media alliances, retail infrastructure, and strategic capital, we bring structure to vision and  velocity to growth.  Our portfolio spans critical growth sectors, from Pharma and FMCG to emerging consumer  tech-powering businesses that drive economic value, create jobs, and shape culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutusHero;