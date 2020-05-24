import React from "react";

function Last_update() {
  const state = {};

  const styles = {
    fontSize: 12,
  };

  return (
    <React.Fragment>
      <span style={styles} className="badge badge-primary">
        {format_Last_update()}
      </span>
    </React.Fragment>
  );
}

function format_Last_update() {
  var today = new Date().toJSON().slice(0, 10);
  return "Last updated: " + today;
}

export default Last_update;
