import React from "react";
import "./main.css";

const TWITTER_ICON = require("../../icons/twitter.png");

// Twitter/X Button component for sharing the Qoute
export default function TwitterShareQuote(props) {
  return (
    <a
      className="twitter-share-button"
      href={`https://twitter.com/intent/tweet?text=${props.quote}`}
      data-size="large"
      target="_blanck"
    >
      <img className="twitter-icon" src={TWITTER_ICON} alt="twitter images" />
    </a>
  );
}
