import React, { Component } from "react";
import { Row, Col, Rate, Tag } from "antd";

import Api from "../API/APIData.js";
import Filter from "../API/Filter.js";
import MovieTemplate from "../MovieTemplate/MovieTemplate";

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
    this.movieIDRec(this.props);
  }
  movieIDRec(props) {
    const idFilm = parseInt(this.props.match.params.id, 10);
    Api.getMovieById(idFilm).then((data) => {
      console.log("dataApi", data.id);
      this.setState({
        urlImage: data.poster_path,
        name: data.title,
        stars: data.vote_average / 2,
        description: data.overview,
        genres: data.genres,
        release_date: data.release_date,
        results: data.id,
      });
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <h1>{this.state.name}</h1>
            <hr />
            <Col span={8} offset={6}>
              <img
                alt={this.state.name}
                width="150%"
                src={`https://image.tmdb.org/t/p/w500${this.state.urlImage}`}
              />
            </Col>
            <strong> Description: </strong>
            <p>{this.state.description}</p>
            <hr />
            <div className="genre">
              <span className="genreTitle">
                <strong>Genres: </strong>
              </span>
              {this.state.genres.map((genre) => (
                <Tag color={Filter.randomColor()} key={genre.id}>
                  {genre.name}
                </Tag>
              ))}
            </div>
            <strong>Five Star Rating:</strong>{" "}
            <Rate className="rate" value={this.state.stars} />
            <hr />
          </Col>
        </Row>
        <MovieRec results={this.props} />
      </div>
    );
  }
}

class MovieRec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount(props) {
    const idFilm = this.props.results.match.params.id;
    console.log(idFilm);
    Api.getMoviesRec(idFilm).then((data) => {
      this.setState({
        results: data.results,
      });
    });
  }

  render() {
    console.log(this.state.results);
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <h1 className="title">Recommendations</h1>
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
    );
  }
}
