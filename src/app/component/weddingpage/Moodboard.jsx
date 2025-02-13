"use client";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { MdArrowOutward } from "react-icons/md";

function Moodboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="container-fluid py-5 bg-black d-flex justify-content-center align-items-center flex-column text-white margins">
  
      <div className="col-lg-8 d-flex flex-column align-items-center justify-content-center">
        <h1 className="moodboard">traditional </h1>
  <div className="row d-flex flex-wrap align-items-center justify-content-center">
    <div className="col-5 col-sm-6 col-md-4 col-lg-2">
      <img
        alt="image"
        src="/images/telgu.webp"
        className="img-fluid"
        onClick={() => handleImageClick("/image/wedding-page/mood-1/telgu.webp")}
        style={{ cursor: "pointer" , width: "300px", height: "250px", objectFit: "cover" }}
      />
    </div>
    <div className="col-5 col-sm-6 col-md-4 col-lg-2">
      <img
        alt="image"
        src="/images/punjabi.webp"
        className="img-fluid"
        onClick={() => handleImageClick("Image/wedding-page/mood-1/punjabi.webp")}
        style={{ cursor: "pointer", width: "300px", height: "250px", objectFit: "cover" }}
      />
    </div>
    <div className="col-5 col-sm-6 col-md-4 col-lg-2">
      <img
        alt="image"
        src="/images/marwari.webp"
        className="img-fluid"
        onClick={() => handleImageClick("Image/wedding-page/mood-1/marwari.webp")}
        style={{ cursor: "pointer", width: "300px", height: "250px", objectFit: "cover" }}
      />
    </div>
    <div className="col-5 col-sm-6 col-md-4 col-lg-2">
      <div>
        <img
          alt="image"
          src="/images/chris.webp"
          className="img-fluid"
          onClick={() => handleImageClick("Image/wedding-page/mood-1/chris.webp")}
          style={{ cursor: "pointer", width: "300px", height: "250px", objectFit: "cover" }}
        />
      <h1 className="text-white">Christian Wedding</h1>
      </div>
    </div>
    <div className="col-5 col-sm-6 col-md-4 col-lg-2">
      <img
        alt="image"
        src="/images/bengali.webp"
        className="img-fluid"
        onClick={() => handleImageClick("Image/wedding-page/mood-1/bengali.webp")}
        style={{ cursor: "pointer", width: "300px", height: "250px", objectFit: "cover" }}
      />
    </div>
    <div className="col-5 col-sm-6 col-md-4 col-lg-2">
      <img
        alt="image"
        src="/images/marathi.webp"
        className="img-fluid"
        onClick={() => handleImageClick("Image/wedding-page/mood-1/marathi.webp")}
        style={{ cursor: "pointer", width: "300px", height: "250px", objectFit: "cover" }}
      />
    </div>
    <div className="col-5 col-sm-6 col-md-4 col-lg-2">
      <img
        alt="image"
        src="/images/arabic.webp"
        className="img-fluid"
        onClick={() => handleImageClick("Image/wedding-page/mood-1/arabic.webp")}
        style={{ cursor: "pointer", width: "300px", height: "250px", objectFit: "cover" }}
      />
    </div>
</div>

      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} fullscreen>
        <Modal.Body className="p-0">
          <div
            style={{
              backgroundImage: `url(${selectedImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "100%",
              position: "relative", // Ensure the parent div is relative to position children absolutely
            }}
          >
            <div className="d-flex align-items-center p-5">
              <div className="col-lg-4">
                <div className="d-flex flex-column">
                  <h1 className="text-white">Bengali Wedding</h1>
                  <p className="text-white">
                    Bengali wedding 
                  </p>
                </div>
              </div>
            </div>

            {/* Book Now and Skip buttons positioned at the bottom */}
            <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
              <div className="d-flex">
              <p className="text-white">Book Now</p>
              <MdArrowOutward size={25} color="white" className="text-end" />
              </div>

            </div>
            <div style={{ position: 'absolute', bottom: 20, right: 20 }}>
            <div onClick={handleClose} className="d-flex cursor-pointer">
              <p className="text-white">Slip</p>
              <MdArrowOutward size={25} color="white" className="text-end" />
              </div>

            </div>
          </div>
        </Modal.Body>
      </Modal>

    </div>
  );
}

export default Moodboard;
