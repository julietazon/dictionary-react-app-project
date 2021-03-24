import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  function search(event) {
    event.preventDefault();
    alert("Searching");
  }
  return (
    <div className="Dictionary">
      <form className="form">
        <input
          type="search"
          className="form-control"
          autoComplete="off"
          autoFocus="on"
          onSubmit={search}
        />
        <button
          type="submit"
          value="Search"
          className="btn btn-primary SearchButton"
        >
          Search
        </button>
      </form>
    </div>
  );
}
