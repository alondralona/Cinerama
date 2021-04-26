import React from "react";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";
import { Menu, Icon } from "antd";
import {
  HeartOutlined,
  StarOutlined,
  ThunderboltOutlined,
  FireOutlined,
  HomeOutlined,
  CompassOutlined,
} from "@ant-design/icons";

export default function NavBar() {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <HomeOutlined style={{ fontSize: "18px", color: "#08c" }} />
        <Link to="/">Cinerama</Link>
      </Menu.Item>
      <Menu.Item>
        <HeartOutlined style={{ fontSize: "18px", color: "#08c" }} />
        <Link to="/popular">Popular</Link>
      </Menu.Item>
      <Menu.Item>
        <ThunderboltOutlined style={{ fontSize: "18px", color: "#08c" }} />
        <Link to="/upcoming">Up Coming</Link>
      </Menu.Item>
      <Menu.Item>
        <StarOutlined style={{ fontSize: "18px", color: "#08c" }} />
        <Link to="/nowplaying">Now Playing</Link>
      </Menu.Item>
      <Menu.Item>
        <FireOutlined style={{ fontSize: "18px", color: "#08c" }} />
        <Link to="/toprated">Top Rated</Link>
      </Menu.Item>
      <Menu.Item>
        <CompassOutlined style={{ fontSize: "18px", color: "#08c" }} />
        <Link to="/foreignfilms">Foreign Films</Link>
      </Menu.Item>
    </Menu>
  );
}
