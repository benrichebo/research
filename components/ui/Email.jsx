import React from 'react'

function Email({setEmail}) {
  return (
    <input
      className="bg-light form-control"
      type="text"
      name="title"
      placeholder=""
      autoComplete="on"
      required=""
      onChange={(e) => setEmail(e.target.value)}
    />
  );
}

export default Email