import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
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
          className="col d-flex btn btn-primary SearchButton"
        >
          Search
        </button>
      </form>
    </div>
  );
}
