"use client";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { MdArrowOutward } from "react-icons/md";

function Moodboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [title,setTitle]=useState('')
  const [des,setDes]=useState('')
  const handleImageClick = (imageSrc,heading,title) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
    setDes(heading)
    setTitle(title)
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="container-fluid py-5 bg-black d-flex justify-content-center align-items-center flex-column text-white margins">

      <div className="col-lg-10 d-flex flex-column align-items-center justify-content-center">
        <h1 className="moodboard">traditional </h1>
        <div className=" d-flex flex-lg-row flex-md-row flex-column  gap-3">
          <div className="">
            <img
              alt="image"
              src="/images/telgu.webp"
              className="img-fluid text-0px"
              onClick={() => handleImageClick("/image/wedding-page/mood-1/telgu.webp","Sacred Customs, Deep-rooted Traditions Telugu weddings are a spiritual journey, rich with sacred rituals and timeless customs that honor both the couple and their families. Key ceremonies include the 'Kanyadaan' (giving away of the bride) and 'Talambralu,' where the bride and groom shower each other with sacred rice. These weddings are marked by deep respect for tradition, with a focus on unity, prosperity, and familial bonds.","Telgu Wedding")}
              style={{ cursor: "pointer", width: "300px", height: "250px", objectFit: "cover" }}
            />
          </div>
          <div className="">
            <img
              alt="image"
              src="/images/punjabi.webp"
              className="img-fluid"
              onClick={() => handleImageClick("Image/wedding-page/mood-1/punjabi.webp","Joyful Celebrations, Boundless Energy Punjabi and Sikh weddings are known for their exuberant celebrations, filled with music, dance, and heartfelt traditions. The 'Anand Karaj' ceremony, where the couple ties the knot in front of the Guru Granth Sahib, is central to the wedding. The vibrant festivities include the traditional 'Bhangra' dance and the joyous 'Lagana' ceremony, creating a lively atmosphere for family and friends.","Punjabi Wedding")}
              style={{ cursor: "pointer", width: "300px", height: "250px", objectFit: "cover" }}
            />
          </div>
          <div className="">
            <img
              alt="image"
              src="/images/marwari.webp"
              className="img-fluid"
              onClick={() => handleImageClick("Image/wedding-page/mood-1/marwari.webp","Lavish Celebrations, Rich Heritage Marwari weddings are known for their grandeur, opulent rituals, and family-driven ceremonies. The wedding kicks off with traditional rituals like 'Ganesh Puja' and 'Tilak,' setting the stage for the wedding celebrations. From ornate decorations to elaborate feasts, every moment reflects the rich cultural heritage of the Marwari community, making it a lavish affair to remember.","Marwari Wedding")}
              style={{ cursor: "pointer", width: "300px", height: "250px", objectFit: "cover" }}
            />
          </div>
          <div className="">
            <div>
              <img
                alt="image"
                src="/images/chris.webp"
                className="img-fluid"
                onClick={() => handleImageClick("Image/wedding-page/mood-1/chris.webp", 
                "Sacred Unions, Timeless Elegance Christian weddings embody grace and tradition, centered around the sacred exchange of vows in a church setting. The ceremony typically includes readings from scripture, hymns, and the symbolic exchange of rings. From the bride's walk down the aisle to the final blessing, these weddings celebrate the divine nature of marriage while incorporating personal touches that make each celebration unique.","Christian Wedding" )}
                style={{ cursor: "pointer", width: "300px", height: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="">
            <img
              alt="image"
              src="/images/bengali.webp"
              className="img-fluid"
              onClick={() => handleImageClick("Image/wedding-page/mood-1/bengali.webp",`A Symphony of Tradition and Elegance Bengali weddings are a celebration of heritage and love, with customs like the 'Saat Paake Bandha' (seven rounds around the sacred fire) and 'Sindur Daan' (application of vermilion). Rich with rituals, these weddings feature beautifully adorned brides, ceremonial chanting, and a family-centered approach to celebrating union. The unique combination of religious and cultural traditions creates an unforgettable experience.`,"Bengali Wedding")}
              style={{ cursor: "pointer", width: "300px", height: "250px", objectFit: "cover" }}
            />
          </div>
          <div className="">
            <img
              alt="image"
              src="/images/marathi.webp"
              className="img-fluid"
              onClick={() => handleImageClick("Image/wedding-page/mood-1/marathi.webp","Timeless Rituals, Rich Heritage Maharashtrian weddings are known for their simplicity and elegance, with rituals that reflect the region's deep cultural roots. The wedding ceremony includes the 'Phool Pathak' (flower ceremony) and the 'Saat Phere' (seven vows), signifying the couple's lifelong commitment. These weddings bring together the beauty of traditional attire, vibrant colors, and close-knit family celebrations.", "Marathi Wedding")}
              style={{ cursor: "pointer", width: "300px", height: "250px", objectFit: "cover" }}
            />
          </div>
          <div className="">
            <img
              alt="image"
              src="/Image/arabic.webp"
              className="img-fluid"
              onClick={() => handleImageClick("Image/wedding-page/mood-1/arabic.webp","Opulent Celebrations, Rich Culture Arabic weddings are magnificent celebrations that blend traditional customs with lavish festivities. Known as 'Zaffa,' the wedding procession features traditional music and dance. The ceremony includes the signing of the marriage contract (Nikah) and exchange of rings. These weddings are characterized by their grandeur, with elaborate decorations, traditional music, sumptuous feasts, and the bride's stunning henna designs (Mehndi), creating an atmosphere of luxury and cultural richness.","Arabic Wedding")}
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
              position: "relative",
            }}
          >
            <div className="d-flex align-items-center p-5">
              <div className="col-lg-4">
                <div className="d-flex flex-column">
                  <h1 className="text-white">{title}</h1>
                  <p className="text-white">
                    {des? des:"please pass des"}
                  </p>
                </div>
              </div>
            </div>

            <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
            <div onClick={handleClose} className="d-flex cursor-pointer">
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
