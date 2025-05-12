"use client";

import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Section4() {
  return (
    <div className="container-fluid p-0">
      <Head>
        <title>$500M Investment Opportunity</title>
        <meta name="description" content="DemiGod House Investment Opportunity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header with title and line */}
      <div className="bg-black text-white pt-4 pb-2">
        <div className="container">
          <div className="row justify-content-center mb-4">
            {/* <div className="col-12 text-center">
              <h1 className="opportunity-title">$500M Investment Opportunity</h1>
              <hr style={{  border: '1px solid #dbb85e' }}  className="separator mx-aut " />
            </div> */}
             <div className="col-md-8 col-lg-10 text-center">
              <h1 className="text-white mb-2">$500M Investment Opportunity</h1>
              <hr style={{  border: '1px solid #dbb85e' }}  className="separator mx-auto " />
            </div>
          </div>
        </div>
      </div>

      {/* Main content section with text and image */}
      <div className="bg-black text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left column with text */}
            <div data-aos="fade-right" data-aos-duration="1000" className="col-md-6">
              <h4 className="investment-text mb-4">
              
              </h4>
              <h4 className="investment-text">
              At DemiGod House, we o er a capital ecosystem of up to $500 million, dedicated to building  and scaling high-potential brands across sectors like Pharma OTC, FMCG, Electronics, and  emerging consumer categories.
              </h4>
              <h4 className="investment-text">
              We deploy capital through seed funding, venture capital, and co-investment alliances with  global HNIs and private equity firms. Each investment is structured for measurable  performance, with clear ROI windows, equity-aligned returns, and full CapEx-OpEx  management under our control.

              </h4>
            </div>
            
            {/* Right column with image */}
            <div data-aos="fade-left" data-aos-duration="1000" className="col-md-6">
              <div className="image-container">
                <img 
                  src="./about-us/opportunity.jpeg" 
                  className="img-fluid rounded" 
                  alt="Team members discussing investment opportunity"
                  style={{ 
                    objectFit: 'cover',
                    width: '100%',
                    height: '500px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        body {
          background-color: #000000;
          color: #f8f9fa;
        }
        .opportunity-title {
        padding: 20px
          font-size: 2.5rem;
          font-weight: 400;
          letter-spacing: 0.5px;
          color: #f8f9fa;
        }
        .investment-text {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #f8f9fa;
          opacity: 0.9;
        }
        
          
        .border-secondary {
          border-color: #dbb85e !important;
        }
        .image-container {
          padding-left: 20px;
        }
        @media (max-width: 767px) {
          .image-container {
            padding-left: 0;
            margin-top: 30px;
          }
        }
      `}</style>
    </div>
  );
}