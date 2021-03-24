import React from "react";

export default function Images(props) {
  if (props.images) {
    return (
      <div className="Images">
        <ul>
          {props.images.map(function (image, index) {
            return (
              <li key={index}>
                <span onClick={() => window.open(image.src.original, "_blank")}>
                  <img src={image.src.landscape} alt="related to the search" />
                </span>
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
