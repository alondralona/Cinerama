import React from "react";
import { Map, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./WorldMap.css";
import axios from "axios";

const WorldMap = ({ countries }) => {
  const apiKey = "a9abe32e301cc47ca49435473c6ae4a2";

  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    const name = country.properties.ADMIN;
    layer.bindPopup(`${name}`);
  };

  console.log(countries);
  return (
    <Map style={{ height: "90vh" }} zoom={2} center={[20, 100]}>
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
    </Map>
  );
};

export default WorldMap;
