'use client'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { WorldJson } from "../constant/Worldjson";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from "next/link";
import './index.css'
const EventMapLeaflet = () => {
  const mapHeight = window.innerWidth < 400 ? "300px" : window.innerWidth < 768 ? "400px" : "600px";
  const yellowIcon = new L.Icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  return (
    
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={3}
      scrollWheelZoom={false}
       className="map-container"
       style={{ height: mapHeight, zIndex: "0!important" }}    >
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
            <Popup>
              <div className="container my-4">
                <Card style={{ width: "500px" }} className="p-4 mt-4  shadow-lg">
                  <div className="row g-4">
                    {[
                      { src: "./Image/digital.jpg", alt: "Digital Event", subLine1: "Regional & Main stream Digital Media services i.e. Google adwords & Meta ads campaign structuring in ", subLine2: "by DemiGod House " },
                      { src: "./Image/electronic.jpg", alt: "Electronic Event", subLine1: " Regional languages and English language Television / Radio advertising campaign structuring services in", subLine2: "by DemiGod House " },
                      { src: "./Image/print.jpg", alt: "Print Event", subLine1: " Regional languages & English langusge Newspapers, tabloids, magazines, Billboards and banners advertising campaign structuring services in ", subLine2: "by DemiGod House" },
                    ].map((img, index) => (
                      <div key={index} className="col-md-4 d-flex flex-column align-items-center">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-100 img-fluid rounded shadow img-map"
                        />
                        <div className="text-center mt-3">
                          <p className="m-0 fs-6 text-muted">
                            {img.subLine1} {item.country}  {img.subLine2}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </Popup>
          </Marker>
        ) : null;
      })}
    </MapContainer>
  );
};

export default EventMapLeaflet;
