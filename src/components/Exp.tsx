import React , { useState} from "react";
import "../App.css";
import { NONAME } from "dns";

function Exp(props: any) {
  const title_style = {
    fontSize: 25,
    fontWeight: "bolder" as "bolder",
    margin: 0,
  };

  const subhead_style = {
    fontSize: 16,
    fontStyle: "italic" as "italic",
    margin: 0,
  };

  const date_style = {
    fontSize: 13,
    fontWeight: "bold" as "bold",
    color: "#4f5568",
    margin: 10,
  };

  const des_style = {
    fontSize: 13,
    color: "#4f5568",
    marginTop: 0,
    marginBottom: 30,
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
    <div className="exp" onMouseEnter={() => setHidden(isHidden ? false : true)} onMouseLeave={() => setHidden(isHidden ? false : true)}>
      <h3 style={isHidden ? title_style : hidden}>{props.name}</h3>
      <h4 style={isHidden ? subhead_style : hidden}>{props.subhead}</h4>
      <p style={isHidden ? date_style : hidden}>{props.date}</p>
      <p style={isHidden ? hidden : des_style}>{props.descrp}</p>
      <a href={props.link} style={isHidden ? hidden : link_style}>
        {props.link}
      </a>
    </div>
  );
}

export default Exp;
