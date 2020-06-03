import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.logo}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.explanation}</dd>
    </div>
  );
}

export default Entry;
