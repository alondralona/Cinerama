import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "./MovieTemplate.css";

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
      className="h-100"
      style={{
        border: 2,
        width: 240,
      }}
      headStyle={{ border: 2 }}
      bodyStyle={{
        border: 2,
        padding: 3,
      }}
    >
      <div className="custom-image">
        {(() => {
          if (image != null) {
            return (
              <img
                alt={name}
                width="100%"
                src={`https://image.tmdb.org/t/p/w500${image}`}
              />
            );
          } else {
            return (
              <img
                alt={name}
                width="100%"
                src={`https://critics.io/img/movies/poster-placeholder.png`}
              />
            );
          }
        })()}
      </div>
      <div className="custom-card">
        <h3>{name}</h3>
        <p>{`Date: ${date} || Votes: ${vote}`}</p>
      </div>
    </Card>
  </Link>
);

export default MovieTemplate;
