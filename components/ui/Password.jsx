import React from "react";

function Password({ setPassword }) {
  return (
    <input
      className="bg-light form-control"
      type="password"
      name="password"
      placeholder="Enter password"
      autoComplete="on"
      required=""
      onChange={(e) => setPassword(e.target.value)}
    />
  );
}

export default Password;
