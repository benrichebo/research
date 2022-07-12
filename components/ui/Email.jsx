import React from 'react'

function Email({setEmail}) {
  return (
    <input
      className="form-control-lg form-control rounded-0"
      type="email"
      id="email"
      placeholder=""
      autoComplete="on"
      required=""
      onChange={(e) => setEmail(e.target.value)}
    />
  );
}

export default Email