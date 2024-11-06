"use client"
import React from "react";
import Accordion from "react-bootstrap/Accordion";

function Membership(props) {
  const accordionData = [
    {
      id: "headingOne",
      title: "Accordion Item #1",
      content:
        "This is the first item's accordion body. It is shown by default...",
    },
    {
      id: "headingTwo",
      title: "Accordion Item #2",
      content:
        "This is the second item's accordion body. It is hidden by default...",
    },
    {
      id: "headingThree",
      title: "Accordion Item #3",
      content:
        "This is the third item's accordion body. It is hidden by default...",
    },
  ];
  return (
    <div className="container-fluid p-5">
      <div className="row bg-dark-black">
        <div className="col-lg-6 p-lg-4 p-3">
          <h3 className="text-white p-3 membership-title">
            Membership Subscription
          </h3>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" >
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-lg-6 p-3 d-flex align-items-center justify-content-center">
          <img
            className="w-100 img-membership"
            src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Membership;
