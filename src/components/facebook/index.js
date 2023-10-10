import React from "react";
import { FacebookIcon, FacebookShareButton } from "react-share";
import { changeURL } from "../../functionsHelper";

export default function FacebookShareQuote(props) {
  return (
    <FacebookShareButton
      url={changeURL()}
      quote={props.qoute}
      hashtag={`#${props.author}`}
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>
  );
}
