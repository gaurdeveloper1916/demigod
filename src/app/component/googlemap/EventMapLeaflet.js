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
      style={{ height: "600px", zIndex: "0!important" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}

        "
      />
      {WorldJson.map((item, i) => {
        return (
          <Marker
            key={i + 1}
            position={[item.latitude, item.longitude]}
            draggable={true}
            animate={true}
            icon={yellowIcon}
          >
            <Popup>
              <div className="container my-4">
                {/* Main Image */}

                {/* Card Section */}
                <Card style={{width:"500px"}} className="p-4 mt-4  shadow-lg">
                  <div className="row g-4">
                    {/* Image Data Array */}
                    {[
                      { src: "./Image/digital.jpg", alt: "Digital Event" },
                      { src: "./Image/electronic.jpg", alt: "Electronic Event" },
                      { src: "./Image/print.jpg", alt: "Print Event" },
                    ].map((img, index) => (
                      <div key={index} className="col-md-4 d-flex flex-column align-items-center">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-100 img-fluid rounded shadow img-map"
                          // style={{ maxWidth: "350px", height: "auto" }}
                        />
                        <div className="text-center mt-3">
                          <p className="m-0 fs-6 text-muted">
                            Some quick example text to build on the title and make up the bulk of the card's content.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default EventMapLeaflet;
