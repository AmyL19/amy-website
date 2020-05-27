import React from "react";
import "../App.css";

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

  return (
    <div className="exp">
      <h3 style={title_style}>{props.name}</h3>
      <h4 style={subhead_style}>{props.subhead}</h4>
      <p style={date_style}>{props.date}</p>
      <p style={des_style}>{props.descrp}</p>
    </div>
  );
}

export default Exp;
