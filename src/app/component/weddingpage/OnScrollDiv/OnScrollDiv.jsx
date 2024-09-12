'use client'
import React, { useState } from 'react';
import WeddingSlider from './WeddingSlider';

function OnScrollDiv() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const divs = [
        <div className=" d-flex justify-content-center align-items-center mt-5">
            <img
                alt="Image"
                src="https://images.pexels.com/photos/16754128/pexels-photo-16754128/free-photo-of-a-green-park-with-trees-and-a-white-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="img-fluid"
            />
        </div>,
        <div className=" d-flex justify-content-center align-items-center mt-5">
            <img
                alt="Image"
                src="https://m.media-amazon.com/images/I/710GjkD28nL._AC_UF1000,1000_QL80_.jpg"
                className="img-fluid"
            />
        </div>,
        <div>
            <WeddingSlider />
        </div>
    ];

    const nextDiv = () => {
        if (currentIndex < divs.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevDiv = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <>
            {divs[currentIndex]}
            <div className='d-flex gap-3 mt-4 px-lg-4 px-md-4 p-2 justify-content-end'>
                <button className='button-all px-4 py-2  text-white fw-bold' onClick={prevDiv} disabled={currentIndex === 0}>Previous</button>
                <button className='button-all px-4 py-2  text-white fw-bold' onClick={nextDiv} disabled={currentIndex === divs.length - 1}>Next</button>
            </div>
        </>
    );
}

export default OnScrollDiv;
