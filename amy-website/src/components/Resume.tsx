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

    const header_style = {
      fontSize: 30,
      borderStyle: "solid" as "solid",
      borderRadius: 5,
      margin: 50,
      display: "inline" as "inline",
      padding: 7,
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
        <a href={"al_resume.pdf"} download>
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
