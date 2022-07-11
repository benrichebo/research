import React from 'react'

function SecondaryHeader() {
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-lg sticky-top bg-white border-bottom mb-4">
        <div className="container-fluid">
          <a className="navbar-brand fs-5" href="#">
            Mason Research Institute
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler border-0 d-md-none"
            data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav ms-auto d-md-none">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Conferences
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Publications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Articles
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Register as a member
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SecondaryHeader