import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import FilterView from "../FilterView/FilterView";
import { VideoCameraOutlined } from "@ant-design/icons";
import "./Home.css";

const Home = () => (
  <body>
    <div>
      <h1>
        Cinerama
        <VideoCameraOutlined
          style={{
            position: "static",
            right: "10px",
            fontSize: "46px",
            color: "rgb(232, 126, 16)",
            padding: "10px",
          }}
        />
      </h1>
      <SearchForm />
      <h2>Filter Top Rated Movies </h2>
      <FilterView />
    </div>
  </body>
);

export default Home;
