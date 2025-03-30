
import React from "react";
import dynamic from "next/dynamic";
import './index.css'
export default function Map() {
  const MapWithNoSSR = dynamic(() => import("./EventMapLeaflet"), {
    ssr: false
  });

  return (
    <div className="container-fluid p-lg-5 p-5">
      <h3  className="text-center fw-bold mt-5" data-aos="fade-up" data-aos-duration="500">Our Print-Media & Electronic-media Channel Partner's Globally! </h3>
      <main id="map" className="mt-5" style={{ width: '100%', height: '100%' }}>
        {/* <p className="fs-4 text-center text-shadow-effect mt-4">Visualize events geographically on a map.</p> */}
        <div id="map">
          <MapWithNoSSR />
        </div>
      </main>
    </div>
  );
}