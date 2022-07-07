import React from 'react'

function Name({setName}) {
  return (
    <input
      className="bg-light form-control"
      type="text"
      name="name"
      placeholder="Enter email"
      autoComplete="on"
      required=""
      onChange={(e) => setName(e.target.value)}
    />
  );
}

export default Name;