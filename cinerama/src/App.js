import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import Paths from "./components/Paths/Paths";

/*const APIKEY = "a9abe32e301cc47ca49435473c6ae4a2";
function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiurl =
    "https://api.themoviedb.org/3/search/movie?api_key=" + APIKEY + "&query=";
  const url = "https://api.themoviedb.org/3/movie/";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + state.s).then(({ data }) => {
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results: data.results };
        });
        console.log(data.results);
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const openPopup = (id) => {
    axios(
      url +
        id +
        "recommendations?api_key=a9abe32e301cc47ca49435473c6ae4a2&language=en-US&page=1"
    ).then(({ data }) => {
      let result = data;

      console.log(id);

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Cinerama</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <div>
          {" "}
          <MovieMap />
        </div>

        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.title != "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}*/
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Paths />
      </div>
    );
  }
}
