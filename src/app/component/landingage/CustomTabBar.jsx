import { useState } from "react";
import { Accordion } from "react-bootstrap";



const TicketCard = ({ price, list }) => (
    <div className="d-flex flex-column  px-1 py-2 border rounded shadow">
        <h4 className="">{price}</h4>
        {
            list.map((item) => <p className="m-0 px-3 text-start smallfont">{item}</p>)
        }


        <a href="/checkout">
            <button className="border border-0 mt-2 verySmallFont rounded p-2 bg-primary text-white">
                Book Now
            </button>
        </a>

    </div>
);
const tickets = [
    {
        "price": '₹6,000',
        "headline": "For those born to ferment greatness.",
        "list": ['Entry into the “Wine Making” competition',
            'Access to traditional wine-making equipment & ingredients',
            'Participation in the Grape Stomping Ritual Ceremony',
            'Invitation to the After Party with wine connoisseurs & jazz',
            '7-Course Organic Meal', 'Vineyard Fashion Show', 'Jazz Concert + Drone Show',
            'Wine branding exposure (booth or stall if shortlisted)', 'Winner takes home ₹50,000 + Gift Hampers']
    },
    {
        "price": '₹15,000',
        "headline": "For those born to ferment greatness.",
        "list": ['Entry into the “Wine Making” competition',
            'Access to traditional wine-making equipment & ingredients',
            'Participation in the Grape Stomping Ritual Ceremony',
            'Invitation to the After Party with wine connoisseurs & jazz',
            '7-Course Organic Meal', 'Vineyard Fashion Show', 'Jazz Concert + Drone Show',
            'Wine branding exposure (booth or stall if shortlisted)', 'Winner takes home ₹50,000 + Gift Hampers']
    },
    {
        "price": '₹4,000',
        "headline": "For those born to ferment greatness.",
        "list": ['Entry into the “Wine Making” competition',
            'Access to traditional wine-making equipment & ingredients',
            'Participation in the Grape Stomping Ritual Ceremony',
            'Invitation to the After Party with wine connoisseurs & jazz',
            '7-Course Organic Meal', 'Vineyard Fashion Show', 'Jazz Concert + Drone Show',
            'Wine branding exposure (booth or stall if shortlisted)', 'Winner takes home ₹50,000 + Gift Hampers']
    },
    {
        "price": '₹3,500',
        "headline": "For those born to ferment greatness.",
        "list": ['Entry into the “Wine Making” competition',
            'Access to traditional wine-making equipment & ingredients',
            'Participation in the Grape Stomping Ritual Ceremony',
            'Invitation to the After Party with wine connoisseurs & jazz',
            '7-Course Organic Meal', 'Vineyard Fashion Show', 'Jazz Concert + Drone Show',
            'Wine branding exposure (booth or stall if shortlisted)', 'Winner takes home ₹50,000 + Gift Hampers']
    }
];

const CustomTabBar = () => {
    const [activeTab, setActiveTab] = useState("Tickets");

    const tabs = [
        { id: "Tickets", label: "Tickets", content: "🏠 Welcome to Home" },
        { id: "Schedule", label: "Schedule", content: "👤 Profile Information" },
    ];

    return (
        <div className="tab-container">
            {/* Tab Navigation */}
            <div className="tab-bar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="tab-content">
                {tabs.map((tab) =>
                    activeTab === tab.id ?

                        <div key={tab.id}>

                            {
                                tab.id === 'Tickets' ?
                                    <div className="row text-white g-3">
                                        {tickets.map((price, index) => (
                                            <div key={index} className="col-md-6">
                                                <TicketCard price={price.price} list={price.list} />
                                            </div>
                                        ))}
                                    </div> :

                                    <Accordion className="w-100 d-flex flex-column gap-2" defaultActiveKey="0">

                                        <Accordion.Item >
                                            <Accordion.Header>Starting Date for Registration of the Event: May 1, 2025</Accordion.Header>
                                            <Accordion.Body>
                                                "Begin your journey to vinous glory.
                                                "                                                </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item >
                                            <Accordion.Header>Last Date for Registration for the Event: June 15, 2025</Accordion.Header>
                                            <Accordion.Body>
                                                "Last chance to enter your masterpiece.
                                                "                                                </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item >
                                            <Accordion.Header>Starting Date for Buying the Passes: May 15, 2025</Accordion.Header>
                                            <Accordion.Body>
                                                "Secure your place at this unparalleled celebration of wine.
                                                "                                                </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item >
                                            <Accordion.Header>Last Date for Buying the Passes: July 31, 2025</Accordion.Header>
                                            <Accordion.Body>
                                                "Last chance to secure your place at this unparalleled celebration of wine.
                                                "                                                </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item >
                                            <Accordion.Header>Day 1: October 10, 2025 (Friday)</Accordion.Header>
                                            <Accordion.Body>
                                                <p>10:00 AM: Gates Open & Setup</p>
                                                <p>11:00 AM: Opening Ceremony & Traditional Wine-Making Celebration</p>
                                                <p>12:30 PM - 3:00 PM: Grape Stomping Kickoff</p>
                                                <p>4:00 PM - 6:00 PM: Wine Tasting Booths Open</p>
                                                <p>7:00 PM: After Party</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item >
                                            <Accordion.Header>Day 2: October 11, 2025 (Saturday)</Accordion.Header>
                                            <Accordion.Body>
                                                <p>10:00 AM: Vineyard Tours & Tasting Booths</p>
                                                <p>12:00 PM - 2:00 PM: Jazz Concert</p>
                                                <p>3:00 PM - 5:00 PM: Vineyard Fashion Show</p>

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item >
                                            <Accordion.Header>Day 3: October 12, 2025 (Sunday)</Accordion.Header>
                                            <Accordion.Body>
                                                <p>10:00 AM: Extended Wine Tasting & Shopping</p>
                                                <p>12:00 PM - 2:00 PM: Networking & 7-Course Organic Meal</p>
                                                <p>3:00 PM - 5:00 PM: Wine Competition Finale</p>
                                                <p>6:00 PM - 7:00 PM: Drone Show</p>
                                                <p>7:00 PM - 10:00 PM: After Party</p>

                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </Accordion>
                            }


                        </div>

                        : null
                )}
            </div>

            {/* Styles */}
            <style jsx>{`
        .tab-container {
          text-align: center;
          padding: 20px;
        }
        .tab-bar {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 15px;
        }
        .tab-button {
          padding: 10px 20px;
          border: none;
          background: lightgray;
          cursor: pointer;
          font-size: 16px;
          border-radius: 5px;
          transition: 0.3s;
        }
        .tab-button.active {
          background: #dbb85e;
          color: white;
        }
        .tab-content {
          font-size: 18px;
          margin-top: 10px;
        }
      `}</style>
        </div>
    );
};

export default CustomTabBar;
