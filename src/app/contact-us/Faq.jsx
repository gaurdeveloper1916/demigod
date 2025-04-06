import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="col-lg-8">
        <h3 className="text-white p-3 membership-title">F.A.Q</h3>
        <Accordion className="d-flex flex-column gap-4" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What is the agenda behind DemiGod House & number of subsidiaries?
            </Accordion.Header>
            <Accordion.Body>
              <p className="accordian-color-cus">
                DemiGod House is the flagship subsidiary of our hedge fund structuring, orchestrating a network of other subsidiaries across diverse sectors and spanning 48 countries. This chic collective is devoted to pioneering the most promising, ROI-generating strategies, firmly establishing itself as the ultimate high-flyer in the financial cosmos.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Modus Operandi to participate in DemiGod House events
            </Accordion.Header>
            <Accordion.Body >
              <p>Two fabulous ways to join our exclusive DemiGod House events:</p>
              <ol type="A" className="accordian-color-cus d-flex flex-column gap-3 mt-2 accordian-color-cus">
                <li >
                  <strong>Become a member:</strong> Pay a one-time profiling fee of ₹550 to enroll, and if eligible, simply cover the event participation fee. Voilà! This pathway lets you attend multiple events without the hassle of repeated profiling.
                </li>
                <li>
                  <strong>Register for individual events:</strong> If you prefer a more selective approach, opt for individual event registration. Pay the profiling fee of ₹550 for each desired event, and if eligible, settle the participation fee for that specific gathering. Perfect for those wanting to make a stylish statement at select events.
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>What is the profiling fee?</Accordion.Header>
            <Accordion.Body>
              <ul className="accordian-color-cus d-flex flex-column gap-3 mt-2 accordian-color-cus" >
                <li>
                  Profiling fee is a petite investment of ₹550 — your ticket to our world of refined events. This mandatory profiling interview, whether done virtually or in-person, ensures that every participant brings the charm and professionalism we adore, keeping our gatherings absolutely exquisite and filtering out any elements that might disrupt the ambiance.
                </li>
                <li>
                  If a person is not eligible, the profiling fee will be adjusted in the paperwork, hence not refundable.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>What are the grounds for profiling?</Accordion.Header>
            <Accordion.Body>
              <p>
                At DemiGod House, we carefully select participants to maintain the excellence and spirit of our events. Candidates are assessed on three core pillars:
              </p>
              <ul className="accordian-color-cus d-flex flex-column gap-3 mt-2 accordian-color-cus">
                <li>Ethics</li>
                <li>Professionalism</li>
                <li>Harmony</li>
              </ul>
              <p className="accordian-color-cus d-flex flex-column gap-3 mt-2 accordian-color-cus">
                This ensures that only those who embody these qualities join us, preserving the exclusivity and elegance of DemiGod House gatherings.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
