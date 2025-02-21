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
        { id: "ex2-tabs-3", label: "3rd Party Contract Manufacturing" },
        // { id: "ex2-tabs-4", label: "Brand SEO Funding" },
        { id: "ex2-tabs-5", label: "Brand Seed Funding" },
        // { id: "ex2-tabs-6", label: "Brand Private Equity" },
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
                            {/* <p className="fw-bold text-white">Our Approach:</p> */}
                            <ul className="news-list">
                                <li>Brand development with DemiGod House ensures guaranteed retail participation of at least 50,000,000 consumers through B2B/B2C events, eCommerce portals, and brick-and-mortar stores.</li>
                                <li>Our brand image development is driven by time-tested strategic marketing activities, following thorough research and analysis of targeted global markets.</li>

                                <li>We implement a well-defined brand development strategy through print media, digital media, and ATL/BTL activities, adapting seamlessly to market trends—whether in a bullish or bearish phase.</li>

                                <li>Our structured brand development approach provides a competitive edge by integrating exclusive factors aligned with consumer demand in rapidly evolving markets.</li>
                                <li>With full funding provided by us, our team has complete creative liberty in designing and executing brand development activities for DemiGod House brands, associates, and clientele.</li>

                                <li>We deliver headline-making, trend-setting brand development campaigns through our print and electronic media associates across more than 90 countries on a regular basis.</li>
                            </ul>
                                
                        </div>
                    </div>
                </div>

                <div className={`tab-pane fade  mt-12 ${activeTab === "ex2-tabs-2" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-6 ">

                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            <div
                                className=" border border-0 position-relative"
                                style={{ borderRadius: "10px" }}
                            >
                                <img
                                    src="Image/m&m/tabs/marketing.webp"
                                    className="img-fluid w-500 image-style"
                                    style={{ height: "700px" }}
                                />
                                <div className="info_card p-10 text-white">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                        Brand MARKETING

                                    </h1>
                                    <p className="text-white text-start">
                                        <strong>DemiGod House marketing team specializes in curating high-impact marketing strategies that ensures your brand sectoral leadership & success story in an increasingly competitive landscape. We don’t just market, we create experiences that resonate with consumers and drive engagement.</strong>                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-lg-7  p-3">
                            {/* <p className="fw-bold text-white">Our Approach:</p> */}
                            <ul className="news-list">
                                <li>DemiGod House Marketing Team specializes in crafting high-impact marketing strategies that establish your brand as a sector leader and success story in today’s highly competitive landscape. We don’t just market—we create experiences that resonate with consumers and drive meaningful engagement. </li>
                                <li>Marketing activities articulation & execution via our team is done on the basis of pragmatic market’s research, analysis and consumer fast changing demand as per global trends! </li>

                                <li>Our marketing strategies are built on in-depth market research, thorough analysis, and an acute understanding of evolving consumer demands in line with global trends. We implement time-tested trade techniques and strategically integrated marketing campaigns across all available print and electronic media worldwide, ensuring maximum reach and impact for our clients’ brands across diverse B2B and B2C markets. </li>

                                <li>With a vast and active network of traders, retailers, wholesalers, importers, and e-commerce vendors spanning over 65 countries, we provide our clients with a distinct competitive edge in sales and consumer interaction. Our arsenal of marketing tools, trade techniques, and strategic industry associations enables us to fulfill genuine consumer demand across a wide range of global markets.</li>
                                <li>By God’s grace, not a single client has ever discontinued our marketing services, a testament to our team’s dedication and expertise. Our success is driven by meticulous market analysis and a pragmatic approach to understanding consumer demand based on the demographic structure of each market we serve.  </li>
                            </ul>
                                
                        </div>
                    </div>



                </div>
                <div className={`tab-pane fade mt-4 ${activeTab === "ex2-tabs-3" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-2 ">
                        <div className="col-lg-5">
                        <div
                                className=" border border-0 position-relative"
                                style={{ borderRadius: "10px" }}
                            >
                                <img
                                    src="Image/m&m/tabs/3rd.webp"
                                    className="img-fluid w-100"
                                    style={{ height: "500px" }}
                                />
                                <div className="info_card p-3 text-white">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                        3rd Party Contract Manufacturing

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
                            <ul className="news-list d-flex flex-column gap-2 text-[30px]">
                                
                                    <li> We operate across G20, ASEAN, and BRICS economic corridors, ensuring a strong global presence and market penetration.</li>
                                    <li className="mt-1">Global Print & Electronic/Digital Media Association with the brand for strategic Broadcasting of the brand supreme image of products/services quality standards in comparison with the market competitors. </li>
                                    <li>Via. time-tested business models & commercial marketing/finance instruments, we assure a success story for the brand products /services leadership in the markets globally. </li>
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
                            {/* <p className="fw-bold text-white">Our Approach:</p> */}
                            <ul className="news-list">
                                <li>Explore our incredible exposure of events globally! Until 2030, we have lined up more than 1,600 events, ensuring strategic participation of over 500,000 individuals on average.</li>  
                                <li>We digitally host and provide management services for a variety of B2B and B2C events worldwide.</li>
                                <li>Our global B2B/B2C events group, powered by Demigod House, connects our associates, clientele, and retail corporations with brand exposure for their products and services.</li>
                                <li>We create high-impact networking platforms that bring together industry leaders, innovators, and key decision-makers.</li>
                                <li>We facilitate seamless event execution with end-to-end planning, production, and engagement strategies tailored for maximum impact.</li>
                                <li>We leverage cutting-edge technology and digital integrations to enhance audience interaction and event experiences.</li>
                                <li>We offer customized event solutions, ensuring brands achieve their marketing, sales, and outreach goals effectively.</li>
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
