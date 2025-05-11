// pages/faq.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import type { NextPage } from 'next';
import { FaPlus } from 'react-icons/fa';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

const Section_2: NextPage = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      id: 1,
      question: "What is the agenda behind DemiGod House & number of subsidiaries?",
      answer: "  DemiGod House is the flagship subsidiary of our hedge fund structuring, orchestrating a network of other subsidiaries across diverse sectors and spanning 48 countries. This chic collective is devoted to pioneering the most promising, ROI-generating strategies, firmly establishing itself as the ultimate high-flyer in the financial cosmos.",
      isOpen: false
    },
    {
      id: 2,
      question: "Modus Operandi to participate in DemiGod House events",
      answer: "Two fabulous ways to join our exclusive DemiGod House events: 1) Become a member of DemiGod House and enjoy a plethora of benefits, including access to all events, networking opportunities, and exclusive content. 2) Attend as a guest by purchasing a ticket for individual events. Membership is not mandatory for event attendance, but it does offer significant advantages.",
      isOpen: false
    },
    {
      id: 3,
      question: "What is the profiling fee?",
      answer: "  Profiling fee is a petite investment of ₹550 — your ticket to our world of refined events. This mandatory profiling interview, whether done virtually or in-person, ensures that every participant brings the charm and professionalism we adore, keeping our gatherings absolutely exquisite and filtering out any elements that might disrupt the ambiance.",
      isOpen: false
    },
    {
      id: 4,
      question: "What are the grounds for profiling?",
      answer: "At DemiGod House, we carefully select participants to maintain the excellence and spirit of our events. Candidates are assessed on three core pillars: 1) Ethics , 2) Professionalism, and 3) Harmony. This ensures that only those who embody these qualities join us, preserving the exclusivity and elegance of DemiGod House gatherings.",
      isOpen: false
    }
  ]);

  const toggleFaq = (id: number) => {
    setFaqs(
      faqs.map(faq => 
        faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <>
      <Head>
        <title>FAQ - DemiGod House</title>
        <meta name="description" content="Frequently Asked Questions" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
      </Head>

      <main className="bg-black text-white min-vh-00 py-">
        <Container className="py-5">
          <Row className="justify-content-center mb-5">
            <Col md={8} lg={4} className="text-center">
              <div style={{ backgroundColor: 'rgba(30, 30, 30, 0.9)' ,border: '1px solid #866b2f' }} className=" rounded-pill py-2 px-2  mb-5">
                <h1 className="display-5 fw-bold">FAQ's</h1>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={10} lg={10}>
              <div className="custom-accordion">
                {faqs.map((faq) => (
                  <div key={faq.id} className="faq-item mb-4">
                    <div 
                      className="faq-question d-flex justify-content-between align-items-center py-3 px-7 border-bottom border-secondary"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <h3 className="fs-5 fw-normal m-0">{faq.question}</h3>
                      <span className="plus-icon">
                        <FaPlus className={`text-white transition-transform ${faq.isOpen ? 'rotate-45' : ''}`} />
                      </span>
                    </div>
                    
                    <div className={`faq-answer py-3 px-2 ${faq.isOpen ? 'd-block' : 'd-none'}`}>
                      <p className="text-secondary mb-0">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </main>

      <style jsx global>{`
        body {
          background-color: #000;
          color: #fff;
          font-family: 'Arial', sans-serif;
        }
        
        .faq-question {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .faq-question:hover {
          opacity: 0.8;
        }
        
        .plus-icon {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .rotate-45 {
          transform: rotate(45deg);
        }
        
        .transition-transform {
          transition: transform 0.3s ease;
        }
        
        .faq-answer {
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default Section_2;