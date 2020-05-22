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
    };

    return (
      <div>
        <header>Resume</header>
        <a style={a_style}>click to download resume:</a>
        <a href={"al_resume.pdf"} download>
          <img src={pdf} alt="pdf logo" height="30px" width="30px"></img>
        </a>
        <br></br>
        &nbsp; &nbsp;
      </div>
    );
  }
}
