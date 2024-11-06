'use client'
import React, { useState } from 'react';
import './panel.css'; // Assuming your CSS is saved in this file
import { GoDownload } from 'react-icons/go';
import { FaAngleDown } from 'react-icons/fa';
import Link from 'next/link';
import Tabs from '../tabs/page';

const Panel = () => {
  const [activeTab, setActiveTab] = useState('v-pills-home');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className='d-flex  flex-lg-row flex-column justify-content-center gap-4  mt-5'>
        <div className='col-lg-7 col-12'>
          <Tabs />

        </div>
        <div className='col-lg-4 col-12'>
          <h4 className='text-white text-center'>Our Partner</h4>
          <div className='row justify-content-center'>
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
        </div>


      </div>

    </>

  );
};

export default Panel;
