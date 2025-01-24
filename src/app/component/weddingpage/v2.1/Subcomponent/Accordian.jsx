'use client';
import TypeWriterText from '@/app/component/constant/TypeWriterText';
import React, { useState } from 'react';
import { FiMinus } from "react-icons/fi";
import { IoAdd } from 'react-icons/io5';

const Accordian = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const sections = [
        {
            title: 'Personalization',
            content:
                'At Demigod House, we craft destination weddings that are as unique as your love story. Our end-to-end planning services ensure that every detail reflects your vision, desires, and travel preferences. From handpicked destinations and exclusive property recommendations to curated excursions and bespoke activities, your wedding journey will be personalized down to the last detail.',
        },
        {
            title: 'Unparalleled Value',
            content:
                'As industry leaders, we leverage our extensive network and insider connections to provide you with unmatched value. With Demigod House, you and your guests enjoy premium perks, VIP treatment, and unbeatable rates at the finest destinations. Your dream wedding comes with extraordinary benefits at every turn.',
        },
        {
            title: 'Straightforward Fees',
            content:
                'Our all-inclusive Destination Wedding Planning Fee covers everything you need for a seamless experience. From the initial consultation and proposal to travel bookings, guest management, contract negotiations, and wedding design, you can expect unparalleled service without hidden costs or surprises.',
        },
        {
            title: 'Superior Service',
            content:
                'Demigod House is more than a planner; we are your trusted partner. From your first consultation to the final vows, we are with you every step of the way. We handle every arrangement for your guests, create custom wedding websites for streamlined booking, and organize exclusive off-site adventures to make your celebration truly unforgettable.',
        },
        {
            title: '24/7 Support',
            content:
                'Your peace of mind is our priority. With 24/7 support, our specialists are just a call away to resolve any issues that may arise. Leveraging our strong relationships with resort coordinators and management, we ensure your big day unfolds flawlessly, so you can focus on celebrating your love.'
        },
    ];
    
    

    const toggleSection = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container-fluid p-5 mt-5">
            <p className='bride'>WHY BRIDES CHOOSE US</p>
            <h2 className='col-lg-9 hospitality' >We blend five-star hospitality
                with boundless creativity.</h2>
            {sections.map((section, index) => (
                <div
                    key={index}
                    className={`d-flex flex-lg-row  ${activeIndex !== null ? 'flex-column':'' } justify-content-between   border-bottom rounded  mt-5 py-3`}
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
                            {/* <TypeWriterText text ={section.content} speed = '10' /> */}
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
