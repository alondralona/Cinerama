import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import WorldMap from "./WorldMap";
import LoadCountries from "/Users/austinescalante/Desktop/Cinerama/cinerama/src/Tasks/LoadCountries";

const MovieMap = () => {
  const [countries, setCountries] = useState([]);

  const load = () => {
    console.log("load");
    const loadCountries = new LoadCountries();
    loadCountries.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <WorldMap countries={countries} />
        </div>
      )}
    </div>
  );
};

export default MovieMap;
