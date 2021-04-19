import React from "react";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";
import { Menu } from "antd";
import { HeartOutlined } from "@ant-design/icons";

export default function NavBar() {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <HeartOutlined style={{ fontSize: "16px", color: "#08c" }} />
        <Link to="/">Cinerama</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="popular">Popular</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="upcoming">Up Coming</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="nowplaying">Now Playing</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="toprated">Top Rated</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="foreignfilms">Foreign Films</Link>
      </Menu.Item>
    </Menu>
  );
}
