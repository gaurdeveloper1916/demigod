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
    <div className="container d-flex justify-content-center align-items-center flex-column text-white margins">
      <div className="d-flex justify-content-between col-lg-8 align-items-center moodboard-sub col-10">
        <h1>flavia D</h1>
        <h1>2024</h1>
        <h1>inspiring</h1>
      </div>
      <div className="col-lg-8 d-flex flex-column align-items-center justify-content-center">
        <h1 className="moodboard">moodboard</h1>
  <div className="row d-flex flex-wrap align-items-center justify-content-center">
    <div className="col-5 col-sm-6 col-md-4 col-lg-2">
      <img
        alt="image"
        src="/images/moodboard6.png"
        className="img-fluid"
        onClick={() => handleImageClick("/images/moodboard6.png")}
        style={{ cursor: "pointer" }}
      />
    </div>
    <div className="col-5 col-sm-6 col-md-4 col-lg-2">
      <img
        alt="image"
        src="/images/moodboard5.png"
        className="img-fluid"
        onClick={() => handleImageClick("/images/moodboard5.png")}
        style={{ cursor: "pointer" }}
      />
    </div>
    <div className="col-5 col-sm-6 col-md-4 col-lg-2">
      <img
        alt="image"
        src="/images/moodboard4.png"
        className="img-fluid"
        onClick={() => handleImageClick("/images/moodboard4.png")}
        style={{ cursor: "pointer" }}
      />
    </div>
    <div className="col-5 col-sm-6 col-md-4 col-lg-2">
      <img
        alt="image"
        src="/images/moodboard3.png"
        className="img-fluid"
        onClick={() => handleImageClick("/images/moodboard3.png")}
        style={{ cursor: "pointer" }}
      />
    </div>
    <div className="col-5 col-sm-6 col-md-4 col-lg-2">
      <img
        alt="image"
        src="/images/moodboard2.png"
        className="img-fluid"
        onClick={() => handleImageClick("/images/moodboard2.png")}
        style={{ cursor: "pointer" }}
      />
    </div>
    <div className="col-5 col-sm-6 col-md-4 col-lg-2">
      <img
        alt="image"
        src="/images/moodboard1.png"
        className="img-fluid"
        onClick={() => handleImageClick("/images/moodboard1.png")}
        style={{ cursor: "pointer" }}
      />
    </div>
</div>

      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} fullscreen>
        <Modal.Body className="p-0">
          <div
            style={{
              backgroundImage: `url('https://media.istockphoto.com/id/1055434948/photo/depressed-young-women-in-the-tunnel.jpg?s=612x612&w=0&k=20&c=HY4AeZ9AWxwmfFVuftQNbel63SUT2Rps-vg0OlWZD8E=')`,
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
                  <h1 className="text-white">Hello</h1>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores temporibus laudantium modi, similique veniam
                    officiis. Aspernatur mollitia eos, eveniet veniam magnam
                    provident sequi nihil eaque cupiditate itaque vitae esse
                    quos?
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
