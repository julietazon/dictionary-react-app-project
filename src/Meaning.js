import React from "react";

export default function Meaning() {
  return (
    <div className="Meaning">
      <div className="d-flex col-sm-6 RelatedWords">
        <ul>
          <li>Horology</li>
          <li>Astronomy</li>
          <li>Nature</li>
        </ul>
      </div>
      <div className=" MeaningWrapper">
        <p className="MeaningType">noun</p>
        <p className="WordMeaning">
          noun: sunset; plural noun: sunsets the time in the evening when the
          sun disappears or daylight fades. "sunset was still a couple of hours
          away"
        </p>
      </div>
      <div className=" MeaningWrapper">
        <p className="MeaningType">adjective</p>
        <p className="WordMeaning">
          denoting a legal provision under which a program, agency, regulation,
          etc., is automatically terminated at the end of a fixed period unless
          renewed by legislative action. "the bill will have a two-year sunset
          clause, so the decision will need to be revisited after the next
          election"
        </p>
      </div>
      <div className=" MeaningWrapper">
        <p className="MeaningType">verb</p>
        <p className="WordMeaning">
          verb: sunset; 3rd person present: sunsets; past tense: sunset; past
          participle: sunset; gerund or present participle: sunsetting; past
          tense: sunsetted; past participle: sunsetted (of a program, agency,
          regulation, etc.) expire or be terminated automatically at the end of
          a fixed period unless renewed by legislative action. "the tax cut will
          sunset after three years unless lawmakers extend it"
        </p>
      </div>
    </div>
  );
}
