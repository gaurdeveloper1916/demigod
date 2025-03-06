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
            <div className="w-full ">
                <ul
                    className="d-flex  mb-1 overflow-x-auto lg:overflow-hidden lg-px-4"
                    role="tablist"
                // style={{ whiteSpace: "nowrap", flexWrap: "nowrap" }}
                >
                    {tabs.map((tab) => (
                        <li className="d-flex justify-content-center align-items-center" key={tab.id}
                            role="presentation">

                            <button
                                onClick={() => setActiveTab(tab.id)}
                                className={`mediumFont border-0 rounded px-4 py-2 text-white text-lg ${activeTab === tab.id ? "tab-css-button-slected" : "tab-css-button"
                                    }`}  >
                                {tab.label}
                            </button>

                        </li>
                    ))}
                </ul>
            </div>


            <div className="tab-content px-[5.5rem]">
                <div className={`tab-pane fade mt-12 ${activeTab === "ex2-tabs-1" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-6">
                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            <div
                                className=" border border-0 position-relative"
                                style={{ borderRadius: "10px" }}
                            >
                                <img
                                    src="Image/m&m/tabs/brand.webp"
                                    className=" rounded image-tab"

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
                        <div className="col-lg-7 p-3 d-flex flex-column align-items-center mx-auto ">
                            <ul className="news-list d-flex gap-1 flex-column align-items-center ">
                                <li>Brand development with DemiGod House ensures guaranteed retail participation of at least 50,000,000 consumers through B2B/B2C events, eCommerce portals, and brick-and-mortar stores.</li>
                                <br />
                                <li>Our brand image development is driven by time-tested strategic marketing activities, following thorough research and analysis of targeted global markets.</li>
                                <br />
                                <li>We implement a well-defined brand development strategy through print media, digital media, and ATL/BTL activities, adapting seamlessly to market trends—whether in a bullish or bearish phase.</li>
                                <br />
                                <li>Our structured brand development approach provides a competitive edge by integrating exclusive factors aligned with consumer demand in rapidly evolving markets.</li>
                                <br />
                                <li>With full funding provided by us, our team has complete creative liberty in designing and executing brand development activities for DemiGod House brands, associates, and clientele.</li>
                                <br />
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
                                    className=" rounded image-tab"

                                />
                                <div className="info_card p-3 text-white">
                                    <h3>
                                        <strong><em> Brand MARKETING</em></strong>
                                    </h3>
                                    <p>
                                        <strong>DemiGod House marketing team specializes in curating high-impact marketing strategies that ensures your brand sectoral leadership & success story in an increasingly competitive landscape. We don’t just market, we create experiences that resonate with consumers and drive engagement.</strong>


                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-7 p-3 d-flex flex-column align-items-center mx-auto  p-3">
                            {/* <p className="fw-bold text-white">Our Approach:</p> */}
                            <ul className="news-list d-flex gap-2 flex-column">
                                <li>DemiGod House Marketing Team specializes in crafting high-impact marketing strategies that establish your brand as a sector leader and success story in today’s highly competitive landscape. We don’t just market—we create experiences that resonate with consumers and drive meaningful engagement. </li>
                                <li>Marketing activities articulation & execution via our team is done on the basis of pragmatic market’s research, analysis and consumer fast changing demand as per global trends! </li>

                                <li>Our marketing strategies are built on in-depth market research, thorough analysis, and an acute understanding of evolving consumer demands in line with global trends. We implement time-tested trade techniques and strategically integrated marketing campaigns across all available print and electronic media worldwide, ensuring maximum reach and impact for our clients’ brands across diverse B2B and B2C markets. </li>

                                <li>With a vast and active network of traders, retailers, wholesalers, importers, and e-commerce vendors spanning over 65 countries, we provide our clients with a distinct competitive edge in sales and consumer interaction. Our arsenal of marketing tools, trade techniques, and strategic industry associations enables us to fulfill genuine consumer demand across a wide range of global markets.</li>
                                <li>By God’s grace, not a single client has ever discontinued our marketing services, a testament to our team’s dedication and expertise. Our success is driven by meticulous market analysis and a pragmatic approach to understanding consumer demand based on the demographic structure of each market we serve.  </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={`tab-pane fade mt-12 ${activeTab === "ex2-tabs-3" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-6 ">
                        <div className="col-lg-5">
                            <div
                                className=" border border-0 position-relative"
                                style={{ borderRadius: "10px" }}
                            >
                                <img
                                    src="https://durefoods.com/wp-content/uploads/2019/02/What-is-Contract-Manufacturing.jpg"
                                    className="rounded image-tab"
                                />

                                <div className="info_card p-3 text-white">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                        Contract Manufacturing

                                    </h1>
                                    <p className="text-white text-start">
                                        <strong>Structuring in brand products & services to align with the consumer's demand DNA while ensuring seamless third-party partnerships that add value and expand market influence.</strong>Successful brands thrive on strategic partnerships. We specialize in identifying, structuring, and negotiating third-party contracts that maximize market reach and commercial growth.
                                    </p>
                                </div>


                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-lg-7 p-3 d-flex flex-column align-items-center mx-auto  p-3">
                            {/* <p className="fw-bold text-white">Our Approach:</p> */}
                            <ul className="news-list">
                                <li>
                                We Host opportunities for 3rd Party Contract Manufacturing of mainstream media brands across a global network of world leading developed and developing economies !  
                                </li>
                                <br />
                                <li>
                                We operate in diversified commercial / industrial sectors i.e. Automotive components, Gemstones, Jewellery, FMCG, Pharma-OTC, IT, Entertainment , Real Estate / Construction , Electronics etc.
                                </li>
                                <br />
                                <li>
                                    We focus exclusively on permanent and long-term contract manufacturing partnerships.
                                </li>
                                <br />
                                <li>
                                    As trusted channel partners, we ensure seamless collaboration between
                                    brand entities and industrial manufacturers.
                                </li>
                                <br />
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

                <div className={`tab-pane fade mt-4 ${activeTab === "ex2-tabs-5" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-2 ">


                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            <div
                                className=" border border-0 position-relative"
                                style={{ borderRadius: "10px" }}
                            >
                                <img
                                    src="Image/m&m/tabs/seed.webp"
                                    className=" rounded image-tab"

                                />
                                <div className="info_card p-3 text-white">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                        Brand Seed Funding

                                    </h1>
                                    <p className="text-white text-start">
                                        <strong>Articulating, designing, and curating a strategic brand market image alongside ensuring structured funding for business growth and expansion.</strong> We provide up to $500 million in seed funding to nurture promising brands, helping them transition from vision to market dominance with a structured business roadmap.
                                    </p>

                                </div>
                            </div>
                        </div>


                        <div className="col-lg-7 p-3 d-flex flex-column align-items-center mx-auto  p-3">
                            {/* <h5> <p className="fw-bold text-white"></p></h5> */}
                            <ul className="news-list d-flex flex-column gap-0 ">
                                <li>Upto $500 Million Investment's Opportunity</li>
                                <br />
                                <li> We operate across G20, ASEAN, and BRICS economic corridors, ensuring a strong global presence and market penetration.</li>
                                <br />
                                <li className="mt-1">Global Print & Electronic/Digital Media Association with the brand for strategic Broadcasting of the brand supreme image of products/services quality standards in comparison with the market competitors. </li>
                                <br />
                                <li>Via. time-tested business models & commercial marketing/finance instruments, we assure a success story for the brand products /services leadership in the markets globally. </li>
                                <br />
                                <li> We Design, articulate & curate brand products / services in accordance with fast changing consumer demands in this competative global markets! </li>
                                <br />
                                <li> For all our brands and associated subsidaries we avail platform to get listed at stock exchanges gloablly i.e. BSE, NSE, NASDAQ, S&P 500, Dow Jhons, Small Cap 2000, DAX, FTSE 100, EURO Stoxx 50, MOEX Russia Index, RTRSI, Hang Seng etc.</li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className={`tab-pane fade mt-4 ${activeTab === "ex2-tabs-7" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-2 ">


                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            <div
                                className=" border border-0 position-relative"
                                style={{ borderRadius: "10px" }}
                            >
                                <img
                                    src="Image/m&m/tabs/b2b.webp"
                                    className=" rounded image-tab"

                                />
                                <div className="info_card p-3 text-white">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                        B2B & B2C Events
                                    </h1>
                                    <p className="text-white text-start">
                                        <strong> Articulating, designing, and curating brand experiences that engage consumers, strengthen B2B networks, and drive business impact.</strong>From high-profile corporate summits to large-scale consumer activations, we create impactful events that foster connections, amplify brand visibility, and drive revenue growth.
                                    </p>

                                </div>
                            </div>
                        </div>



                        <div className="col-lg-7 p-3 d-flex flex-column align-items-center mx-auto  p-3">
                            {/* <p className="fw-bold text-white">Our Approach:</p> */}
                            <ul className="news-list d-flex gap-0 flex-column">
                                <li>Explore our incredible exposure of events globally! Until 2030, we have lined up more than 1,600 events, ensuring strategic participation of over 500,000 individuals on average.</li>
                                <br />
                                <li>We digitally host and provide management services for a variety of B2B and B2C events worldwide.</li>
                                <br />
                                <li>Our global B2B/B2C events group, powered by Demigod House, connects our associates, clientele, and retail corporations with brand exposure for their products and services.</li><br />
                                <li>We create high-impact networking platforms that bring together industry leaders, innovators, and key decision-makers.</li><br />
                                <li>We facilitate seamless event execution with end-to-end planning, production, and engagement strategies tailored for maximum impact.</li><br />
                                <li>We leverage cutting-edge technology and digital integrations to enhance audience interaction and event experiences.</li><br />
                                <li>We offer customized event solutions, ensuring brands achieve their marketing, sales, and outreach goals effectively.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={`tab-pane fade mt-4 ${activeTab === "ex2-tabs-8" ? "show active" : ""}`}>
                    <div className="d-flex flex-lg-row flex-column gap-2 ">


                        <div className="col-lg-5">
                            {/* <div className="d-flex  justify-content-center align-items-center p-4"> */}

                            <div
                                className=" border border-0 position-relative"
                                style={{ borderRadius: "10px" }}
                            >
                                <img
                                    src="./brand_association.jpeg"
                                    alt="Brand Advertising"
                                    className=" rounded image-tab"

                                />
                                <div className="info_card p-3 text-white">
                                    <h1 className="colo-bg fw-bold largefont text-start text-white fs-4">
                                        Brand Association
                                    </h1>
                                    <p className="text-white text-start text-dark">
                                        <strong>
                                            Amplifying brand visibility with strategic, high-impact advertising campaigns
                                            that ensure maximum reach, engagement, and conversions across global markets.
                                            We integrate traditional, digital, and experiential advertising techniques to position
                                            brands at the forefront of consumer attention and market influence.
                                        </strong> 
                                    </p>
                                </div>
                            </div>
                        </div>
                       <div className="col-lg-7 p-3 d-flex flex-column align-items-center mx-auto  p-3">
                            {/* <p className="fw-bold text-white">Our Approach:</p> */}
                            <ul className="news-list d-flex flex-column gap-2">
                            <li>At DemiGod House, we avail end to end Brand Marketing , Brand Strategizing, Brand Development, Brand Seed Funding & capital procurement, Brand Product’s contract manufacturing, Brand advertising in Print Media / Electronic Media and B2B / B2C Events for Brand ATL / BTL promotion ! </li><br />
                            {/* <p className="text-white">See more...</p> */}
                            <div>
                            <strong> <li>We are a powerhouse of strategic marketing and brand elevation, ensuring a brand’s success story unfolds seamlessly across global and domestic markets.</li><br />
                            <li>Our flagship offerings include Brand Association and Capital Procurement—where we collaborate with industrial leaders to fuel strategic brand growth and redefine market dominance.</li></strong><br />
                            <li>DemiGod House exists at the intersection of luxury, influence, and scale, strategically positioned to deliver high-value investment returns and <strong>building legacy-driven brands that leave a lasting impact.</strong></li><br />
                            <li>The primary objective of association with DemiGod House is to elevate the product’s sale by strategically aligning our marketing resources and capital investments, ultimately fostering long-term growth, brand loyalty, and higher revenue.</li><br />
                            </div>

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


// 'use client'
// import { useState, useEffect } from "react";
// import './tab.css';

// const TabsComponent = () => {
//     const tabsData = [
//         {
//             id: "ex2-tabs-1",
//             label: "Brand Development",
//             image: "Image/m&m/tabs/brand.webp",
//             title: "Brand Development",
//             description: "Articulating, designing, and curating a strategic brand market image while reflecting the consumer's demand DNA & structuring in brand products & services.",
//             content: [
//                 "Brand development with DemiGod House ensures guaranteed retail participation of at least 50,000,000 consumers through B2B/B2C events, eCommerce portals, and brick-and-mortar stores.",
//                 "Our brand image development is driven by time-tested strategic marketing activities, following thorough research and analysis of targeted global markets.",
//                 "We implement a well-defined brand development strategy through print media, digital media, and ATL/BTL activities, adapting seamlessly to market trends—whether in a bullish or bearish phase.",
//             ],
//             additionalContent: [
//                 "Our structured brand development approach provides a competitive edge by integrating exclusive factors aligned with consumer demand in rapidly evolving markets.",
//                 "With full funding provided by us, our team has complete creative liberty in designing and executing brand development activities for DemiGod House brands, associates, and clientele.",
//                 "We deliver headline-making, trend-setting brand development campaigns through our print and electronic media associates across more than 90 countries on a regular basis.",
//             ],
//         },
//         {
//             id: "ex2-tabs-2",
//             label: "Brand Marketing",
//             image: "Image/m&m/tabs/marketing.webp",
//             title: "Brand Marketing",
//             description: "DemiGod House marketing team specializes in curating high-impact marketing strategies that ensure your brand sectoral leadership & success story in an increasingly competitive landscape.",
//             content: [
//                 "DemiGod House Marketing Team specializes in crafting high-impact marketing strategies that establish your brand as a sector leader and success story in today’s highly competitive landscape.",
//                 "Marketing activities articulation & execution via our team is done on the basis of pragmatic market research, analysis, and consumer fast-changing demand as per global trends!",
//                 "Our marketing strategies are built on in-depth market research, thorough analysis, and an acute understanding of evolving consumer demands in line with global trends.",
//             ],
//             additionalContent: [
//                 "With a vast and active network of traders, retailers, wholesalers, importers, and e-commerce vendors spanning over 65 countries, we provide our clients with a distinct competitive edge in sales and consumer interaction.",
//                 "By God’s grace, not a single client has ever discontinued our marketing services, a testament to our team’s dedication and expertise.",
//             ],
//         },
//         {
//             id: "ex2-tabs-3",
//             label: "Contract Manufacturing",
//             image: "Image/m&m/tabs/3rd.webp",
//             title: "Contract Manufacturing",
//             description: "Structuring brand products & services to align with the consumer's demand DNA while ensuring seamless third-party partnerships that add value and expand market influence.",
//             content: [
//                 "We host opportunities for 3rd party contract manufacturing of mainstream media brands across a global network of world-leading developed and developing economies.",
//                 "We operate in diversified commercial/industrial sectors, including Automotive Components, Gemstones, Jewelry, FMCG, Pharma-OTC, IT, Entertainment, Real Estate/Construction, and Electronics.",
//             ],
//             additionalContent: [
//                 "We focus exclusively on permanent and long-term contract manufacturing partnerships.",
//                 "As trusted channel partners, we ensure seamless collaboration between brand entities and industrial manufacturers.",
//             ],
//         },
//         {
//             id: "ex2-tabs-5",
//             label: "Brand Seed Funding",
//             image: "Image/m&m/tabs/seed.webp",
//             title: "Brand Seed Funding",
//             description: "Articulating, designing, and curating a strategic brand market image alongside ensuring structured funding for business growth and expansion.",
//             content: [
//                 "Upto $500 Million Investment's Opportunity",
//                 "We operate across G20, ASEAN, and BRICS economic corridors, ensuring a strong global presence and market penetration.",
//                 "Global Print & Electronic/Digital Media Association with the brand for strategic Broadcasting of the brand supreme image of products/services quality standards in comparison with the market competitors.",
//                 "Via. time-tested business models & commercial marketing/finance instruments, we assure a success story for the brand products /services leadership in the markets globally.",
//                 "We Design, articulate & curate brand products / services in accordance with fast changing consumer demands in this competative global markets!",
//                 "For all our brands and associated subsidaries we avail platform to get listed at stock exchanges gloablly i.e. BSE, NSE, NASDAQ, S&P 500, Dow Jhons, Small Cap 2000, DAX, FTSE 100, EURO Stoxx 50, MOEX Russia Index, RTRSI, Hang Seng etc.",
//             ],
//             additionalContent: [], // No additional content for this tab
//         },
//         {
//             id: "ex2-tabs-7",
//             label: "B2B & B2C Events",
//             image: "Image/m&m/tabs/b2b.webp",
//             title: "B2B & B2C Events",
//             description: "Articulating, designing, and curating brand experiences that engage consumers, strengthen B2B networks, and drive business impact.",
//             content: [
//                 "Explore our incredible exposure of events globally! Until 2030, we have lined up more than 1,600 events, ensuring strategic participation of over 500,000 individuals on average.",
//                 "We digitally host and provide management services for a variety of B2B and B2C events worldwide.",
//                 "Our global B2B/B2C events group, powered by Demigod House, connects our associates, clientele, and retail corporations with brand exposure for their products and services.",
//                 "We create high-impact networking platforms that bring together industry leaders, innovators, and key decision-makers.",
//                 "We facilitate seamless event execution with end-to-end planning, production, and engagement strategies tailored for maximum impact.",
//                 "We leverage cutting-edge technology and digital integrations to enhance audience interaction and event experiences.",
//                 "We offer customized event solutions, ensuring brands achieve their marketing, sales, and outreach goals effectively.",
//             ],
//             additionalContent: [], // No additional content for this tab
//         },
//         {
//             id: "ex2-tabs-8",
//             label: "Brand Association",
//             image: "./brand_association.jpeg",
//             title: "Brand Association",
//             description: "Amplifying brand visibility with strategic, high-impact advertising campaigns that ensure maximum reach, engagement, and conversions across global markets.",
//             content: [
//                 "At DemiGod House, we avail end-to-end Brand Marketing, Brand Strategizing, Brand Development, Brand Seed Funding & capital procurement, Brand Product’s contract manufacturing, Brand advertising in Print Media / Electronic Media and B2B / B2C Events for Brand ATL / BTL promotion!",
//                 "We are a powerhouse of strategic marketing and brand elevation, ensuring a brand’s success story unfolds seamlessly across global and domestic markets.",
//                 "Our flagship offerings include Brand Association and Capital Procurement—where we collaborate with industrial leaders to fuel strategic brand growth and redefine market dominance.",
//                 "DemiGod House exists at the intersection of luxury, influence, and scale, strategically positioned to deliver high-value investment returns and building legacy-driven brands that leave a lasting impact.",
//                 "The primary objective of association with DemiGod House is to elevate the product’s sale by strategically aligning our marketing resources and capital investments, ultimately fostering long-term growth, brand loyalty, and higher revenue.",
//             ],
//             additionalContent: [], // No additional content for this tab
//         },
//     ];
//     const [activeTab, setActiveTab] = useState(tabsData[0].id); // Set the first tab as active by default
//     const [expandedTabs, setExpandedTabs] = useState({}); // Track expanded state for each tab
//     const [isMobile, setIsMobile] = useState(false); // Track if the screen is mobile

//     // Handle tab click
//     const handleTabClick = (tabId) => {
//         setActiveTab(tabId);
//     };

//     // Toggle expanded state for a tab
//     const toggleExpand = (tabId) => {
//         setExpandedTabs((prev) => ({
//             ...prev,
//             [tabId]: !prev[tabId],
//         }));
//     };

//     // Check screen width on component mount and window resize
//     useEffect(() => {
//         const checkScreenWidth = () => {
//             setIsMobile(window.innerWidth < 1024); // Set mobile breakpoint at 1024px
//         };

//         // Initial check
//         checkScreenWidth();

//         // Add event listener for window resize
//         window.addEventListener("resize", checkScreenWidth);

//         // Cleanup event listener
//         return () => window.removeEventListener("resize", checkScreenWidth);
//     }, []);

//     return (
//         <>
//             {/* Tab Navigation */}
//             <div className="w-full">
//                 <ul className="d-flex mb-1 overflow-x-auto lg:overflow-hidden lg-px-4" role="tablist">
//                     {tabsData.map((tab) => (
//                         <li className="d-flex justify-content-center align-items-center" key={tab.id} role="presentation">
//                             <button
//                                 onClick={() => handleTabClick(tab.id)}
//                                 className={`mediumFont border-0 rounded px-4 py-2 text-white text-lg ${
//                                     activeTab === tab.id ? "tab-css-button-slected" : "tab-css-button"
//                                 }`}
//                             >
//                                 {tab.label}
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Tab Content */}
//             <div className="tab-content px-[5.5rem]">
//                 {tabsData.map((tab) => (
//                     <div
//                         key={tab.id}
//                         className={`tab-pane fade mt-12 ${activeTab === tab.id ? "show active" : ""}`}
//                     >
//                         <div className="d-flex flex-lg-row flex-column gap-6">
//                             {/* Image Section */}
//                             <div className="col-lg-5">
//                                 <div className="border border-0 position-relative" style={{ borderRadius: "10px" }}>
//                                     <img src={tab.image} className="rounded image-tab" alt={tab.title} />
//                                     <div className="info_card p-3 text-white">
//                                         <h3>
//                                             <strong>
//                                                 <em>{tab.title}</em>
//                                             </strong>
//                                         </h3>
//                                         <p>
//                                             <strong>{tab.description}</strong>
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Content Section */}
//                             <div className="col-lg-7 p-3 d-flex flex-column align-items-center mx-auto">
//                                 <ul className="news-list d-flex gap-2 flex-column align-items-center">
//                                     {tab.content.map((item, index) => (
//                                         <li key={index}>{item}</li>
//                                     ))}
//                                     {expandedTabs[tab.id] &&
//                                         tab.additionalContent?.map((item, index) => (
//                                             <li key={index}>{item}</li>
//                                         ))}
//                                 </ul>

//                                 {/* Show More / Show Less Button (Visible only on mobile) */}
//                                 {isMobile && tab.additionalContent && tab.additionalContent.length > 0 && (
//                                     <button
//                                         onClick={() => toggleExpand(tab.id)}
//                                         className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
//                                     >
//                                         {expandedTabs[tab.id] ? "Show Less" : "Show More"}
//                                     </button>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default TabsComponent;