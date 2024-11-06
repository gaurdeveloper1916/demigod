'use client'
import React, { useState } from 'react';
import './tabs.css';
import { LuTicket } from "react-icons/lu";
import { GrSchedule } from "react-icons/gr";
import { IoMdPhotos } from "react-icons/io";
import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';

const Tabs = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div className='bg-dange w-100 py-3'>
            <div className='d-flex  justify-content-around text-white'>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <h4 className='text-center'>$25</h4>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <Link href='/checkout'>                <button className='border border-0 verySmallFont rounded p-2'>Book Now</button>
                </Link>
              </div>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <h4 className='text-center'>$25</h4>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <Link href='/checkout'>                <button className='border border-0 verySmallFont rounded p-2'>Book Now</button>
                </Link>              </div>
            </div>
            <div className='d-flex  justify-content-around text-white mt-3'>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <h4 className='text-center'>$25</h4>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <Link href='/checkout'>                <button className='border border-0 verySmallFont rounded p-2'>Book Now</button>
                </Link>              </div>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <h4 className='text-center'>$25</h4>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <Link href='/checkout'>                <button className='border border-0 verySmallFont rounded p-2'>Book Now</button>
                </Link>              </div>
            </div>
            <div className='d-flex  justify-content-around text-white mt-3'>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <h4 className='text-center'>$25</h4>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <Link href='/checkout'>                <button className='border border-0 verySmallFont rounded p-2'>Book Now</button>
                </Link>              </div>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <h4 className='text-center'>$25</h4>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                <Link href='/checkout'>                <button className='border border-0 verySmallFont rounded p-2'>Book Now</button>
                </Link>              </div>
            </div>



          </div>
        );
      case 'payment':
        return (
          <Accordion className='w-100 d-flex flex-column gap-2' defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className='rounded'>January 18,2023 | 12:00</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>February 18,2023 | 12:00</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>March 18,2023 | 12:00</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>July 18,2023 | 12:00</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>August 18,2023 | 12:00</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>November 18,2023 | 12:00</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
        );
      case 'subscription':
        return (

          <div className='row justify-content-center p-lg-5 p-0'>
            <div className='col-6 col-md-6 col-lg-6 mb-3 d-flex justify-content-center'>
              <img className='image-partner rounded img-fluid' src='https://media.istockphoto.com/id/1591572504/photo/cheerful-businesswomen-shaking-hands-in-meeting-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=o9gVzM52qGsXBazL11EFxSmRSJLtpMnmWf9us04Pfws=' alt='Businesswomen shaking hands' />
            </div>
            <div className='col-6 col-md-6 col-lg-6 mb-3 d-flex justify-content-center'>
              <img className='image-partner rounded img-fluid' src='https://media.istockphoto.com/id/1498442212/photo/business-partner-meeting-collaboration-of-people-in-organizations-colleagues-congratulate.webp?a=1&b=1&s=612x612&w=0&k=20&c=y6c1aG58FV86B96kNMfM7w7cK7crp4dccmCFeqVSqw8=' alt='Business meeting' />
            </div>
            <div className='col-6 col-md-6 col-lg-6 mb-3 d-flex justify-content-center'>
              <img className='image-partner rounded img-fluid' src='https://media.istockphoto.com/id/2103894533/photo/business-people-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ei7Wz8y6FCBSL1yIuIqt8qoYe1vP_BJE2EFbSSAwSOw=' alt='Business people in office' />
            </div>
            <div className='col-6 col-md-6 col-lg-6 mb-3 d-flex justify-content-center'>
              <img className='image-partner rounded img-fluid' src='https://media.istockphoto.com/id/2160707342/photo/making-decision-on-the-move.webp?a=1&b=1&s=612x612&w=0&k=20&c=UKdF7StmfHxqV5Tm7yaaq9QuP6iJKkYoS3H4nhGOox4=' alt='Making decisions' />
            </div>
            <div className='col-6 col-md-6 col-lg-6 mb-3 d-flex justify-content-center'>
              <img className='image-partner rounded img-fluid' src='https://media.istockphoto.com/id/1498442212/photo/business-partner-meeting-collaboration-of-people-in-organizations-colleagues-congratulate.webp?a=1&b=1&s=612x612&w=0&k=20&c=y6c1aG58FV86B96kNMfM7w7cK7crp4dccmCFeqVSqw8=' alt='Business meeting' />
            </div>
            <div className='col-6 col-md-6 col-lg-6 mb-3 d-flex justify-content-center'>
              <img className='image-partner rounded img-fluid' src='https://media.istockphoto.com/id/1498442212/photo/business-partner-meeting-collaboration-of-people-in-organizations-colleagues-congratulate.webp?a=1&b=1&s=612x612&w=0&k=20&c=y6c1aG58FV86B96kNMfM7w7cK7crp4dccmCFeqVSqw8=' alt='Business meeting' />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container-renamed rounded">
      <div className="leftbox-renamed  d-flex flex-column align-items-center justify-content-center rounded">
        <nav className='background-custom rounded d-flex flex-lg-column flex-row'>
          <a onClick={() => setActiveSection('profile')} className={`d-flex padding-items flex-column align-items-center justify-content-center text-decoration-none ${activeSection === 'profile' ? 'active-renamed' : ''}`}>
            <LuTicket />
            Tickets
          </a>
          <a onClick={() => setActiveSection('payment')} className={`d-flex  padding-items flex-column align-items-center justify-content-center text-decoration-none ${activeSection === 'payment' ? 'active-renamed' : ''}`}>
            <GrSchedule />
            Schedule
          </a>
          <a onClick={() => setActiveSection('subscription')} className={`d-flex  padding-items flex-column align-items-center justify-content-center text-decoration-none ${activeSection === 'subscription' ? 'active-renamed' : ''}`}>
            <IoMdPhotos />
            Photos
          </a>
          <a onClick={() => setActiveSection('subscription')} className={`d-flex  padding-items flex-column align-items-center justify-content-center text-decoration-none `}>
            <IoMdPhotos />
            Contacts
          </a>
        </nav>
      </div>
      <div className="rightbox-renamed d-flex align-items-center justify-content-center">
        {renderSection()}
      </div>
    </div>
  );
};

export default Tabs;
