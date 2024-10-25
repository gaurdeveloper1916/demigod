"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { RxCross2 } from "react-icons/rx";
import './formdiv.css'
const Formdiv = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1); // Track the current step
  function handleShow() {
    setFullscreen(true);
    setShow(true);
  }
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleContinue = () => {
    setStep(2); // Move to step 2
  };
  const handleSubmit = () => {
    setStep(3); // Move to thank you step
  };
  return (
    <div
      className=""
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2023/04/03/12/59/crowd-7896788_1280.jpg)",
        height: "100vh",
      }}
    >
      <div className="d-flex justify-content-center align-items-center vh-100">
        <button
          className="btn px-5 rounded bg-white text-black"
          onClick={handleShow}
        >
          Explore Now
        </button>
      </div>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header  className="bg-black border-0 d-flex justify-content-end">
            <RxCross2  onClick={()=>{
              setShow(false)
              setStep(1)
            }} 
            size={25} className="text-white cursor"/>
        </Modal.Header>
        <Modal.Body className="bg-black">
          <div className={`d-flex flex-lg-row flex-column transition-container ${step === 2 ? "step-2" : "step-1"}`}>
            {/* Image Section */}
            <div className={`col-lg-6 image-section ${step === 1 ? "order-2" : "order-1"}`}>
              <div className="image-wrapper">
                <img
                  src="https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg"
                  className="img-fluid w-100"
                  alt="Music Festival"
                />
              </div>
            </div>
            {/* Form Section */}
            <div className={`col-lg-6 form-section d-flex justify-content-center ${step === 1 ? "order-1" : "order-2"}`}>
              <div className="col-lg-11 col-12">
                <h3 className="fw-bold text-warning">
                  {step === 1 ? "Reach Out" : step === 2 ? "Reach Out Again" : "Thank You"}
                </h3>
                {step === 1 ? (
                  <>
                    <h6 className="text-white mt-4">WHO ARE YOU ?</h6>
                    <form>
                      <div className="d-flex gap-5 text-white">
                        <label className="d-flex align-items-center gap-2">
                          <input
                            type="radio"
                            value="option1"
                            checked={selectedOption === "option1"}
                            onChange={handleChange}
                          />
                          Option 1
                        </label>
                        <label className="d-flex align-items-center gap-2">
                          <input
                            type="radio"
                            value="option2"
                            checked={selectedOption === "option2"}
                            onChange={handleChange}
                          />
                          Option 2
                        </label>
                        <label className="d-flex align-items-center gap-2">
                          <input
                            type="radio"
                            value="option3"
                            checked={selectedOption === "option3"}
                            onChange={handleChange}
                          />
                          Option 3
                        </label>
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor="exampleSelect"
                          className="form-label text-white"
                        >
                          WHAT WOULD BE YOUR NEEDS ?
                        </label>
                        <select className="form-select w-50" id="exampleSelect">
                          <option value="">Select an option</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </select>
                      </div>
                      <div className="mt-4 d-flex flex-column">
                        <label
                          htmlFor="exampleInput"
                          className="form-label text-white"
                        >
                          WHAT ARE YOU REACHING OUT ?
                        </label>
                        <input
                          type="text"
                          className="form-control w-50"
                          id="exampleInput"
                          placeholder="Type something..."
                        />
                      </div>
                    </form>
                  </>
                ) : step === 2 ? (
                  <div className="text-white">
                    <h6 className="text-white mt-4">WHO ARE YOU ?</h6>
                    <form>
                      <div className="d-flex gap-5 text-white">
                        <label className="d-flex align-items-center gap-2">
                          <input
                            type="radio"
                            value="option1"
                            checked={selectedOption === "option1"}
                            onChange={handleChange}
                          />
                          Option 1
                        </label>
                        <label className="d-flex align-items-center gap-2">
                          <input
                            type="radio"
                            value="option2"
                            checked={selectedOption === "option2"}
                            onChange={handleChange}
                          />
                          Option 2
                        </label>
                        <label className="d-flex align-items-center gap-2">
                          <input
                            type="radio"
                            value="option3"
                            checked={selectedOption === "option3"}
                            onChange={handleChange}
                          />
                          Option 3
                        </label>
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor="exampleSelect"
                          className="form-label text-white"
                        >
                          WHAT WOULD BE YOUR NEEDS ?
                        </label>
                        <select className="form-select w-50" id="exampleSelect">
                          <option value="">Select an option</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </select>
                      </div>
                      <div className="mt-4 d-flex flex-column">
                        <label
                          htmlFor="exampleInput"
                          className="form-label text-white"
                        >
                          WHAT ARE YOU REACHING OUT ?
                        </label>
                        <input
                          type="text"
                          className="form-control w-50"
                          id="exampleInput"
                          placeholder="Type something..."
                        />
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="text-white">
                    <h5 className="mt-4">Thank You for Your Response!</h5>
                  </div>
                )}
                <div className="d-flex justify-content-end mt-4">
                  {step === 1 ? (
                    <button className="corner-button" onClick={handleContinue}>
                    <span>Continue</span>
                </button>
                  ) : step === 2 ? (
                    <button className="corner-button" onClick={handleSubmit}>
            <span>Submit</span>
        </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Formdiv;