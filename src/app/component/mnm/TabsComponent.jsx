'use client'
// import { useAppContext } from "@/context/AppContext";
import { useState } from "react";
import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState("ex2-tabs-1");
    // const { state, setState } = useAppContext();
    // console.log(state, "state")

    const tabs = [
        { id: "ex2-tabs-1", label: "Brand Development" },
        { id: "ex2-tabs-2", label: "Brand Marketing" },
        { id: "ex2-tabs-3", label: "3rd Party Contract" },
        { id: "ex2-tabs-4", label: "Brand SEO Funding" },
        { id: "ex2-tabs-5", label: "Brand Seed Funding" },
        { id: "ex2-tabs-6", label: "Brand Private Equity" },
        { id: "ex2-tabs-7", label: "B2B & B2C Events" },
    ];
    return (
        <>


            <div className="w-full px-4">
                <ul
                    className="d-flex  nav nav-ta nav-fil mb-3 overflow-x-auto lg:overflow-hidden lg-px-4"
                    role="tablist"
                    style={{ whiteSpace: "nowrap", flexWrap: "nowrap" }}
                >
                    {tabs.map((tab) => (
                        <li className="d-flex  justify-content-center align-items-center" key={tab.id}
                            role="presentation">
                            {/* <p
                                className={`${activeTab === tab.id ? "tab-css-button-slected mx-4 " : "tab-css-button mx-4 "
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                
                            </p> */}
                            <button
                                onClick={() => setActiveTab(tab.id)}
                                className={`verySmallFont border-0 rounded px-3 py-2 text-white ${activeTab === tab.id ? "tab-css-button-slected mx-4 " : "tab-css-button mx-4 "
                                    }`}  >
                                {tab.label}
                            </button>
                            {/* <div className="d-flex">
                                <FiChevronsLeft size={100} className="text-secondary"/>
                                <FiChevronsRight size={100}  className="text-secondary"/>
                            </div> */}
                            {/* <p className="fs-1 w-100 text-white gradient-text">|</p> */}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="tab-content px-4">
                <div className={`tab-pane fade ${activeTab === "ex2-tabs-1" ? "show active" : ""}`}>

                    <div className="d-flex flex-lg-row flex-column gap-2">
                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            {/* <div className="d-flex flex-column ">
                                <img style={{ height: "300px" }} className="img-fluid w-100 " src="https://image.cnbcfm.com/api/v1/image/108095850-17….jpeg?v=1738357388&w=830&h=554&ffmt=webp&vtcrop=y"></img>

                                <div className="title-des  p-3">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4 ago-text">
                                        Brand Developement
                                    </h1>
                                    <p className="text-white text-start ">
                                        Articulating, designing and curating a strategic brand market image alongside reflecting the consumer's demand DNA &
                                        Structuirng in brand products & services.
                                        Our team Research, expertise & exposure  of the
                                        variety of commercial/Industrial sector gives us
                                        the edge & grasp of developing successfuly strategic
                                        Brand Story !
                                    </p>
                                </div>
                            </div> */}

                            <div
                                className=" border border-0 position-relative"
                                style={{ borderRadius: "10px" }}
                            >
                                <img
                                    src="https://image.cnbcfm.com/api/v1/image/107405058-17….jpeg?v=1738824724&w=560&h=470&ffmt=webp&vtcrop=y"
                                    className="img-fluid w-100"
                                    style={{ height: "500px" }}
                                />
                                <div className="info_card p-3 text-white">
                                    <h4>
                                        Volvo Cars weighs tariffs-led production move, warns of
                                        'hyper-competitiveness' in China
                                    </h4>
                                    <p>
                                        "We're preparing ourselves to see whether we need to start looking at
                                        production relocation or or even supplier relocation," Volvo Cars CEO
                                        Jim Rowan told CNBC.
                                    </p>
                                </div>
                            </div>


                            {/* </div> */}
                        </div>
                        <div className="col-lg-7  p-3">
                            <p className="fw-bold text-white">Latest News</p>
                            <ul className="news-list">
                                <li>
                                    <strong className="ago-text">Purpose-Driven Brand Strategy</strong>
                                    <ul className="mt-2">
                                        <li><em>Objective:</em> Develop a purpose-driven brand that resonates emotionally with customers and creates long-term loyalty.</li>
                                        <li><em>Approach:</em>
                                            <ul className="mt-1">
                                                <li>Articulate the brand's mission, vision, and core values</li>
                                                <li>Align brand messaging with customer needs and trends</li>
                                                <li>Position the brand as a solution provider within its industry</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className={`tab-pane fade ${activeTab === "ex2-tabs-2" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column">
                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            <div className="d-flex flex-column">
                                <img style={{ height: "300px" }} className="img-fluid w-100 " src="https://image.cnbcfm.com/api/v1/image/108095850-17….jpeg?v=1738357388&w=830&h=554&ffmt=webp&vtcrop=y"></img>

                                <div className="title-des p-3">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                        Brand MARKETING WITH DEMIGOD HOUSE

                                    </h1>
                                    <p className="text-white text-start">
                                        Articulating, designing and curating a strategic brand market image alongside reflecting the consumer's demand DNA &
                                        Structuirng in brand products & services.
                                        Our team Research, expertise & exposure  of the
                                        variety of commercial/Industrial sector gives us
                                        the edge & grasp of developing successfuly strategic
                                        Brand Story !
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-lg-7  p-3">
                            <p className="fw-bold text-white">Latest News</p>
                            <ul className="news-list">
                                <li>
                                    <strong className="ago-text">Purpose-Driven Brand Strategy</strong>
                                    <ul className="mt-2">
                                        <li><em>Objective:</em> Develop a purpose-driven brand that resonates emotionally with customers and creates long-term loyalty.</li>
                                        <li><em>Approach:</em>
                                            <ul className="mt-1">
                                                <li>Articulate the brand's mission, vision, and core values</li>
                                                <li>Align brand messaging with customer needs and trends</li>
                                                <li>Position the brand as a solution provider within its industry</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>



                </div>
                <div className={`tab-pane fade ${activeTab === "ex2-tabs-3" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column">
                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            <div className="d-flex flex-column">
                                <img style={{ height: "300px" }} className="img-fluid w-100 " src="https://image.cnbcfm.com/api/v1/image/108095850-17….jpeg?v=1738357388&w=830&h=554&ffmt=webp&vtcrop=y"></img>

                                <div className="title-des  p-3">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                        3rd Party Contract

                                    </h1>
                                    <p className="text-white text-start">
                                        Articulating, designing and curating a strategic brand market image alongside reflecting the consumer's demand DNA &
                                        Structuirng in brand products & services.
                                        Our team Research, expertise & exposure  of the
                                        variety of commercial/Industrial sector gives us
                                        the edge & grasp of developing successfuly strategic
                                        Brand Story !
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-lg-7  p-3">
                            <p className="fw-bold text-white">Latest News</p>
                            <ul className="news-list">
                                <li>
                                    <strong className="ago-text">Purpose-Driven Brand Strategy</strong>
                                    <ul className="mt-2">
                                        <li><em>Objective:</em> Develop a purpose-driven brand that resonates emotionally with customers and creates long-term loyalty.</li>
                                        <li><em>Approach:</em>
                                            <ul className="mt-1">
                                                <li>Articulate the brand's mission, vision, and core values</li>
                                                <li>Align brand messaging with customer needs and trends</li>
                                                <li>Position the brand as a solution provider within its industry</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`tab-pane fade ${activeTab === "ex2-tabs-4" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column">
                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            <div className="d-flex flex-column">
                                <img style={{ height: "300px" }} className="img-fluid w-100 " src="https://image.cnbcfm.com/api/v1/image/108095850-17….jpeg?v=1738357388&w=830&h=554&ffmt=webp&vtcrop=y"></img>
                                <div className="title-des  p-3">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                        Brand SEO Funding
                                    </h1>
                                    <p className="text-white text-start">
                                        Articulating, designing and curating a strategic brand market image alongside reflecting the consumer's demand DNA &
                                        Structuirng in brand products & services.
                                        Our team Research, expertise & exposure  of the
                                        variety of commercial/Industrial sector gives us
                                        the edge & grasp of developing successfuly strategic
                                        Brand Story !
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-lg-7  p-3">
                            <p className="fw-bold text-white">Latest News</p>
                            <ul className="news-list">
                                <li>
                                    <strong className="ago-text">Purpose-Driven Brand Strategy</strong>
                                    <ul className="mt-2">
                                        <li><em>Objective:</em> Develop a purpose-driven brand that resonates emotionally with customers and creates long-term loyalty.</li>
                                        <li><em>Approach:</em>
                                            <ul className="mt-1">
                                                <li>Articulate the brand's mission, vision, and core values</li>
                                                <li>Align brand messaging with customer needs and trends</li>
                                                <li>Position the brand as a solution provider within its industry</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`tab-pane fade ${activeTab === "ex2-tabs-5" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column">
                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            <div className="d-flex flex-column">
                                <img style={{ height: "300px" }} className="img-fluid w-100 " src="https://image.cnbcfm.com/api/v1/image/108095850-17….jpeg?v=1738357388&w=830&h=554&ffmt=webp&vtcrop=y"></img>
                                <div className="title-des  p-3">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                        Brand Seed Funding
                                    </h1>
                                    <p className="text-white text-start">
                                        Articulating, designing and curating a strategic brand market image alongside reflecting the consumer's demand DNA &
                                        Structuirng in brand products & services.
                                        Our team Research, expertise & exposure  of the
                                        variety of commercial/Industrial sector gives us
                                        the edge & grasp of developing successfuly strategic
                                        Brand Story !
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-lg-7  p-3">
                            <p className="fw-bold text-white">Latest News</p>
                            <ul className="news-list">
                                <li>
                                    <strong className="ago-text">Purpose-Driven Brand Strategy</strong>
                                    <ul className="mt-2">
                                        <li><em>Objective:</em> Develop a purpose-driven brand that resonates emotionally with customers and creates long-term loyalty.</li>
                                        <li><em>Approach:</em>
                                            <ul className="mt-1">
                                                <li>Articulate the brand's mission, vision, and core values</li>
                                                <li>Align brand messaging with customer needs and trends</li>
                                                <li>Position the brand as a solution provider within its industry</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`tab-pane fade ${activeTab === "ex2-tabs-6" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column">
                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            <div className="d-flex flex-column">
                                <img style={{ height: "300px" }} className="img-fluid w-100 " src="https://image.cnbcfm.com/api/v1/image/108095850-17….jpeg?v=1738357388&w=830&h=554&ffmt=webp&vtcrop=y"></img>
                                <div className="title-des  p-3">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                        Brand Private Equity

                                    </h1>
                                    <p className="text-white text-start">
                                        Articulating, designing and curating a strategic brand market image alongside reflecting the consumer's demand DNA &
                                        Structuirng in brand products & services.
                                        Our team Research, expertise & exposure  of the
                                        variety of commercial/Industrial sector gives us
                                        the edge & grasp of developing successfuly strategic
                                        Brand Story !
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-lg-7  p-3">
                            <p className="fw-bold text-white">Latest News</p>
                            <ul className="news-list">
                                <li>
                                    <strong className="ago-text">Purpose-Driven Brand Strategy</strong>
                                    <ul className="mt-2">
                                        <li><em>Objective:</em> Develop a purpose-driven brand that resonates emotionally with customers and creates long-term loyalty.</li>
                                        <li><em>Approach:</em>
                                            <ul className="mt-1">
                                                <li>Articulate the brand's mission, vision, and core values</li>
                                                <li>Align brand messaging with customer needs and trends</li>
                                                <li>Position the brand as a solution provider within its industry</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`tab-pane fade ${activeTab === "ex2-tabs-7" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column">
                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            <div className="d-flex flex-column">
                                <img style={{ height: "300px" }} className="img-fluid w-100 " src="https://image.cnbcfm.com/api/v1/image/108095850-17….jpeg?v=1738357388&w=830&h=554&ffmt=webp&vtcrop=y"></img>
                                <div className="title-des  p-3">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                        B2B & B2C Events

                                    </h1>
                                    <p className="text-white text-start">
                                        Articulating, designing and curating a strategic brand market image alongside reflecting the consumer's demand DNA &
                                        Structuirng in brand products & services.
                                        Our team Research, expertise & exposure  of the
                                        variety of commercial/Industrial sector gives us
                                        the edge & grasp of developing successfuly strategic
                                        Brand Story !
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-lg-7  p-3">
                            <p className="fw-bold text-white">Latest News</p>
                            <ul className="news-list">
                                <li>
                                    <strong className="ago-text">Purpose-Driven Brand Strategy</strong>
                                    <ul className="mt-2">
                                        <li><em>Objective:</em> Develop a purpose-driven brand that resonates emotionally with customers and creates long-term loyalty.</li>
                                        <li><em>Approach:</em>
                                            <ul className="mt-1">
                                                <li>Articulate the brand's mission, vision, and core values</li>
                                                <li>Align brand messaging with customer needs and trends</li>
                                                <li>Position the brand as a solution provider within its industry</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tabs content */}
        </>
    );
};

export default TabsComponent;
