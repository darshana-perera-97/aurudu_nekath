import React from "react";
import logo from "./sun.png";
import "./LoadingSc.css";
import { greetingTxt } from "../DataSheet";

export default function LoadingSc() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          id="gr"
          style={{
            fontFamily: "Noto Serif Sinhala",
            fontSize: "55px",
            margin: "50px",
          }}
        >
          {greetingTxt}
        </p>
      </header>
    </div>
  );
}
