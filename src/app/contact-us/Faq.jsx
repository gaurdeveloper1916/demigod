import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="col-lg-10">
        <h3 className="text-white p-3 membership-title">
          FAQ  Question
        </h3>
        <Accordion className="d-flex flex-column gap-4" defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>General Membership</Accordion.Header>
    <Accordion.Body>
      Event Management / Activation Agencies / Experiential Marketing Companies / International Agencies with a minimum turnover of Rs. 2 crore in the immediate past year and in existence for at least two years.
      <ul>
        <li>Participation in the Annual General Meeting without voting rights.</li>
        <li>Access to EEMA events.</li>
        <li>Complimentary access to two EEMA workshops.</li>
      </ul>
      <h5>FAQs:</h5>
      <p><strong>Q:</strong> How can I apply for general membership?</p>
      <p><strong>A:</strong> You can apply through our website by filling out the membership form and submitting the required documents.</p>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header>Platinum Membership</Accordion.Header>
    <Accordion.Body>
      Event Management and Activation Agencies / Experiential Marketing Companies with a minimum turnover of Rs. 4 crore in the immediate past year and in existence for at least two years.
      <ul>
        <li>Right to vote & hold office in the National Executive Committee.</li>
        <li>Participation in the Annual General Meeting with voting rights.</li>
        <li>Access to EEMA events.</li>
        <li>Complimentary access to three EEMA workshops.</li>
      </ul>
      <h5>FAQs:</h5>
      <p><strong>Q:</strong> What benefits do Platinum members get over other membership tiers?</p>
      <p><strong>A:</strong> Platinum members have voting rights, can hold executive positions, and get additional workshop access.</p>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header>Star Member</Accordion.Header>
    <Accordion.Body>
      Artists (stand-alone representing yourself – any of the below skills) who have performed in at least five shows with any existing EEMA Platinum, Gold, or Silver members.
      <ul>
        <li>Access to EEMA events at a special fee.</li>
        <li>EEMAXG Awards Night attendance at a special fee.</li>
        <li>Workshop attendance at a special fee.</li>
        <li>Regional Conclaves at a special fee.</li>
      </ul>
      <h5>FAQs:</h5>
      <p><strong>Q:</strong> How can artists become a Star Member?</p>
      <p><strong>A:</strong> You need to provide proof of performance at five EEMA Platinum/Gold/Silver member events.</p>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="3">
    <Accordion.Header>Associate Partner Member</Accordion.Header>
    <Accordion.Body>
      Event Support Service providers / Supply Chain / Artist Management Agencies in operation with a minimum turnover of Rs. 50 lacs in the last financial year.
      <ul>
        <li>Access to EEMA events.</li>
        <li>Complimentary access to two EEMA workshops.</li>
      </ul>
      <h5>FAQs:</h5>
      <p><strong>Q:</strong> What type of service providers can apply?</p>
      <p><strong>A:</strong> Companies involved in event logistics, artist management, production, technical support, and related services are eligible.</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

      </div>
    </div>
  );
};

export default Faq;
