import React, { Component } from "react";
import { Map, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./WorldMap.css";
import Api from "../API/APIData.js";
import Displaymovie from "../Displaymovies/Displaymovie";
import countries from "../data/countries.json";
import MovieTemplate from "../MovieTemplate/MovieTemplate";
import { Row, Col } from "antd";

export default class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }
  mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };
  componentDidMount() {
    console.log(countries);
  }

  onCountryClick = (event, props) => {
    const name = event.target.feature.properties.ISO_A3;
    console.log(name);
    event.target.setStyle({
      fillColor: "red",
    });

    Api.getForiegnMovies(name).then((data) => {
      console.log(data.results);
      this.setState({
        results: data.results,
      });
    });
  };

  componentWillReceiveProps(nextProps) {
    this.onCountryClick(nextProps);
  }
  onEachCountry = (country, layer) => {
    const name = country.properties.ADMIN;
    layer.bindPopup(`${name}`);

    layer.on({
      click: this.onCountryClick,
      mouseover: highlightFeature,
      mouseout: resetHighlight,
    });
  };

  render() {
    console.log(this.state.results);
    return (
      <div>
        <Map style={{ height: "70vh" }} zoom={2.4} center={[20, 30]}>
          <GeoJSON
            style={this.mapStyle}
            data={countries.features}
            onEachFeature={this.onEachCountry}
            clicked={false}
          />
        </Map>
        <div>
          <Row>
            <Col span={12} offset={6}>
              <h1 className="title">Foreign Films</h1>
            </Col>
          </Row>
          <Row gutter={24}>
            {this.state.results.map((film) => {
              return (
                <Col className="gutter-row" span={5} offset={1}>
                  <MovieTemplate
                    name={film.title}
                    date={film.release_date}
                    vote={film.vote_average}
                    image={film.poster_path}
                    id={film.id}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}
function highlightFeature(e) {
  let layer = e.target;

  layer.setStyle({
    weight: 1,
    color: "red",
  });
}

function resetHighlight(e) {
  let layer = e.target;

  layer.setStyle({
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  });
}
