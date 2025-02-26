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
    <div className="container-fluid   mb-5 col-lg-11">
      <div className="row bg-dark-black">
        <div className="col-lg-6 p-lg-4 p-3">
          <h3 className="text-white p-3 membership-title">
            Membership Category
          </h3>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" >
              <Accordion.Header>Gold</Accordion.Header>
              <Accordion.Body>
              Event Management /Activation Agencies / Experiential Marketing Companies / International Agencies with a minimum turnover of Rs. 2 crore in the immediate past year and in existence for a minimum of two years.
              <li>Participation in the Annual General Meeting without voting rights.</li>
              <li>Access to EEMA events.</li>
              <li>Complimentary access to two EEMA workshops.</li>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Platinum</Accordion.Header>
              <Accordion.Body>
              Event Management and Activation Agencies / Experiential Marketing Companies with a minimum turnover of (4 crore) in the immediate past year and in existence for a minimum of 2 years .
              <li>Right to vote & hold office in the National Executive Committee</li>
              <li>Participation in the Annual General Meeting with voting rights</li>
              <li>Access to EEMA events</li>
              <li>Complimentary access to three EEMA workshops</li>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Star Member</Accordion.Header>
              <Accordion.Body>
              Artists ( stand alone representing yourself – Any of the below skills ) having performed for 5 shows with any existing EEMA Platinum / Gold / Silver members.
            <li>Access to EEMA events at a special fee</li>
            <li>EEMAXG Awards Night attendance at a special fee</li>
            <li>Workshop attendance at a special fee</li>
            <li>Regional Conclaves at a special fee</li>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Associate Partner Member</Accordion.Header>
              <Accordion.Body>
              Event Support Service providers / Supply chain / Artist Management Agencies in operation & with a minimum turnover of Rs. 50 lacs & for one financial year.
              <li>Access to EEMA events</li>
              <li>Complimentary access to two EEMA workshops</li>
               </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-lg-6 d-lg-block d-none p-3 d-flex align-items-center justify-content-center">
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
