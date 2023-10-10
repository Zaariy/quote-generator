import React from "react";
import { LinkedinShareButton, LinkedinIcon } from "react-share";
import { changeURL } from "../../functionsHelper";
import "./main.css";

// Linkedin Button for sharing the Qoute
export default function LinkedInShareQuote(props) {
  return (
    <LinkedinShareButton
      url={changeURL()}
      title={props.author}
      summary={props.quote}
    >
      <LinkedinIcon size={32} round={true} />
    </LinkedinShareButton>
  );
}
