import React, { Profiler } from "react";
import { useEffect } from 'react';
import "./App.css";
import Last_update from "./components/Last_update";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import profile2 from "./components/pics/profile2.jpg";
import { table } from "console";

function App() {
  const h1_style = {
    color: "#00cc99",
    fontSize: "13vw",
    textAlign: "left" as "left",
    paddingLeft: "30%",
    fontFamily: "SpaceGrotesk-Bold",
    margin: "0px",
  };

  const h2_style = {
    fontSize: 18,
    color: "black",
    weight: "700",
    textAlign: "left" as "left",
    paddingLeft: "30%",
    paddingRight: "40px",
    top: "20vw",
    // width: 850,
    // margin: "auto" as "auto",
    // padding: "2em 0 0 0" as "0 0 0 0",
  };

  const h3_style = {
    fontSize: 13,
    color: "white",
    width: 850,
    margin: "auto" as "auto",
    padding: "2em 0 3em 0" as "0 0 0 0",
  };

  const tableStyle= {
    paddingTop: "135px",
  }

  const [state, setState] = React.useState("path");

  return (
    <div className="App">
      <Navigation />
      {/* <svg id="text_animation" viewBox="0 0 52 10" className={state} onMouseLeave={() => setState("")} onMouseEnter={() => setState("path")}>
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
      </svg> */}
      <a id="Home"></a>
      <div className="element">
        <table style={tableStyle}>
          <tr>
          <td>
            <img className="profile" src={profile2} alt="my face" width="140%"></img>
          </td>
          <td>
            <h1 style={h1_style}>Hello</h1>
            <p style={h2_style}>
                  I'm Amy, a senior studying computer science at Carnegie Mellon University.
                  I am interested in full stack software engineering and also enjoy learning about philosophy and logic.
            </p>
          </td>
          <td></td>
          </tr>
        </table>
        <h3 style={h3_style}>
          Skills: Python, C, HTML, CSS, JavaScript, React, Go, Java, SML
        </h3>
      </div>


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
