import { useState } from "react";
import { Tab, Nav, Accordion } from "react-bootstrap";

const TicketCard = ({ price }) => (
    <div className="d-flex flex-column align-items-center justify-content-center p-3 border rounded shadow">
        <h4 className="text-center">${price}</h4>
        <p className="m-0">Lorem ipsum dolor sit amet,</p>
        <p className="m-0">Lorem ipsum dolor sit amet,</p>
        <p className="m-0">Lorem ipsum dolor sit amet,</p>
        <p className="m-0">Lorem ipsum dolor sit amet,</p>
        <button className="border border-0 mt-2 verySmallFont rounded p-2 bg-primary text-white">
            Book Now
        </button>
    </div>
);

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const tickets = [25, 25, 25, 25, 25, 25];

    return (
        <div>
            <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                {/* Tabs Navigation */}
                <Nav variant="tabs" className="bg-dark p-2 rounded">
                    <Nav.Item>
                        <Nav.Link eventKey="tab1" className="tab-css-button">
                            Tickets
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="tab2" className="tab-css-button">
                            Schedule
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                {/* Tabs Content */}
                <Tab.Content className="mt-3 p-3 rounded shadow">
                    <Tab.Pane eventKey="tab1">
                        <div className="row text-white g-3">
                            {tickets.map((price, index) => (
                                <div key={index} className="col-md-6">
                                    <TicketCard price={price} />
                                </div>
                            ))}
                        </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="tab2">
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
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
};

export default TabsComponent;
