import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return (
              <li>
                <span key={index}>{synonym}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
