"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { RxCross2 } from "react-icons/rx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./formdiv.css";

const Formdiv = () => {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleChange = (e) => setSelectedOption(e.target.value);
  const handleContinue = () => setStep(2);
  const handleSubmit = () => setStep(3);

  return (
    <div
      className="mt-5"
      style={{
        backgroundImage: "url(/event-page/event.webp)",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div className="d-flex justify-content-center align-items-center vh-100">
        <button className="btn px-5 rounded bg-white text-black" onClick={() => setShow(true)}>
          Explore Now
        </button>
      </div>

      <Modal show={show} fullscreen onHide={() => { setShow(false); setStep(1); }}>
        <Modal.Header className="bg-black border-0 d-flex justify-content-end">
          <RxCross2 onClick={() => { setShow(false); setStep(1); }} size={25} className="text-white cursor-pointer" />
        </Modal.Header>

        <Modal.Body className="bg-black">
          <div className={`d-flex flex-lg-row flex-column ${step === 2 ? "step-2" : "step-1"}`}>

            {/* Image Section */}
            <div className={`col-lg-6 image-section ${step === 1 ? "order-2" : "order-1"}`}>
              <div className="image-wrapper">
                <img src="/event-page/react_us_out.webp" className="img-fluid w-100" alt="Music Festival" />
              </div>
            </div>

            {/* Form Section */}
            <div className={`col-lg-6 form-section d-flex justify-content-center ${step === 1 ? "order-1" : "order-2"}`}>
              <div className="col-lg-11 col-12">
                <h3 className="fw-bold text-warning">
                  {/* {step === 1 ? "Reach Out" : step === 2 ? "Tell Us More" : "Thank You!"} */}

                </h3>

                {step === 1 && (
                  <>
                    <h5 className="text-white mt-4">Are you participating as a group, solo, or as a duo?

                    </h5>

                    <form>
                      <div className="d-flex flex-lg-row flex-column gap-lg-5 gap-0 text-white">
                        {["Solo", "DUO", "Group"].map((label, i) => (
                          <label key={i} className="d-flex align-items-center gap-2">
                            <input type="radio" value={`option${i + 1}`} checked={selectedOption === `option${i + 1}`} onChange={handleChange} />
                            {label}
                          </label>
                        ))}
                      </div>

                      {/* <input type="text" className="form-control w-50" id="reasonInput" placeholder="xyz@gmail.com" />

                      <input type="text" className="form-control w-50" id="reasonInput" placeholder="" /> */}

                    </form>
                  </>
                )}

                {step === 2 && (
                  <div className="text-white">
                    <h6 className="text-white mt-4">Who are you?</h6>
                    <form>
                      <div className="d-flex gap-5 text-white">
                        {["Option 1", "Option 2", "Option 3"].map((label, i) => (
                          <label key={i} className="d-flex align-items-center gap-2">
                            <input type="radio" value={`option${i + 1}`} checked={selectedOption === `option${i + 1}`} onChange={handleChange} />
                            {label}
                          </label>
                        ))}
                      </div>

                      <div className="mt-4">
                        <label htmlFor="needsSelect" className="form-label text-white">What would be your needs?</label>
                        <select className="form-select w-50" id="needsSelect">
                          <option value="">Select an option</option>
                          {["Option 1", "Option 2", "Option 3"].map((option, i) => (
                            <option key={i} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      <div className="mt-4 d-flex flex-column">
                        <label htmlFor="finalInput" className="form-label text-white">What are you reaching out for?</label>
                        <input type="text" className="form-control w-50" id="finalInput" placeholder="Type something..." />
                      </div>
                    </form>
                  </div>
                )}

                {step === 3 && <h5 className="text-white mt-4">Thank You for Your Response!</h5>}

                <div className="d-flex mx-5">
                  {step === 1 && <button className="corner-button mt-5" onClick={handleContinue}><span>Continue</span></button>}
                  {step === 2 && <button className="corner-button mt-5" onClick={handleSubmit}><span>Submit</span></button>}
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
