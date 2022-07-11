import React from "react";

function Text({ setText, id }) {
  return (
    <input
      className="form-control-lg form-control rounded-0"
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
