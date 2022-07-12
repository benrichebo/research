import React from 'react'

function Name({setName,}) {
  return (
    <input
      className="form-control-lg form-control rounded-0"
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