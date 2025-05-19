'use client';

import React from 'react';
import Script from 'next/script';

const marketculture: React.FC = () => {
  return (
    <div className="container-fluid p-0">
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      {/* Dark header bar */}
      <div className="bg-black text-white py-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="border-bottom border-secondary w-75 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content section - Integrated Market Culture */}
      <div
        className="bg-black text-white py-5 position-relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '600px',
          opacity: 0.9
        }}
      >
        {/* Gray overlay */}
        <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row justify-content-center mb-5">
            <div className="col-12 text-center mb-4">
              <h1 className="fw-bold">Integrated Market Culture</h1>
            </div>
            <div data-aos="fade-down" data-aos-duration="1000" className="col-lg-10">
              <h2 className="text-center px-lg-5 main-text">
                At DemiGod House, our culture is built on bold thinking, disciplined execution, and a shared  commitment to outpace the market. We operate at the intersection of creativity, capital, and  commerce—where the sharpest ideas fuel the strongest brands.  Our structure is unconventional by design—strategy teams work alongside media buyers,  investment partners, and market operators to build brands that lead in both mindshare and  market share. Titles are secondary to thinking. Results are the only metric that matters.  We believe in debate over hierarchy, action over assumption, and a constant pursuit of what  hasn’t been done yet. From product innovation to investor relations, every decision we make  is measured by its ability to build lasting, scalable impact.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Alliances section */}
      <div className="bg-black text-white py-5">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-md-8 col-lg-6 text-center">
              <h1 className="text-white mb-2">Strategic Alliances</h1>
              <hr style={{  border: '1px solid #dbb85e' }}  className="separator mx-auto " />
            </div>
          </div>

          <div className="row">
            <div className="col-md-7 pe-md-5">
              <div className="d-flex align-items-center h-100">
                <h3 data-aos="fade-right" data-aos-duration="1000" className="text-light alliance-text my-auto">
                  Our culture enables strategic alliances that stretch far beyond conventional partnerships.  From media conglomerates and retail networks to HNIs, PE firms, and government bodies,  our integrated approach to brand-building allows us to create structures that are not only  scalable but resilient.
                </h3>
              </div>
            </div>
            <div  className="col-md-5">
              <div data-aos="fade-left" data-aos-duration="1000" className="mt-3 mt-md-0">
                <img
                  src="./about-us/statergic.jpeg"
                  className="img-fluid rounded"
                  alt="Strategic alliance illustration"
                  style={{
                    objectFit: 'cover',
                    filter: 'brightness(0.8)',
                    width: '100%',
                    height: '500px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .overlay {
          background-color: rgba(0, 0, 0, 0.7);
        }
        
        .main-text {
          font-size: 1.4rem;
          line-height: 1.7;
          opacity: 0.9;
        }
        
        .alliance-text {
          font-size: 1.1rem;
          line-height: 1.8;
          opacity: 0.9;
        }
      `}</style>

      <style jsx global>{`
        body {
          background-color: #000000;
          color: #f8f9fa;
        }
        
        h1 {
          font-size: 3rem;
          letter-spacing: 0.5px;
        }
          h2{
          padding: 0.5rem 0;
          font-size: 2.5rem;}
        
        .text-secondary {
          color: #adb5bd !important;
        }
          h3{
          font-size: 1.5rem;
          }
        
        .separator {
          width: 100%;
          height: 2px;
          background-color: rgb(241, 237, 237);
          border: none;
          margin: 1rem auto;
        }
        
        .border-secondary {
          border-color: #495057 !important;
        }
        
        .bg-black {
          background-color: #000000;
        }
      `}</style>
    </div>
  );
};

export default marketculture;