import React from "react";

export default function WordResult(props) {
  if (props.result) {
    return (
      <div className="Word">
        <h2>{props.result.word}</h2>
        <h3>{props.result.phonetics[0].text}</h3>
      </div>
    );
  } else {
    return null;
  }
}
