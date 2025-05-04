import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Map from '../../component/googlemap/Map';

const Section_3 = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  return (
    <>
      <Head>
        <title>We Are Here</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div  className="text-white min-vh-100 d-flex flex-column justify-content-center align-items-center">
       
        <div style={{ backgroundColor: 'rgba(30, 30, 30, 0.9)' ,border: '1px solid #866b2f' }} className=" rounded-pill py-3 px-5 mb-5">
                <h1 className="display-5 fw-bold">We Are Here</h1>
              </div>
        {/* <Container className='p-0'>
          <Row className="justify-content-center ">
            <Col md={12} lg={12} className="text-center">
              <div className="rounded-4 overflow-hidden shadow w-100 " >
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24178.636317144546!2d-74.011265!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250bfa95a6c73%3A0x8672b76301dd50f2!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container> */}
        <Map/>

      </div>
    </>
  );
};

export default Section_3;
