'use client'
import { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Header from '../component/common/header/Header';
import { FaCheckCircle } from 'react-icons/fa';

const ThankYouPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className='bg-black'>
        <Header />
        <div className="min-vh-100  d-flex justify-content-center align-items-center">
          <Row className={`text-center ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
            <Col className=' rounded m-0'>
              <span className="fs-2 font-bold text-success text-center">


                <FaCheckCircle className="mb-3" size={50} />

              </span>
              <h1 className="text-heading m-0  fs-5 fw-bold">Your tickets has been confirmed successfully</h1>
              <p className='text-heading m-0 fs-6 fw-medium'>Your support helps us make a difference. We appreciate your generosity!</p>

              <Button
                variant="primary"
                size="sm"
                className="mt-3 m-0 border border-black px-3"
                onClick={() => window.location.href = '/'}
              >
                Go Back to Home
              </Button>
            </Col>
          </Row>
        </div>
      </div>

    </>

  );
};

export default ThankYouPage;
