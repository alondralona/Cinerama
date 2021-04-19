import React, { Component } from "react";
import { Row, Col, Rate, Tag } from "antd";

import Api from "../API/APIData.js";

import "./Movie.css";

export default class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      urlImage: "",
      stars: 0,
      genres: [],
      release_date: "",
    };
  }

  componentDidMount() {
    const idFilm = parseInt(this.props.match.params.id, 10);
    Api.getMovieById(idFilm).then((data) => {
      console.log("dataApi", data);
      this.setState({
        urlImage: data.poster_path,
        name: data.title,
        stars: data.vote_average / 2,
        description: data.overview,
        genres: data.genres,
        release_date: data.release_date,
      });
    });
  }

  render() {
    return (
      <Row>
        <Col span={8} offset={1}>
          <img
            alt={this.state.name}
            width="85%"
            src={`https://image.tmdb.org/t/p/w500${this.state.urlImage}`}
          />
        </Col>
        <Col span={12} offset={1}>
          <h1>{this.state.name}</h1>
          <hr />
          <strong> Description: </strong>
          <p>{this.state.description}</p>
          <hr />
          <div className="genere">
            <span className="genereTitle">
              <strong>Genres: </strong>
            </span>
          </div>
          <Rate className="rate" value={this.state.stars} />
          <hr />
        </Col>
      </Row>
    );
  }
}
