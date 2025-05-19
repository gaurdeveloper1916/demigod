"use client";

import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function $500investment() {
  const commitments = [
    {
      title: "Civic Responsibility at Scale",
      description:
        " Through volunteering, strategic partnerships, and brand-led community initiatives, our  teams are encouraged to engage in meaningful, measurable civic impact—globally and locally",
    },
    {
      title: "Retail with Purpose",
      description:
        "We turn retail into an experience that educates, empowers, and builds trust. Through curated  in-store activations, co-branded campaigns, and interactive formats, we elevate the customer  journey and ensure our retail partners grow alongside us. ",
    },
    {
      title: "Expanding Access to Knowledge",
      description:
        "We design training and mentorship programs for retailers, micro-distributors, and emerging entrepreneurs, o ering the tools they need to grow with the brands they carry. From product knowledge to digital literacy, we equip our partners for long-term success.",
    },
    {
      title: "Strengthening Local Economies",
      description:
        "Our presence in a region means more than distribution—it means job creation, vendor  support, and direct investment in local infrastructure. Every brand we scale creates ripple  e ects that stimulate community growth and economic participation.",
    },
  ];
  return (
    <div className="container-fluid p-0 bg-black">
      <Head>
        <title>Our Commitments</title>

        <meta name="description" content="DemiGod House Commitments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header with title */}
      <div className="bg-black text-white py-4">
        <div className="container">
          <div className="row justify-content-center mb-4">
            {/* <div className="col-12 align-items-center text-center box">
              <h2 className="commitment-title ">Our Commitments</h2>
              <div style={{  border: '1px solid #dbb85e' }}  className="border-bottom border-secondary w-50 mx-auto "></div>

            </div> */}
             <div className="col-md-8 col-lg-8 text-center">
              <h1 className="text-white mb-2">Our Commitments</h1>
              <hr style={{  border: '1px solid #dbb85e' }}  className="separator mx-auto " />
            </div>
          </div>
        </div>
      </div>

      {/* Commitment cards section */}
      <div className="bg-black text-white pb-5">
        <div className="container">
          <div  className="row g-4">
            {commitments.map((item, index) => (
              <div data-aos="fade-up" data-aos-duration="1000"   key={index} className="col-md-6">
                <div className="commitment-card">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Bottom border line */}
      <div className="container mb-4">
        <div className="border-bottom border-secondary"></div>
      </div>

      <style jsx global>{`
        body {
          background-color: #000000;
          color: #f8f9fa;
        }
          
        .commitment-title {
       
          font-size: 3.5rem;
          font-weight: 400;
          letter-spacing: 0.5px;
          color: #adb5bd;
        }
        .commitment-card {
          background-color: #121212;
          padding: 1.5rem;
          height: 100%;
          border-radius: 0.25rem;
          
        }
        .card-title {
          font-size: 2.3rem;
          font-weight: 500;
          margin-bottom: 1rem;
          color: #f8f9fa;
        }
        .card-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #adb5bd;
        }
        .border-secondary {
          border-color: #333 !important;
        }
      `}</style>
    </div>
  );
}