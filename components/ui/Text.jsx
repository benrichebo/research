import React from "react";

function Text({ setText, id }) {
  return (
    <input
      className="bg-light form-control"
      type="text"
      id={id}
      placeholder=""
      autoComplete="on"
      required=""
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default Text;
