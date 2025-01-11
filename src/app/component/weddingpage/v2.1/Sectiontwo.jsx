import { IoIosArrowRoundForward } from "react-icons/io";

const Sectiontwo = () => {
    return (
        <>
            <div className="d-flex flex-lg-row flex-md-column flex-column  p-lg-5 p-md-4 p-3">

                <div className="col-lg-6  col-12 p-0 px-lg-5 px-md-5">
                    <div className="d-flex flex-column justify-content-center ">
                        <p className="planning-text">Planning is Our Expertise</p>
                        <p className="planning-des mt-5">
                            You desire more than the “standard” wedding experience. You yearn for a paradise worthy of your love story.
                            For a moment of pure, blissful joy shared with your closest family and friends.
                            For a celebration that stretches beyond the ceremony, where you all revel and laugh and make memories together.
                        </p>
                        <p className="mt-5">
                            That’s exactly what our destination wedding specialists will craft, just for you.
                        </p>
                        <div className="d-flex gap-2 mt-4 align-items-center">
                            <p>START PLANNING</p>
                            <div className="border mb-3 rounded-pill">
                                <IoIosArrowRoundForward size={50} />
                            </div>
                        </div>
                        <div>
                            <img
                                style={{ height: "700.3px", width: "580px" }}
                                className=" this-mage mt-5 d-lg-block d-none"
                                src="https://destinationbrides.com/wp-content/uploads/2022/11/Pampas-Ceremony.png.webp"
                                alt="Planning Ceremony"
                            />
                        </div>
                    </div>

                </div>

                <div className="col-lg-6 d-flex  justify-content-center">
                    <div className="col-lg-10">
                        <img
                            className=" image2"
                            src="https://destinationbrides.com/wp-content/uploads/2022/10/Wedding-Photos.png.webp"
                            alt="Wedding Photos"
                        />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Sectiontwo;
