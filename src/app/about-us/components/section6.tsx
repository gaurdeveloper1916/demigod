"use client";
import React from 'react';
import Head from 'next/head';


export default function Section6() {
  const sustainabilityData = [
    {
      title: "Sustainability, Built-In",
      text: "Every DemiGod brand carrier is structured with low-impact logistics, green-certified manufacturing, and eco-conscious marketing initiatives."
    },
    {
      title: "Track, Offset, Reduce",
      text: "Beyond exclusive, We are implementing a standardized carbon accounting framework across our network—with annual audits and third-party verification to ensure transparency in our carbon footprint measurement. Full integration with internationally recognized registries and gold-standard certification processes, purposes devoted to your perfect lifestyle."
    },
    {
      title: "Net Zero by 2030",
      text: "We're working toward our corporate-level net zero target portfolio by 2030, with enterprise-based suite integrated with Credit planning, event operations, digital infrastructure, and packaging procurement."
    }
  ];

  return (
    <div className="container-fluid p-0 bg-black">
      <Head>
        <title>Carbon Credits</title>
        <meta name="description" content="DemiGod House Carbon Credits" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main content section */}
      <div className="bg-black text-white py-5">
        <div className="container">
          <div className="row justify-content-between">
            {/* Left side - Carbon Credits title and button */}
            <div className="col-md-4">
              <div className="sticky-top pt-4" style={{ top: '2rem' }}>
                <h1 className="main-title mb-4">Carbon Credits</h1>
                <button className="carbon-btn text-white">Know more →</button>
              </div>
            </div>

            {/* Right side - All three sections stacked vertically */}
            <div className="col-md-6">
              {sustainabilityData.map((item, index) => (
                <div data-aos="fade-up" data-aos-duration="1000"  className="section-container mb-5" key={index}>
                  <div className="d-flex">
                    <div className="icon-container me-3">
                      <div className="icon-circle">
                        <span className="icon"></span>
                      </div>
                    </div>
                    <div className="content-container">
                      <h3 className="section-title">{item.title}</h3>
                      <p className="section-text">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style jsx global>{`
        body {
          background-color: #000000;
          color: #f8f9fa;
        }
        .main-title {
          font-size: 3rem;
          font-weight: 500;
          color: #f8f9fa;
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: 500;
          color: #f8f9fa;
          margin-bottom: 0.5rem;
        }
        .section-text {
          font-size: 0.85rem;
          line-height: 1.6;
          color: #adb5bd;
        }
        .icon-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 193, 7, 0.2);
        }
        .icon {
          font-size: 1.2rem;
        }
        .carbon-btn {
          background-color: rgba(255, 193, 7, 0.2);
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .carbon-btn:hover {
          background-color: rgba(255, 193, 7, 0.3);
        }
        .section-container {
          padding: 1rem 0;
        }
        .icon-container {
          flex-shrink: 0;
        }
        .content-container {
          flex-grow: 1;
        }
        @media (max-width: 767px) {
          .sticky-top {
            position: relative !important;
            top: 0 !important;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
}