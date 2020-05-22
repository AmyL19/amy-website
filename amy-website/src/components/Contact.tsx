import React, { Component } from "react";
import email from "./gmail.png";
import linkedin from "./linkedin.png";
import github from "./github.svg";
import fb from "./facebook.png";
import insta from "./instagram.png";

export default class Contact extends Component {
  state = {};

  render() {
    const link_style = {
      fontSize: 16,
      whitespace: "normal" as "normal",
      padding: "1em 1em 1em 1em" as "1em 1em 1em 1em",
      cursor: "pointer" as "pointer",
    };

    const h1_style = {
      fontSize: 30,
      color: "White",
    };

    return (
      <div>
        <h1 style={h1_style}>Contact Me!</h1>
        <a href="mailto: ajlu@andrew.cmu.edu" style={link_style}>
          <img src={email} alt="gmail" height="30px" width="30px"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/amy-lu-27376b178/"
          style={link_style}
        >
          <img src={linkedin} alt="linkedin" height="30px" width="30px"></img>
        </a>
        <a href="https://github.com/amyl19" style={link_style}>
          <img src={github} alt="github" height="30px" width="30px"></img>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100021856070716"
          style={link_style}
        >
          <img src={fb} alt="facebook" height="30px" width="30px"></img>
        </a>
        <a href="https://www.instagram.com/amy_and_pets/" style={link_style}>
          <img src={insta} alt="instagram" height="30px" width="30px"></img>
        </a>
        <br></br>
        &nbsp; &nbsp;
        <br></br>
        &nbsp; &nbsp;
      </div>
    );
  }
}
