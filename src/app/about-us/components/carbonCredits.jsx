"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';


export default function carbonCredits() {
  const [activeYear, setActiveYear] = useState('2011');
  const timelineRefs = useRef([]);

  const timelineData = [
    {
      year: '2011',
      text: ' DemiGod House began as a creative powerhouse—pioneering corporate  events, experiential marketing, and ATL/BTL campaigns for some of India’s most respected  brands. We didn’t just execute—we shaped narratives and shifted brand culture on-ground.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80'
    },
    {
      year: '2019',
      text: ' we had expanded our capabilities, building an  agile, insight-led marketing ecosystem and forming early alliances with retail distributors and  regional media.',
      image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1970&q=80'
    },
    {
      year: '2020',
      text: ' DemiGod House made a defining shift. Backed by a growing portfolio of HNIs,  institutional investors, and private equity alliances, we transitioned from agency to  accelerator—combining capital, infrastructure, and creative dominance to scale brands  globally',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1970&q=80'
    },
    {
      year: '2025',
      text: 'we operate as a multi-market investment and brand engineering firm, active across  48+ countries, with a track record of launching and scaling ventures through $500M in  available capital, a 360° execution model, and a 100% success rate in B2B and B2C brand  growth.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1970&q=80'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const year = entry.target.getAttribute('data-year');
            if (year) setActiveYear(year);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-200px'
      }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white py-5 px-4">
      <div className="text-center mb-5">
        <h1 className="btn btn-dark heading rounded px-4 py-2" style={{ fontSize: '2rem' }}>Our History</h1>
      </div>
      <div className="container">
        <div className="row align-items-start" style={{ fontSize: '1.3rem' }}>
          {/* Left Column: Timeline */}
          <div className="col-md-6">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                ref={el => timelineRefs.current[index] = el}
                data-year={item.year}
                className={`timeline-item mb-5 transition-all duration-500 ${
                  activeYear === item.year ? 'active' : ''
                }`}
              >
                <h5 className={`${
                  activeYear === item.year ? 'text-primary' : 'text-white'
                } border-start border-3 ps-3 transition-all duration-500`}>
                  {item.year}
                </h5>
                <p className={`text-light transition-all duration-500 ${
                  activeYear === item.year ? 'opacity-100' : 'opacity-50'
                }`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Image */}
          <div className="col-md-6 d-flex justify-content-center align-items-start">
            <div className="bg-light rounded-4 overflow-hidden shadow" style={{ maxWidth: '100%', width: '500px'   }}>
              <Image
                src={timelineData.find(item => item.year === activeYear)?.image || timelineData[0].image}
                alt={`History Visual ${activeYear}`}
                className="img-fluid transition-all duration-500"
                width={1200}
                height={1080}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`

        .timeline-item {
          transform: translateX(0);
          opacity: 0.5;
        }
          

        .timeline-item.active {
          transform: translateX(20px);
          opacity: 1;
        }

        .transition-all {
          transition: all 0.5s ease-in-out;
        }

        .duration-500 {
          transition-duration: 500ms;
        }
      `}</style>
    </div>
  );
}
