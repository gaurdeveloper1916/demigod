import './index.css'
const Test = () => {
    return (
        <>
            <div>
                <div className="px-lg-5 px-3 px-md-5 background_video">
                    <video autoPlay loop muted playsInline className="video-background">
                        <source src="/bg-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="row gx-5 postion-relative d-flex justify-content-center vh-100 align-items-center">
                        <div className="col-lg-8 text-cont p-lg-5 p-3 p-md-4">
                            <div className="text-center my-5">
                                <h1
                                  style={{   fontFamily:'ui-serif'}}
                                    className="display-2  text-white mb-2"
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                >
                                    Media and Marketing with
                                    Demigod House
                                </h1>
                                <h2
                                    className="text-white mt-4"
                                    style={{  lineHeight: "40px" ,fontSize:'20px',fontFamily:'ui-serif'}}
                                >
                                    Brand Association | Brand Capital Procurement | Brand Seed Funding | Brand Developement | Brand
                                    Marketing | Print-media & Electronic-media Adver tising | Digital Media Marketing | Event Management
                                    Ser vices - B2B / B2C / Private Events!
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Test;