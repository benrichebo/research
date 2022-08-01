import React from "react";

function Password({ setPassword }) {
  return (
    <input
      className="form-control rounded-0"
      type="password"
      id="password"
      placeholder=""
      autoComplete="on"
      required
      onChange={(e) => setPassword(e.target.value)}
      minLength="6"
      maxLength="12"
      pattern="(?=.*\d)(?=.*[a-z])(?=.*[a-z]).{8,}"
      title="Must contain at least one number and one uppercase and lower case letter, and at least 8 or more characters"
    />
  );
}

export default Password;
