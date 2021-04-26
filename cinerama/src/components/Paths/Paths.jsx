import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Home/Home";
import Movie from "../Movie/Movie";
import Displaymovie from "../Displaymovies/Displaymovie";
import MovieMap from "../ForeignFilms/MovieMap";

const Paths = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      exact
      path="/popular"
      render={(props) => (
        <Displaymovie currentPage="Popular" category="popular" {...props} />
      )}
    />
    <Route
      exact
      path="/upcoming"
      render={(props) => (
        <Displaymovie currentPage="Up Coming" category="upcoming" {...props} />
      )}
    />
    <Route
      exact
      path="/nowplaying"
      render={(props) => (
        <Displaymovie
          currentPage="Now Playing"
          category="now_playing"
          {...props}
        />
      )}
    />
    <Route
      exact
      path="/toprated"
      render={(props) => (
        <Displaymovie currentPage="Top Rated" category="top_rated" {...props} />
      )}
    />
    <Route exact path="/foreignfilms" render={(props) => <MovieMap />} />
    <Route
      exact
      path="/search/:query"
      render={(props) => (
        <Displaymovie currentPage="Search Results" {...props} />
      )}
    />
    <Route exact path="/movie/:id" component={Movie} />
  </Switch>
);

export default Paths;
