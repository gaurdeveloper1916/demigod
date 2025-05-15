// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import type { NextPage } from 'next';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Section_1: NextPage = () => {

  //   const [formData, setFormData] = useState({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     subject: '',
  //     message: ''
  //   });

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // In a real application, you would send this data to your backend
  //     alert('Thank you for your message. We will get back to you soon!');
  //     // Reset form
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       subject: '',
  //       message: ''
  //     });
  //   };
  
    
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };


  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact form" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
      </Head>

      <main className="bg-black text-white min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg={5}>
              <div className="mb-5">
                <h1 className="display-5 fw-bold mb-4">Let&apos;s talk</h1>
                <p className="lead mb-5">
                  We collaborate with thousands of creators, entrepreneurs and complete legends.
                </p>
                
                <div className="border-top border-secondary my-4"></div>
                
                <div className="contact-info">
                  <div className="d-flex align-items-center mb-4">
                    <div className="contact-icon me-3">
                      <FaEnvelope className="text-warning" size={24} />
                    </div>
                    <div>
                      <p className="mb-0 text-secondary">Our email</p>
                      <p className="mb-0">dev@demigodhouse.com</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-4">
                    <div className="contact-icon me-3">
                      <FaPhone className="text-warning" size={24} />  
                    </div>
                    <div>
                      <p className="mb-0 text-secondary">Call us</p>
                      <p className="mb-0">+91-8355897803</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-cnter mb-4">
                    <div className="contact-icon me-3 p-2">
                      <FaMapMarkerAlt className="text-warning" size={24} />
                    </div>
                    <div className='d-flex flex-column gap-3 '>
                      <p className="mb-0 font-weight-light text-secondary">Find us</p>
                      <p className="mb-0 font-weight-light">Registered Office- D-10, Kabir Marg, Banipark,Jaipur, Raj-302016</p>
                      <p className='mb-0 font-weight-light'>Corporate Office Address- 208, PMB, Charni Road,Opera House, Girgaon-Mumbai 40004
</p>
                      <p className='mb-0'>Global Satellite Offices: USA | Australia | Germany | UK & EUROPE | RUSSIA | CHINA | BRAZIL | ARGENTINA | KENYA | SOUTH AFRICA | VITENAM | THAILAND | DUBAI | SAUDI ARABIA | SINGAPORE</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-top border-secondary my-4"></div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="contact-form-wrapper p-4 rounded" style={{ backgroundColor: 'rgba(30, 30, 30, 0.9)' ,border: '1px solid #866b2f' }}>
                <Form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>First name</Form.Label>
                        <Form.Control 
                          type="text" 
                          className="bg-transparent border-0 border-bottom rounded-0 text-white" 
                          style={{ borderBottomColor: '#555' }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control 
                          type="text" 
                          className="bg-transparent border-0 border-bottom rounded-0 text-white" 
                          style={{ borderBottomColor: '#555' }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                          type="email" 
                          className="bg-transparent border-0 border-bottom rounded-0 text-white" 
                          style={{ borderBottomColor: '#555' }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control 
                          type="tel" 
                          className="bg-transparent border-0 border-bottom rounded-0 text-white" 
                          style={{ borderBottomColor: '#555' }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={3} 
                      className="bg-transparent border-0 border-bottom rounded-0 text-white" 
                      style={{ borderBottomColor: '#555' }}
                    />
                  </Form.Group>
                  
                  <div className="text-center">
                    <Button 
                      type="submit" 
                      className="btn px-4 py-2 rounded-pill" 
                      style={{ backgroundColor: '#866b2f', border: 'none' }}
                    >
                      Submit Now
                    </Button>
                  </div>
                </Form>
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
        
        .form-control:focus {
          box-shadow: none;
          border-color: #866b2f;
          background-color: transparent;
          color: white;
        }
        
        .form-control::placeholder {
          color: #555;
        }
        
        .contact-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(50, 50, 50, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default Section_1;