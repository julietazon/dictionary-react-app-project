import React from "react";
import Meaning from "./Meaning";

export default function MeaningResult(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="MeaningResult">
        <div className="d-flex col-sm-6 RelatedWords">
          <ul>
            <li>synonym</li>
          </ul>
        </div>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
