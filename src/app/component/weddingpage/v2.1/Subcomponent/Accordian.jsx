'use client';
import React, { useState } from 'react';
import { FiMinus } from "react-icons/fi";
import { IoAdd } from 'react-icons/io5';

const Accordian = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const sections = [
        {
            title: 'Personalization',
            content:
                'Our couples drive the entire destination wedding vision. We collaborate with you to craft an experience born out of your love story, your deepest desires, and your unique travel style. From our destination and property recommendations to private excursions and off-site activities, every aspect of your destination wedding will be designed around you.',
        },
        {
            title: 'Unparalleled Value',
            content:
                'Harness the power of our industry relationships and “insider” status. We’ve cultivated connections with the best of the best in destination weddings, so our clients and their guests get treated very well, wherever they go. Expect unbeatable room rates, plenty of perks, and a VIP touch.',
        },
        {
            title: 'Straightforward Fees',
            content:
                'No guesses, no surprises – just the very best, most inclusive service in the industry. Our Destination Wedding Design Fee includes everything from the consultation and proposal to complete travel booking and management for you and your guests, on-call support, contract negotiation with your resort, wedding design, and (much!) more.',
        },
    ];

    const toggleSection = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container-fluid p-5 mt-5">
            <p style={{ fontSize: '32px' }}>WHY BRIDES CHOOSE US</p>
            <h2 className='col-lg-9' style={{ fontSize: '69px', fontWeight: '300' }}>We blend five-star hospitality
                with boundless creativity.</h2>
            {sections.map((section, index) => (
                <div
                    key={index}
                    className="d-flex justify-content-between border-bottom rounded  mt-5 py-3"
                >
                    <p style={{ fontSize: '32px' }} className="mb-0 col-lg-7 col-md-6 col-sm-12 text-truncate">
                        {section.title}
                    </p>

                    <div
                        className={`d-flex col-lg-5 col-md-6 col-sm-12 justify-content-${activeIndex === index ? 'between' : 'end'
                            } align-items-cente`}
                    >
                        <p
                            className={`mb-0 ${activeIndex === index ? 'd-block' : 'd-none'
                                }`}
                            style={{
                                flex: 1,
                                marginRight: '10px',
                                opacity: activeIndex === index ? 1 : 0,
                                transform: activeIndex === index
                                    ? 'translateY(0)'
                                    : 'translateY(-10px)',
                                transition: 'all 0.3s ease-in-out',
                            }}
                        >
                            {section.content}
                        </p>

                        <div>
                            {activeIndex === index ? (
                                <FiMinus
                                    onClick={() => toggleSection(index)}
                                    size={24}
                                    style={{ cursor: 'pointer' }}
                                />
                            ) : (
                                <IoAdd
                                    onClick={() => toggleSection(index)}
                                    size={24}
                                    style={{ cursor: 'pointer' }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordian;
