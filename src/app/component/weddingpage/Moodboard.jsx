"use client";
import { BookUpIcon } from "lucide-react";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { MdArrowOutward } from "react-icons/md";

function Moodboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [title, setTitle] = useState('')
  const [des, setDes] = useState('')
  const handleImageClick = (imageSrc, heading, title) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
    setDes(heading)
    setTitle(title)
  };

  const handleClose = () => setShowModal(false);
  const weddingTypes = [
    {
      src: "/wedding-v2/telgu.webp",
      bigImg: "/wedding-v2/telgu-big.webp",
      title: "Telgu Wedding",
      description: "Sacred Customs, Deep-rooted Traditions Telugu weddings are a spiritual journey, rich with sacred rituals and timeless customs that honor both the couple and their families. Key ceremonies include the 'Kanyadaan' and 'Talambralu'..."
    },
    {
      src: "/wedding-v2/punjabi.webp",
      bigImg: "/wedding-v2/mood-1/punjabi.webp",
      title: "Punjabi Wedding",
      description: "Joyful Celebrations, Boundless Energy Punjabi and Sikh weddings are known for their exuberant celebrations, filled with music, dance, and heartfelt traditions..."
    },
    {
      src: "/wedding-v2/marwari.webp",
      bigImg: "/wedding-v2/mood-1/marwari.webp",
      title: "Marwari Wedding",
      description: "Lavish Celebrations, Rich Heritage Marwari weddings are known for their grandeur, opulent rituals, and family-driven ceremonies..."
    },
    {
      src: "/wedding-v2/chris.webp",
      bigImg: "/wedding-v2/mood-1/chris.webp",
      title: "Christian Wedding",
      description: "Sacred Unions, Timeless Elegance Christian weddings embody grace and tradition, centered around the sacred exchange of vows in a church setting..."
    },
    {
      src: "/wedding-v2/bengali.webp",
      bigImg: "/wedding-v2/mood-1/bengali.webp",
      title: "Bengali Wedding",
      description: "A Symphony of Tradition and Elegance Bengali weddings are a celebration of heritage and love, with customs like the 'Saat Paake Bandha' and 'Sindur Daan'..."
    },
    {
      src: "/wedding-v2/marathi.webp",
      bigImg: "/wedding-v2/mood-1/marathi.webp",
      title: "Marathi Wedding",
      description: "Timeless Rituals, Rich Heritage Maharashtrian weddings are known for their simplicity and elegance, with rituals that reflect the region's cultural roots..."
    },
    {
      src: "/wedding-v2/arabic.webp",
      bigImg: "/wedding-v2/mood-1/arabic.webp",
      title: "Arabic Wedding",
      description: "Opulent Celebrations, Rich Culture Arabic weddings are magnificent celebrations that blend traditional customs with lavish festivities..."
    }
  ];

  return (
    <div className="container-fluid py-5 bg-black d-flex justify-content-center align-items-center flex-column text-white margins">

      <div className="col-lg-10 d-flex flex-column align-items-center justify-content-center">
        <h1 className="moodboard">traditional </h1>
        <div className="d-flex  justify-content-center gap-3">
          {weddingTypes.map((item, index) => (
            <div key={index} style={{ flex: "0 1 300px" }}>
              <img
                alt="image"
                src={item.src}
                className="img-fluid bounce-effect"
                onClick={() => handleImageClick(item.bigImg, item.description, item.title)}
                style={{
                  cursor: "pointer",
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          ))}
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
              position: "relative",
            }}
          >
            <div className="d-flex align-items-center p-5">
              <div style={{ backgroundColor: "#0000009c" }} className="col-lg-4 p-3">
                <div className="d-flex flex-column">
                  <h1 className="text-white">{title}</h1>
                  <p className="text-white">
                    {des ? des : "please pass des"}
                  </p>
                </div>
              </div>
            </div>

            <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
            

            </div>
            <div style={{ position: 'absolute', bottom: 20, right: 20 }}>
              <div onClick={handleClose} className="d-flex cursor-pointer">
                <p className="text-white">Skip</p>
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
