import React, { Component } from "react";
import { relative } from "path";
import pdf from "./pics/pdf.png";

export default class Resume extends Component {
  state = {};

  render() {
    const a_style = {
      fontSize: 15,
      color: "#373a47",
      padding: "1em 0 3em 0" as "1em 0 3em 0",
      cursor: "pointer",
    };

    const header_style = {
      fontSize: 30,
      background: "white",
      color: "#4f5568",
      borderRadius: 5,
      alignContent: "center" as "center",
      margin: 10,
      padding: 7,
      display: "inline-flex" as "inline-flex",
      boxShadow: "2px 2px 5px gray" as "0 0 0 0 0",
    };

    return (
      <div>
        <header style={header_style}>Resume</header>
        <br></br>
        &nbsp; &nbsp;
        <br></br>
        &nbsp;&nbsp;
        <a style={a_style}>click to download resume:</a>
        <a
          onClick={() => window.open(require("./pdfs/al_resume.pdf"), "_none")}
        >
          <img src={pdf} alt="pdf logo" height="30px" width="30px"></img>
        </a>
        <br></br>
        &nbsp; &nbsp;
        <br></br>
        &nbsp; &nbsp;
        <br></br>
      </div>
    );
  }
}
