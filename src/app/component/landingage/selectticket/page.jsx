"use client";
import React, { useContext, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoArrowBackSharp } from "react-icons/io5";
import { Auth } from "../../../../context/AppContext";
const Selectticket = () => {
    const {landingHeading,landingDes, } =useContext(Auth)
    const [ticketCount, setTicketCount] = useState(1);

    return (
        <>
            <div className="d-flex justify-content-center align-items-center bg-black">
                <div className="col-lg-8">
                    <div className="d-flex flex-lg-row gap-4 flex-column justify-content-center">
                        <div className="col-lg-6">
                            <div className="d-flex gap-2">
                                <div className="d-flex align-items-center">
                                    <IoArrowBackSharp color="white" className="mt-1" />
                                    <button onClick={() => window.history.back()} className="btn btn-link text-white p-0">Go Back</button>
                                </div>
                            </div>

                            <div style={{ lineHeight: '40px' }}>
                                <p style={{ fontSize: '30px', fontWeight: '700', whiteSpace: 'nowrap' }} className="m-.25 text-white">{landingHeading}</p>
                            </div>
                            <p className="text-white">ALREADY REGISTER ? <span style={{ color: 'orange' }}>LOG IN</span></p>
                            <div className="mt-5 d-flex flex-column">
                                <p className="text-white">TICKET TYPE:VIRTUAL</p>
                                <p className="text-white">EMAIL: info@demigodhouse.com</p>
                                <p className="text-white">TOTAL:FREE</p>
                                <p className="text-white mt-3">Payment Method
                                </p>
                            </div>
                        </div>

                        
                        <div className="col-lg-6">
                            <h4 style={{ color: 'orange' }} className="m-0">Select your ticket type</h4>

                            <p className="text-white">Are you attending virtually or in-person?</p>
                            <div className="d-flex justify-content-between align-items-center border px-4 rounded py-2">
                                <div className="mt-1">
                                    <p className="m-0 text-white">In-Person</p>
                                    <p className="text-secondary"> New York, NY</p>
                                </div>
                                <button onClick={() => alert('Button clicked!')} className="mb-3 border rounded px-2 border-0 text-white fs-6">$500</button>
                            </div>

                            <div className="d-flex gap-2 align-items-center my-4">
                                <div onClick={() => setTicketCount(ticketCount > 1 ? ticketCount - 1 : 1)} 
                                style={{
                                    backgroundColor: 'orange',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }} 
                                className="px-3 rounded-circle py-2"> <FiMinus color="white" /></div>
                                <p className="mt-3 text-white">{ticketCount}</p>
                                <div onClick={() => setTicketCount(ticketCount + 1)} style={{
                                    backgroundColor: 'orange',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }} className="px-3 rounded-circle py-2"> <GoPlus color="white" /></div>
                            </div>
                            
                            <p className="text-white mt-3">{landingDes}</p>
                            <p className="text-white mt-3"></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Selectticket;