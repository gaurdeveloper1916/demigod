'use client'
// import { useAppContext } from "@/context/AppContext";
import { useState } from "react";
import './tab.css'

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState("ex2-tabs-8");
    // const { state, setState } = useAppContext();
    // console.log(state, "state")

    const tabs = [
        { id: "ex2-tabs-8", label: " Brand Association" },
        { id: "ex2-tabs-9", label: "Venture Capital" },
        { id: "ex2-tabs-2", label: "Brand Marketing" },
        { id: "ex2-tabs-3", label: " Contract Manufacturing" },
        // { id: "ex2-tabs-4", label: "Brand SEO Funding" },
        { id: "ex2-tabs-5", label: "Brand Seed Funding" },
        // { id: "ex2-tabs-6", label: "Brand Capital" },
        { id: "ex2-tabs-7", label: "B2B & B2C Events" },
        { id: "ex2-tabs-1", label: "Brand Development" }
    ];
    return (
        <>
            <div className="w-full d-flex justify-content-center px-5">
                <ul
                    className="d-flex gap-3 mb-1 overflow-x-auto lg:overflow-hidden px-2"
                    role="tablist"
                >
                    {tabs.map((tab) => (
                        <li
                            className="d-flex justify-content-center align-items-center"
                            key={tab.id}
                            role="presentation"
                        >
                            <button
                                onClick={() => setActiveTab(tab.id)}
                                className={`tab-button-base ${activeTab === tab.id ? "tab-button-selected" : "tab-button"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>





            <div className="tab-content px-[5.5rem]">
                <div className={`tab-pane fade  ${activeTab === "ex2-tabs-8" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-4 align-items-center px-3 px-lg-5 py-5">

                        {/* Left Side - Image Card */}
                        <div className="col-lg-5">
                            <div className="position-relative overflow-hidden rounded-4 shadow-lg">
                                <img
                                    src="/home/brand_association.webp"
                                    alt="Brand Advertising"
                                    className="w-100 rounded-4 img-fluid"
                                    style={{ height: "100%", objectFit: "cover" }}
                                />
                                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))" }}>
                                    <h2 className="text-white fw-bold mb-2" style={{ fontSize: "1.8rem" }}>
                                        Brand Association
                                    </h2>
                                    <p className="text-white" style={{ fontWeight: "400", fontSize: "0.95rem", lineHeight: "1.5" }}>
                                        Amplifying brand visibility with strategic, high-impact advertising campaigns that ensure maximum reach, engagement, and conversions across global markets. We integrate traditional, digital, and experiential advertising techniques to position brands at the forefront of consumer attention and market influence.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content List */}
                        <div className="col-lg-7 p-3 d-flex flex-column justify-content-center">
                            <ul className="text-white d-flex flex-column gap-4 ps-3" style={{ fontSize: "1rem", fontWeight: "200", lineHeight: "1.7" }}>
                                <li>
                                    At DemiGod House, we avail end-to-end Brand Marketing, Brand Strategizing, Brand Development, Brand Seed Funding & capital procurement, Brand product’s contract manufacturing, Brand advertising in Print Media/Electronic Media and B2B/B2C Events for Brand ATL/BTL promotion!
                                </li>
                                <li>
                                    We are a powerhouse of strategic marketing and brand elevation, ensuring a brand’s success story unfolds seamlessly across global and domestic markets.
                                </li>
                                <li>
                                    Our flagship offerings include Brand Association and Capital Procurement—where we collaborate with industrial leaders to fuel strategic brand growth and redefine market dominance.
                                </li>
                                <li>
                                    DemiGod House exists at the intersection of luxury, influence, and scale, strategically positioned to deliver high-value investment returns and build legacy-driven brands that leave a lasting impact.
                                </li>
                                <li>
                                    The primary objective of association with DemiGod House is to elevate the product’s sale by strategically aligning our marketing resources and capital investments, ultimately fostering long-term growth, brand loyalty, and higher revenue.
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
                <div className={`tab-pane fade mt-12 ${activeTab === "ex2-tabs-1" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-4 align-items-center px-3 px-lg-5 py-5">
                        {/* Left Side - Image Card */}
                        <div className="col-lg-5">
                            <div className="position-relative overflow-hidden rounded-4 shadow-lg">
                                <img
                                    src="Image/m&m/tabs/brand.webp"
                                    alt="Brand Development"
                                    className="w-100 rounded-4 img-fluid"
                                    style={{ height: "100%", objectFit: "cover" }}
                                />
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4"
                                    style={{
                                        background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                                    }}
                                >
                                    <h2 className="text-white fw-bold mb-2" style={{ fontSize: "1.8rem" }}>
                                        <strong><em>Brand Development</em></strong>
                                    </h2>
                                    <p
                                        className="text-white"
                                        style={{ fontWeight: "400", fontSize: "0.95rem", lineHeight: "1.5" }}
                                    >
                                        <strong>
                                            Articulating, designing and curating a strategic brand market image alongside reflecting the consumer's demand DNA & structuring in brand products & services.
                                            Our team's research, expertise & exposure across a variety of commercial/industrial sectors gives us the edge and grasp to develop a successfully strategic brand story!
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content List */}
                        <div className="col-lg-7 p-3 d-flex flex-column justify-content-center">
                            <ul
                                className="text-white d-flex flex-column gap-4 ps-3"
                                style={{ fontSize: "1rem", fontWeight: "200", lineHeight: "1.7" }}
                            >
                                <li>
                                    Brand development with DemiGod House ensures guaranteed retail participation of at least 50,000,000 consumers through B2B/B2C events, eCommerce portals, and brick-and-mortar stores.
                                </li>
                                <li>
                                    Our brand image development is driven by time-tested strategic marketing activities, following thorough research and analysis of targeted global markets.
                                </li>
                                <li>
                                    We implement a well-defined brand development strategy through print media, digital media, and ATL/BTL activities, adapting seamlessly to market trends—whether in a bullish or bearish phase.
                                </li>
                                <li>
                                    Our structured brand development approach provides a competitive edge by integrating exclusive factors aligned with consumer demand in rapidly evolving markets.
                                </li>
                                <li>
                                    With full funding provided by us, our team has complete creative liberty in designing and executing brand development activities for DemiGod House brands, associates, and clientele.
                                </li>
                                <li>
                                    We deliver headline-making, trend-setting brand development campaigns through our print and electronic media associates across more than 90 countries on a regular basis.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>


                <div className={`tab-pane fade mt-12 ${activeTab === "ex2-tabs-9" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-4 align-items-center px-3 px-lg-5 py-5">
                        {/* Left Side - Image Card */}
                        <div className="col-lg-5">
                            <div className="position-relative overflow-hidden rounded-4 shadow-lg">
                                <img
                                    src="./home/venture_capital.webp"
                                    alt="Venture Capital"
                                    className="w-100 rounded-4 img-fluid"
                                    style={{ height: "100%", objectFit: "cover" }}
                                />
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4"
                                    style={{
                                        background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                                    }}
                                >
                                    <h2 className="text-white fw-bold mb-2" style={{ fontSize: "1.8rem" }}>
                                        <strong><em>Venture Capital</em></strong>
                                    </h2>
                                    <p
                                        className="text-white"
                                        style={{ fontWeight: "400", fontSize: "0.95rem", lineHeight: "1.5" }}
                                    >
                                        <strong>
                                            At DemiGod House Venture Capital, we bridge innovation with strategic funding, empowering businesses with seed investments, growth-stage financing, and private equity solutions.
                                            More than just investors, we act as growth architects, aligning financial expertise with market positioning to drive long-term success.
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content List */}
                        <div className="col-lg-7 p-3 d-flex flex-column justify-content-center">
                            <ul
                                className="text-white d-flex flex-column gap-4 ps-3"
                                style={{ fontSize: "1rem", fontWeight: "200", lineHeight: "1.7" }}
                            >
                                <li>
                                    At DemiGod House, we bridge visionary entrepreneurship with strategic capital infusion, offering end-to-end Venture Capital solutions, including Seed Funding, Growth-Stage Investments, Private Equity, Debt Structuring, and Exit Strategies.
                                </li>
                                <li>
                                    We are more than investors—we are growth architects, empowering startups and established businesses to scale sustainably, optimize financial frameworks, and unlock exponential market potential.
                                </li>
                                <li>
                                    Our flagship offerings include Capital Syndication and Strategic Investment Partnerships, where we collaborate with leading institutional investors, angel networks, and private equity firms to fuel disruptive innovation and establish market leadership.
                                </li>
                                <li>
                                    DemiGod House operates at the nexus of wealth, influence, and enterprise, strategically positioning businesses for high-value exits, sustainable revenue models, and long-term equity appreciation.
                                </li>
                                <li>
                                    The primary objective of associating with DemiGod House Venture Capital is to secure the right capital at the right time, ensuring seamless financial growth, accelerated scalability, and a dominant market presence that transforms vision into legacy.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className={`tab-pane fade  mt-12 ${activeTab === "ex2-tabs-2" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-6 align-items-center px-3 px-lg-5 py-5">
                        {/* Left Side - Image Card */}
                        <div className="col-lg-5">
                            <div className="position-relative overflow-hidden rounded-4 shadow-lg">
                                <img
                                    src="/home/brand_marketing.jpeg"
                                    alt="Brand Marketing"
                                    className="w-100 rounded-4 img-fluid"
                                    style={{ height: "100%", objectFit: "cover" }}
                                />
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4"
                                    style={{
                                        background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                                    }}
                                >
                                    <h2 className="text-white fw-bold mb-2" style={{ fontSize: "1.8rem" }}>
                                        <strong><em>Brand MARKETING</em></strong>
                                    </h2>
                                    <p
                                        className="text-white"
                                        style={{ fontWeight: "400", fontSize: "0.95rem", lineHeight: "1.5" }}
                                    >
                                        <strong>
                                            DemiGod House marketing team specializes in curating high-impact marketing strategies that ensure your brand's sectoral leadership & success story in an increasingly competitive landscape.
                                            We don’t just market, we create experiences that resonate with consumers and drive engagement.
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content List */}
                        <div className="col-lg-7 p-3 d-flex flex-column justify-content-center">
                            <ul
                                className="text-white d-flex flex-column gap-4 ps-3"
                                style={{ fontSize: "1rem", fontWeight: "200", lineHeight: "1.7" }}
                            >
                                <li>
                                    DemiGod House Marketing Team specializes in crafting high-impact marketing strategies that establish your brand as a sector leader and success story in today’s highly competitive landscape.
                                    We don’t just market—we create experiences that resonate with consumers and drive meaningful engagement.
                                </li>
                                <li>
                                    Marketing activities articulation & execution via our team is done on the basis of pragmatic market’s research, analysis, and consumer fast-changing demand as per global trends!
                                </li>
                                <li>
                                    Our marketing strategies are built on in-depth market research, thorough analysis, and an acute understanding of evolving consumer demands in line with global trends. We implement time-tested trade techniques and strategically integrated marketing campaigns across all available print and electronic media worldwide, ensuring maximum reach and impact for our clients’ brands across diverse B2B and B2C markets.
                                </li>
                                <li>
                                    With a vast and active network of traders, retailers, wholesalers, importers, and e-commerce vendors spanning over 65 countries, we provide our clients with a distinct competitive edge in sales and consumer interaction.
                                    Our arsenal of marketing tools, trade techniques, and strategic industry associations enables us to fulfill genuine consumer demand across a wide range of global markets.
                                </li>
                                <li>
                                    By God’s grace, not a single client has ever discontinued our marketing services, a testament to our team’s dedication and expertise.
                                    Our success is driven by meticulous market analysis and a pragmatic approach to understanding consumer demand based on the demographic structure of each market we serve.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className={`tab-pane fade mt-12 ${activeTab === "ex2-tabs-3" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-6 align-items-center px-3 px-lg-5 py-5">
                        {/* Left Side - Image Card */}
                        <div className="col-lg-5">
                            <div className="position-relative overflow-hidden rounded-4 shadow-lg">
                                <img
                                    src="./home/contract_manufacturing.webp"
                                    alt="Contract Manufacturing"
                                    className="w-100 rounded-4 img-fluid"
                                    style={{ height: "100%", objectFit: "cover" }}
                                />
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4"
                                    style={{
                                        background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                                    }}
                                >
                                    <h2 className="text-white fw-bold mb-2" style={{ fontSize: "1.8rem" }}>
                                        <strong><em>Contract Manufacturing</em></strong>
                                    </h2>
                                    <p
                                        className="text-white"
                                        style={{ fontWeight: "400", fontSize: "0.95rem", lineHeight: "1.5" }}
                                    >
                                        <strong>
                                            Structuring brand products & services to align with the consumer's demand DNA while ensuring seamless third-party partnerships that add value and expand market influence.
                                            Successful brands thrive on strategic partnerships. We specialize in identifying, structuring, and negotiating third-party contracts that maximize market reach and commercial growth.
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content List */}
                        <div className="col-lg-7 p-3 d-flex flex-column justify-content-center">
                            <ul
                                className="text-white d-flex flex-column gap-4 ps-3"
                                style={{ fontSize: "1rem", fontWeight: "200", lineHeight: "1.7" }}
                            >
                                <li>
                                    We host opportunities for 3rd Party Contract Manufacturing of mainstream media brands across a global network of world-leading developed and developing economies!
                                </li>
                                <li>
                                    We operate in diversified commercial/industrial sectors such as Automotive components, Gemstones, Jewellery, FMCG, Pharma-OTC, IT, Entertainment, Real Estate/Construction, Electronics, etc.
                                </li>
                                <li>
                                    We focus exclusively on permanent and long-term contract manufacturing partnerships.
                                </li>
                                <li>
                                    As trusted channel partners, we ensure seamless collaboration between brand entities and industrial manufacturers.
                                </li>
                                <li>
                                    To discuss potential partnerships, share your portfolio and queries:
                                    <br />
                                    E: info@demigodhouse.com
                                    <br />
                                    P: +91 83558 97803
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className={`tab-pane fade  ${activeTab === "ex2-tabs-5" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-6 align-items-center px-3 px-lg-5 py-5">
                        {/* Left Side - Image Card */}
                        <div className="col-lg-5">
                            <div className="position-relative overflow-hidden rounded-4 shadow-lg">
                                <img
                                    src="./home/brand_seed_funding.webp"
                                    alt="Brand Seed Funding"
                                    className="w-100 rounded-4 img-fluid"
                                    style={{ height: "100%", objectFit: "cover" }}
                                />
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4"
                                    style={{
                                        background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                                    }}
                                >
                                    <h2 className="text-white fw-bold mb-2" style={{ fontSize: "1.8rem" }}>
                                        <strong><em>Brand Seed Funding</em></strong>
                                    </h2>
                                    <p
                                        className="text-white"
                                        style={{ fontWeight: "400", fontSize: "0.95rem", lineHeight: "1.5" }}
                                    >
                                        <strong>
                                            Articulating, designing, and curating a strategic brand market image alongside ensuring structured funding for business growth and expansion.
                                            We provide up to $500 million in seed funding to nurture promising brands, helping them transition from vision to market dominance with a structured business roadmap.
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content List */}
                        <div className="col-lg-7 p-3 d-flex flex-column justify-content-center">
                            <ul
                                className="text-white d-flex flex-column gap-4 ps-3"
                                style={{ fontSize: "1rem", fontWeight: "200", lineHeight: "1.7" }}
                            >
                                <li>
                                    Up to $500 Million Investment Opportunity.
                                </li>
                                <li>
                                    We operate across G20, ASEAN, and BRICS economic corridors, ensuring a strong global presence and market penetration.
                                </li>
                                <li>
                                    Global Print & Electronic/Digital Media Association with the brand for strategic broadcasting of the brand's supreme image of products/services quality standards in comparison with market competitors.
                                </li>
                                <li>
                                    Via time-tested business models & commercial marketing/finance instruments, we assure a success story for the brand's products/services leadership in global markets.
                                </li>
                                <li>
                                    We design, articulate, and curate brand products/services in accordance with fast-changing consumer demands in these competitive global markets.
                                </li>
                                <li>
                                    For all our brands and associated subsidiaries, we provide a platform for listing on stock exchanges globally (e.g., BSE, NSE, NASDAQ, S&P 500, Dow Jones, Small Cap 2000, DAX, FTSE 100, EURO Stoxx 50, MOEX Russia Index, RTRSI, Hang Seng, etc.).
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className={`tab-pane fade  ${activeTab === "ex2-tabs-7" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-6 align-items-center px-3 px-lg-5 py-5">
                        {/* Left Side - Image Card */}
                        <div className="col-lg-5">
                            <div className="position-relative overflow-hidden rounded-4 shadow-lg">
                                <img
                                    src="./home/b2b_b2c_events.webp"
                                    alt="B2B & B2C Events"
                                    className="w-100 rounded-4 img-fluid"
                                    style={{ height: "100%", objectFit: "cover" }}
                                />
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4"
                                    style={{
                                        background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                                    }}
                                >
                                    <h2 className="text-white fw-bold mb-2" style={{ fontSize: "1.8rem" }}>
                                        <strong><em>B2B & B2C Events</em></strong>
                                    </h2>
                                    <p
                                        className="text-white"
                                        style={{ fontWeight: "400", fontSize: "0.95rem", lineHeight: "1.5" }}
                                    >
                                        <strong>
                                            Articulating, designing, and curating brand experiences that engage consumers, strengthen B2B networks, and drive business impact.
                                            From high-profile corporate summits to large-scale consumer activations, we create impactful events that foster connections, amplify brand visibility, and drive revenue growth.
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content List */}
                        <div className="col-lg-7 p-3 d-flex flex-column justify-content-center">
                            <ul
                                className="text-white d-flex flex-column gap-4 ps-3"
                                style={{ fontSize: "1rem", fontWeight: "100", lineHeight: "1.7" }}
                            >
                                <li>
                                    Explore our incredible exposure of events globally! Until 2030, we have lined up more than 1,600 events, ensuring strategic participation of over 500,000 individuals on average.
                                </li>
                                <li>
                                    We digitally host and provide management services for a variety of B2B and B2C events worldwide.
                                </li>
                                <li>
                                    Our global B2B/B2C events group, powered by Demigod House, connects our associates, clientele, and retail corporations with brand exposure for their products and services.
                                </li>
                                <li>
                                    We create high-impact networking platforms that bring together industry leaders, innovators, and key decision-makers.
                                </li>
                                <li>
                                    We facilitate seamless event execution with end-to-end planning, production, and engagement strategies tailored for maximum impact.
                                </li>
                                <li>
                                    We leverage cutting-edge technology and digital integrations to enhance audience interaction and event experiences.
                                </li>
                                <li>
                                    We offer customized event solutions, ensuring brands achieve their marketing, sales, and outreach goals effectively.
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


