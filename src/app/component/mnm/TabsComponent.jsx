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
        // { id: "ex2-tabs-4", label: "Brand SEO Funding" },
        { id: "ex2-tabs-5", label: "Brand Seed Funding" },
        { id: "ex2-tabs-6", label: "Brand Private Equity" },
        { id: "ex2-tabs-7", label: "B2B & B2C Events" },
    ];
    return (
        <>


            <div className="w-full px-1">
                <ul
                    className="d-flex  nav nav-ta nav-fil mb-1 overflow-x-auto lg:overflow-hidden lg-px-4"
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
                <div className={`tab-pane fade mt-4 ${activeTab === "ex2-tabs-1" ? "show active" : ""}`}>

                    <div className="d-flex flex-lg-row flex-column gap-2">
                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            <div
                                className=" border border-0 position-relative"
                                style={{ borderRadius: "10px" }}
                            >
                                <img
                                    src="Image/m&m/tabs/brand.webp"
                                    className="img-fluid w-100"
                                    style={{ height: "500px" }}
                                />
                                <div className="info_card p-3 text-white">
                                    <h3>
                                        <strong><em>Brand Development</em></strong>
                                    </h3>
                                    <p>
                                        <strong>
                                            Articulating, designing and curating a strategic brand market image alongside reflecting the consumer's demand DNA &
                                            Structuirng in brand products & services.
                                            Our team Research, expertise & exposure  of the
                                            variety of commercial/Industrial sector gives us
                                            the edge & grasp of developing successfuly strategic
                                            Brand Story !
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7  p-3">
                            <p className="fw-bold text-white">Our Approach:</p>
                            <ul className="news-list">
                                <li>
                                    <strong className="ago-text">Comprehensive Brand Audit & Strategy Development</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>We analyze market positioning, audience sentiment, and competitive benchmarks to create a roadmap that defines your brand’s unique value proposition.</li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="ago-text">Consumer-Centric Branding & Market Positioning</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>We meticulously craft brand messaging that resonates with your target demographic, ensuring that your brand narrative speaks directly to customer needs and aspirations.</li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="ago-text">Multi-Platform Brand Experience Design</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>From digital touchpoints to physical brand experiences, we curate cohesive brand ecosystems that enhance visibility, engagement, and long-term loyalty.</li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="ago-text">Visual Identity, Storytelling & Engagement</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>A brand is more than just a logo—it’s a living, breathing entity. We craft immersive brand stories and striking visual identities that make a lasting impact on consumers and stakeholders.</li>
                                        </ul>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={`tab-pane fade  mt-4 ${activeTab === "ex2-tabs-2" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-2 ">

                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            <div
                                className=" border border-0 position-relative"
                                style={{ borderRadius: "10px" }}
                            >
                                <img
                                    src="Image/m&m/tabs/marketing.webp"
                                    className="img-fluid w-100"
                                    style={{ height: "250px" }}
                                />

                                <div className="title-des p-3">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                        Brand MARKETING

                                    </h1>
                                    <p className="text-white text-start">
                                        <strong>Our team’s research, expertise & exposure across a variety of commercial and industrial sectors give us the edge & grasp to develop a successfully strategic brand story!</strong>At Demigod House, we specialize in curating high-impact marketing strategies that ensure your brand stands out in an increasingly competitive landscape. We don’t just market—we create experiences that resonate with consumers and drive engagement.
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-lg-7  p-3">
                            <p className="fw-bold text-white"> Our Approach:</p>
                            <ul className="news-list">
                                <li>
                                    <strong className="ago-text">Precision-Driven Targeted Brand Campaigns</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>We develop, test, and optimize marketing campaigns tailored to specific audience segments, ensuring maximum engagement and ROI.</li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="ago-text">Cross-Platform Omnichannel Brand Presence</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>We design integrated marketing strategies that seamlessly blend digital, print, television, radio, and outdoor media for unmatched market reach.</li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="ago-text">Social Media Domination & Community Engagement</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>Through strategic content creation, influencer collaborations, and real-time engagement, we position your brand at the center of industry conversations.</li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="ago-text">Data-Backed Content Creation & Storytelling</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>We craft powerful brand stories that capture attention, spark emotions, and drive action, ensuring long-term customer loyalty.</li>
                                        </ul>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>



                </div>
                <div className={`tab-pane fade mt-4 ${activeTab === "ex2-tabs-3" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-2 ">
                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            <div className="d-flex flex-column">
                                <img style={{ height: "300px" }} className="img-fluid w-100 "
                                    src="Image/m&m/tabs/3rd.webp"></img>

                                <div className="title-des  p-3">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                        3rd Party Contract

                                    </h1>
                                    <p className="text-white text-start">
                                        <strong>Structuring in brand products & services to align with the consumer's demand DNA while ensuring seamless third-party partnerships that add value and expand market influence.</strong>Successful brands thrive on strategic partnerships. We specialize in identifying, structuring, and negotiating third-party contracts that maximize market reach and commercial growth.
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-lg-7  p-3">
                            <p className="fw-bold text-white">Our Approach:</p>
                            <ul className="news-list">
                                <li>
                                    <strong className="ago-text">Identifying High-Value Partnership Opportunities</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>We conduct in-depth market analysis to identify strategic partnerships that align with your brand’s long-term goals.</li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="ago-text">Seamless Contract Structuring & Negotiation</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>Our legal and business experts ensure fair, transparent, and mutually beneficial contracts, mitigating risks and securing growth-driven collaborations.</li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="ago-text">Brand Synergy & Ecosystem Integration</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>We structure partnerships that enhance brand credibility, strengthen industry positioning, and create new revenue streams.</li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="ago-text">Ongoing Relationship & Performance Management</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>Beyond contracts, we ensure that partnerships are nurtured, optimized, and leveraged for sustained long-term success.</li>
                                        </ul>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className={`tab-pane fade mt-4 ${activeTab === "ex2-tabs-5" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-2 ">
                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            <div className="d-flex flex-column">
                                <img style={{ height: "300px" }} className="img-fluid w-100 "
                                    src="Image/m&m/tabs/seed.webp"></img>

                                <div className="title-des  p-3">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                        Brand Seed Funding
                                    </h1>
                                    <p className="text-white text-start">
                                        <strong>Articulating, designing, and curating a strategic brand market image alongside ensuring structured funding for business growth and expansion.</strong> We provide up to $500 million in seed funding to nurture promising brands, helping them transition from vision to market dominance with a structured business roadmap.
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-lg-7  p-3">
                            <h5> <p className="fw-bold text-white">Upto $500 Million Investment's Opportunity</p></h5>
                            <ul className="news-list d-flex flex-column gap-2">
                                
                                    <li> We operate across G20, ASEAN, and BRICS economic corridors, ensuring a strong global presence and market penetration.</li>
                                    <li className="mt-1">Global Print & Electronic/Digital Media Association with the brand for strategic Broadcasting of the brand supreme image of products/services quality standards in comparison with the market competitors. </li>
                                    <li>Via. time-tested business models & commercial marketing/finance instruments, we assure a success story for the brand products /services leadership in the markets glbally. </li>
                                    <li> We Design, articulate & curate brand products / services in accordance with fast changing consumer demands in this competative global markets! </li>
                                    <li> For all our brands and associated subsidaries we avail platform to get listed at stock exchanges gloablly i.e. BSE, NSE, NASDAQ, S&P 500, Dow Jhons, Small Cap 2000, DAX, FTSE 100, EURO Stoxx 50, MOEX Russia Index, RTRSI, Hang Seng etc.</li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`tab-pane fade mt-4 ${activeTab === "ex2-tabs-6" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-2 ">
                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            <div className="d-flex flex-column">
                                <img style={{ height: "300px" }} className="img-fluid w-100 "
                                    src="Image/m&m/tabs/equity.webp"></img>
                                <div className="title-des  p-3">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                        Brand Private Equity

                                    </h1>
                                    <p className="text-white text-start">
                                        <strong>Our expertise & exposure across diverse industries provide us with the edge & grasp to structure successful brand equity strategies that drive growth and profitability.</strong>We connect high-potential brands with leading private equity investors, ensuring capital infusion, strategic structuring, and business scalability.
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-lg-7  p-3">
                            <p className="fw-bold text-white">Our Approach:</p>
                            <ul className="news-list">
                                <li>
                                    <strong className="ago-text">Exclusive Access to Global Private Equity Networks</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>We connect brands with top-tier private investors, venture capitalists, and financial institutions to secure competitive investment opportunities.</li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="ago-text">Tailored Capital Allocation & Growth Acceleration</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>Our financial strategists optimize capital distribution, ensuring investment funds fuel high-impact initiatives that maximize brand value.
                                            </li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="ago-text">Equity Structuring for Scalability & Market Expansion</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>We design private equity models that enhance financial sustainability, support market entry, and enable long-term brand success.</li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="ago-text">Exit Strategies & IPO Readiness</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>We structure clear exit strategies to maximize investor returns, paving the way for IPOs and large-scale acquisitions.</li>
                                        </ul>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`tab-pane fade mt-4 ${activeTab === "ex2-tabs-7" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-2 ">
                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            <div className="d-flex flex-column">
                                <img style={{ height: "300px" }} className="img-fluid w-100 "
                                    src="Image/m&m/tabs/b2b.webp"></img>
                                <div className="title-des  p-3">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                        B2B & B2C Events

                                    </h1>
                                    <p className="text-white text-start">
                                        <strong> Articulating, designing, and curating brand experiences that engage consumers, strengthen B2B networks, and drive business impact.</strong>From high-profile corporate summits to large-scale consumer activations, we create impactful events that foster connections, amplify brand visibility, and drive revenue growth.
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-lg-7  p-3">
                            <p className="fw-bold text-white">Our Approach:</p>
                            <ul className="news-list">
                                <li>
                                    <strong className="ago-text">Event Strategy & Immersive Brand Experience Design</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>We create bespoke event concepts that reinforce your brand identity and ensure maximum audience engagement.</li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="ago-text"> Strategic Event Marketing & Global Promotion</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>We execute multi-channel marketing campaigns that drive attendance, enhance event visibility, and generate pre-event buzz.</li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="ago-text">High-Impact Networking & Business Development Opportunities</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>We facilitate exclusive networking experiences, enabling B2B and B2C connections that result in strategic alliances and new business opportunities.
                                            </li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <strong className="ago-text">Post-Event Engagement & Legacy Building</strong>
                                    <ul className="mt-2">
                                        <ul className="mt-1">
                                            <li>We implement strategies to maintain long-term audience engagement, turning event attendees into loyal brand advocates.</li>
                                        </ul>
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
