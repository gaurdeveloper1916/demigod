'use client'
import React, { useState } from 'react';
import './panel.css'; // Assuming your CSS is saved in this file
import CustomTabBar from '../CustomTabBar'
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
              <div>
                <img className='image-partner rounded img-fluid' src='http://localhost:3000/event-page/new/winemaking1.jpg' alt='Businesswomen shaking hands' />
                <p className='text-white'>Wine Making Festival</p>

              </div>

              <img className='image-partner rounded img-fluid' src='http://localhost:3000/event-page/new/winemaking1.jpg' alt='Businesswomen shaking hands' />


            </div>
          </div>


        </div>

      </div>
    </>

  );
};

export default Panel;
