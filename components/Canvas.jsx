import React from "react";
import Menu from "./Menu";

function Canvas({router}) {
  return (
    <div
      className="offcanvas offcanvas-start w-auto"
      tabindex="-1"
      id="menu">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">
          <img className="img-fluid" src="assets/img/logo.png" width="60" />
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"></button>
      </div>
      <div className="offcanvas-body px-0">
        <div className="mb-4 mt-2">
          <Menu router={router} />
        </div>
      </div>
    </div>
  );
}

export default Canvas;
