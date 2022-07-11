import React from "react";

function Password({ setPassword }) {
  return (
    <input
      className="form-control-lg form-control rounded-0"
      type="password"
      name="password"
      placeholder=""
      autoComplete="on"
      required=""
      onChange={(e) => setPassword(e.target.value)}
      minlength="6"
      maxlength="12"
    />
  );
}

export default Password;
