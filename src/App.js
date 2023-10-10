import "./App.css";
import React, { useState } from "react";
import TwitterShareQuote from "./components/twitter/index";
import FacebookShareQuote from "./components/facebook/index";
import LinkedInShareQuote from "./components/linkedin";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);
  // This state for trigger the share button turn on and off
  const [buttonState, setButtonState] = useState(false);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  const editQuote = () => {
    // This function  its job is return a quote with some enhancement :)
    return quote.author + " once said: " + quote.content;
  };

  const triggerAbutton = () => {
    setButtonState((previous) => (previous = !previous));
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={triggerAbutton}>Share Quote</button>

          <button
            onClick={() => {
              generateQuote();
              if (buttonState) {
                triggerAbutton();
              }
            }}
          >
            Generate Another Quote
          </button>
        </div>
        {/* Task code is Hare :) */}
        <div
          style={{ display: buttonState ? "block" : "none" }}
          className="social-media-icons"
        >
          <TwitterShareQuote quote={editQuote()} />
          <FacebookShareQuote quote={editQuote()} author={quote.author} />
          <LinkedInShareQuote quote={editQuote()} author={quote.author} />
        </div>
      </div>
    </>
  );
};

export default App;
