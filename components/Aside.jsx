import React from "react";
import Menu from "./Menu";

const Aside = ({ router }) => {
  return (
    <div
      className="w-auto d-none d-lg-block vh-100 px-0 border-end"
      style={{ position: "sticky", top: 0 }}>
      <Menu router={router} />
    </div>
  );
};

export default Aside;
