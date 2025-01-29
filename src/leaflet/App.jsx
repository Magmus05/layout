// import L from "leaflet";
// import React, { useEffect } from "react";
import coordinatesKitchenBuilding from "./data/kitchenBuilding.json";
import coordinatesZuBuildings from "./data/zavodUprav.json";
import coordinatesChurch from "./data/church.json";

import {
  MapContainer,
  TileLayer,
  //   Marker,
  Popup,
  //   Polyline,
  Polygon,
  Tooltip,
  //   CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "./App.css";
import { useState } from "react";

export const App = () => {
  //   useEffect(() => {
  //     // Fix default marker icon issue in Leaflet
  //     delete L.Icon.Default.prototype._getIconUrl;
  //     L.Icon.Default.mergeOptions({
  //       iconRetinaUrl: markerIcon2x,
  //       iconUrl: markerIcon,
  //       shadowUrl: markerShadow,
  //     });
  //   }, []);

  const correctedCoordinates = (item) => {
    return item.map(([lon, lat]) => [lat, lon]);
  };

  const [hoveredPolygon, setHoveredPolygon] = useState(null);

  const center = [59.876323, 30.240796];


  const getPolygonStyle = (id, baseColor) => ({
    color: baseColor,
    weight: hoveredPolygon === id ? 3 : 1,
    fillColor: baseColor,
    fillOpacity: hoveredPolygon === id ? 0.5 : 0,
  });

  return (
    <div className="app">
      <MapContainer
        center={center}
        zoom={16.5}
        style={{ height: "100%", width: "100%" }}
        // attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        {/* --------------ЗУ-------------- */}
        <Polygon
          pathOptions={getPolygonStyle("zu", "purple")}
          eventHandlers={{
            mouseover: () => setHoveredPolygon("zu"),
            mouseout: () => setHoveredPolygon(null),
          }}
          positions={correctedCoordinates(coordinatesZuBuildings.coordinates)}
        >
          <Popup>
            Название здания: <strong>{coordinatesZuBuildings.building}</strong>{" "}
            <br /> Адрес: {coordinatesZuBuildings.street},{" "}
            {coordinatesZuBuildings.housenumber} <br /> Почтовый индекс:{" "}
            {coordinatesZuBuildings.postcode}
          </Popup>
          <Tooltip sticky> {coordinatesZuBuildings.building}</Tooltip>
        </Polygon>
        {/* --------------Церковь-------------- */}
        <Polygon
          pathOptions={getPolygonStyle("church", "red")}
          eventHandlers={{
            mouseover: () => setHoveredPolygon("church"),
            mouseout: () => setHoveredPolygon(null),
          }}
          positions={correctedCoordinates(coordinatesChurch.coordinates)}
        >
          <Popup>Название здания: {coordinatesChurch.building}</Popup>
          <Tooltip opacity={1} sticky>
            {" "}
            {coordinatesChurch.building}
          </Tooltip>
        </Polygon>
        {/* --------------Кухня-------------- */}
        <Polygon
          pathOptions={getPolygonStyle("kuh", "lime")}
          positions={correctedCoordinates(
            coordinatesKitchenBuilding.coordinates
          )}
        >
          <Popup>{coordinatesKitchenBuilding.building}</Popup>
          {/* <Tooltip sticky> {coordinatesKitchenBuilding.building}</Tooltip> */}
        </Polygon>

        {/* <Polyline pathOptions={limeOptions} positions={polyline} /> */}

        {/* <Marker position={center}>
          <Popup>
            Заводоуправление
            <br />
            тут есть крепость!
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
};
