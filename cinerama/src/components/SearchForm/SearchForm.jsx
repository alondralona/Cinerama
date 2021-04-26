import React, { Component } from "react";
import { Input, Col, Row, Button } from "antd";
import { Redirect } from "react-router-dom";
import "./SearchForm.css";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      redirect: false,
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleInput = (e) => {
    e.preventDefault();
    this.setState({ redirect: true });
  };

  render() {
    const { redirect, value: query } = this.state;
    return (
      <Row>
        <Col span={14} offset={5}>
          <form onSubmit={this.handleInput}>
            <Input
              className="input"
              placeholder="Search for movies..."
              onChange={this.handleChange}
            />
            <Button type="primary" onClick={this.handleInput}>
              Search
            </Button>
          </form>
        </Col>
        {redirect && query && <Redirect to={`/search/${query}`} push />}
      </Row>
    );
  }
}
