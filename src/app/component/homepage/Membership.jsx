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
            Exclusive Membership Benefits
          </h3>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" >
              <Accordion.Header>Prive access to events globally across 48 countries, organised by
                demigod house.</Accordion.Header>
              <Accordion.Body className="d-flex flex-column gap-4">
                <div>
                  DemiGod House grants members access to exclusive events across 48 countries, fostering
                  global connections and unique experiences.                  {/* <li>Discover our global footprint:  <a href="demigodhouse.com/events">https://demigodhouse.com/events</a></li> */}
                </div>
                <div>
                  Discover our Events global footprint: demigodhouse.com/events
                </div>

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Benefits of Demigod house subsidiaries.</Accordion.Header>
              <Accordion.Body>
                A one-time profiling interview (₹550) ensures quality participation.
                <div className="">
                  <ul className="d-flex flex-column gap-3 mt-2 accordian-color-cus">
                    <li>Organic Indulgence – Receive a curated Goodies Box featuring premium organic soft
                      commodities, including farm-fresh fruits, vegetables, nuts, and Gir Cow Ghee via
                      DemiGod House.
                    </li>
                    <li>Elite Financial Benefits – Enjoy financial loans at the lowest interest rates and secure
                      12% + ROI through one of our NBFC subsidiaries.
                    </li>
                    <li>Seamless IT Support – Gain access to state-of-the-art IT solutions and services
                      through DemiGod Cloud i.e., app/web/custom solutions/hardware/etc.</li>
                    <li>VVIP Access to Global Events – Enjoy unparalleled VVIP access, luxury amenities
                      and accommodations at Demigod house events across 48 nations.</li>
                    <li>
                      Luxury Gems & Jewelry – Adorn yourself with exquisite gems and fine jewelry at
                      exclusive membership pricing via Anagari.
                    </li>
                    <li>Exclusive Facility Management – Avail world-class facility management services at
                      members-only pricing via DemiGod Shield i.e. bouncers, advanced CCTV
                      surveillance, meticulous maintenance, tailored security solutions, professional
                      housekeeping, energy optimization, and seamless operational support for your
                      spaces.</li>
                    <li>
                      And beyond – Enjoy premium benefits across 200+ elite subsidiaries under DemiGod
                      House Hedge Funds portfolio, delivering a universe of privileges curated for the
                      select few.
                    </li>
                  </ul>
                </div>

                <div>
                  Step into a realm where exclusivity meets limitless possibilities.
                </div>
                <div>
                  {`                Become a DemiGod House member today- {CTA}
`}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Enrollment and profiling fee </Accordion.Header>
              <Accordion.Body>
                <ul className="d-flex flex-column gap-3 mt-2 accordian-color-cus" >
                  <li>Selective Entry: Only individuals who pass our profiling filtration process via virtual
                    calls or meetings will be invited to DemiGod House events.</li>
                  <li>EEMAXG Awards Night attendance at a special fee</li>
                  <li>Profiling Interview Fee: Due to past concerns with unauthorized participation, a
                    non-refundable profiling fee of ₹550 is required for the profiling interview.</li>
                </ul>
                <div className="d-flex flex-column gap-3 mt-2 accordian-color-cus" >This ensures a secure, high-caliber community where members experience exclusivity at its
                  finest.</div>
                <div>
                  <h5 className="mt-2">HOW TO JOIN</h5>
                 <li className="d-flex flex-column gap-3 mt-2 accordian-color-cus" >
                 <li>Provide your essentials: name, email, and phone number.</li>
                  <li>Secure your profile with the exclusive fee.</li>
                  <li>Await a personal connection from our team.</li>
                 </li>
                  <div className="d-flex flex-column gap-3 mt-2 accordian-color-cus" >{`Proceed to Profiling Now- {CTA}`}</div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Membership Amount & Standards</Accordion.Header>
              <Accordion.Body>
                Event Support Service providers / Supply chain / Artist Management Agencies in operation & with a minimum turnover of Rs. 50 lacs & for one financial year.
               <ul className="d-flex flex-column gap-3 mt-2 accordian-color-cus" >
               <li>Access to EEMA events</li>
               <li>Complimentary access to two EEMA workshops</li>
               </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-lg-6 d-lg-block d-none p-3 d-flex align-items-center justify-content-center">
          <img
            className="w-100 img-membership rounded"
            src="./event-page/membership_image.webp"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Membership;
