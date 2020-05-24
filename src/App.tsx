import React, { Profiler } from "react";
import "./App.css";
import Last_update from "./components/Last_update";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import profile from "./components/pics/profile.png";
import { SSL_OP_TLS_ROLLBACK_BUG } from "constants";

function App() {
  const h1_style = {
    fontSize: 100,
    fontWeight: "bold" as "bold",
    color: "#1abc9c",
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

  return (
    <div className="App">
      <Sidebar />
      <h1 style={h1_style}>Hi, I'm Amy!</h1>
      <img src={profile} alt="my face" height="250px" width="250px"></img>
      <br></br>
      <h2 style={h2_style}>
        Welcome to my page! I am a rising junior studying computer science at
        Carnegie Mellon Unviersity. My goal is to write code that helps people.
        Check out my experiences and projects :).
      </h2>
      <h2 style={h3_style}>
        Skills: Python, C, Java, HTML, CSS, JavaScript, React, SML
      </h2>
      <Experiences />
      <Projects />
      <Resume />
      <Contact />
      <Last_update />
    </div>
  );
}

export default App;
