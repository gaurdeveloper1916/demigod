'use client'
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import './index.css'
function TwoImagesDiv(props) {
    return (
        <div className='container p-0 mb-5'>
            <div className='d-flex gap-3 mt-5'>
                <div className='col-lg-8 mt-5 '>
                    <h1 className='text-center text-white mb-5 mt-2'>SELECTED WORK</h1>
                    <img className='img-fluid w-100 ' src='/images/bigImage.jpg'></img>

                    <div className='d-flex align-items-center  justify-content-between mx-2 '>
                        <div className='text-white verySmallFont'>
                            <p className='m-0 '>Event /01</p>
                            <p>INSIDE SOFTWARE</p>
                        </div>
                        <div className='text-white verySmallFont'>
                            <p className='m-0 '>BRANDING-WEBDESIGN-ART DIRECTION</p>
                            <div className='row-reverse'>
                                <MdArrowOutward size={25} />

                            </div>
                        </div>
                    </div>
                    <hr className='text-white hrClass' />
                </div>
                <div className='col-lg-4 '>
                    <img className='img-fluid w-100' src='/images/smallImage.jpg'></img>
                    {/* <hr className='text-white hrClass' /> */}

                    <div className='d-flex align-items-center  justify-content-between mx-2 '>
                        <div className='text-white verySmallFont '>
                            <p className='m-0 '>Event /01</p>
                            <p className=''>INSIDE SOFTWARE</p>
                        </div>
                        <div className='text-white verySmallFont'>
                            <p className='m-0 '>BRANDING-WEBDESIGN-ART DIRECTION</p>
                            <div className='row-reverse'>
                                <MdArrowOutward size={25} className='' />
                            </div>                        </div>
                    </div>
                    <hr className='text-white hrClass' />
                </div>
            </div>


            {/* 2nd div */}
            <div className='d-flex gap-3 mt-5'>
            
                <div className='col-lg-4 mt-5  '>
                    <img className='img-fluid w-100 mt-5' src='/images/smallImage.jpg'></img>
                    {/* <hr className='text-white hrClass' /> */}

                    <div className='d-flex align-items-center  justify-content-between mx-2 '>
                        <div className='text-white verySmallFont '>
                            <p className='m-0 '>Event /01</p>
                            <p className=''>INSIDE SOFTWARE</p>
                        </div>
                        <div className='text-white verySmallFont'>
                            <p className='m-0 '>BRANDING-WEBDESIGN-ART DIRECTION</p>
                            <div className='row-reverse'>
                                <MdArrowOutward size={25} className='' />
                            </div>                        </div>
                    </div>
                    <hr className='text-white hrClass' />
                </div>
                <div className='col-lg-8 '>
                    {/* <h1 className='text-center text-white mb-5 mt-2'>SELECTED WORK</h1> */}
                    <img className='img-fluid w-100 h-75 ' src='/images/2largeImage.jpg'></img>
                    {/* <hr className='text-white hrClass' /> */}

                    <div className='d-flex align-items-center  justify-content-between mx-2 '>
                        <div className='text-white verySmallFont'>
                            <p className='m-0'>Event /01</p>
                            <p>INSIDE SOFTWARE</p>
                        </div>
                        <div className='text-white verySmallFont'>
                            <p className='m-0 '>BRANDING-WEBDESIGN-ART DIRECTION</p>
                            <div className='row-reverse'>
                                <MdArrowOutward size={25} />

                            </div>
                        </div>
                    </div>
                    <hr className='text-white hrClass' />
                </div>
            </div>


            {/* 3rd div */}

            <div className='d-flex gap-3 mt-5'>
                <div className='col-lg-8 mt-5'>
                    <img className='img-fluid w-100 mt-5 ' src='/images/bigImage.jpg'></img>
                    {/* <hr className='text-white hrClass' /> */}

                    <div className='d-flex align-items-center  justify-content-between mx-2 '>
                        <div className='text-white verySmallFont'>
                            <p className='m-0'>Event /01</p>
                            <p>INSIDE SOFTWARE</p>
                        </div>
                        <div className='text-white verySmallFont'>
                            <p className='m-0 '>BRANDING-WEBDESIGN-ART DIRECTION</p>
                            <div className='row-reverse'>
                                <MdArrowOutward size={25} />

                            </div>
                        </div>
                    </div>
                    <hr className='text-white hrClass' />
                </div>
                <div className='col-lg-4 '>
                    <img className='img-fluid w-100' src='/images/smallImage.jpg'></img>
                    {/* <hr className='text-white hrClass' /> */}

                    <div className='d-flex align-items-center  justify-content-between mx-2 '>
                        <div className='text-white verySmallFont '>
                            <p className='m-0 '>Event /01</p>
                            <p className=''>INSIDE SOFTWARE</p>
                        </div>
                        <div className='text-white verySmallFont'>
                            <p className='m-0 '>BRANDING-WEBDESIGN-ART DIRECTION</p>
                            <div className='row-reverse'>
                                <MdArrowOutward size={25} className='' />
                            </div>                        </div>
                    </div>
                    <hr className='text-white hrClass' />
                </div>
            </div>
        </div>
    );
}

export default TwoImagesDiv;