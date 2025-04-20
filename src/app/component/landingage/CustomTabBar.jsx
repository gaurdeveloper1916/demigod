import { useState } from "react";
import { Accordion } from "react-bootstrap";



const TicketCard = ({ price, name, list }) => (
    <div className="d-flex flex-column  px-1 py-2 border rounded shadow">
        <h4 className="">{price} <p>{name}</p></h4>
        {
            list.map((item, i) => <p key={i + 1} className="m-0 px-3 text-start smallfont">{item}</p>)
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

const CustomTabBar = ({ data }) => {
    console.log(data.schedule)
    const [activeTab, setActiveTab] = useState("Tickets");

    const tabs = [
        { id: "Tickets", label: "Tickets", content: "🏠 Welcome to Home" },
        { id: "Schedule", label: "Schedule", content: "👤 Profile Information" },
    ];

    return (
        <div className="tab-container">
            {/* Tab Navigation */}
            <div className="tab-bar">
                {tabs.map((tab, key) => (
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
                    activeTab === tab.id ? (
                        <div key={tab.id}>
                            {tab.id === "Tickets" ? (
                                <div className="row text-white g-3">
                                    {data.ticketTypes.map((price, index) => (
                                        <div key={index} className="col-md-6">
                                            <TicketCard
                                                name={price.name}
                                                price={price.price}
                                                list={price.inclusions}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <Accordion className="w-100 d-flex  flex-column gap-2" defaultActiveKey="0">
                                    {data.schedule.map((item, index) => (
                                        <Accordion.Item eventKey={index.toString()} key={index}>
                                            <Accordion.Header>{item.day}</Accordion.Header>
                                            {item.events.map((event, i) => (
                                                <Accordion.Body className="d-flex p-2" key={i}>{event}</Accordion.Body>
                                            ))}
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            )}
                        </div>
                    ) : null
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
