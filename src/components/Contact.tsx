import React, { Component } from "react";
import email from "./pics/gmail.png";
import linkedin from "./pics/linkedin.png";
import github from "./pics/github.svg";
import fb from "./pics/facebook.png";
import insta from "./pics/instagram.png";

export default class Contact extends Component {
  state = {};

  render() {
    const link_style = {
      fontSize: 16,
      whitespace: "normal" as "normal",
      padding: "1em 1em 1em 1em" as "1em 1em 1em 1em",
      cursor: "pointer" as "pointer",
    };

    const header_style = {
      fontSize: 30,
      background: "white",
      color: "#4f5568",
      borderRadius: 5,
      alignContent: "center" as "center",
      padding: 7,
      display: "inline-flex" as "inline-flex",
      fontFamily: "SpaceGrotesk-SemiBold",
      margin: 50,
      float: "left" as "left",
      marginBottom: 0,
      width: "100%",
      // boxShadow: "2px 2px 5px gray" as "0 0 0 0 0",
    };

    return (
      <div>
        <header style={header_style}>Contact</header>
        <br></br>
        &nbsp; &nbsp;
        <br></br>
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
