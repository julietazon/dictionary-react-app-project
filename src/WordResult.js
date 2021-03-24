import React from "react";
import Phonetic from "./Phonetic";

export default function WordResult(props) {
  if (props.result) {
    return (
      <div className="Word">
        <div className="row align-middle">
          <h2>{props.result.word}</h2>
          {props.result.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </div>
        <div>
          <h3>{props.result.phonetics[0].text}</h3>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
