'use client'
import { useState } from "react";

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState("ex2-tabs-1");

    return (
        <>

            <div className="tab-content p-4">
                <div className={`tab-pane fade ${activeTab === "ex2-tabs-1" ? "show active" : ""}`}>
                    <div className="d-flex gap-4 justify-content-center align-items-center p-4">
                        <div className="col-lg-3 ">
                            <img className="img-fluid" src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg"></img>
                        </div>
                        <div className="col-lg-9">
                            <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                Brand Developement WITH DEMIGOD HOUSE
                            </h1>
                            <p className="text-white text-start">
                                Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events! (repeat content)
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`tab-pane fade ${activeTab === "ex2-tabs-2" ? "show active" : ""}`}>
                    <div className="d-flex gap-4 justify-content-center align-items-center p-4">
                        <div className="col-lg-3 ">
                            <img className="img-fluid" src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg"></img>
                        </div>
                        <div className="col-lg-9">
                            <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                Brand MARKETING WITH DEMIGOD HOUSE
                            </h1>
                            <p className="text-white text-start">
                                Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events! (repeat content)
                            </p>
                        </div>
                    </div>                </div>
                <div className={`tab-pane fade ${activeTab === "ex2-tabs-3" ? "show active" : ""}`}>
                    <div className="d-flex gap-4 justify-content-center align-items-center p-4">
                        <div className="col-lg-3 ">
                            <img className="img-fluid" src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg"></img>
                        </div>
                        <div className="col-lg-9">
                            <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                3rd Party Contract
                            </h1>
                            <p className="text-white text-start">
                                Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events! (repeat content)
                            </p>
                        </div>
                    </div>                </div>
                <div className={`tab-pane fade ${activeTab === "ex2-tabs-4" ? "show active" : ""}`}>
                    <div className="d-flex gap-4 justify-content-center align-items-center p-4">
                        <div className="col-lg-3 ">
                            <img className="img-fluid" src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg"></img>
                        </div>
                        <div className="col-lg-9">
                            <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                MEDIA AND MARKETING WITH DEMIGOD HOUSE
                            </h1>
                            <p className="text-white text-start">
                                Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events! (repeat content)
                            </p>
                        </div>
                    </div>                </div>
                <div className={`tab-pane fade ${activeTab === "ex2-tabs-5" ? "show active" : ""}`}>
                    <div className="d-flex gap-4 justify-content-center align-items-center p-4">
                        <div className="col-lg-3 ">
                            <img className="img-fluid" src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg"></img>
                        </div>
                        <div className="col-lg-9">
                            <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                MEDIA AND MARKETING WITH DEMIGOD HOUSE
                            </h1>
                            <p className="text-white text-start">
                                Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events! (repeat content)
                            </p>
                        </div>
                    </div>                </div>
                <div className={`tab-pane fade ${activeTab === "ex2-tabs-6" ? "show active" : ""}`}>
                    <div className="d-flex gap-4 justify-content-center align-items-center p-4">
                        <div className="col-lg-3 ">
                            <img className="img-fluid" src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg"></img>
                        </div>
                        <div className="col-lg-9">
                            <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                MEDIA AND MARKETING WITH DEMIGOD HOUSE
                            </h1>
                            <p className="text-white text-start">
                                Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events! (repeat content)
                            </p>
                        </div>
                    </div>                </div>
                <div className={`tab-pane fade ${activeTab === "ex2-tabs-7" ? "show active" : ""}`}>
                    <div className="d-flex gap-4 justify-content-center align-items-center p-4">
                        <div className="col-lg-3 ">
                            <img className="img-fluid" src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg"></img>
                        </div>
                        <div className="col-lg-9">
                            <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                MEDIA AND MARKETING WITH DEMIGOD HOUSE
                            </h1>
                            <p className="text-white text-start">
                                Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events!  Brand Developement & Marketing, Print-media & Electronic-media,
                                Advertising, Brand Seed Funding, Brand Private-Equity Investments & B2B /
                                B2C Events! (repeat content)
                            </p>
                        </div>
                    </div>                </div>
            </div>
            <ul className=" d-flex  gap-1 nav nav-tabs nav-fill mb-3 p-4" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link rounded border-0 smallfont ${activeTab === "ex2-tabs-1" ? "bg-primary text-white" : "text-black"
                            }`}
                        onClick={() => setActiveTab("ex2-tabs-1")}
                    >
                        Brand Development
                    </button>
                </li>

                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link smallfont ${activeTab === "ex2-tabs-2" ? "bg-primary text-white" : "text-black"
                            }`}
                        onClick={() => setActiveTab("ex2-tabs-2")}
                    >
                        Brand Marketing
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link smallfont ${activeTab === "ex2-tabs-3" ? "bg-primary text-white" : "text-black"
                            }`}
                        onClick={() => setActiveTab("ex2-tabs-3")}
                    >
                        3rd Party contract
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link smallfont ${activeTab === "ex2-tabs-4" ? "bg-primary text-white" : "text-black"
                            }`}
                        onClick={() => setActiveTab("ex2-tabs-4")}
                    >
                        Brand Seo Funding
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link smallfont ${activeTab === "ex2-tabs-5" ? "bg-primary text-white" : "text-black"
                            }`}
                        onClick={() => setActiveTab("ex2-tabs-5")}
                    >
                        Brand Seo Funding
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link  smallfont ${activeTab === "ex2-tabs-6" ? "bg-primary text-white" : "text-black"
                            }`}
                        onClick={() => setActiveTab("ex2-tabs-6")}
                    >
                        Brand Private Equity
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link smallfont ${activeTab === "ex2-tabs-7" ? "bg-primary text-white" : "text-black"
                            }`}
                        onClick={() => setActiveTab("ex2-tabs-7")}
                    >
                        B2B & B2C Events
                    </button>
                </li>
            </ul>
            {/* Tabs content */}
        </>
    );
};

export default TabsComponent;
