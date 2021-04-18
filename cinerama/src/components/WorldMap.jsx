import React from 'react';
import  {MapContainer,GeoJSON} from  "react-leaflet"
import "leaflet/dist/leaflet.css";
import "./WorldMap.css"
import axios from 'axios'

const WorldMap = ({countries}) => {
  const  apiKey = "a9abe32e301cc47ca49435473c6ae4a2"
  
    
    const mapStyle = {
        fillColor:"white",
        weight: 1,
        color:"black",
        fillOpacity: 1,
    };
    
    const onEachCountry =  (country,layer) =>{
        const name = country.properties.ADMIN;
        layer.bindPopup(`${name}`);
    const apiUrl = "https://api.themoviedb.org/3/discover/movie?api_key="
    axios(apiUrl + apiKey + "&language=en-US&sort_by=popularity.desc&&certification_country="+name+"&include_adult=false&include_video=false&page=1").then(({ data }) => {
        console.log(data);
      }); 
    }

    console.log(countries)
   return <MapContainer style ={{ height: "90vh" }} zoom ={2} center = {[20,100]}>
       <GeoJSON style = {mapStyle} data = {countries} onEachFeature ={onEachCountry} />
   </MapContainer>
};
 
export default WorldMap;