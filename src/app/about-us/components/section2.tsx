"use client";
import React from 'react';
import Head from 'next/head';

// Icons component for each belief
const ResponsibilityIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="1.5">
    <circle cx="32" cy="32" r="15" fill="none"/>
    <path d="M32 17 L32 17 M32 20 L32 20 M32 23 L32 23 M32 26 L32 26 M32 29 L32 29" strokeDasharray="0 3.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M29 29 L29 29 M26 27 L26 27 M23 24 L23 24 M21 21 L21 21 M20 17 L20 17" strokeDasharray="0 3.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 15 L17 15 M17 18 L17 18 M18 21 L18 21 M19 24 L19 24 M21 27 L21 27" strokeDasharray="0 3.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 29 L24 29 M27 30 L27 30 M30 30 L30 30 M33 29 L33 29 M36 27 L36 27" strokeDasharray="0 3.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M38 24 L38 24 M40 21 L40 21 M41 17 L41 17 M41 14 L41 14 M39 11 L39 11" strokeDasharray="0 3.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M36 9 L36 9 M33 8 L33 8 M30 7 L30 7 M27 8 L27 8 M24 9 L24 9" strokeDasharray="0 3.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const PerformanceIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="1.5">
    <rect x="22" y="16" width="20" height="30" strokeWidth="1.5" />
    <line x1="26" y1="22" x2="38" y2="22" strokeWidth="1.5" />
    <line x1="26" y1="28" x2="38" y2="28" strokeWidth="1.5" />
    <line x1="26" y1="34" x2="38" y2="34" strokeWidth="1.5" />
    <line x1="26" y1="40" x2="38" y2="40" strokeWidth="1.5" />
    <path d="M19 46 H45 C45 46 48 46 48 49 C48 51 46 51 45 51 H19" strokeWidth="1.5" />
  </svg>
);

const ExcellenceIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="1.5">
    <path d="M32 16 Q38 14 42 18 Q46 22 43 28 Q39 34 32 34 Q25 34 21 28 Q18 22 22 18 Q26 14 32 16" fill="none" />
    <path d="M24 37 L40 37 L40 46 Q40 48 38 50 L26 50 Q24 48 24 46 Z" fill="none" />
  </svg>
);

const DifferentiationIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="1.5">
    <path d="M32 16 L48 32 L32 48 L16 32 Z" fill="none" />
    <path d="M24 24 L40 40" strokeWidth="1.5" />
    <path d="M40 24 L24 40" strokeWidth="1.5" />
  </svg>
);

const MeritocracyIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="1.5">
    <path d="M20 20 L44 20 L44 44 L20 44 Z" fill="none" />
    <path d="M30 28 L34 28 L34 44 L30 44 Z" fill="none" />
    <path d="M25 15 L39 15 L39 20 L25 20 Z" fill="none" />
  </svg>
);

const ClientFirstIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="1.5">
    <path d="M20 32 L32 20 L44 32" fill="none" />
    <path d="M26 32 L32 26 L38 32" fill="none" />
    <path d="M32 26 L32 44" strokeWidth="1.5" />
    <path d="M24 38 L40 38" strokeWidth="1.5" />
  </svg>
);

// Core Beliefs Component
const Section2: React.FC = () => {
  const beliefs = [
    {
      id: 1,
      title: "RESPONSIBILITY",
      image:"./about-us/responsibility.png",
      icon: <ResponsibilityIcon />,
      description: "We act with integrity, taking full ownership of every brand and capital partnership we step  into.."
    },
    {
      id: 2,
      title: "PERFORMANCE",
      image:"./about-us/performance.png",
      icon: <PerformanceIcon />,
      description: "We pursue sustainable, scalable results—measured not just in revenue, but in relevance and  long-term market leadership."
    },
    {
      id: 3,
      title: "EXCELLENCE",
      image:"./about-us/excellence.png",
      icon: <ExcellenceIcon />,
      description: "Mediocrity has no place in our world. We operate with a standard of execution that  commands attention and delivers value"
    },
    {
      id: 4,
      title: "DIFFERENTIATION",
      image:"./about-us/differentiation.png",
      icon: <DifferentiationIcon />,
      description: "Our brands don’t blend in—they stand out. Every strategy is tailor-made, and every outcome  is intentionally bold."
    },
    {
      id: 5,
      title: "MERITOCRACY",
      image:"./about-us/meritocracy.png",
      icon: <MeritocracyIcon />,
      description: "We rise through capability, creativity, and collaboration. Talent and tenacity drive everything  we do."
    },
    {
      id: 6,
      title: "CLIENT FIRST THINKING",
      image:"./about-us/client_first_thinking.png",
      icon: <ClientFirstIcon />,
      description: "Whether you’re a founder, investor, or institutional partner—your vision shapes our strategy.  We build with you, not just for you."
    }
  ];

  return (
    <>
      <Head>
        <title>Our Core Beliefs</title>
        <meta name="description" content="Our core beliefs and values" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="core-beliefs-section position-relative py-5 d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div className="container-fluid position-relative">
          <div className="row justify-content-center mb-4">
            <div className="col-md-8 col-lg-6 text-center">
              <h2  className="text-white mb-2">Our Core Beliefs</h2>
              <hr style={{  border: '1px solid #dbb85e' }}  className="separator mx-auto" />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 d-flex justify-content-center">
              <div className="core-beliefs-container p-5">
                <div className="row g-4">
                  {beliefs.map((belief) => (
                    <div data-aos="fade-up" data-aos-duration="1000" key={belief.id} className="col-md-4">
                      <div className="belief-card text-center p-4">
                        <div className="icon-container mb-4 w-25">
                          {belief.icon}
                          <img className='img-fluid' src={belief.image}></img>
                        </div>
                        <h4 className="belief-title mb-3">{belief.title}</h4>
                        <p className="belief-description">{belief.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles to match the specific design */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background-color: #000;
        }
        
        .core-beliefs-section {
          background-color: #000;
          color: white;
          padding: 4rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
        
        .separator {
          width: 50%;
          height: 1px;
          background-color: #866b2f;
          border: none;
          margin: 1rem auto;
          border :'1px solid #866b2f'
        }
        
        .core-beliefs-container {
          background-color: #1a1a1a;
          border-radius: 25px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .belief-card {
          height: 100%;
          background-color: #262626;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 300px;
        }
        
        .icon-container {
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .belief-title {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        
        .belief-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          line-height: 1.5;
        }
      `}</style>
    </>
  );
};

export default Section2;