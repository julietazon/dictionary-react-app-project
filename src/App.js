import React, { useState } from "react";
import axios from "axios";
import WordResult from "./WordResult";
import MeaningResult from "./MeaningResult";
import Images from "./Images";
import "./App.css";
import "./Dictionary.css";
import searchIcon from "./img/searchicon.webp";

function App() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <h1>Dictionary</h1>
        </header>
        <main className="search">
          <div className="d-flex justify-content-center Dictionary">
            <form className="d-flex form" onSubmit={search}>
              <input
                type="search"
                className="form-control"
                autoComplete="off"
                autoFocus="on"
                onChange={handleKeywordChange}
              />
              <button
                type="submit"
                value="Search"
                autoFocus="on"
                className="d-flex btn default SearchButton"
              >
                <img src={searchIcon} />
              </button>
            </form>
          </div>
        </main>
        <main className="main">
          <WordResult result={result} />
        </main>
        <aside className="aside aside-1">
          <MeaningResult result={result} />
        </aside>
        <aside className="aside aside-2">
          <Images />
        </aside>
        <footer className="footer">
          <small>
            <span>This project is coded by JulietaZon and is </span>
            <br />
            and is{" "}
            <span
              className="Link"
              onClick={() =>
                window.open(
                  "https://github.com/julietazon/dictionary-react-app-project",
                  "_blank"
                )
              }
            >
              Open Source
            </span>{" "}
            on{" "}
            <span
              className="Link"
              onClick={() => window.open("https://github.com/", "_blank")}
            >
              GitHub
            </span>
            ❣️
          </small>
        </footer>
      </div>
    </div>
  );
}
export default App;
