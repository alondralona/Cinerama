import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import FilterView from "../FilterView/FilterView";
import "./Home.css";
import { VideoCameraOutlined } from "@ant-design/icons";

const Home = () => (
  <body>
    <div>
      <h1>
        Cinerama{" "}
        <VideoCameraOutlined
          style={{
            position: "static",
            right: "10px",
            fontSize: "90px",
            color: "rgb(232, 126, 16)",
          }}
        />
      </h1>
      <SearchForm />
      <FilterView />
    </div>
  </body>
);

export default Home;
