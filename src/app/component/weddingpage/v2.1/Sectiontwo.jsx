import { IoIosArrowRoundForward } from "react-icons/io";

const Sectiontwo = () => {
    return (
        <>
            <div className="d-flex bg-black flex-lg-row flex-md-column flex-column  p-lg-5 p-md-4 p-3">

                <div className="col-lg-6  col-12 p-0 px-lg-5 px-md-5 text-white">
                    <div className="d-flex flex-column justify-content-center ">
                        <h4><p className=""> We integrate divinity and Cloud 9 factor in your wedding planning ! </p></h4>
                        <p className="planning-des mt-lg-5 mt-md-3 mt-0">
                            DemiGod House Wedding planners' not only provide visvalization of your dream wedding's with divine and mesmerisingly unrealistic ceremonial decor and art work creatives but also execute in most professionally pragmatic manner !   </p>
                        <p className="mt-lg-5 mt-md-3 mt-0">
                        Our wedding specialists are here to bring your dream celebration to life with elegance and precision.
                        </p>
                        {/* <div className="d-flex gap-2 mt-4 align-items-center">
                            <p>START PLANNING</p>
                            <div className="border mb-3 rounded-pill">
                                <IoIosArrowRoundForward size={50} />
                            </div> */}
                        {/* </div> */}
                        <div>
                            <img
                                style={{ height: "700.3px", width: "580px" }}
                                className=" this-mage mt-5 d-lg-block d-none"
                                src="wed2.webp"
                                alt="Planning Ceremony"
                            />
                        </div>
                    </div>

                </div>
                

                <div className="col-lg-6 d-flex  justify-content-center">
                    <div className="col-lg-10">
                        <img
                            className=" image2"
                            src="wed1.webp"
                            alt="Wedding Photos"
                        />
                        <div className="d-flex flex-column justify-content-center mt-5">
                        <h4><p className="planning-text text-center"> Celebrate Love at the World’s Most Enchanting Venues</p></h4>
                        <p className="planning-des mt-5">
                        From majestic landscapes to iconic locations, our cinematographers bring over 55 countries within your reach. Discover breathtaking wedding venues that make your special day truly memorable within your budgets'.</p>
                        <p className="mt-5">
                        
                        </p>
                    </div>

                </div>
            </div>
            </div>
        </>
    );
};

export default Sectiontwo;