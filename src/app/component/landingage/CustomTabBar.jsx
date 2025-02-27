import { useState } from "react";
import { Accordion } from "react-bootstrap";



const TicketCard = ({ price }) => (
    <div className="d-flex flex-column align-items-center justify-content-center p-3 border rounded shadow">
        <h4 className="text-center">${price}</h4>
        <p className="m-0">Lorem ipsum dolor sit amet,</p>
        <p className="m-0">Lorem ipsum dolor sit amet,</p>
        <p className="m-0">Lorem ipsum dolor sit amet,</p>
        <p className="m-0">Lorem ipsum dolor sit amet,</p>
        <a href="/checkout">
        <button className="border border-0 mt-2 verySmallFont rounded p-2 bg-primary text-white">
            Book Now
        </button>
        </a>
      
    </div>
);
const tickets = [25, 25, 25, 25, 25, 25];

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
                                                <TicketCard price={price} />
                                            </div>
                                        ))}
                                    </div> :

                                    <Accordion className="w-100 d-flex flex-column gap-2" defaultActiveKey="0">
                                        {[
                                            { date: "January 18, 2023", time: "12:00" },
                                            { date: "February 18, 2023", time: "12:00" },
                                            { date: "March 18, 2023", time: "12:00" },
                                            { date: "July 18, 2023", time: "12:00" },
                                            { date: "August 18, 2023", time: "12:00" },
                                            { date: "November 18, 2023", time: "12:00" }
                                        ].map((event, idx) => (
                                            <Accordion.Item eventKey={idx.toString()} key={idx}>
                                                <Accordion.Header>{event.date} | {event.time}</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
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
