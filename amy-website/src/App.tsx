import React, { Profiler } from "react";
import "./App.css";
import Last_update from "./components/Last_update";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import profile from "./profile.png";
import { SSL_OP_TLS_ROLLBACK_BUG } from "constants";

function App() {
  const h1_style = {
    fontSize: 100,
    fontWeight: "bold" as "bold",
    color: "#1abc9c",
    padding: ".5em 0 0 0" as "0 7em 2em 0",
  };

  const h2_style = {
    fontSize: 20,
    color: "#4f5568",
    width: 650,
    margin: "auto" as "auto",
    padding: "2em 0 3em 0" as "0 7em 2em 0",
  };

  return (
    <div className="App">
      <Last_update />
      <Sidebar />
      <h1 style={h1_style}>Hi, I'm Amy!</h1>
      <img src={profile} alt="my face" height="200px" width="200px"></img>
      <br></br>
      <h2 style={h2_style}>
        Welcome to my page! I am a rising junior studying computer science at
        Carnegie Mellon Unviersity. My goal is to write code that helps people.
        Check out my experiences and projects :)
      </h2>
      <Experiences />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
