import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className=" MeaningWrapper">
        <p className="WordMeaningType">{props.meaning.partOfSpeech}</p>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div className="WordMeaning" key={index}>
              <p className="Definition">{definition.definition}</p>
              <p className="Example">{definition.example}</p>
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
