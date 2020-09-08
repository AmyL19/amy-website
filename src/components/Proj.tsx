import React, { useState } from "react";
import "../App.css";
import { bubble } from "react-burger-menu";
import { NONAME } from "dns";

function Proj(props: any) {
  const title_style = {
    fontSize: 25,
    fontWeight: "bolder" as "bolder",
    margin: 0,
  };

  const subhead_style = {
    fontSize: 16,
    fontStyle: "italic" as "italic",
  };

  const date_style = {
    fontSize: 13,
    fontWeight: "bold" as "bold",
    color: "#4f5568",
  };

  const des_style = {
    fontSize: 13,
    color: "#4f5568",
  };

  const link_style = {
    fontSize: 10,
    color: "blue",
    cursor: "pointer" as "pointer",
  };

  const hidden = {
    display: "none",
  }

  const [isHidden, setHidden] = useState(true);

  return (
    <div className="proj" onMouseEnter={() => setHidden(isHidden ? false : true)} onMouseLeave={() => setHidden(isHidden ? false : true)}>
      <h3 style={title_style}>{props.name}</h3>
      <h4 style={subhead_style}>{props.subhead}</h4>
      <div style={isHidden ? undefined : hidden}>
        <img src={props.img} height="90%" width="90%"></img>
      </div>
      <p style={isHidden ? hidden : date_style }>{props.date}</p>
      <p style={isHidden ? hidden : des_style}>{props.descrp}</p>
      <a href={props.link} style={isHidden ? hidden : link_style}>
        {props.link}
      </a>
      <a href={props.link1} style={isHidden ? hidden : link_style}>
        {props.link1}
      </a>
    </div>
  );
}

export default Proj;
