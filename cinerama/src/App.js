import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import Paths from "./components/Paths/Paths";

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Paths />
      </>
    );
  }
}
