'use client'
import React, { useState } from 'react';
import './panel.css'; // Assuming your CSS is saved in this file
import CustomTabBar from '../CustomTabBar'
import Link from 'next/link';
const Panel = ({ data }) => {
  const [activeTab, setActiveTab] = useState('v-pills-home');
  return (
    <>
      <div className='container-fluid'>
        <div className='d-flex  flex-lg-row flex-column justify-content-center gap-4  mt-5'>
          <div className='col-lg-7 col-12'>
            {/* <Tabs /> */}
            {/* <TabsComponent/> */}

            <CustomTabBar data={data} />
          </div>
          <div className='col-lg-4 col-12'>
            <h6 className='text-white text-center'>Explore More Events</h6>
            <div className='d-flex flex-wrap gap-4 justify-content-center align-items-center'>
              <Link className='text-deco' href='/landingpage?slug=wine-making-festival'>
                <img className='image-partner rounded ' src='./event-page/wine_making.png' alt='Businesswomen shaking hands' />
                <p className='text-white py-2'>Wine Making Festival</p>
                </Link>
             

              <Link className='text-deco' href='/landingpage?slug=marathon-mingle-event'>
                <img className='image-partner rounded img-fluid' src="./event-page/COUPLE'S_MARATHON.webp" alt='Businesswomen shaking hands' />

                <h6 className='text-white py-2'>Marathon Mingle</h6>

                </Link>


            </div>
          </div>


        </div>

      </div>
    </>

  );
};

export default Panel;
