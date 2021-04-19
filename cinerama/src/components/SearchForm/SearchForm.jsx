import React, { Component } from "react";
import { Input, Col, Row, Button } from "antd";

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
      <form onSubmit={this.handleInput}>
        <Input
          className="input"
          placeholder="Search for a movie..."
          onChange={this.handleChange}
        />
        <Button type="primary" icon="search" onClick={this.handleInput}>
          Search
        </Button>
      </form>
    );
  }
}
