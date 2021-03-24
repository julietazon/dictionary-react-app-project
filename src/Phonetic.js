import React from "react";
import audioIcon from "./img/audioiconblack.webp";

export default function Phonetic(props) {
  let audio = new Audio(props.phonetic.audio);

  const start = () => {
    audio.play();
  };
  return (
    <div className="Phonetic">
      <button className="btn PhoneticButton" onClick={start}>
        <img src={audioIcon} />
      </button>
    </div>
  );
}
