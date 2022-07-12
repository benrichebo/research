import React from "react";

function Password({ setPassword }) {
  return (
    <input
      className="form-control-lg form-control rounded-0"
      type="password"
      id="password"
      placeholder=""
      autoComplete="on"
      required=""
      onChange={(e) => setPassword(e.target.value)}
      minLength="6"
      maxLength="12"
    />
  );
}

export default Password;
