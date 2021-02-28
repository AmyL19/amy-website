import React, { Profiler } from "react";
import { useEffect } from 'react';
import "./App.css";
import Last_update from "./components/Last_update";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import profile from "./components/pics/profile.png";

function App() {
  const h1_style = {
    fontSize: 100,
    fontWeight: "bold" as "bold",
    color: "white",
    padding: "1em 0 .2em 0" as "0 0 0 0",
    textShadow: "2px 2px 5px gray" as "0 0 0 0 0",
    marginTop: 0,
    marginBottom: 15,
  };

  const h2_style = {
    fontSize: 20,
    color: "#4f5568",
    width: 850,
    margin: "auto" as "auto",
    padding: "2em 0 0 0" as "0 0 0 0",
  };

  const h3_style = {
    fontSize: 13,
    color: "#4f5568",
    width: 850,
    margin: "auto" as "auto",
    padding: "2em 0 3em 0" as "0 0 0 0",
  };

  const [state, setState] = React.useState("path");

  return (
    <div className="App">
      <Navigation />
      <svg id="text_animation" viewBox="0 0 52 10" className={state} onMouseLeave={() => setState("")} onMouseEnter={() => setState("path")}>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Artboard" transform="translate(-17.00000, -10.000000)">
                <g id="Group-2" transform="translate(9.000000, 7.000000)">
                    <g id="Group" transform="translate(4.000000, 3.500000)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path className={state} transform="translate(39, 7) scale(1, -1)" d="M10,6.5 L10,2.5 C10,1.3954305 10.8954305,0.5 12,0.5 C13.1045695,0.5 14,1.3954305 14,2.5 L14,6.5 L14,6.5 " id="u" stroke="#54DEBB"></path>
                        <polyline className={state} id="l" stroke="#54DEBB" points="42 0.5 42 6.5 45 6.5"></polyline>
                        <path className={state} d="M20,3.5 L20,6.5" id="x3" stroke="#54DEBB" transform="translate(11, 0)"></path>
                        <path className={state}d="M22,0.5 L20,3.5" id="x2" stroke="#54DEBB" transform="translate(11, 0)"></path>
                        <path className={state} d="M18,0.5 L20,3.5" id="x1" stroke="#54DEBB" transform="translate(11, 0)"></path>
                        <polyline className={state} id="m" stroke="#54DEBB" transform="translate(21.8, 3.500000) scale(-1, 1) translate(-3.000000, -3.500000) " points="6 6.5 6 0.5 3 3.5 3.66373598e-15 0.5 3.66373598e-15 6.5"></polyline>
                        <path className={state} d="M10,6.5 L10,2.5 C10,1.3954305 10.8954305,0.5 12,0.5 C13.1045695,0.5 14,1.3954305 14,2.5 L14,6.5 L14,6.5 L14,4.5 L10,4.5" id="a" stroke="#54DEBB"></path>
                    </g>
                </g>
            </g>
        </g>
      </svg>
      <img className="profile" src={profile} alt="my face" height="250px" width="250px"></img>
      <br></br>
      <h2 style={h2_style}>
        Welcome to my page! I am a junior studying computer science at
        Carnegie Mellon University. My goal is to write code that helps people.
        Check out my experiences and projects.
      </h2>
      <h2 style={h3_style}>
        Skills: Python, C, HTML, CSS, JavaScript, React, Go, Java, SML
      </h2>
      <br></br>
      &nbsp;&nbsp;
      <a id="Experiences"></a>
      <Experiences />
      <a id="Projects"></a>
      <Projects />
      <a id="Resume"></a>
      <Resume />
      <a id="Contact"></a>
      <Contact />
      <Last_update />
    </div>
  );
}

export default App;
