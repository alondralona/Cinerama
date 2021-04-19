/* @flow */
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";

type Props = {
  name: number,
  date: string,
  vote: number,
  image: number,
  id: number,
};

const MovieTemplate = ({ name, date, vote, image, id }: Props) => (
  <Link to={`/movie/${id}`}>
    <Card
      style={{
        border: 2,
        width: 240,
      }}
      headStyle={{ border: 2 }}
      bodyStyle={{
        backgroundColor: "red",
        border: 2,
        padding: 3,
      }}
    >
      <div className="custom-image">
        <img
          alt={name}
          width="100%"
          src={`https://image.tmdb.org/t/p/w500${image}`}
        />
      </div>
      <div className="custom-card">
        <h3>{name}</h3>
        <p>{`Date: ${date} || Votes: ${vote}`}</p>
      </div>
    </Card>
  </Link>
);

export default MovieTemplate;
