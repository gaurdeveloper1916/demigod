'use client'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { WorldJson } from "../constant/Worldjson";

import './index.css'
const EventMapLeaflet = () => {
  const mapHeight = window.innerWidth < 400 ? "300px" : window.innerWidth < 768 ? "400px" : "450px";
  const yellowIcon = new L.Icon({
    iconUrl:
      "./new_logo.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [40, 40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  return (

    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={3}
      cl
      scrollWheelZoom={false}
      className="map-container rounded"
      style={{ height: mapHeight, zIndex: "0!important", border: '1px solid #866b2f' }}    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}

        "
      />
      {WorldJson.map((item, i) => {
        return item.latitude && item.longitude ? (
          <Marker
            key={i + 1}
            position={[item.latitude, item.longitude]}
            draggable={true}
            animate={true}
            icon={yellowIcon}
          >
            <Popup >
              <div >
                <p>DemiGod House offers expert Google Ads & Meta Ads campaign structuring for regional and mainstream digital media in {item.country}.</p>
                <p>DemiGod House provides expert campaign structuring for TV and Radio ads in regional languages and English across {item.country}.</p>
                DemiGod House offers expert campaign structuring for advertising across regional languages & English in newspapers, tabloids, magazines, billboards, and banners across {item.country}.
              </div>
            </Popup>

          </Marker>
        ) : null;
      })}
    </MapContainer>
  );
};

export default EventMapLeaflet;
