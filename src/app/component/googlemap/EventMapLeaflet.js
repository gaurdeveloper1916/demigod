'use client'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { WorldJson } from "../constant/Worldjson";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from "next/link";
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
              <div className="">
                <img className="w-100" src={item.image} />
                <Card className="p-0" >
                  <div className="d-flex flex-lg-row flex-column gap-2 p-2">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <img style={{ height: '150px' }} variant="top " src="https://img.freepik.com/premium-photo/wedding-pics_1305541-8038.jpg?semt=ais_hybrid" className="w-100 img-fluid rounded" />
                      <div className="d-flex flex-column justify-content-center align-items-center mt-3" >
                        <p className="m-0 fw-medium">{`${item.city} event`}</p>
                        <p className="m-0">
                          Some quick example text to build on the  title and make up the
                          bulk of the card's content.
                        </p>
                        <Link href="/landingpage">
                          <button className="verySmallFont text-white border border-0 rounded">Book now</button>

                        </Link>                      </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <img style={{ height: '150px' }} variant="top " src="https://media.istockphoto.com/id/1933378885/photo/bride-and-groom-using-sparklers-with-their-wedding-guests-on-the-beach-wedding-party.webp?a=1&b=1&s=612x612&w=0&k=20&c=O14Es2rFMXW3UhfwBM2Km5QXHYt3O5LI-CLXtY3QsL4=" className="w-100 img-fluid rounded" />
                      <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                      <p className="m-0 fw-medium">{`${item.country} event`}</p>
                        <p className="m-0">
                          Some quick example text to build on the  title and make up the
                          bulk of the card's content.
                        </p>
                        <Link href="/landingpage">
                          <button className="verySmallFont text-white border border-0 rounded">Book now</button>

                        </Link>
                      </div>
                    </div>
                    
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
