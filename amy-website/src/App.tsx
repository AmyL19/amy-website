import React, { Profiler } from "react";
import "./App.css";
import Last_update from "./components/Last_update";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import profile from "./circle-cropped.png";
import { SSL_OP_TLS_ROLLBACK_BUG } from "constants";

function App() {
  const h1_style = {
    fontSize: 100,
    fontWeight: "bold" as "bold",
    color: "#1abc9c",
  };

  return (
    <div className="App">
      <Last_update />
      <h1 style={h1_style}>Hi, I'm Amy!</h1>
      <img src={profile} alt="my face" height="200px" width="200px"></img>
      <Home />
      <About />
      <Resume />
    </div>
  );
}

export default App;
