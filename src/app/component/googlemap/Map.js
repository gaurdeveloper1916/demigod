
import React from "react";
import dynamic from "next/dynamic";
export default function Map() {
  const MapWithNoSSR = dynamic(() => import("./EventMapLeaflet"), {
    ssr: false
  });

  return (
    <div className="container-fluid p-5">
      <main id="map" className="mt-5" style={{ width: '100%', height: '100%' }}>
        {/* <p className="fs-4 text-center text-shadow-effect mt-4">Visualize events geographically on a map.</p> */}
        <div id="map">
          <MapWithNoSSR />
        </div>
      </main>
    </div>
  );
}