import { Link } from "lucide-react";
import { Tab, Nav, Accordion } from "react-bootstrap";

const TabsComponent = () => {
    return (
        <Tab.Container defaultActiveKey="tab1">
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
            <Tab.Content className="mt-3 p-3  rounded shadow">
                <Tab.Pane eventKey="tab1">
                    <div className=' w-100 py-3'>
                        <div className='d-flex  justify-content-around text-white'>
                            <div className='d-flex flex-column align-items-center justify-content-center'>
                                <h4 className='text-center'>$25</h4>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                {/* <Link href='/checkout'>
                                </Link> */}
                                <button className='border border-0 mt-2 verySmallFont rounded p-2'>Book Now</button>

                            </div>
                            <div className='d-flex flex-column align-items-center justify-content-center'>
                                <h4 className='text-center'>$25</h4>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <button className='border border-0 mt-2 verySmallFont rounded p-2'>Book Now</button>
                                </div>
                        </div>
                        <div className='d-flex  justify-content-around text-white mt-3'>
                            <div className='d-flex flex-column align-items-center justify-content-center'>
                                <h4 className='text-center'>$25</h4>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <button className='border border-0 mt-2 verySmallFont rounded p-2'>Book Now</button>
                                </div>
                            <div className='d-flex flex-column align-items-center justify-content-center'>
                                <h4 className='text-center'>$25</h4>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <button className='border border-0 mt-2 verySmallFont rounded p-2'>Book Now</button>
                                </div>
                        </div>
                        <div className='d-flex  justify-content-around text-white mt-3'>
                            <div className='d-flex flex-column align-items-center justify-content-center'>
                                <h4 className='text-center'>$25</h4>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <button className='border border-0 mt-2 verySmallFont rounded p-2'>Book Now</button>
                                </div>
                            <div className='d-flex flex-column align-items-center justify-content-center'>
                                <h4 className='text-center'>$25</h4>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <p className='m-0'>Lorem ipsum dolor sit amet,</p>
                                <button className='border border-0 mt-2 verySmallFont rounded p-2'>Book Now</button>
                                </div>
                        </div>



                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="tab2">
                    <Accordion className='w-100 d-flex flex-column gap-2' defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='rounded'>January 18,2023 | 12:00</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>February 18,2023 | 12:00</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>March 18,2023 | 12:00</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>July 18,2023 | 12:00</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>August 18,2023 | 12:00</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>November 18,2023 | 12:00</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
        // </div>
    );
};

export default TabsComponent;
