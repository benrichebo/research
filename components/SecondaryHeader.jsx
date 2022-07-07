import React from 'react'

function SecondaryHeader() {
  return (
    <>
      <nav class="navbar navbar-light navbar-expand-lg sticky-top bg-white border-bottom mb-4">
        <div class="container-fluid">
          <a class="navbar-brand fs-5" href="#">
            Mason Research Institute
          </a>
          <button
            data-bs-toggle="collapse"
            class="navbar-toggler border-0 d-md-none"
            data-bs-target="#navcol-1">
            <span class="visually-hidden">Toggle navigation</span>
            <span class="navbar-toggler-icon text-white"></span>
          </button>
          <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="navbar-nav ms-auto d-md-none">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Conferences
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Publications
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Articles
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
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