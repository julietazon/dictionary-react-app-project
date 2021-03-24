import React from "react";

export default function Images(props) {
  if (props.images) {
    return (
      <div className="Images">
        <ul>
          {props.images.map(function (image, index) {
            return (
              <li key={index}>
                <a href={image.src.original} target="_blank">
                  <img src={image.src.landscape} />
                </a>
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
