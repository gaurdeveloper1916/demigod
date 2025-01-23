import Accordian from "./Subcomponent/Accordian";

const Sectionfour = () => {
    return (
        <>
            <div className="d-flex p-4 bg-black text-white align-items-center">
                <div className="col-lg-6 pe-lg-5">
                    <div className="col-lg-10 p-4">
                        <p className="fs-6">
                      Demigod House  began as a vision to revolutionize wedding planning by combining creativity, precision, and a passion for storytelling. We are dedicated to crafting unforgettable celebrations that reflect your unique journey as a couple. From our humble beginnings to becoming leaders in the wedding planning industry, our commitment to excellence has remained steadfast. We believe every wedding is a once-in-a-lifetime experience, and our team is here to make it truly extraordinary.'
                        </p>
                    </div>
                </div>

                <div
                    style={{ width: '450px', height: '300px', marginTop: '5rem',marginBottom:'5rem' }}
                    className="position-relative d-flex justify-content-center   align-items-center mx-auto"
                >
                    <img
                        src="./img-rotate.png"
                        className="rotating-image position-absolute"
                        alt="Rotating text"
                    />

                    <img
                        src="./ring.png"
                        className="center-image rotating-image position-absolute"
                        alt="Center image"
                    />
                </div>
            </div>


        </>
    )
}
export default Sectionfour;