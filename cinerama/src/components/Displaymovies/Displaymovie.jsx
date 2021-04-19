import React, { Component } from "react";
import MovieTemplate from "../MovieTemplate/MovieTemplate";
import Api from "../API/APIData.js";
import { Row, Col } from "antd";

export default class Displaymovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  handleApiCall(props) {
    if (props.match.params.query) {
      Api.getSearch(props.match.params.query).then((data) => {
        this.setState({
          results: data.results,
        });
      });
    } else {
      Api.getMovies(props.category).then((data) => {
        this.setState({
          results: data.results,
        });
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.handleApiCall(nextProps);
  }

  componentDidMount() {
    this.handleApiCall(this.props);
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <h1 className="title">{this.props.currentPage} </h1>
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
