import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div className="row d-flex justify-content-end Dictionary">
      <form className="col-sm-5 d-flex form" onSubmit={search}>
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
          className="col d-flex btn SearchButton"
        >
          Search
        </button>
      </form>
    </div>
  );
}
