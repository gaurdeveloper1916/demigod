'use client'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { WorldJson } from "../constant/Worldjson";
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
  const eventList = [
    {
      position: [28.7041, 77.1025],
     
      
    },
    {
      position: [38.9637, 35.2433],
      
      
    },
    {
      position: [25.2048, 55.2708],
     
      
    },
  ];
  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={3}
      scrollWheelZoom={false}
      style={{ height: "430px", zIndex: "0!important" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}

        "
      />
      {WorldJson.map((item, i) => {
        return (
          <Marker
          key={i+1}
            position={[item.latitude,item.longitude]}
            draggable={true}
            animate={true}
            icon={yellowIcon}
          >
            <Popup>
              <div className="">
                <img className="w-100" src={item.image} />
                <div className="card-body p-2">
                  <h5 className="card-title m-0">{item.country}</h5>
                  <p className="card-text mb-2">{item.des}</p>
                  <div>
                    <button className="btn btn-primary border-0 rounded">
                      {" "}
                      Book Your Ticket
                    </button>
                  </div>{" "}
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default EventMapLeaflet;
