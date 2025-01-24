import Accordian from "./Subcomponent/Accordian";

const Sectionfour = () => {
    return (
        <>
            <div className="d-flex flex-lg-row flex-md-row flex-column p-4 bg-black text-white align-items-center">
                <div className="col-lg-6">
                    <div className="col-lg-10">
                        <p className="fs-6">
                            Demigod House began as a vision to revolutionize wedding planning by combining creativity, precision, and a passion for storytelling. We are dedicated to crafting unforgettable celebrations that reflect your unique journey as a couple. From our humble beginnings to becoming leaders in the wedding planning industry, our commitment to excellence has remained steadfast. We believe every wedding is a once-in-a-lifetime experience, and our team is here to make it truly extraordinary.
                        </p>
                    </div>
                </div>

                <div className="position-relative rotate-image d-flex justify-content-center align-items-center mx-auto">
                    <img
                        src="./img-rotate.png"
                        className="rotating-image position-absolute"
                        alt="Rotating text"
                    />

                    <img
                        src="./position-absolute.gif"
                        className="w-50 h-100 object-fit-cover position-absolute"
                        alt="Center image"
                    />

                    {/* <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-100 h-100 object-fit-cover position-absolute"
                    >
                        <source
                            src="./ringrotate.mp4"
                            type="video/mp4"
                        />
                    </video> */}
                </div>
            </div>
        </>
    );
};

export default Sectionfour;
