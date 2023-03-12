import React from "react";
import "./HelpingStyle.css";

const Helping = (props) => {
  return (
    <div className="help">
      <div className="article-main">
        <details>
          <summary>{props.summary}</summary>
          <ol>
            <li>{props.li1}</li>
            <li>{props.li2}</li>
            <li>{props.li3}</li>
            <li>{props.li4}</li>
            <li>{props.li5}</li>
          </ol>
        </details>
      </div>
    </div>
  );
};

export default Helping;
